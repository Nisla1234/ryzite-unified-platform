// [PROPOSAL] Homepage Technology Solutions card story.
// A pinned stage where the solution cards rise into a fan, scatter, gather into a pile,
// then fan out into a wheel that turns right-to-left, resting on each card so it can be read.
// Progressive enhancement: without JS, with reduced motion, or on short screens the section
// keeps its normal static grid (the `is-story` class is never added).

type Pose = [x: number, y: number, rotation: number, scale: number, opacity: number];

const DEG = 180 / Math.PI;
const NAV_OFFSET = 86; // matches the sticky site header height
const MIN_VIEWPORT_HEIGHT = 640;

const clamp = (value: number, min = 0, max = 1) => Math.min(max, Math.max(min, value));
const range = (p: number, start: number, end: number) => clamp((p - start) / (end - start));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const mix = (a: Pose, b: Pose, t: number): Pose => a.map((value, index) => lerp(value, b[index], t)) as Pose;
const easeInOut = (t: number) => (t < .5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2);

// cubic-bezier(.25, .75, .2, 1): a soft glide that settles gently.
const glide = (() => {
  const x1 = .25, y1 = .75, x2 = .2, y2 = 1;
  const curve = (t: number, a: number, b: number) => 3 * a * t * (1 - t) ** 2 + 3 * b * t * t * (1 - t) + t ** 3;
  return (x: number) => {
    if (x <= 0 || x >= 1) return clamp(x);
    let low = 0, high = 1, t = x;
    for (let i = 0; i < 20; i += 1) {
      t = (low + high) / 2;
      if (curve(t, x1, x2) < x) low = t; else high = t;
    }
    return curve(t, y1, y2);
  };
})();

// Angular step that keeps a chord of `chord` px between neighbouring card centres.
const stepFor = (radius: number, chord: number) => 2 * Math.asin(Math.min(.99, chord / (2 * radius)));

const desktopScatter: [number, number, number][] = [
  [.09, .36, -16], [.91, .38, 14], [.22, .7, -10], [.78, .7, 11], [.5, .66, -4],
  [.36, .95, 7], [.64, .95, -8], [.06, .9, 9], [.94, .9, -12],
];
const mobileScatter: [number, number, number][] = [
  [.17, .48, -14], [.83, .48, 13], [.5, .58, -5], [.2, .74, 9], [.8, .74, -10],
  [.5, .88, 6], [.14, .98, -8], [.86, .98, 10], [.5, 1.12, 0],
];

const setup = (story: HTMLElement) => {
  if (story.dataset.storyReady) return;
  story.dataset.storyReady = 'true';

  const section = story.closest<HTMLElement>('.solutions')!;
  const stage = story.querySelector<HTMLElement>('.solution-story__stage')!;
  const list = story.querySelector<HTMLElement>('.roadmap')!;
  const cards = [...story.querySelectorAll<HTMLElement>('.roadmap-stop')];
  const count = cards.length;
  if (!count) return;
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');

  let enabled = false;
  let width = 0;
  let height = 0;
  let cardWidth = 0;
  let mobile = false;
  let enteredAt = -1;
  let frame = 0;
  let lastTime = 0;
  let visible = false;
  const shown: (Pose | null)[] = cards.map(() => null);
  const lastSlot: number[] = cards.map(() => 0);

  const measure = () => {
    width = stage.clientWidth;
    height = stage.clientHeight;
    mobile = width < 768;
    cardWidth = mobile
      ? Math.min(width * .68, 270, (height * .42) / 1.32)
      : clamp(Math.min(width / 1440, height / 714) * 280, 200, 310);
    list.style.setProperty('--cw', cardWidth.toFixed(2));
  };

  const fanPose = (i: number): Pose => {
    const scale = mobile ? .62 : .78;
    const radius = mobile ? width * 1.6 : (1250 * width) / 1440;
    const chord = Math.min(1.05 * cardWidth * scale, (width * .94 - cardWidth * scale) / (count - 1));
    const angle = (i - (count - 1) / 2) * stepFor(radius, chord);
    const cy = height * (mobile ? .8 : .78) + radius;
    return [width * .5 + radius * Math.sin(angle), cy - radius * Math.cos(angle), angle * DEG, scale, 1];
  };

  const scatterPose = (i: number): Pose => {
    const [fx, fy, rotation] = (mobile ? mobileScatter : desktopScatter)[i % 9];
    return [width * fx, height * fy, rotation, mobile ? .55 : .72, 1];
  };

  const pilePose = (i: number): Pose => [
    width * .5 + ((i % 3) - 1) * cardWidth * .08,
    height * (mobile ? .62 : .58) + (((i * 7) % 5) - 2) * cardWidth * .04,
    (i % 2 ? 1 : -1) * (4 + i * 1.3),
    mobile ? .8 : .9,
    1,
  ];

  // Cards sit on a looping arc; `focus` is the (fractional) index of the card at the centre.
  const wheelSlot = (i: number, focus: number) => {
    let slot = (((i - focus) % count) + count) % count;
    if (slot > count / 2) slot -= count;
    return slot;
  };
  const wheelPose = (i: number, focus: number): Pose => {
    const slot = wheelSlot(i, focus);
    const radius = mobile ? width * 1.5 : (1100 * width) / 1440;
    const angle = slot * stepFor(radius, 1.08 * cardWidth);
    const cy = height * (mobile ? .62 : .6) + radius;
    const emphasis = Math.max(0, 1 - Math.abs(slot));
    const opacity = clamp((count / 2 - Math.abs(slot)) / .7);
    return [width * .5 + radius * Math.sin(angle), cy - radius * Math.cos(angle), angle * DEG, .94 + .08 * emphasis, opacity];
  };

  // Each card rests at the centre for part of its segment before the wheel moves on.
  const focusFor = (t: number) => {
    const raw = clamp(t) * (count - 1);
    const index = Math.min(count - 2, Math.floor(raw));
    const fraction = raw - index;
    return index + easeInOut(range(fraction, .18, .82));
  };

  const WHEEL_START = .56;
  const WHEEL_END = .96;

  const progress = () => {
    const rect = story.getBoundingClientRect();
    const distance = story.offsetHeight - stage.offsetHeight;
    return distance > 0 ? clamp((NAV_OFFSET - rect.top) / distance) : 0;
  };

  const targetPose = (i: number, p: number, now: number): Pose => {
    if (enteredAt < 0) {
      const pose = fanPose(i);
      return [pose[0], pose[1] + height * .7, pose[2] + 8, pose[3], 0];
    }
    if (p < .12) {
      // Entrance: the fan rises card by card, centre-out.
      const order = Math.abs(i - (count - 1) / 2);
      const pose = fanPose(i);
      if (now - enteredAt < order * 70) return [pose[0], pose[1] + height * .7, pose[2] + 8, pose[3], 0];
      return pose;
    }
    if (p < .28) return mix(fanPose(i), scatterPose(i), easeInOut(range(p, .12, .26)));
    if (p < .43) return mix(scatterPose(i), pilePose(i), easeInOut(range(p, .3, .42)));
    if (p < WHEEL_START) return mix(pilePose(i), wheelPose(i, 0), glide(range(p, .43, .54)));
    return wheelPose(i, focusFor(range(p, WHEEL_START, WHEEL_END)));
  };

  const apply = (card: HTMLElement, pose: Pose, i: number) => {
    const [x, y, rotation, scale, opacity] = pose;
    card.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0) rotate(${rotation.toFixed(2)}deg) scale(${scale.toFixed(3)})`;
    card.style.opacity = opacity.toFixed(3);
    card.style.pointerEvents = opacity > .5 ? '' : 'none';
    card.style.zIndex = String(100 - Math.round(Math.abs(pose[0] - width / 2) / 10) + i);
  };

  const tick = (time: number) => {
    frame = 0;
    if (!enabled) return;
    const dt = lastTime ? Math.min(64, time - lastTime) : 16.67;
    lastTime = time;
    const p = progress();
    if (enteredAt < 0 && story.getBoundingClientRect().top < window.innerHeight * .75) enteredAt = time;
    const inWheel = p >= WHEEL_START;
    const focus = inWheel ? focusFor(range(p, WHEEL_START, WHEEL_END)) : 0;

    cards.forEach((card, i) => {
      const target = targetPose(i, p, time);
      // A card that loops from one end of the wheel to the other jumps instead of gliding across.
      const slot = inWheel ? wheelSlot(i, focus) : 0;
      const wrapped = Math.abs(slot - lastSlot[i]) > count / 2;
      lastSlot[i] = slot;
      const current = shown[i];
      if (!current || wrapped) {
        shown[i] = target;
      } else {
        const weight = .07 + (i % 4) * .01;
        const k = 1 - (1 - weight) ** (dt / 16.67);
        shown[i] = mix(current, target, k);
      }
      apply(card, shown[i]!, i);
    });

    if (visible) frame = requestAnimationFrame(tick);
  };

  const start = () => {
    if (!frame && enabled) {
      lastTime = 0;
      frame = requestAnimationFrame(tick);
    }
  };

  const clearStyles = () => {
    cards.forEach((card) => {
      card.style.removeProperty('transform');
      card.style.removeProperty('opacity');
      card.style.removeProperty('pointer-events');
      card.style.removeProperty('z-index');
    });
    list.style.removeProperty('--cw');
  };

  const refresh = () => {
    const shouldRun = !motion.matches && window.innerHeight >= MIN_VIEWPORT_HEIGHT;
    if (shouldRun !== enabled) {
      enabled = shouldRun;
      section.classList.toggle('is-story', enabled);
      if (!enabled) {
        cancelAnimationFrame(frame);
        frame = 0;
        clearStyles();
      }
      shown.fill(null);
    }
    if (!enabled) return;
    measure();
    // Snap to the new layout so a resize never sends cards gliding across the screen.
    shown.fill(null);
    if (progress() > 0) enteredAt = 0;
    start();
  };

  // Keyboard users: focusing a card scrolls the story to where that card is centred.
  const onFocus = (event: FocusEvent) => {
    if (!enabled) return;
    const card = (event.target as HTMLElement).closest<HTMLElement>('.roadmap-stop');
    const index = card ? cards.indexOf(card) : -1;
    if (index < 0) return;
    const distance = story.offsetHeight - stage.offsetHeight;
    const p = WHEEL_START + (index / (count - 1)) * (WHEEL_END - WHEEL_START);
    const top = window.scrollY + story.getBoundingClientRect().top - NAV_OFFSET + p * distance;
    window.scrollTo({ top, behavior: 'instant' as ScrollBehavior });
    shown.fill(null);
    start();
  };

  const visibility = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    if (visible) start();
  }, { rootMargin: '25% 0px' });
  visibility.observe(story);

  const onScroll = () => start();
  const resize = new ResizeObserver(refresh);
  resize.observe(stage);
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', refresh, { passive: true });
  motion.addEventListener('change', refresh);
  story.addEventListener('focusin', onFocus);
  refresh();

  document.addEventListener('astro:before-swap', () => {
    cancelAnimationFrame(frame);
    visibility.disconnect();
    resize.disconnect();
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('resize', refresh);
    motion.removeEventListener('change', refresh);
  }, { once: true });
};

export const initSolutionCardStory = () => {
  document.querySelectorAll<HTMLElement>('[data-solution-story]').forEach(setup);
};
