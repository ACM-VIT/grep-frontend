/**
 * Publishes the header's height as `--header-h` on <html>.
 *
 * The band and the nav bar are both fluid, so a full-height hero cannot be
 * written as `100svh - <constant>` in CSS. This measures the real thing and
 * keeps it current across resizes and font swaps.
 */
export function initViewport(): void {
  const header = document.querySelector<HTMLElement>('.site-header');
  if (!header) return;

  const publish = () => {
    document.documentElement.style.setProperty('--header-h', `${Math.round(header.offsetHeight)}px`);
  };

  publish();

  if ('ResizeObserver' in window) {
    new ResizeObserver(publish).observe(header);
  } else {
    window.addEventListener('resize', publish, { passive: true });
  }
}
