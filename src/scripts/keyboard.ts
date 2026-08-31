/**
 * The hero keyboard.
 *
 * The SVG is fetched and inlined rather than used as an <img> so each key is
 * a real element in the document: the hover highlight is then plain CSS in
 * the page's own stylesheet, with no per-key markup to maintain here.
 */
export async function initKeyboard(selector = '#hero-keys'): Promise<void> {
  const host = document.querySelector<HTMLElement>(selector);
  if (!host || host.childElementCount > 0) return;

  try {
    const response = await fetch('/grep/grep-keyboard.svg');
    if (!response.ok) return;
    host.innerHTML = await response.text();
  } catch {
    /* No keyboard is a fine outcome - it is decoration behind the wordmark. */
  }
}
