// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

// Pages that show editions are rendered on demand, because the edition list is
// no longer only what is compiled in: `grep-backend` serves whatever the admin
// has published, and a page built an hour ago would not know about it. Those
// pages carry `export const prerender = false`; everything else - /admin, the
// static assets - is still built ahead of time.
//
// That needs a host that can run a server. This deploys to Vercel, where the
// on-demand routes become functions and everything prerendered is served from
// the CDN. Swap the adapter for `@astrojs/node` (and use `npm run serve`) to
// self-host, or `@astrojs/netlify` — nothing else in the codebase changes.
export default defineConfig({
  site: 'https://grep.acmvit.in',
  output: 'static',
  adapter: vercel(),
  integrations: [sitemap()],
  build: { inlineStylesheets: 'auto' },
});
