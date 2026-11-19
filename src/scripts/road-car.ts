// Services page process road: a cartoon car drives along the road on a loop.
// The road SVGs stretch (preserveAspectRatio="none"), so the car is an HTML image placed over them:
// each frame reads a point on the visible road path and maps it to the road box in pixels.
// Decorative only. With reduced motion the car stays parked near the start; it pauses off-screen.

const LAP_MS = 16000; // one trip along the road
const FADE = 0.035; // share of the lap spent fading in at the start and out at the end
const TILT = 0.7; // soften the slope rotation so the 3/4-view car doesn't look upended

const initializeRoadCar = () => {
  const road = document.querySelector<HTMLElement>('.marketing-road');
  const car = road?.querySelector<HTMLImageElement>('.marketing-road__car');
  if (!road || !car || road.dataset.carInitialized) return;
  road.dataset.carInitialized = 'true';

  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let frame = 0;
  let start = 0;
  let visible = false;

  // The road that is currently displayed (wide on desktop, tall on narrow screens).
  const activePath = () => {
    const svg = [...road.querySelectorAll<SVGSVGElement>('.marketing-road__svg')].find((element) => element.getClientRects().length);
    const path = svg?.querySelector<SVGPathElement>('.marketing-road__asphalt');
    return svg && path ? { svg, path } : null;
  };

  const place = (progress: number) => {
    const active = activePath();
    if (!active) return;
    const { svg, path } = active;
    const box = road.getBoundingClientRect();
    const rect = svg.getBoundingClientRect();
    const view = svg.viewBox.baseVal;
    const sx = rect.width / view.width;
    const sy = rect.height / view.height;
    const length = path.getTotalLength();
    const at = progress * length;
    const point = path.getPointAtLength(at);
    const ahead = path.getPointAtLength(Math.min(length, at + 2));
    const behind = path.getPointAtLength(Math.max(0, at - 2));
    const angle = Math.atan2((ahead.y - behind.y) * sy, (ahead.x - behind.x) * sx) * (180 / Math.PI);
    const x = rect.left - box.left + point.x * sx;
    const y = rect.top - box.top + point.y * sy;
    const fade = Math.min(1, progress / FADE, (1 - progress) / FADE);
    car.style.transform = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px) translate(-50%, -64%) rotate(${(angle * TILT).toFixed(1)}deg)`;
    car.style.opacity = motion.matches ? '1' : fade.toFixed(2);
  };

  const tick = (now: number) => {
    if (!start) start = now;
    place(((now - start) % LAP_MS) / LAP_MS);
    frame = window.requestAnimationFrame(tick);
  };

  const stop = () => {
    if (frame) window.cancelAnimationFrame(frame);
    frame = 0;
  };

  const update = () => {
    stop();
    if (motion.matches) {
      place(0.08);
      return;
    }
    if (visible) frame = window.requestAnimationFrame(tick);
  };

  const observer = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    update();
  });
  observer.observe(road);
  const resizeObserver = new ResizeObserver(() => { if (motion.matches) place(0.08); });
  resizeObserver.observe(road);
  motion.addEventListener('change', update);
  road.classList.add('has-car');
  update();

  document.addEventListener('astro:before-swap', () => {
    stop();
    observer.disconnect();
    resizeObserver.disconnect();
    motion.removeEventListener('change', update);
  }, { once: true });
};

initializeRoadCar();
document.addEventListener('astro:page-load', initializeRoadCar);
