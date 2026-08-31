// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import sitemap from '@astrojs/sitemap';

// The site is static by default. Only `/api/*` opts out of prerendering
// (see `export const prerender = false`), which is what the adapter is for.
// Swap `@astrojs/node` for `@astrojs/vercel` / `@astrojs/netlify` when deploying
// there — nothing else in the codebase needs to change.
export default defineConfig({
  site: 'https://grep.acmvit.in',
  output: 'static',
  adapter: node({ mode: 'standalone' }),
  integrations: [sitemap()],
  build: { inlineStylesheets: 'auto' },
});
