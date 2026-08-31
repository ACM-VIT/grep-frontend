# grep

The website for [grep](https://grep.acmvit.in) — the newsletter of ACM-VIT.

Astro, no UI framework. The design comes from the printed editions: the paper,
the two inks, and four typefaces. `src/styles/global.css` is the whole design
system and is the first file to read.

---

## Two ways to run this — pick one before you start

There is a companion service, [`grep-backend`](../grep-backend), that gives
non-developers an admin panel. **You do not have to use it.** Both paths below
are supported and neither is a downgrade; they trade a running service against a
person who can open an editor.

### A. This repository on its own

Keep one repository. Add each edition by hand, the way `grep v0` and `grep v1`
already are.

1. Copy `src/lib/editions/v1.ts` to `v2.ts` and edit it. It is a typed
   `Edition` object — the compiler tells you what is missing, so there is no
   schema to look up.
2. Drop the PDF in `public/editions/` and point `pdf:` at it.
3. Register it in `src/lib/editions/index.ts`:

   ```ts
   import { v2 } from './v2';
   export const builtinEditions: Edition[] = [v2, v1, v0];
   ```

4. `npm run build`, commit, deploy.

**Transcribing the issue is the real work, and it is what a coding agent is
good at.** Hand Claude Code (or similar) the PDF and the existing `v1.ts` and
ask it to produce `v2.ts` in the same shape. The block types in
`src/lib/types.ts` — `entries`, `cards`, `blogs`, `finds`, `team`, `timeline`,
`stats`, `award` — are a small, closed vocabulary that maps cleanly onto how the
print editions are laid out, which is exactly the kind of translation an agent
does reliably. Read the result before committing it: an agent will invent a
plausible date or drop a name it could not read.

If you take this path you can also make the site fully static again: with no
`GREP_API_URL` set nothing is ever fetched, so flip the `export const prerender
= false` lines back to `true` (or delete them) and deploy the `dist/client`
folder anywhere. That is the cheapest, most durable version of this site — no
server, no service, nothing to keep alive between editions.

**Suits you if:** whoever publishes is comfortable in a repository, and you would
rather maintain nothing between issues.

### B. This repository plus `grep-backend`

Run the service, and editions are published from `/admin` in a browser — no
repository, no deploy. An editor can publish from just a PDF, or fill in the
whole issue.

**Suits you if:** the people publishing are not the people who write code, and
the committee changes hands every year.

The cost is a Node server and a Go service that both have to stay up, and a
filesystem that survives restarts. All of it is in
[`grep-backend/README.md`](../grep-backend/README.md).

### Switching later

Cheap in both directions. The two sources are merged by slug, so a hand-written
edition and a published one are the same thing to the rest of the site. Going
from A to B costs nothing — start the service and the built-ins keep rendering
underneath. Going from B to A means copying the published editions out of
`data/editions.json` into TypeScript, which is mechanical.

---

## Running it

```bash
npm install
cp .env.example .env      # optional for the public site, required for /admin
npm run dev               # http://localhost:4321
```

For a production check:

```bash
npm run build
npm run serve             # http://localhost:4321
```

**On path B, `npm run serve` is not optional in production.** Pages that show
editions are rendered on demand, so the built output is a Node server, not a
folder of files. On path A you can prerender them instead and deploy
`dist/client` as static files — see below.

---

## Where the editions come from

Two places, merged.

**Built in.** `grep v0` and `grep v1` are hand-set TypeScript in
`src/lib/editions/`. They are the two editions the design was built against and
they render whether or not anything else is reachable.

**The admin service.** [`grep-backend`](../grep-backend) serves whatever has
been published through `/admin`. Those are fetched at render time and merged
over the built-ins by slug.

`src/lib/editions/index.ts` does the merge; `remote.ts` does the fetch. If the
service is unset, down, or returning nonsense, the fetch resolves to an empty
list and the site shows its two built-in editions. It never throws — a
newsletter showing two editions instead of five is a smaller problem than one
that will not render.

This is why the content routes carry `export const prerender = false`. An
edition published a minute ago has to appear without anyone rebuilding the site,
and a page built an hour ago cannot know about it. On path A — no service, every
edition committed to this repository — none of that applies, and those lines can
go back to `true`.

| Route | Rendering |
| --- | --- |
| `/`, `/editions`, `/read/:slug`, `/about`, `/subscribe`, `/404` | On demand |
| `/rss.xml`, `/search.json` | On demand |
| `/admin` | Prerendered — it holds no edition data, only a sign-in |
| `/api/subscribe` | On demand |

Deploy to anything that runs Node. Swap `@astrojs/node` in `astro.config.mjs`
for the Vercel or Netlify adapter if you would rather — nothing else changes.

---

## `/admin`

The moderator console. Nothing links to it and it is `noindex`; you get there by
typing the path.

Sign in with Google, and the backend checks the address against its own
allowlist. Editors can create an edition from just a PDF, or fill in the whole
thing; publish, unpublish and delete; upload PDFs or paste a bucket link; and
read the captured subscriber list.

**Everything about setting this up — creating the Google client ID, the
allowlist, buckets, deploying, backups, handover — is in
[`grep-backend/README.md`](../grep-backend/README.md).** That is the document to
read before touching any of it.

Two variables must match exactly between the two projects, or sign-in fails with
a token audience error:

```bash
# grep-website/.env
PUBLIC_GOOGLE_CLIENT_ID=…apps.googleusercontent.com

# grep-backend/.env
GOOGLE_CLIENT_ID=…apps.googleusercontent.com
```

`PUBLIC_` values are baked in at build time. Change one and you need a rebuild,
not just a restart.

---

## Layout

```
src/
  components/        SiteHeader, SiteFooter, EditionCard, ScrollHint, …
    blocks/          one component per block type in an edition
    reader/          the reader's cover and contents rail
  layouts/Base.astro
  lib/
    editions/        built-in editions, the merge, the remote fetch
    types.ts         the shape of an edition - start here
  pages/
    admin/           the moderator console
    api/subscribe.ts
  scripts/           progressive enhancement, one file per behaviour
  styles/global.css  the design system
public/
  editions/          the built-in PDFs
  logos/  art/  people/  fonts/
```

### Things worth knowing before editing

- **The type scale is a 4pt grid.** Every size is a multiple of 4px and lives in
  `global.css` as `--step--1` … `--step-5`. Do not write a bare `font-size`.
- **Borel is one size everywhere.** Script headings all read `--step-script`.
  A steeper local override will overtake the token through the middle widths.
- **The wave is a mask, not an image.** `.wave-edge` and `.wave-edge--left` cut
  it out of whatever the element is painted, so it recolours with the accent.
  `--wave-height` drives the whole shape.
- **A page's scoped CSS cannot reach a child component's root element.** Wrap
  placement rules for a component root in `:global()`, or they silently do
  nothing.
