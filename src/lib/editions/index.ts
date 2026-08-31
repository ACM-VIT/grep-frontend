import type { Block, Edition, Section } from '../types';
import { slugify } from '../types';
import { remoteEditions } from './remote';
import { v0 } from './v0';
import { v1 } from './v1';

/**
 * The two hand-set editions, compiled in. They are the floor: whatever the
 * admin service says or fails to say, these render.
 */
export const builtinEditions: Edition[] = [v1, v0];

/**
 * Every edition the site should show, newest first - the archive, the home page
 * and the reader all read in this order.
 *
 * Built-ins are merged with whatever the admin service has published. A remote
 * edition sharing a slug with a built-in wins, so a hand-set edition can be
 * corrected through the admin without a deploy; anything else is added.
 */
export async function loadEditions(): Promise<Edition[]> {
  const remote = await remoteEditions();
  const bySlug = new Map<string, Edition>();
  for (const edition of builtinEditions) bySlug.set(edition.slug, edition);
  for (const edition of remote) bySlug.set(edition.slug, edition);
  return [...bySlug.values()].sort((a, b) => b.number - a.number);
}

/** The newest edition. Never undefined - there are always the built-ins. */
export async function loadLatestEdition(): Promise<Edition> {
  const list = await loadEditions();
  return list[0]!;
}

export function getEdition(list: Edition[], slug: string): Edition | undefined {
  return list.find((edition) => edition.slug === slug);
}

export function editionTitle(edition: Edition): string {
  return edition.name ? `grep v${edition.number} - ${edition.name}` : `grep v${edition.number}`;
}

export function neighbours(list: Edition[], slug: string): { previous?: Edition; next?: Edition } {
  const index = list.findIndex((edition) => edition.slug === slug);
  if (index === -1) return {};
  return { next: list[index - 1], previous: list[index + 1] };
}

/** Section headings, in print order, for the table of contents and the reader rail. */
export function tableOfContents(edition: Edition): { id: string; title: string; accent: string }[] {
  return edition.sections.map((section) => ({
    id: section.id,
    title: section.navTitle ?? section.title,
    accent: section.accent ?? 'blue',
  }));
}

/** Anchor id for an entry or card inside a section. */
export function entryId(section: Section, title: string, explicit?: string): string {
  return `${section.id}--${explicit ?? slugify(title)}`;
}

function blockText(block: Block): string[] {
  switch (block.type) {
    case 'lead':
    case 'p':
    case 'h':
    case 'script':
      return [block.text];
    case 'byline':
      return [block.name];
    case 'signature':
      return [block.name, ...block.lines];
    case 'timeline':
      return block.items.flatMap((item) => [`${item.period} - ${item.title}`, ...item.body]);
    case 'entries':
      return block.items.flatMap((item) => [
        item.title,
        ...item.body,
        ...(item.meta ? [item.meta] : []),
        ...(item.links ?? []).map((link) => link.label),
      ]);
    case 'cards':
      return block.items.flatMap((item) => [
        item.title,
        ...item.body,
        ...(item.meta ? [item.meta] : []),
        ...(item.links ?? []).map((link) => link.label),
      ]);
    case 'blogs':
      return block.items.flatMap((item) => [item.title, item.author]);
    case 'finds':
      return block.items.flatMap((item) => [item.title, item.body]);
    case 'team':
      return block.items.map((item) => `${item.name} - ${item.role}`);
    case 'credits':
      return [...block.editors, ...block.designers];
    case 'list':
      return block.items.flatMap((item) => [item.title, item.body].filter(Boolean));
    case 'links':
      return block.items.map((link) => link.label);
    case 'stats':
      return block.items.map((item) => `${item.value} ${item.label}`);
    case 'award':
      return [block.title, block.sub, block.year, ...(block.body ?? [])];
    case 'figure':
      return [block.figure.caption ?? ''].filter(Boolean);
  }
}

export function sectionText(section: Section): string {
  return [section.title, ...section.blocks.flatMap(blockText)].join('\n');
}

const WORDS_PER_MINUTE = 220;

/**
 * Minutes of reading, or 0 for a pdf-only edition.
 *
 * Zero rather than a floor of one: an edition with no sections has nothing to
 * read here, and "~1 min" beside a download link is a claim about a page that
 * does not exist. Callers hide the figure when it is 0.
 */
export function readingMinutes(edition: Edition): number {
  if (edition.sections.length === 0) return 0;
  const words = edition.sections
    .map(sectionText)
    .join(' ')
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

/**
 * One record per paragraph-sized chunk. The home page and the reader both
 * `grep` this: it is small enough to ship as static JSON and precise enough
 * that a hit can deep-link straight to the section it came from.
 */
export interface SearchRecord {
  edition: string;
  editionLabel: string;
  section: string;
  sectionTitle: string;
  text: string;
}

export function buildSearchIndex(list: Edition[]): SearchRecord[] {
  const records: SearchRecord[] = [];
  for (const edition of list) {
    for (const section of edition.sections) {
      const title = section.navTitle ?? section.title;
      for (const block of section.blocks) {
        for (const text of blockText(block)) {
          const trimmed = text.trim();
          if (trimmed.length < 8) continue;
          records.push({
            edition: edition.slug,
            editionLabel: `v${edition.number}`,
            section: section.id,
            sectionTitle: title,
            text: trimmed,
          });
        }
      }
    }
  }
  return records;
}
