/**
 * The front-page intro sequence.
 *
 * The board fades up and types g-r-e-p a key at a time with nothing on screen
 * but the keys; the wordmark then lands whole, all four letters at once, and
 * flies to the hero's own wordmark to cross-fade there. `data-intro`
 * on <html> carries the state: the page sets it inline before first paint so
 * the stage is up on frame one, and this flips it to `done` at the end.
 *
 * It runs once per tab - coming back to the front page mid-visit should feel
 * like returning to a page, not restarting the site.
 */
import { initKeyboard } from './keyboard';

const KEY = 'grep:intro-played';

/**
 * Where each letter lives on the board, as an index into the SVG's rects.
 * The rows run: digits (0-13), qwerty (14-27), home (28-40), zxcv (41-52),
 * modifiers (53-60) - so `r` and `e` are on the second row, `p` closes it,
 * and `g` sits in the middle of the third.
 */
const KEY_INDEX: Record<string, number> = { g: 33, r: 18, e: 17, p: 24 };
const TYPING_ORDER = ['g', 'r', 'e', 'p'];

const BOARD_IN = 520;
const KEY_GAP = 185;
const KEY_HOLD = 200;
/* The beat between the last keystroke and the mark appearing. Long enough to
   read as a consequence of the typing rather than as part of it. */
const REVEAL_BEAT = 160;
const HANDOFF_HOLD = 380;
const HANDOFF = 620;

const wait = (ms: number) => new Promise<void>((resolve) => window.setTimeout(resolve, ms));

/** sessionStorage throws in some privacy modes; a replayed intro is a fine fallback. */
function remember(): void {
  try {
    sessionStorage.setItem(KEY, '1');
  } catch {
    /* ignore */
  }
}

function hasPlayed(): boolean {
  try {
    return sessionStorage.getItem(KEY) === '1';
  } catch {
    return false;
  }
}

/** Strike one key: the cap dips, its letter lights, both settle back. */
function strike(rect: SVGRectElement | undefined): void {
  if (!rect) return;
  rect.classList.add('is-struck');
  window.setTimeout(() => rect.classList.remove('is-struck'), KEY_HOLD);
}

/**
 * Send the typed mark to the hero's mark - same centre, same size - so the
 * cross-fade at the end reads as one object being handed over.
 */
function handoff(mark: HTMLElement): void {
  const target = document.querySelector<HTMLElement>('.hero-title .wordmark');
  if (!target) return;

  const from = mark.getBoundingClientRect();
  const to = target.getBoundingClientRect();
  if (!from.width || !to.width) return;

  const scale = to.width / from.width;
  const dx = to.left + to.width / 2 - (from.left + from.width / 2);
  const dy = to.top + to.height / 2 - (from.top + from.height / 2);

  mark.animate(
    [{ transform: 'none' }, { transform: `translate(${dx}px, ${dy}px) scale(${scale})` }],
    { duration: HANDOFF, easing: 'cubic-bezier(0.2, 0.7, 0.2, 1)', fill: 'forwards' },
  );
}

async function play(root: HTMLElement): Promise<boolean> {
  const stage = document.querySelector<HTMLElement>('[data-intro-stage]');
  const mark = document.querySelector<HTMLElement>('[data-intro-mark]');
  if (!stage || !mark) {
    root.dataset.intro = 'done';
    return false;
  }

  await initKeyboard('#intro-keys');
  const rects = Array.from(stage.querySelectorAll<SVGRectElement>('svg rect'));
  stage.dataset.state = 'ready';

  await wait(BOARD_IN);
  stage.dataset.state = 'typing';

  /* Type the whole word first - the keys carry the sequence on their own. */
  for (const letter of TYPING_ORDER) {
    strike(rects[KEY_INDEX[letter]]);
    await wait(KEY_GAP);
  }

  /* Then the mark arrives in one piece. */
  await wait(REVEAL_BEAT);
  for (const letter of TYPING_ORDER) {
    mark.querySelector<HTMLElement>(`[data-key="${letter}"]`)?.classList.add('is-typed');
  }

  await wait(HANDOFF_HOLD);
  handoff(mark);
  stage.dataset.state = 'out';

  await wait(HANDOFF);
  root.dataset.intro = 'done';
  return true;
}

export function initIntro(): void {
  const root = document.documentElement;

  /* No inline decision (a page that does not carry the head script): decide here. */
  if (!root.dataset.intro) {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    root.dataset.intro = reduced || hasPlayed() ? 'done' : 'play';
  }

  if (root.dataset.intro !== 'play') return;

  remember();

  /* Whatever happens in the sequence - a failed fetch, a stalled frame - the
     page must not stay behind the stage. The net is deliberately slack: a
     backgrounded tab clamps every timer to a second, and the sequence should
     be allowed to finish rather than be cut short when the reader returns. */
  const failsafe = window.setTimeout(() => {
    root.dataset.intro = 'done';
  }, 8000);

  void play(root).finally(() => window.clearTimeout(failsafe));
}
