import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';

// Scroll-controlled "From Idea to Solution" story. [PROPOSAL] — preview only.
//
// The SVG markup is drawn in its final state (Scene 4), so without JS or with reduced motion the
// still composition is shown. Here one scrubbed timeline runs from the moment the stage starts
// entering the viewport (Scene 1 plays during the approach) to the end of the pin (Scenes 2–4).
// Scrolling down advances it; scrolling up reverses it. Nothing plays on its own.

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

const motion = {
  approach: 0.7, // viewport heights between "stage top at 70% of viewport" and the pin start
  pin: { wide: 3, narrow: 2.2 }, // viewport heights the stage stays pinned
  scrub: 0.8,
};

type Layout = 'wide' | 'narrow';

const position = (element: SVGGraphicsElement) => {
  const matrix = element.transform.baseVal.consolidate()?.matrix;
  return { x: matrix?.e ?? 0, y: matrix?.f ?? 0 };
};

const headerHeight = () => document.querySelector<HTMLElement>('.site-header')?.offsetHeight ?? 0;

const buildStory = (root: HTMLElement, layout: Layout) => {
  const stage = root.querySelector<HTMLElement>('[data-idea-stage]');
  const svg = root.querySelector<SVGSVGElement>(`[data-idea-scene="${layout}"]`);
  if (!stage || !svg) return;

  const part = <T extends Element = SVGGraphicsElement>(name: string) => svg.querySelector<T>(`[data-idea="${name}"]`)!;
  const core = { x: Number(svg.dataset.coreX), y: Number(svg.dataset.coreY) };
  const cards = [...svg.querySelectorAll<SVGGElement>('.idea-card')];
  const nodes = [...svg.querySelectorAll<SVGGElement>('.idea-node')];
  const spokes = [...part('spokes').querySelectorAll('path')];
  const flows = [...part('flow').querySelectorAll('path')];
  const cardSpots = cards.map(position);
  const nodeSpots = nodes.map(position);
  const captions = [...root.querySelectorAll<HTMLElement>('[data-idea-caption]')];
  const progress = [...root.querySelectorAll<HTMLElement>('[data-idea-progress]')];
  const sweep = svg.querySelector('[data-idea="sweep"]');
  const centre = `${core.x} ${core.y}`;

  root.classList.add('is-animated');
  root.style.setProperty('--idea-offset', `${headerHeight()}px`);

  const pinLength = () => window.innerHeight * motion.pin[layout];
  const approachLength = () => window.innerHeight * motion.approach;

  const tl = gsap.timeline({
    defaults: { ease: 'power2.inOut' },
    scrollTrigger: {
      trigger: stage,
      start: `top ${motion.approach * 100}%`, // stage top at 70% of the viewport
      end: () => `+=${approachLength() + pinLength()}`,
      scrub: motion.scrub,
      // No invalidateOnRefresh: tween values don't depend on layout, and invalidating would drop
      // the DrawSVG start states set at build time (lines would show fully drawn before Scene 2).
    },
  });

  const pin = ScrollTrigger.create({
    trigger: stage,
    start: 'top top',
    end: () => `+=${pinLength()}`,
    pin: true,
    anticipatePin: 1,
    invalidateOnRefresh: true,
    onRefreshInit: () => root.style.setProperty('--idea-offset', `${headerHeight()}px`),
  });

  // Captions crossfade in one slot; only the first is visible at the start.
  gsap.set(captions.slice(1), { opacity: 0, y: 14 });
  const swapCaption = (from: number, at: number) => {
    tl.to(captions[from], { opacity: 0, y: -12, duration: 0.35 }, at);
    tl.fromTo(captions[from + 1], { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.45, immediateRender: false }, at + 0.3);
  };
  const scenes = [[0, 2.6], [2.6, 4.6], [4.6, 7], [7, 9.4]];
  progress.forEach((bar, index) => {
    const [start, end] = scenes[index];
    tl.fromTo(bar, { scaleX: 0 }, { scaleX: 1, duration: end - start, ease: 'none' }, start);
  });

  // Whole-sequence ambience, tied to scroll.
  tl.fromTo(part('ring'), { rotation: 0, transformOrigin: '50% 50%' }, { rotation: 200, duration: 10, ease: 'none' }, 0);
  tl.to(part('orbit'), { rotation: '+=140', transformOrigin: '50% 50%', duration: 10, ease: 'none' }, 0);

  // Scene 1 — The Idea: the core lights up in a clean, pale environment.
  tl.fromTo(part('beam'), { opacity: 0 }, { opacity: 0.6, duration: 1.6 }, 0);
  tl.fromTo(part('halo'), { opacity: 0, scale: 0.4, transformOrigin: '50% 50%' }, { opacity: 1, scale: 1, duration: 1.8 }, 0);
  tl.fromTo(part('sphere'), { opacity: 0, scale: 0.2, transformOrigin: '50% 50%' }, { opacity: 1, scale: 1, duration: 1.6, ease: 'back.out(1.4)' }, 0.2);
  tl.fromTo(part('ring'), { opacity: 0 }, { opacity: 1, duration: 1.2 }, 0.8);
  tl.fromTo(part('orbit'), { opacity: 0 }, { opacity: 1, duration: 1.2 }, 1);
  tl.to(part('sphere'), { scale: 1.06, duration: 0.6, ease: 'sine.inOut' }, 2);

  // Scene 2 — Transformation: the core releases connected nodes.
  swapCaption(0, 2.6);
  tl.to(part('sphere'), { scale: 0.8, duration: 1.4 }, 2.6);
  tl.to(part('halo'), { scale: 1.15, duration: 1.6 }, 2.6);
  tl.fromTo(part('sparks'), { opacity: 0, scale: 0.3, svgOrigin: centre }, { opacity: 1, scale: 1, duration: 1.8 }, 2.6);
  tl.fromTo(spokes, { drawSVG: '0%' }, { drawSVG: '100%', duration: 1.2, stagger: 0.08 }, 2.8);
  nodes.forEach((node, index) => {
    tl.fromTo(node,
      { x: core.x, y: core.y, scale: 0.4, opacity: 0, transformOrigin: '50% 50%' },
      { x: nodeSpots[index].x, y: nodeSpots[index].y, scale: 1, opacity: 1, duration: 1.2, ease: 'power3.out' },
      2.8 + index * 0.08);
  });

  // Scene 3 — Digital Solutions: each node becomes a website, marketing, or technology component.
  swapCaption(1, 4.6);
  tl.to(nodes, { scale: 0, opacity: 0, duration: 0.6, stagger: 0.06 }, 4.8);
  cards.forEach((card, index) => {
    tl.fromTo(card,
      { x: cardSpots[index].x, y: cardSpots[index].y + 26, scale: 0.55, opacity: 0, transformOrigin: '50% 50%' },
      { y: cardSpots[index].y, scale: 1, opacity: 1, duration: 1.1, ease: 'back.out(1.3)' },
      4.9 + index * 0.12);
  });
  tl.fromTo(part('flow'), { opacity: 0 }, { opacity: 0.85, duration: 0.6 }, 5.2);
  // A short segment runs from the core to each card three times.
  tl.fromTo(flows, { drawSVG: '0% 0%' }, { drawSVG: '92% 100%', duration: 1.6, repeat: 2, ease: 'none' }, 5.2);
  if (sweep) {
    tl.fromTo(sweep, { opacity: 0 }, { opacity: 1, duration: 0.3 }, 5.4);
    tl.fromTo(sweep, { attr: { x: -260 } }, { attr: { x: 1700 }, duration: 1.6, ease: 'power1.inOut' }, 5.4);
    tl.to(sweep, { opacity: 0, duration: 0.3 }, 6.7);
  }

  // Scene 4 — Final reveal: the parts close into one ecosystem around the RYZITE logo.
  swapCaption(2, 7);
  tl.fromTo(part('network'), { drawSVG: '0%' }, { drawSVG: '100%', duration: 1.6 }, 7);
  tl.to(part('sphere'), { scale: 0.4, opacity: 0, duration: 0.8, ease: 'power2.in' }, 7.1);
  tl.fromTo(part('badge'), { opacity: 0, scale: 0.5, transformOrigin: '50% 50%' }, { opacity: 1, scale: 1, duration: 1, ease: 'back.out(1.5)' }, 7.5);
  tl.fromTo(part('pulse'), { opacity: 0.7, scale: 1, transformOrigin: '50% 50%' }, { opacity: 0, scale: 2.2, duration: 1.3, ease: 'power2.out', immediateRender: false }, 7.9);
  tl.to(part('halo'), { scale: 1.3, duration: 1.6 }, 7.4);
  tl.to(part('beam'), { opacity: 0.35, duration: 1.4 }, 7.6);
  tl.to({}, { duration: 0.6 }, 9.4); // brief hold on the finished composition before unpinning

  const refresh = () => ScrollTrigger.refresh();
  window.addEventListener('ryzite:locale-change', refresh);
  document.fonts?.ready.then(refresh);

  return () => {
    window.removeEventListener('ryzite:locale-change', refresh);
    pin.kill();
    root.classList.remove('is-animated');
    root.style.removeProperty('--idea-offset');
  };
};

const introActive = () => {
  const root = document.documentElement.classList;
  return root.contains('home-intro') || root.contains('home-transition');
};

let media: gsap.MatchMedia | undefined;

const initialize = () => {
  media?.revert();
  const root = document.querySelector<HTMLElement>('[data-idea-story]');
  if (!root) return;

  ScrollTrigger.config({ ignoreMobileResize: true });
  media = gsap.matchMedia();
  media.add(
    {
      wide: '(min-width: 761px) and (prefers-reduced-motion: no-preference)',
      narrow: '(max-width: 760px) and (prefers-reduced-motion: no-preference)',
    },
    (context) => {
      const { wide, narrow } = context.conditions as { wide: boolean; narrow: boolean };
      if (wide) return buildStory(root, 'wide');
      if (narrow) return buildStory(root, 'narrow');
    },
  );
};

// Start after the homepage intro (if any) has released the page, so pin positions are measured correctly.
const start = () => {
  if (!introActive()) return initialize();
  const watcher = new MutationObserver(() => {
    if (introActive()) return;
    watcher.disconnect();
    initialize();
  });
  watcher.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
};

start();
document.addEventListener('astro:before-swap', () => media?.revert());
