/**
 * Reveals `[data-reveal]` elements as they scroll in.
 *
 * One observer for the whole document, and elements are unobserved once shown
 * so the callback stops firing. Elements already in view on load are revealed
 * immediately by the observer's first synchronous callback, so nothing above
 * the fold ever waits for a scroll event.
 */
export function initReveal(): void {
  const root = document.documentElement;
  root.classList.remove('no-js');

  const nodes = document.querySelectorAll<HTMLElement>('[data-reveal]');
  if (!nodes.length) return;

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
