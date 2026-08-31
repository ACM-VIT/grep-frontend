import type { APIRoute } from 'astro';
import { buildSearchIndex, loadEditions } from '../lib/editions';

/**
 * The search index.
 *
 * It is fetched lazily on first keystroke rather than inlined, so the home
 * page's initial payload stays small while search still runs entirely in the
 * browser - no query ever leaves the reader's machine.
 */
export const prerender = false;

export const GET: APIRoute = async () =>
  new Response(JSON.stringify(buildSearchIndex(await loadEditions())), {
    headers: {
      'content-type': 'application/json; charset=utf-8',
      /* Short, so an edition published through the admin becomes searchable
         without waiting an hour for a cached index to lapse. */
      'cache-control': 'public, max-age=60',
    },
  });
