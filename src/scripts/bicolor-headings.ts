// Two-colour main headings site-wide (client request 2026-11-19), matching the homepage
// "Is Your Business Facing / These Challenges?" style: the start stays in the heading ink and the
// ending switches to the brand blue.
//
// Applies to plain-text <h1>/<h2> inside <main>. Headings that already mark their own split
// (.hs-bicolor) or opt out with data-bicolor="off" are left alone. Language switchers replace the
// heading text, so each heading is watched and re-split after its text changes.

const SELECTOR = 'main h1, main h2';
const ACCENT = 'bicolor__accent';
const BASE = 'bicolor__base';

/** Index of the first accent word: after the last internal sentence break, else the last ~40% of words. */
const accentStart = (words: string[]) => {
  for (let index = words.length - 2; index >= 0; index -= 1) {
    if (/[.!?]$/.test(words[index])) return index + 1;
  }
  return words.length - Math.max(1, Math.round(words.length * 0.4));
};

const isLight = (color: string) => {
  const [r, g, b] = (color.match(/\d+(\.\d+)?/g) ?? []).map(Number);
  if ([r, g, b].some((value) => Number.isNaN(value))) return false;
  return (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255 > 0.6;
};

const split = (heading: HTMLElement) => {
  if (heading.querySelector(`.${ACCENT}`)) return;
  // Only plain-text headings; anything with markup inside is designed by hand.
  if ([...heading.childNodes].some((node) => node.nodeType !== Node.TEXT_NODE)) return;
  const text = heading.textContent?.trim() ?? '';
  const words = text.split(/\s+/);
  if (words.length < 2) return;

  const start = accentStart(words);
  const base = document.createElement('span');
  base.className = BASE;
  base.textContent = words.slice(0, start).join(' ');
  const accent = document.createElement('span');
  accent.className = ACCENT;
  accent.textContent = words.slice(start).join(' ');
  heading.classList.toggle('bicolor--on-dark', isLight(getComputedStyle(heading).color));
  heading.replaceChildren(base, ' ', accent);
};

const init = () => {
  const observer = new MutationObserver((records) => {
    records.forEach(({ target }) => {
      const heading = (target instanceof HTMLElement ? target : target.parentElement)?.closest<HTMLElement>(SELECTOR);
      if (heading) split(heading);
    });
  });

  document.querySelectorAll<HTMLElement>(SELECTOR).forEach((heading) => {
    if (heading.classList.contains('hs-bicolor') || heading.closest('.hs-bicolor, [data-bicolor="off"]')) return;
    split(heading);
    observer.observe(heading, { childList: true, characterData: true, subtree: true });
  });
};

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
else init();
