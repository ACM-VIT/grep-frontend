/**
 * Reader behaviour: reading progress, contents-rail tracking, the mobile rail
 * sheet, and keyboard navigation between sections.
 *
 * Progress is measured against the article's own box, not the document, so the
 * bar reads 100% at the end of the edition rather than at the end of the page.
 */

interface Cleanup {
  (): void;
}

function initProgress(article: HTMLElement, bar: HTMLElement): Cleanup {
  let frame = 0;

  const update = () => {
    frame = 0;
    const start = article.offsetTop;
    const scrollable = article.offsetHeight - window.innerHeight;
    // A short edition can be smaller than the viewport; treat it as complete.
    const ratio = scrollable <= 0 ? 1 : (window.scrollY - start) / scrollable;
    const clamped = Math.min(1, Math.max(0, ratio));
    bar.style.transform = `scaleX(${clamped})`;
    bar.parentElement?.setAttribute('aria-valuenow', String(Math.round(clamped * 100)));
  };

  const schedule = () => {
    if (frame) return;
    frame = requestAnimationFrame(update);
  };

  update();
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule);

  return () => {
    if (frame) cancelAnimationFrame(frame);
    window.removeEventListener('scroll', schedule);
    window.removeEventListener('resize', schedule);
  };
}

function initRailTracking(sections: HTMLElement[], links: Map<string, HTMLAnchorElement>): Cleanup {
  if (!sections.length) return () => {};

  // Track which sections are on screen and mark the topmost one. A plain
  // "last intersecting wins" rule mis-fires when scrolling upward past a
  // section boundary, so keep the visible set and pick from it.
  const visible = new Set<string>();

  const mark = () => {
    let current: string | undefined;
    for (const section of sections) {
      if (visible.has(section.id)) {
        current = section.id;
        break;
      }
    }
    for (const [id, link] of links) {
      link.classList.toggle('is-current', id === current);
      if (id === current) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
    }
    if (current) {
      const link = links.get(current);
      const list = link?.closest('.rail-list');
      // Keep the active item in view without hijacking the page scroll.
      if (link && list && list.scrollHeight > list.clientHeight) {
        const top = link.offsetTop - list.clientHeight / 2 + link.clientHeight / 2;
        list.scrollTo({ top, behavior: 'smooth' });
      }
    }
  };

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) visible.add(entry.target.id);
        else visible.delete(entry.target.id);
      }
      mark();
    },
    // A band across the upper-middle of the viewport: a section counts as
    // "being read" once its body reaches roughly where the eye sits.
    { rootMargin: '-12% 0px -62% 0px', threshold: 0 },
  );

  sections.forEach((section) => observer.observe(section));
  return () => observer.disconnect();
}

function initRailSheet(rail: HTMLElement): Cleanup {
  const open = document.querySelector<HTMLButtonElement>('[data-rail-open]');
  const close = rail.querySelector<HTMLButtonElement>('[data-rail-close]');
  const mq = window.matchMedia('(max-width: 63.99rem)');

  const setOpen = (next: boolean) => {
    rail.toggleAttribute('data-open', next);
    open?.setAttribute('aria-expanded', String(next));
    document.body.style.overflow = next && mq.matches ? 'hidden' : '';
  };

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  const onKey = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && rail.hasAttribute('data-open')) setOpen(false);
  };

  // Tapping a section on mobile should close the sheet behind you.
  const onPick = (event: Event) => {
    const target = event.target as HTMLElement;
    if (target.closest('[data-rail-link]') && mq.matches) setOpen(false);
  };

  // Returning to the wide layout must not leave the body scroll-locked.
  const onBreakpoint = () => {
    if (!mq.matches) {
      rail.removeAttribute('data-open');
      document.body.style.overflow = '';
    }
  };

  open?.addEventListener('click', onOpen);
  close?.addEventListener('click', onClose);
  rail.addEventListener('click', onPick);
  document.addEventListener('keydown', onKey);
  mq.addEventListener('change', onBreakpoint);

  return () => {
    open?.removeEventListener('click', onOpen);
    close?.removeEventListener('click', onClose);
    rail.removeEventListener('click', onPick);
    document.removeEventListener('keydown', onKey);
    mq.removeEventListener('change', onBreakpoint);
  };
}

function initKeyboardNav(sections: HTMLElement[]): Cleanup {
  const onKey = (event: KeyboardEvent) => {
    if (event.metaKey || event.ctrlKey || event.altKey) return;
    const target = event.target as HTMLElement | null;
    // Never steal keys from a field the reader is typing in.
    if (target && (target.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName))) return;
    if (event.key !== 'j' && event.key !== 'k') return;

    // The section currently under the reading line is the last one that starts
    // at or above it; -1 means we are still above the first section.
    const line = window.scrollY + window.innerHeight * 0.25;
    let current = -1;
    for (let i = 0; i < sections.length; i += 1) {
      if (sections[i]!.offsetTop <= line + 4) current = i;
      else break;
    }

    const next = event.key === 'j' ? current + 1 : current - 1;
    const destination = sections[Math.max(0, Math.min(sections.length - 1, next))];
    if (!destination) return;
    event.preventDefault();
    destination.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  document.addEventListener('keydown', onKey);
  return () => document.removeEventListener('keydown', onKey);
}

export function initReader(): void {
  const article = document.querySelector<HTMLElement>('[data-reader-article]');
  const bar = document.querySelector<HTMLElement>('[data-reader-bar]');
  const rail = document.querySelector<HTMLElement>('[data-reader-rail]');

  const sections = Array.from(document.querySelectorAll<HTMLElement>('[data-reader-section]'));
  const links = new Map<string, HTMLAnchorElement>();
  document.querySelectorAll<HTMLAnchorElement>('[data-rail-link]').forEach((link) => {
    const id = link.dataset.railLink;
    if (id) links.set(id, link);
  });

  if (article && bar) initProgress(article, bar);
  if (links.size) initRailTracking(sections, links);
  if (rail) initRailSheet(rail);
  if (sections.length) initKeyboardNav(sections);
}
