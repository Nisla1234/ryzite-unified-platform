// Scrolls the hero's curved marquee text along its path by moving the textPath's startOffset.
// The text holds several identical copies, so shifting by one copy's length loops seamlessly.

const COPIES = 6;
const SPEED = 70; // viewBox units per second

let stop: (() => void) | undefined;

const startMarquee = () => {
  stop?.();
  stop = undefined;

  const textPath = document.querySelector<SVGTextPathElement>('[data-marquee-path]');
  if (!textPath) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  // Measured lazily: fonts and the selected language both change the text length.
  const copyLength = () => textPath.getComputedTextLength() / COPIES;

  let offset = 0;
  let last = 0;
  let frame = 0;
  let visible = true;

  const tick = (now: number) => {
    const delta = last ? Math.min(now - last, 100) / 1000 : 0;
    last = now;
    const length = copyLength();
    if (length > 0) {
      offset -= SPEED * delta;
      if (offset <= -length) offset += length;
      textPath.setAttribute('startOffset', offset.toFixed(2));
    }
    frame = requestAnimationFrame(tick);
  };

  const run = () => {
    cancelAnimationFrame(frame);
    last = 0;
    if (visible && !reducedMotion.matches) frame = requestAnimationFrame(tick);
  };

  const observer = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    run();
  });
  observer.observe(textPath.ownerSVGElement ?? textPath);
  reducedMotion.addEventListener('change', run);
  run();

  stop = () => {
    cancelAnimationFrame(frame);
    observer.disconnect();
    reducedMotion.removeEventListener('change', run);
  };
};

document.addEventListener('astro:page-load', startMarquee);
document.addEventListener('astro:before-swap', () => stop?.());
