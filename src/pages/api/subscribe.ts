import type { APIRoute } from 'astro';

/**
 * Subscription endpoint.
 *
 * This validates and normalises the address, then forwards it to whichever
 * list provider is configured through environment variables. With none set it
 * accepts the address and logs it, so the form is usable in development and
 * the site can ship before the provider is chosen.
 *
 * Configure one of:
 *   SUBSCRIBE_WEBHOOK_URL        - POSTed `{ email, source, ts }` as JSON.
 *   BUTTONDOWN_API_KEY           - Buttondown's subscribers endpoint.
 *
 * Both honour SUBSCRIBE_WEBHOOK_SECRET as a bearer token when present.
 */

export const prerender = false;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Coarse per-IP limiter. Resets with the process; enough to blunt scripted abuse. */
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(key: string): boolean {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((time) => now - time < WINDOW_MS);
  recent.push(now);
  hits.set(key, recent);

  // Keep the map from growing without bound on a long-lived process.
  if (hits.size > 5_000) {
    for (const [ip, times] of hits) {
      if (!times.some((time) => now - time < WINDOW_MS)) hits.delete(ip);
    }
  }

  return recent.length > MAX_PER_WINDOW;
}

function json(status: number, body: Record<string, unknown>): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8' },
  });
}

async function forward(email: string, source: string): Promise<{ ok: boolean; message?: string }> {
  const env = import.meta.env;
  const secret = env.SUBSCRIBE_WEBHOOK_SECRET;

  if (env.BUTTONDOWN_API_KEY) {
    const response = await fetch('https://api.buttondown.email/v1/subscribers', {
      method: 'POST',
      headers: {
        Authorization: `Token ${env.BUTTONDOWN_API_KEY}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify({ email_address: email, tags: [source] }),
    });

    // Buttondown 400s on an address that is already subscribed; from the
    // reader's point of view that is a success, not an error.
    if (response.status === 400) {
      const text = await response.text();
      if (/already|exists|subscribed/i.test(text)) {
        return { ok: true, message: 'You’re already on the list. See you next edition.' };
      }
    }

    return response.ok ? { ok: true } : { ok: false };
  }

  if (env.SUBSCRIBE_WEBHOOK_URL) {
    const response = await fetch(env.SUBSCRIBE_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        ...(secret ? { authorization: `Bearer ${secret}` } : {}),
      },
      body: JSON.stringify({ email, source, ts: new Date().toISOString() }),
    });
    return { ok: response.ok };
  }

  console.info('[subscribe] no provider configured; captured %s from %s', email, source);
  return { ok: true };
}

export const POST: APIRoute = async ({ request, clientAddress }) => {
  const wantsJson = (request.headers.get('accept') ?? '').includes('application/json');

  const respond = (status: number, message: string) => {
    // Without JS the browser posted the form directly, so send it somewhere
    // it can read the outcome rather than a bare JSON body.
    if (!wantsJson) {
      const target = status === 200 ? '/subscribe?state=ok' : '/subscribe?state=error';
      return new Response(null, { status: 303, headers: { location: target } });
    }
    return json(status, { ok: status === 200, message });
  };

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return respond(400, 'We couldn’t read that submission.');
  }

  // The honeypot is invisible to people; anything in it is a bot. Report
  // success so the bot does not learn to work around the check.
  if (String(form.get('website') ?? '').trim() !== '') {
    return respond(200, 'You’re on the list. See you next edition.');
  }

  const email = String(form.get('email') ?? '')
    .trim()
    .toLowerCase();

  if (!email || !EMAIL.test(email) || email.length > 254) {
    return respond(400, 'That email address doesn’t look right.');
  }

  if (rateLimited(clientAddress || 'unknown')) {
    return respond(429, 'Too many attempts. Give it a minute.');
  }

  try {
    const result = await forward(email, 'grep-website');
    if (!result.ok) return respond(502, 'Our mailing list is having a moment. Try again shortly.');
    return respond(200, result.message ?? 'You’re on the list. See you next edition.');
  } catch (error) {
    console.error('[subscribe] provider call failed', error);
    return respond(502, 'Our mailing list is having a moment. Try again shortly.');
  }
};

/** A GET here is almost always a mis-click; send it to the real page. */
export const GET: APIRoute = () => new Response(null, { status: 303, headers: { location: '/subscribe' } });
