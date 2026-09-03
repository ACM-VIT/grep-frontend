// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';

// Pages that show editions are rendered on demand, because the edition list is
// no longer only what is compiled in: `grep-backend` serves whatever the admin
// has published, and a page built an hour ago would not know about it. Those
// pages carry `export const prerender = false`; everything else - /admin, the
// static assets - is still built ahead of time.
//
// That needs a host that can run a server. The Cloudflare adapter turns the
// on-demand routes into a Worker while static assets are served from the edge.
export default defineConfig({
  site: 'https://grep.acmvit.in',
  output: 'server',
  adapter: cloudflare({ imageService: 'compile' }),
  integrations: [sitemap()],
  build: { inlineStylesheets: 'auto' },
});
