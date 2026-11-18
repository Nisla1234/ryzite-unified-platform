import { gsap } from 'gsap';

// Shared scroll reveal for homepage sections. Content stays visible by default and motion is
// skipped when reduced motion is requested.

type RevealHandler = (element: HTMLElement) => void;
const handlers = new Map<string, RevealHandler>();

/** Register extra motion (e.g. SVG line drawing) to run when an element with data-hs-reveal="name" appears. */
export const onHomeReveal = (name: string, handler: RevealHandler) => handlers.set(name, handler);

export const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const introActive = () => {
  const root = document.documentElement.classList;
  return root.contains('home-intro') || root.contains('home-transition');
};

const initialize = () => {
  const elements = [...document.querySelectorAll<HTMLElement>('[data-hs-reveal]')].filter((element) => !element.dataset.hsReady);
  if (!elements.length) return;
  elements.forEach((element) => { element.dataset.hsReady = 'true'; });

  if (prefersReducedMotion() || !('IntersectionObserver' in window)) return;

  gsap.set(elements, { autoAlpha: 0, y: 24 });

  const reveal = (element: HTMLElement) => {
    gsap.to(element, {
      autoAlpha: 1,
      y: 0,
      duration: 0.7,
      ease: 'power3.out',
      delay: Number(element.dataset.hsDelay || 0),
      clearProps: 'transform,opacity,visibility',
    });
    const name = element.dataset.hsReveal;
    if (name) handlers.get(name)?.(element);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      observer.unobserve(entry.target);
      reveal(entry.target as HTMLElement);
    });
  }, { rootMargin: '0px 0px -80px 0px', threshold: 0.08 });

  const observeAll = () => elements.forEach((element) => observer.observe(element));
  let intro: MutationObserver | undefined;
  if (introActive()) {
    intro = new MutationObserver(() => {
      if (introActive()) return;
      intro?.disconnect();
      observeAll();
    });
    intro.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
  } else {
    observeAll();
  }

  window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', (event) => {
    if (!event.matches) return;
    observer.disconnect();
    gsap.killTweensOf(elements);
    gsap.set(elements, { clearProps: 'all' });
  }, { once: true });

  document.addEventListener('astro:before-swap', () => {
    observer.disconnect();
    intro?.disconnect();
  }, { once: true });
};

// Run after the section scripts in this bundle have registered their handlers.
queueMicrotask(initialize);
document.addEventListener('astro:page-load', initialize);
