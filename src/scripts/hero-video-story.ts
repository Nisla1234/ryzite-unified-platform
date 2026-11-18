// Scroll-scrubbed homepage hero: scroll position drives the video time and fades three text
// scenes in and out. Falls back to the static poster + first scene when motion is reduced or the
// video cannot load.

const clamp01 = (value: number) => Math.min(1, Math.max(0, value));
const easeInOut = (value: number) => .5 - Math.cos(Math.PI * clamp01(value)) / 2;
const lerp = (from: number, to: number, amount: number) => from + (to - from) * amount;

// Scene windows across scroll progress (0–1): [fade in start, fully in, fade out start, fully out].
const SCENES: [number, number, number, number][] = [
  [-1, 0, .16, .22],
  [.36, .42, .58, .64],
  [.78, .84, 2, 2],
];

// Phone framing: keep the robot visible beside the cropped video (robot right, left, right).
const MOBILE_FRAMING: [number, number][] = [
  [0, 78],
  [.22, 78],
  [.36, 24],
  [.64, 24],
  [.78, 80],
  [1, 80],
];

// Desktop pan (1 = robot to the right, -1 = robot to the left), timed between text scenes.
const DESKTOP_PAN: [number, number][] = [
  [0, 1],
  [.2, 1],
  [.38, -1],
  [.62, -1],
  [.8, 1],
  [1, 1],
];

const sceneOpacity = (progress: number, [inStart, inEnd, outStart, outEnd]: [number, number, number, number]) => {
  if (progress <= inStart || progress >= outEnd) return 0;
  if (progress < inEnd) return easeInOut((progress - inStart) / (inEnd - inStart));
  if (progress <= outStart) return 1;
  return 1 - easeInOut((progress - outStart) / (outEnd - outStart));
};

const interpolateKeyframes = (keyframes: [number, number][], progress: number) => {
  for (let index = 1; index < keyframes.length; index += 1) {
    const [toProgress, toValue] = keyframes[index];
    const [fromProgress, fromValue] = keyframes[index - 1];
    if (progress <= toProgress) {
      return lerp(fromValue, toValue, easeInOut((progress - fromProgress) / (toProgress - fromProgress || 1)));
    }
  }
  return keyframes[keyframes.length - 1][1];
};

const initializeHeroVideo = () => {
  const hero = document.querySelector<HTMLElement>('[data-video-hero]');
  const stage = hero?.querySelector<HTMLElement>('[data-video-stage]');
  const video = hero?.querySelector<HTMLVideoElement>('.video-hero__video');
  const panels = [...(hero?.querySelectorAll<HTMLElement>('[data-video-panel]') ?? [])];
  const dots = [...(hero?.querySelectorAll<HTMLElement>('[data-video-dot]') ?? [])];
  if (!hero || !stage || !video || panels.length !== SCENES.length || hero.dataset.initialized) return;

  hero.dataset.initialized = 'true';
  const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
  const mobileLayout = window.matchMedia('(max-width: 760px)');
  let frame = 0;
  let targetTime = 0;
  let displayedTime = 0;
  const root = document.documentElement;
  const header = document.querySelector<HTMLElement>('.site-header');

  // Hide the site header while the video story fills the screen; bring it back as the next
  // section (Business Challenge) reaches the top of the viewport.
  const updateHeader = () => {
    const headerHeight = header?.offsetHeight ?? 0;
    const heroOnScreen = hero.classList.contains('is-animated') && hero.getBoundingClientRect().bottom > headerHeight;
    root.classList.toggle('hero-hides-header', heroOnScreen);
  };

  const setPanel = (panel: HTMLElement, opacity: number, entering: boolean) => {
    const visible = opacity > .01;
    const interactive = opacity >= .5;
    const shift = (1 - opacity) * (entering ? 28 : -28);
    panel.style.opacity = String(opacity);
    panel.style.visibility = visible ? 'visible' : 'hidden';
    panel.style.pointerEvents = interactive ? 'auto' : 'none';
    panel.style.setProperty('--panel-shift', `${shift.toFixed(1)}px`);
    panel.classList.toggle('is-visible', visible);
    panel.setAttribute('aria-hidden', String(!interactive));
    panel.inert = !interactive;
  };

  const resetPanels = () => {
    panels.forEach((panel, index) => {
      panel.removeAttribute('style');
      panel.classList.toggle('is-visible', index === 0);
      panel.setAttribute('aria-hidden', String(index !== 0));
      panel.inert = index !== 0;
    });
    hero.style.removeProperty('--video-x');
    hero.style.removeProperty('--video-pan');
  };

  const showStaticFallback = (returnToHeroStart: boolean) => {
    const wasAnimated = hero.classList.contains('is-animated');
    const heroStart = hero.getBoundingClientRect().top + window.scrollY;
    hero.classList.remove('is-animated');
    video.pause();
    resetPanels();
    root.classList.remove('hero-hides-header');
    if (returnToHeroStart && wasAnimated) window.scrollTo(0, heroStart);
  };

  const getProgress = () => {
    const scrollRange = hero.offsetHeight - stage.offsetHeight;
    const heroStart = hero.getBoundingClientRect().top + window.scrollY;
    return scrollRange > 0 ? clamp01((window.scrollY - heroStart) / scrollRange) : 0;
  };

  const render = () => {
    frame = 0;
    if (!hero.classList.contains('is-animated')) return;

    updateHeader();
    const progress = getProgress();
    let activeScene = 0;
    panels.forEach((panel, index) => {
      const sceneWindow = SCENES[index];
      const opacity = sceneOpacity(progress, sceneWindow);
      if (opacity >= .5) activeScene = index;
      setPanel(panel, opacity, progress < (sceneWindow[1] + sceneWindow[2]) / 2);
    });
    dots.forEach((dot, index) => dot.classList.toggle('is-active', index === activeScene));

    hero.style.setProperty('--video-x', mobileLayout.matches ? `${interpolateKeyframes(MOBILE_FRAMING, progress).toFixed(1)}%` : '50%');
    hero.style.setProperty('--video-pan', interpolateKeyframes(DESKTOP_PAN, progress).toFixed(3));

    // Ease the video toward the scroll position so scrubbing feels smooth instead of steppy.
    targetTime = video.duration * progress * .999;
    displayedTime = lerp(displayedTime, targetTime, .22);
    if (Math.abs(targetTime - displayedTime) < .01) displayedTime = targetTime;
    if (!video.seeking && Math.abs(video.currentTime - displayedTime) > .02) {
      video.currentTime = displayedTime;
    }
    if (displayedTime !== targetTime) scheduleRender();
  };

  const scheduleRender = () => {
    if (frame || !hero.classList.contains('is-animated')) return;
    frame = window.requestAnimationFrame(render);
  };

  const activateIfReady = () => {
    if (
      hero.classList.contains('is-animated') ||
      motionPreference.matches ||
      video.error ||
      video.readyState < HTMLMediaElement.HAVE_CURRENT_DATA ||
      !Number.isFinite(video.duration) ||
      video.duration <= 0
    ) return;

    // Only switch to the tall scroll layout while the visitor is still at the top, to avoid a jump.
    const heroStart = hero.getBoundingClientRect().top + window.scrollY;
    if (window.scrollY > heroStart + stage.offsetHeight * .05) return;

    hero.classList.add('is-animated');
    displayedTime = video.duration * getProgress();
    scheduleRender();
  };

  const handleVideoError = () => {
    console.error('The homepage hero video failed to load; showing the static fallback.', video.error);
    showStaticFallback(true);
  };

  const handleMotionPreferenceChange = () => {
    if (motionPreference.matches) {
      showStaticFallback(true);
    } else {
      activateIfReady();
    }
  };

  const handleSeeked = () => scheduleRender();
  const handleScroll = () => {
    activateIfReady();
    scheduleRender();
  };
  const handleResize = () => scheduleRender();

  video.addEventListener('loadeddata', activateIfReady);
  video.addEventListener('canplay', activateIfReady);
  video.addEventListener('seeked', handleSeeked);
  video.addEventListener('error', handleVideoError);
  window.addEventListener('scroll', handleScroll, { passive: true });
  window.addEventListener('resize', handleResize, { passive: true });
  motionPreference.addEventListener('change', handleMotionPreferenceChange);
  document.addEventListener('astro:before-swap', () => {
    if (frame) window.cancelAnimationFrame(frame);
    root.classList.remove('hero-hides-header');
    video.removeEventListener('loadeddata', activateIfReady);
    video.removeEventListener('canplay', activateIfReady);
    video.removeEventListener('seeked', handleSeeked);
    video.removeEventListener('error', handleVideoError);
    window.removeEventListener('scroll', handleScroll);
    window.removeEventListener('resize', handleResize);
    motionPreference.removeEventListener('change', handleMotionPreferenceChange);
  }, { once: true });

  if (video.error) {
    handleVideoError();
  } else if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
    activateIfReady();
  }
};

initializeHeroVideo();
document.addEventListener('astro:page-load', initializeHeroVideo);
