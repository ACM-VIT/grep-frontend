/**
 * The illustration set, recovered from the printed editions.
 *
 * Sections name an illustration by key (`Section.art`); anything unnamed falls
 * back to a deterministic pick so every section still gets a marginal drawing,
 * the way the printed pages do, without repeating twice in a row.
 */

export const artKeys = [
  'acm-awards',
  'analytics',
  'archer',
  'balloon',
  'bench',
  'board',
  'checklist',
  'cloud',
  'code',
  'couch',
  'credits',
  'crowd',
  'dance',
  'desk',
  'flag',
  'flowchart',
  'handshake',
  'highfive',
  'idea-box',
  'keys',
  'letter',
  'lifebuoy',
  'lounge',
  'magnifier',
  'mailbox',
  'map',
  'orbit',
  'paint',
  'pencil-desk',
  'phones',
  'plane',
  'profile',
  'puzzle',
  'reading',
  'rocket',
  'shield',
  'skydive',
  'soar',
  'tablet',
  'thinking',
  'trio',
  'trophy',
  'window',
  'workstation',
] as const;

/** Line art drawn in ACM-W red - reserved for red-accent sections. */
export const acmwArtKeys = ['acmw-desk', 'acmw-flower', 'acmw-flying', 'acmw-telescope', 'acmw-train'] as const;

export type ArtKey = (typeof artKeys)[number] | (typeof acmwArtKeys)[number];

export function artSrc(key: string): string {
  return `/art/${key}.png`;
}

/**
 * Pick an illustration for a section that did not name one. Keyed off the
 * section id so the choice is stable between builds, and off the index so
 * neighbouring sections do not land on the same drawing.
 */
export function fallbackArt(sectionId: string, index: number, accent = 'blue'): string {
  const pool = accent === 'red' ? acmwArtKeys : artKeys;
  let hash = index * 7;
  for (let i = 0; i < sectionId.length; i += 1) {
    hash = (hash * 31 + sectionId.charCodeAt(i)) >>> 0;
  }
  return pool[hash % pool.length]!;
}
