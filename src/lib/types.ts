/**
 * The shape of an edition of grep.
 *
 * The print editions are built from a small, repeating set of layout
 * primitives - a script section heading, a dashed-rail event entry, a
 * bordered project card, a blog card with a vertical read-time spine.
 * Modelling those primitives (rather than dumping HTML into a markdown file)
 * is what lets the web reader keep print fidelity, build its own table of
 * contents, and produce a searchable index of every edition.
 */

/** Section colourway. `red` is the ACM-W / localhost-finds palette. */
export type Accent = 'blue' | 'red' | 'ink';

export interface Link {
  label: string;
  href: string;
}

export interface Entry {
  /** Slug used for the in-edition anchor. Derived from the title when absent. */
  id?: string;
  title: string;
  body: string[];
  meta?: string;
  links?: Link[];
  figure?: Figure;
}

export interface Card {
  id?: string;
  title: string;
  body: string[];
  meta?: string;
  links?: Link[];
  /** Small square product mark, drawn in CSS rather than shipped as an image. */
  logo?: { text: string; bg: string; fg: string; font?: 'pixel' | 'sans' | 'glyph' };
}

export interface BlogItem {
  title: string;
  author: string;
  href: string;
  readTime: string;
  date?: string;
}

export interface FindItem {
  title: string;
  href: string;
  source?: string;
  body: string;
}

export interface TeamItem {
  name: string;
  role: string;
  /** ACM-W office bearers are set in the red colourway in print. */
  acmw?: boolean;
}

export interface TimelineItem {
  period: string;
  title: string;
  body: string[];
}

export interface Figure {
  src: string;
  alt: string;
  caption?: string;
  /** Print pages place photographs beside the column, not across it. */
  align?: 'side' | 'full';
}

export type Block =
  | { type: 'lead'; text: string }
  | { type: 'p'; text: string }
  | { type: 'h'; text: string }
  | { type: 'script'; text: string }
  | { type: 'byline'; name: string }
  | { type: 'signature'; name: string; lines: string[] }
  | { type: 'timeline'; items: TimelineItem[] }
  | { type: 'entries'; items: Entry[] }
  | { type: 'cards'; items: Card[] }
  | { type: 'blogs'; items: BlogItem[] }
  | { type: 'finds'; items: FindItem[] }
  | { type: 'team'; items: TeamItem[] }
  | { type: 'credits'; editors: string[]; designers: string[] }
  | { type: 'list'; items: { title: string; body: string }[] }
  | { type: 'links'; items: Link[] }
  | { type: 'stats'; items: { value: string; label: string }[] }
  | { type: 'award'; title: string; sub: string; year: string; body?: string[] }
  | { type: 'figure'; figure: Figure };

export interface Section {
  id: string;
  /** Script heading, as printed. */
  title: string;
  /** Shorter label for the table of contents / reader rail. */
  navTitle?: string;
  accent?: Accent;
  /** Illustration key from `src/lib/art.ts`. */
  art?: string;
  blocks: Block[];
}

export interface Edition {
  slug: string;
  /** 0 for v0, 1 for v1 - the editions are numbered from zero. */
  number: number;
  /** `Origins Edition`, etc. Empty for editions that only carry a date. */
  name?: string;
  /** Printed in the running header, right-aligned. */
  headerLabel: string;
  /** Printed in the running footer, right-aligned. */
  footerLabel: string;
  dateline: string;
  isoDate: string;
  tagline: string;
  blurb: string;
  pages: number;
  pdf: string;
  cover: 'keyboard' | 'brick';
  /**
   * `pdf` editions carry a cover and a download and nothing else - the admin
   * lets an editor publish one without transcribing the whole issue. `full`
   * editions also carry sections and get the reader.
   */
  kind: 'pdf' | 'full';
  status: 'published';
  /** Empty for a `pdf` edition. */
  sections: Section[];
}

/** Stable anchor id for a heading or entry title. */
export function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/['’"”“]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
