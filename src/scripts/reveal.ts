/**
 * Reveals `[data-reveal]` elements as they scroll in.
 *
 * One observer for the whole document, and elements are unobserved once shown
 * so the callback stops firing. Elements already in view on load are revealed
 * immediately by the observer's first synchronous callback, so nothing above
 * the fold ever waits for a scroll event.
 */
/* Lists and grids enter top to bottom rather than all at once. 50ms is the
   middle of the chapter's 40-60ms window; the step stops climbing after six
   items so a long list's tail does not sit waiting a second and a half. */
const STAGGER_MS = 50;
const STAGGER_CAP = 6;

export function initReveal(): void {
  const root = document.documentElement;
  root.classList.remove('no-js');

  const nodes = document.querySelectorAll<HTMLElement>('[data-reveal]');
  if (!nodes.length) return;

  // Siblings that reveal together are a group; anything with its own delay
  // set by the author keeps it.
  const groups = new Map<Element, HTMLElement[]>();
  nodes.forEach((node) => {
    const parent = node.parentElement;
    if (!parent) return;
    groups.set(parent, [...(groups.get(parent) ?? []), node]);
  });

  groups.forEach((items) => {
    if (items.length < 2) return;
    items.forEach((item, index) => {
      if (item.style.getPropertyValue('--reveal-delay')) return;
      item.style.setProperty('--reveal-delay', `${Math.min(index, STAGGER_CAP) * STAGGER_MS}ms`);
    });
  });

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced || !('IntersectionObserver' in window)) {
    nodes.forEach((node) => node.classList.add('is-in'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-in');
        observer.unobserve(entry.target);
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
  );

  nodes.forEach((node) => observer.observe(node));
}
