// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import sitemap from '@astrojs/sitemap';

// Pages that show editions are rendered on demand, because the edition list is
// no longer only what is compiled in: `grep-backend` serves whatever the admin
// has published, and a page built an hour ago would not know about it. Those
// pages carry `export const prerender = false`; everything else - /admin, the
// static assets - is still built ahead of time.
//
// This needs a running server: `npm run build && npm run serve`. Swap
// `@astrojs/node` for `@astrojs/vercel` / `@astrojs/netlify` when deploying
// there — nothing else in the codebase needs to change.
export default defineConfig({
  site: 'https://grep.acmvit.in',
  output: 'static',
  adapter: node({ mode: 'standalone' }),
  integrations: [sitemap()],
  build: { inlineStylesheets: 'auto' },
});
