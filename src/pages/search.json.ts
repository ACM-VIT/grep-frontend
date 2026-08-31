import type { APIRoute } from 'astro';
import { buildSearchIndex } from '../lib/editions';

/**
 * The search index, emitted as a static file at build time.
 *
 * It is fetched lazily on first keystroke rather than inlined, so the home
 * page's initial payload stays small while search still runs entirely in the
 * browser - no query ever leaves the reader's machine.
 */
export const GET: APIRoute = () =>
  new Response(JSON.stringify(buildSearchIndex()), {
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'public, max-age=3600',
    },
  });
