/**
 * The moderator console.
 *
 * Sign-in is Google Identity Services: it hands back an ID token, which is sent
 * as a bearer on every call and verified by `grep-backend` against its own
 * allowlist. The token is held in memory only - not in localStorage, where any
 * script on the origin could read it - so a reload signs you in again, which
 * Google does silently once you have picked an account.
 *
 * Google ID tokens last an hour. Rather than refresh them on a timer, an
 * expired token surfaces as a 401 and the console sends you back to sign-in.
 */

interface Admin {
  email: string;
  name?: string;
  picture?: string;
}

interface Edition {
  slug: string;
  number: number;
  name?: string;
  headerLabel: string;
  footerLabel: string;
  dateline: string;
  isoDate: string;
  tagline: string;
  blurb: string;
  pages: number;
  pdf: string;
  cover: string;
  kind: 'pdf' | 'full';
  status: 'draft' | 'published';
  sections: unknown[];
  updatedAt?: string;
  updatedBy?: string;
}

interface Subscriber {
  email: string;
  source: string;
  ts: string;
}

/* Google Identity Services, as much of it as this page uses. */
declare global {
  interface Window {
    google?: {
      accounts: {
        id: {
          initialize(options: { client_id: string; callback: (r: { credential: string }) => void }): void;
          renderButton(parent: HTMLElement, options: Record<string, unknown>): void;
          disableAutoSelect(): void;
        };
      };
    };
  }
}

const GIS_SRC = 'https://accounts.google.com/gsi/client';

export function initAdmin(): void {
  const root = document.querySelector<HTMLElement>('.admin');
  if (!root) return;

  const api = root.dataset.api ?? '';
  const clientId = root.dataset.clientId ?? '';

  const $ = <T extends HTMLElement>(selector: string) => root.querySelector<T>(selector);
  const views = {
    gate: $('[data-view="gate"]')!,
    console: $('[data-view="console"]')!,
    editor: $('[data-view="editor"]')!,
  };

  let token = '';
  let editions: Edition[] = [];
  /** The slug being edited, or null when the form is creating. */
  let editing: string | null = null;

  // ------------------------------------------------------------------ view

  function show(view: keyof typeof views): void {
    for (const [name, element] of Object.entries(views)) element.hidden = name !== view;
  }

  function flash(message: string, bad = false): void {
    const element = $('[data-flash]')!;
    element.textContent = message;
    element.classList.toggle('flash--error', bad);
    element.hidden = false;
    if (!bad) window.setTimeout(() => (element.hidden = true), 4000);
  }

  function formError(message: string): void {
    const element = $('[data-form-error]')!;
    element.textContent = message;
    element.hidden = message === '';
  }

  // ------------------------------------------------------------------ api

  class AuthError extends Error {}

  async function call<T>(path: string, init: RequestInit = {}): Promise<T> {
    const response = await fetch(api + path, {
      ...init,
      headers: { ...(init.headers ?? {}), Authorization: `Bearer ${token}` },
    });

    if (response.status === 401) {
      signOut('Your session expired. Sign in again.');
      throw new AuthError('unauthorised');
    }
    if (response.status === 204) return undefined as T;

    const body = await response.json().catch(() => ({}));
    if (!response.ok) {
      throw new Error((body as { error?: string }).error ?? `Request failed (${response.status})`);
    }
    return body as T;
  }

  // ------------------------------------------------------------------ auth

  function signOut(message?: string): void {
    token = '';
    window.google?.accounts.id.disableAutoSelect();
    show('gate');
    const note = $('[data-gate-error]')!;
    note.textContent = message ?? '';
    note.hidden = !message;
  }

  async function onCredential(credential: string): Promise<void> {
    token = credential;
    try {
      const admin = await call<Admin>('/v1/admin/me');
      $('[data-who]')!.textContent = `Signed in as ${admin.email}`;
      show('console');
      await Promise.all([loadEditions(), loadSubscribers()]);
    } catch (error) {
      // A rejected token is the usual case here: the account is real but not
      // on the backend's allowlist.
      if (!(error instanceof AuthError)) {
        signOut(error instanceof Error ? error.message : 'Could not sign you in.');
      }
    }
  }

  function startGoogle(): void {
    const mount = document.getElementById('google-button');
    if (!clientId || !mount) return;

    const script = document.createElement('script');
    script.src = GIS_SRC;
    script.async = true;
    script.onload = () => {
      window.google?.accounts.id.initialize({
        client_id: clientId,
        callback: (response) => void onCredential(response.credential),
      });
      window.google?.accounts.id.renderButton(mount, {
        theme: 'outline',
        size: 'large',
        text: 'signin_with',
        shape: 'rectangular',
      });
    };
    script.onerror = () => {
      const note = $('[data-gate-error]')!;
      note.textContent = 'Could not reach Google to start sign-in. Check your connection.';
      note.hidden = false;
    };
    document.head.append(script);
  }

  // ------------------------------------------------------------- editions

  function escapeHtml(value: string): string {
    return value.replace(
      /[&<>"']/g,
      (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]!,
    );
  }

  function renderEditions(): void {
    const host = $('[data-editions]')!;

    if (editions.length === 0) {
      host.innerHTML =
        '<p class="muted">Nothing published through the admin yet. The site is showing its two built-in editions.</p>';
      return;
    }

    host.innerHTML = editions
      .map((edition) => {
        const label = edition.name ? `grep v${edition.number} — ${edition.name}` : `grep v${edition.number}`;
        const kind = edition.kind === 'pdf' ? 'PDF only' : `${edition.sections.length} sections`;
        const who = edition.updatedBy ? ` · last saved by ${escapeHtml(edition.updatedBy)}` : '';
        return `
          <div class="row">
            <div class="row-main">
              <span class="row-title">${escapeHtml(label)}</span>
              <span class="row-meta">/read/${escapeHtml(edition.slug)} · ${escapeHtml(edition.dateline)} · ${kind}${who}</span>
            </div>
            <div class="bar-actions">
              <span class="tag tag--${edition.status}">${edition.status}</span>
              <button class="btn btn--sm btn--quiet" type="button" data-edit="${escapeHtml(edition.slug)}">Edit</button>
            </div>
          </div>`;
      })
      .join('');

    for (const button of host.querySelectorAll<HTMLButtonElement>('[data-edit]')) {
      button.addEventListener('click', () => openEditor(button.dataset.edit!));
    }
  }

  async function loadEditions(): Promise<void> {
    try {
      const body = await call<{ editions: Edition[] }>('/v1/admin/editions');
      editions = body.editions ?? [];
      renderEditions();
    } catch (error) {
      if (!(error instanceof AuthError)) flash((error as Error).message, true);
    }
  }

  // ---------------------------------------------------------- subscribers

  let subscribers: Subscriber[] = [];

  async function loadSubscribers(): Promise<void> {
    try {
      const body = await call<{ subscribers: Subscriber[] }>('/v1/admin/subscribers');
      subscribers = body.subscribers ?? [];
      const host = $('[data-subscribers]')!;
      host.innerHTML =
        subscribers.length === 0
          ? '<p class="muted">No addresses captured yet.</p>'
          : subscribers
              .map(
                (sub) => `
          <div class="row">
            <div class="row-main">
              <span class="row-title">${escapeHtml(sub.email)}</span>
              <span class="row-meta">${escapeHtml(sub.source)} · ${new Date(sub.ts).toLocaleDateString()}</span>
            </div>
          </div>`,
              )
              .join('');
    } catch (error) {
      if (!(error instanceof AuthError)) flash((error as Error).message, true);
    }
  }

  function exportCsv(): void {
    // Quote every field and double any inner quote - an address is unlikely to
    // contain a comma, but a source label could.
    const quote = (value: string) => `"${value.replace(/"/g, '""')}"`;
    const rows = [
      'email,source,captured_at',
      ...subscribers.map((sub) => [sub.email, sub.source, sub.ts].map(quote).join(',')),
    ];
    const url = URL.createObjectURL(new Blob([rows.join('\n')], { type: 'text/csv' }));
    const link = document.createElement('a');
    link.href = url;
    link.download = `grep-subscribers-${new Date().toISOString().slice(0, 10)}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  }

  // ------------------------------------------------------------- the form

  const form = $<HTMLFormElement>('[data-form]')!;
  const field = (name: string) => form.elements.namedItem(name) as HTMLInputElement | HTMLTextAreaElement;

  function setKind(kind: 'pdf' | 'full'): void {
    for (const input of form.querySelectorAll<HTMLInputElement>('input[name="kind"]')) {
      input.checked = input.value === kind;
    }
    $('[data-sections-field]')!.hidden = kind !== 'full';
  }

  function openEditor(slug: string | null): void {
    editing = slug;
    formError('');
    $('[data-upload-state]')!.hidden = true;
    $('[data-json-state]')!.hidden = true;
    ($('[data-delete]') as HTMLButtonElement).hidden = slug === null;
    $('[data-editor-title]')!.textContent = slug ? `Editing ${slug}` : 'New edition';

    const edition = slug ? editions.find((item) => item.slug === slug) : undefined;

    form.reset();
    field('slug').value = edition?.slug ?? '';
    (field('slug') as HTMLInputElement).readOnly = slug !== null;
    field('number').value = edition ? String(edition.number) : '';
    field('name').value = edition?.name ?? '';
    field('dateline').value = edition?.dateline ?? '';
    field('isoDate').value = edition?.isoDate ?? '';
    field('pages').value = edition ? String(edition.pages) : '';
    field('tagline').value = edition?.tagline ?? '';
    field('blurb').value = edition?.blurb ?? '';
    field('pdf').value = edition?.pdf ?? '';
    field('sections').value =
      edition && edition.sections.length > 0 ? JSON.stringify(edition.sections, null, 2) : '';
    (form.elements.namedItem('cover') as HTMLSelectElement).value = edition?.cover ?? 'keyboard';

    for (const input of form.querySelectorAll<HTMLInputElement>('input[name="status"]')) {
      input.checked = input.value === (edition?.status ?? 'draft');
    }
    setKind(edition?.kind ?? 'pdf');
    updateSlugPreview();
    show('editor');
  }

  function updateSlugPreview(): void {
    $('[data-slug-preview]')!.textContent = field('slug').value.trim() || 'grep-v2';
  }

  /** Read the sections box. Returns null when it holds something that is not a JSON array. */
  function readSections(): unknown[] | null {
    const state = $('[data-json-state]')!;
    const raw = field('sections').value.trim();

    if (raw === '') {
      state.hidden = true;
      return [];
    }
    try {
      const parsed: unknown = JSON.parse(raw);
      if (!Array.isArray(parsed)) {
        state.textContent = 'Sections must be a JSON array - it should start with [ and end with ].';
        state.className = 'json-state is-bad';
        state.hidden = false;
        return null;
      }
      state.textContent = `Valid JSON · ${parsed.length} section${parsed.length === 1 ? '' : 's'}.`;
      state.className = 'json-state is-good';
      state.hidden = false;
      return parsed;
    } catch (error) {
      state.textContent = `Not valid JSON: ${(error as Error).message}`;
      state.className = 'json-state is-bad';
      state.hidden = false;
      return null;
    }
  }

  async function save(event: SubmitEvent): Promise<void> {
    event.preventDefault();
    formError('');

    const kind = (form.querySelector<HTMLInputElement>('input[name="kind"]:checked')?.value ?? 'pdf') as
      | 'pdf'
      | 'full';

    // A pdf edition ignores whatever is in the sections box rather than
    // silently publishing it - the radio is the statement of intent.
    const sections = kind === 'full' ? readSections() : [];
    if (sections === null) {
      formError('Fix the sections JSON before saving.');
      return;
    }

    const payload = {
      slug: field('slug').value.trim().toLowerCase(),
      number: Number(field('number').value),
      name: field('name').value.trim(),
      headerLabel: '',
      footerLabel: '',
      dateline: field('dateline').value.trim(),
      isoDate: field('isoDate').value,
      tagline: field('tagline').value.trim(),
      blurb: field('blurb').value.trim(),
      pages: Number(field('pages').value || 0),
      pdf: field('pdf').value.trim(),
      cover: (form.elements.namedItem('cover') as HTMLSelectElement).value,
      kind,
      status: form.querySelector<HTMLInputElement>('input[name="status"]:checked')?.value ?? 'draft',
      sections,
    };

    if (!payload.slug || Number.isNaN(payload.number) || !payload.dateline || !payload.isoDate || !payload.pdf) {
      formError('Slug, number, dateline, publication date and a PDF link are all required.');
      return;
    }

    const button = $<HTMLButtonElement>('[data-save]')!;
    button.disabled = true;
    button.textContent = 'Saving…';

    try {
      if (editing) {
        await call(`/v1/admin/editions/${encodeURIComponent(editing)}`, {
          method: 'PUT',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(payload),
        });
      } else {
        await call('/v1/admin/editions', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(payload),
        });
      }
      await loadEditions();
      show('console');
      flash(
        payload.status === 'published'
          ? `Published ${payload.slug}. It is live on the site.`
          : `Saved ${payload.slug} as a draft.`,
      );
    } catch (error) {
      if (!(error instanceof AuthError)) formError((error as Error).message);
    } finally {
      button.disabled = false;
      button.textContent = 'Save edition';
    }
  }

  async function remove(): Promise<void> {
    if (!editing) return;
    if (!window.confirm(`Delete ${editing}? Anyone with the link will get a 404. This cannot be undone.`)) return;

    try {
      await call(`/v1/admin/editions/${encodeURIComponent(editing)}`, { method: 'DELETE' });
      await loadEditions();
      show('console');
      flash(`Deleted ${editing}.`);
    } catch (error) {
      if (!(error instanceof AuthError)) formError((error as Error).message);
    }
  }

  async function upload(input: HTMLInputElement): Promise<void> {
    const file = input.files?.[0];
    if (!file) return;

    const state = $('[data-upload-state]')!;
    state.textContent = `Uploading ${file.name}…`;
    state.className = 'upload-state';
    state.hidden = false;

    const body = new FormData();
    body.append('file', file);

    try {
      const result = await call<{ url: string }>('/v1/admin/uploads', { method: 'POST', body });
      field('pdf').value = result.url;
      state.textContent = 'Uploaded. The link above now points at it.';
      state.className = 'upload-state is-good';
    } catch (error) {
      if (!(error instanceof AuthError)) {
        state.textContent = (error as Error).message;
        state.className = 'upload-state is-bad';
      }
    } finally {
      // Clear it so re-picking the same file fires `change` again.
      input.value = '';
    }
  }

  // -------------------------------------------------------------- wire-up

  for (const button of root.querySelectorAll<HTMLButtonElement>('[data-tab]')) {
    button.addEventListener('click', () => {
      const wanted = button.dataset.tab!;
      for (const panel of root.querySelectorAll<HTMLElement>('[data-panel]')) {
        panel.hidden = panel.dataset.panel !== wanted;
      }
      for (const tab of root.querySelectorAll<HTMLButtonElement>('[data-tab]')) {
        tab.setAttribute('aria-current', String(tab === button));
      }
    });
  }
  root.querySelector<HTMLButtonElement>('[data-tab="editions"]')?.setAttribute('aria-current', 'true');

  $('[data-new]')!.addEventListener('click', () => openEditor(null));
  $('[data-cancel]')!.addEventListener('click', () => show('console'));
  $('[data-signout]')!.addEventListener('click', () => signOut());
  $('[data-export]')!.addEventListener('click', exportCsv);
  $('[data-delete]')!.addEventListener('click', () => void remove());
  $('[data-upload]')!.addEventListener('change', (event) => void upload(event.target as HTMLInputElement));
  field('slug').addEventListener('input', updateSlugPreview);
  field('sections').addEventListener('blur', () => void readSections());
  form.addEventListener('submit', (event) => void save(event as SubmitEvent));

  for (const input of form.querySelectorAll<HTMLInputElement>('input[name="kind"]')) {
    input.addEventListener('change', () => setKind(input.value as 'pdf' | 'full'));
  }

  startGoogle();
}
