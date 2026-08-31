import type { Edition, Section } from '../types';

/**
 * Editions published through the admin service.
 *
 * v0 and v1 are compiled into this site and stay that way: they are the two
 * hand-set editions, they are what the design was built against, and they must
 * keep rendering whether or not a backend is reachable. Anything the admin
 * publishes is fetched here and merged over them.
 *
 * Every failure - no backend configured, backend down, backend returning
 * nonsense - resolves to an empty list rather than throwing. A newsletter that
 * shows two editions instead of three is a smaller problem than a newsletter
 * that will not render, and the merge in `index.ts` treats the built-ins as the
 * floor.
 */

const API_BASE = (import.meta.env.GREP_API_URL ?? import.meta.env.PUBLIC_GREP_API_URL ?? '')
  .toString()
  .replace(/\/+$/, '');

/** How long a fetched list is reused before the next render refetches. */
const CACHE_MS = 15_000;
const TIMEOUT_MS = 4_000;

let cache: { at: number; editions: Edition[] } | null = null;
let inFlight: Promise<Edition[]> | null = null;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

function str(value: unknown): string {
  return typeof value === 'string' ? value : '';
}

/**
 * Turn one record from the service into an Edition, or null.
 *
 * The service validates on write, so this is not a second line of defence so
 * much as a guard against a version skew between the two deployments: a field
 * this site needs that an older service does not send should drop one edition,
 * not break the page rendering all of them.
 */
function toEdition(raw: unknown): Edition | null {
  if (!isRecord(raw)) return null;

  const slug = str(raw.slug).trim();
  const dateline = str(raw.dateline).trim();
  const pdf = str(raw.pdf).trim();
  const number = typeof raw.number === 'number' && Number.isFinite(raw.number) ? raw.number : NaN;

  if (!slug || !dateline || !pdf || Number.isNaN(number)) return null;
  if (str(raw.status) !== 'published') return null;

  // A pdf-only edition has no sections, and that is a supported shape - the
  // reader falls back to the cover and the download for it.
  const sections = Array.isArray(raw.sections) ? (raw.sections as Section[]) : [];

  return {
    slug,
    number,
    name: str(raw.name) || undefined,
    headerLabel: str(raw.headerLabel) || `grep v${number}`,
    footerLabel: str(raw.footerLabel) || `grep v${number}`,
    dateline,
    isoDate: str(raw.isoDate) || new Date().toISOString().slice(0, 10),
    tagline: str(raw.tagline),
    blurb: str(raw.blurb) || str(raw.tagline),
    pages: typeof raw.pages === 'number' && raw.pages >= 0 ? raw.pages : 0,
    pdf,
    cover: str(raw.cover) === 'brick' ? 'brick' : 'keyboard',
    kind: sections.length > 0 ? 'full' : 'pdf',
    status: 'published',
    sections,
  };
}

async function fetchEditions(): Promise<Edition[]> {
  if (!API_BASE) return [];

  // Without a timeout a hung backend would hold every page render open until
  // the platform's own limit.
  const abort = new AbortController();
  const timer = setTimeout(() => abort.abort(), TIMEOUT_MS);

  try {
    const response = await fetch(`${API_BASE}/v1/editions`, {
      signal: abort.signal,
      headers: { accept: 'application/json' },
    });
    if (!response.ok) {
      console.warn('[editions] service returned %d', response.status);
      return [];
    }
    const body: unknown = await response.json();
    const list = isRecord(body) && Array.isArray(body.editions) ? body.editions : [];
    return list.map(toEdition).filter((edition): edition is Edition => edition !== null);
  } catch (error) {
    console.warn('[editions] could not reach the admin service:', (error as Error).message);
    return [];
  } finally {
    clearTimeout(timer);
  }
}

/**
 * Fetch with a short cache, collapsing concurrent calls.
 *
 * A single page render asks for the list more than once - the layout, the page
 * and a component can each want it - and every request would otherwise be its
 * own round trip.
 */
export function remoteEditions(): Promise<Edition[]> {
  if (cache && Date.now() - cache.at < CACHE_MS) return Promise.resolve(cache.editions);
  if (inFlight) return inFlight;

  inFlight = fetchEditions()
    .then((editions) => {
      cache = { at: Date.now(), editions };
      return editions;
    })
    .finally(() => {
      inFlight = null;
    });

  return inFlight;
}

/** True when an admin service is configured at all. */
export const hasRemote = API_BASE !== '';
