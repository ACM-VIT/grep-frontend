/**
 * The subscribe confetti, matching the burst on acmvit.in/grep.
 *
 * Pieces are plain divs driven by the Web Animations API rather than a
 * per-frame loop, so the browser can run the whole burst off the main thread.
 * The overlay is inert and removes itself once the last piece has landed.
 */

const COLORS = ['#2023FE', '#135DE2', '#5b6bff', '#8f9bff', '#c3caff'];
const PIECES = 110;
const CLEANUP_MS = 4200;

export function burst(): void {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const vw = window.innerWidth;
  const vh = window.innerHeight;

  const layer = document.createElement('div');
  layer.setAttribute('aria-hidden', 'true');
  layer.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:9999;overflow:hidden;';
  document.body.appendChild(layer);

  for (let i = 0; i < PIECES; i += 1) {
    const piece = document.createElement('div');
    const size = 6 + Math.random() * 6;
    const color = COLORS[(Math.random() * COLORS.length) | 0];
    const round = Math.random() < 0.35;
    const left = Math.random() * vw;
    // Start above the fold, staggered, so the burst reads as a fall not a pop.
    const top = -20 - Math.random() * vh * 0.4;

    piece.style.cssText =
      `position:absolute;left:${left}px;top:${top}px;` +
      `width:${size}px;height:${round ? size : size * 0.5}px;` +
      `background:${color};border-radius:${round ? '50%' : '1px'};` +
      'will-change:transform,opacity;';
    layer.appendChild(piece);

    const driftX = (Math.random() - 0.5) * 220;
    const fallY = vh + 80 - top;
    const spin = (Math.random() - 0.5) * 900;
    const duration = 2200 + Math.random() * 1600;

    piece.animate(
      [
        { transform: 'translate(0,0) rotate(0deg)', opacity: 1 },
        {
          transform: `translate(${driftX * 0.5}px, ${fallY * 0.5}px) rotate(${spin * 0.5}deg)`,
          opacity: 1,
          offset: 0.5,
        },
        { transform: `translate(${driftX}px, ${fallY}px) rotate(${spin}deg)`, opacity: 0.9 },
      ],
      { duration, easing: 'cubic-bezier(0.4,0.1,0.7,1)', fill: 'forwards' },
    );
  }

  window.setTimeout(() => layer.remove(), CLEANUP_MS);
}
