import type { APIRoute } from 'astro';
import { editions, editionTitle } from '../lib/editions';
import { site } from '../lib/site';

const escape = (value: string) =>
  value.replace(/[<>&'"]/g, (char) => {
    switch (char) {
      case '<':
        return '&lt;';
      case '>':
        return '&gt;';
      case '&':
        return '&amp;';
      case "'":
        return '&apos;';
      default:
        return '&quot;';
    }
  });

export const GET: APIRoute = ({ site: configured }) => {
  const base = (configured ?? new URL(site.url)).href.replace(/\/$/, '');

  const items = editions
    .map((edition) => {
      const url = `${base}/read/${edition.slug}`;
      return `    <item>
      <title>${escape(editionTitle(edition))}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(edition.isoDate).toUTCString()}</pubDate>
      <description>${escape(edition.blurb)}</description>
    </item>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>grep - the ACM-VIT newsletter</title>
    <link>${base}</link>
    <description>${escape(site.description)}</description>
    <language>en</language>
    <atom:link href="${base}/rss.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;

  return new Response(xml, { headers: { 'content-type': 'application/rss+xml; charset=utf-8' } });
};
