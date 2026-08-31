import type { Block, Edition, Section } from '../types';
import { slugify } from '../types';
import { v0 } from './v0';
import { v1 } from './v1';

/** Newest first - the archive, the home page and the reader all read in this order. */
export const editions: Edition[] = [v1, v0].sort((a, b) => b.number - a.number);

export const latestEdition = editions[0]!;

export function getEdition(slug: string): Edition | undefined {
  return editions.find((edition) => edition.slug === slug);
}

export function editionTitle(edition: Edition): string {
  return edition.name ? `grep v${edition.number} - ${edition.name}` : `grep v${edition.number}`;
}

export function neighbours(slug: string): { previous?: Edition; next?: Edition } {
  const index = editions.findIndex((edition) => edition.slug === slug);
  if (index === -1) return {};
  return { next: editions[index - 1], previous: editions[index + 1] };
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

export function readingMinutes(edition: Edition): number {
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

export function buildSearchIndex(): SearchRecord[] {
  const records: SearchRecord[] = [];
  for (const edition of editions) {
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
