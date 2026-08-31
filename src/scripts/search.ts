/**
 * Client-side search over the editions.
 *
 * The index is a flat list of paragraph-sized records, fetched once on the
 * first keystroke. Matching is a plain scored substring scan - the corpus is
 * two editions, so anything heavier would be ceremony. Every hit deep-links to
 * the section it came from.
 */

interface Record {
  edition: string;
  editionLabel: string;
  section: string;
  sectionTitle: string;
  text: string;
}

interface Hit extends Record {
  score: number;
  at: number;
}

const MAX_RESULTS = 8;
const SNIPPET_RADIUS = 90;

let index: Record[] | null = null;
let loading: Promise<Record[]> | null = null;

function loadIndex(): Promise<Record[]> {
  if (index) return Promise.resolve(index);
  if (loading) return loading;

  loading = fetch('/search.json')
    .then((response) => (response.ok ? response.json() : []))
    .then((data: Record[]) => {
      index = data;
      return data;
    })
    .catch(() => {
      index = [];
      return index;
    });

  return loading;
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (char) => {
    switch (char) {
      case '&':
        return '&amp;';
      case '<':
        return '&lt;';
      case '>':
        return '&gt;';
      case '"':
        return '&quot;';
      default:
        return '&#39;';
    }
  });
}

function search(records: Record[], rawQuery: string): Hit[] {
  const query = rawQuery.trim().toLowerCase();
  if (query.length < 2) return [];

  const terms = query.split(/\s+/).filter(Boolean);
  const hits: Hit[] = [];

  for (const record of records) {
    const haystack = record.text.toLowerCase();
    const title = record.sectionTitle.toLowerCase();

    let score = 0;
    let at = -1;
    let matchedAll = true;

    for (const term of terms) {
      const inText = haystack.indexOf(term);
      const inTitle = title.indexOf(term);

      if (inText === -1 && inTitle === -1) {
        matchedAll = false;
        break;
      }

      // A section title match is a stronger signal than one buried in copy,
      // and a match at a word boundary beats one mid-word.
      if (inTitle !== -1) score += 6;
      if (inText !== -1) {
        score += 3;
        if (inText === 0 || /\W/.test(haystack[inText - 1] ?? ' ')) score += 2;
        if (at === -1) at = inText;
      }
    }

    if (!matchedAll) continue;
    hits.push({ ...record, score, at: at === -1 ? 0 : at });
  }

  return hits.sort((a, b) => b.score - a.score).slice(0, MAX_RESULTS);
}

function snippet(hit: Hit, terms: string[]): string {
  const start = Math.max(0, hit.at - SNIPPET_RADIUS / 2);
  const end = Math.min(hit.text.length, start + SNIPPET_RADIUS * 2);
  const slice = hit.text.slice(start, end);

  let html = escapeHtml(slice);
  for (const term of terms) {
    if (term.length < 2) continue;
    // Escape the term too - it is compared against already-escaped text.
    const safe = escapeHtml(term).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    html = html.replace(new RegExp(`(${safe})`, 'gi'), '<mark>$1</mark>');
  }

  return `${start > 0 ? '…' : ''}${html}${end < hit.text.length ? '…' : ''}`;
}

export function initSearch(): void {
  const input = document.querySelector<HTMLInputElement>('[data-search-input]');
  const list = document.querySelector<HTMLElement>('[data-search-results]');
  const hint = document.querySelector<HTMLElement>('[data-search-hint]');
  if (!input || !list) return;

  const idle = hint?.textContent ?? '';
  let token = 0;

  const render = (query: string, records: Record[]) => {
    const hits = search(records, query);
    const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);

    if (!query.trim()) {
      list.innerHTML = '';
      if (hint) hint.textContent = idle;
      return;
    }

    if (!hits.length) {
      list.innerHTML = '';
      if (hint) hint.textContent = `No matches for “${query.trim()}”.`;
      return;
    }

    if (hint) {
      hint.textContent = `${hits.length} match${hits.length === 1 ? '' : 'es'} for “${query.trim()}”.`;
    }

    list.innerHTML = hits
      .map(
        (hit) => `
        <li class="hit">
          <a href="/read/${hit.edition}#${hit.section}">
            <span class="hit-meta">${escapeHtml(hit.editionLabel)} · ${escapeHtml(hit.sectionTitle)}</span>
            <span class="hit-text">${snippet(hit, terms)}</span>
          </a>
        </li>`,
      )
      .join('');
  };

  let timer: number | undefined;
  input.addEventListener('input', () => {
    window.clearTimeout(timer);
    const query = input.value;
    const run = ++token;

    timer = window.setTimeout(() => {
      void loadIndex().then((records) => {
        // A slow index fetch must not overwrite a newer query's results.
        if (run !== token) return;
        render(query, records);
      });
    }, 120);
  });

  // Warm the index as soon as the field is touched, so the first keystroke
  // does not wait on the network.
  input.addEventListener('focus', () => void loadIndex(), { once: true });
}
