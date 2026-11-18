// "Winding road" for the homepage How We Work section. Builds a smooth path through the step badges, then draws it as the visitor scrolls and marks each step
// as reached when the line arrives. Without JavaScript or with reduced motion, the full road and all
// captions stay visible.

type Point = { x: number; y: number };
type Anchor = Point & { key?: number };

const clamp01 = (value: number) => Math.min(1, Math.max(0, value));

// Catmull–Rom spline through the points, returned as one cubic Bézier segment per pair.
const splineSegments = (points: Point[]) => {
  const segments: string[] = [];
  for (let i = 0; i < points.length - 1; i += 1) {
    const p0 = points[i - 1] ?? points[i];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[i + 2] ?? p2;
    const c1 = { x: p1.x + (p2.x - p0.x) / 6, y: p1.y + (p2.y - p0.y) / 6 };
    const c2 = { x: p2.x - (p3.x - p1.x) / 6, y: p2.y - (p3.y - p1.y) / 6 };
    segments.push(`C${c1.x.toFixed(1)},${c1.y.toFixed(1)} ${c2.x.toFixed(1)},${c2.y.toFixed(1)} ${p2.x.toFixed(1)},${p2.y.toFixed(1)}`);
  }
  return segments;
};

// Wave: one S-curve per pair, leaving and entering every point vertically, so points that
// alternate left and right read as the crests of a regular wave.
const waveSegments = (points: Point[]) => points.slice(1).map((p2, i) => {
  const p1 = points[i];
  const d = (p2.y - p1.y) * .55;
  return `C${p1.x.toFixed(1)},${(p1.y + d).toFixed(1)} ${p2.x.toFixed(1)},${(p2.y - d).toFixed(1)} ${p2.x.toFixed(1)},${p2.y.toFixed(1)}`;
});

const initializeProcessRoad = () => {
  const section = document.querySelector<HTMLElement>('[data-process-road]');
  if (!section || section.dataset.roadInitialized) return;
  const road = section.querySelector<HTMLElement>('.process-road');
  const svg = section.querySelector<SVGSVGElement>('.process-road__line');
  const track = section.querySelector<SVGPathElement>('.process-road__track');
  const drawn = section.querySelector<SVGPathElement>('.process-road__drawn');
  const measure = section.querySelector<SVGPathElement>('.process-road__measure');
  const steps = [...section.querySelectorAll<HTMLElement>('[data-road-step]')];
  const knobs = [...section.querySelectorAll<SVGGElement>('.process-road__knob')];
  if (!road || !svg || !track || !drawn || !measure || !steps.length) return;
  section.dataset.roadInitialized = 'true';

  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const wide = window.matchMedia('(min-width: 900px)');
  // Path length (0–1) and y position of the start, each badge, and the end.
  let keys: { y: number; at: number }[] = [];
  let frame = 0;

  const build = () => {
    const box = road.getBoundingClientRect();
    const width = box.width;
    const height = box.height;
    svg.setAttribute('viewBox', `0 0 ${width.toFixed(0)} ${height.toFixed(0)}`);

    // Line each caption pill up under its step name.
    steps.forEach((step) => {
      const name = step.querySelector<HTMLElement>('h3');
      if (name) step.style.setProperty('--pill-x', `${(name.getBoundingClientRect().left - step.getBoundingClientRect().left).toFixed(0)}px`);
    });

    const badges: Point[] = steps.map((step) => {
      const rect = step.querySelector<HTMLElement>('[data-road-badge]')!.getBoundingClientRect();
      return { x: rect.left + rect.width / 2 - box.left, y: rect.top + rect.height / 2 - box.top };
    });

    const anchors: Anchor[] = [];
    if (wide.matches) {
      // Start at a knob on the top-right edge, like a road unrolling from a spool.
      anchors.push({ x: width - 14, y: 0, key: -1 });
      badges.forEach((badge, index) => anchors.push({ ...badge, key: index }));
      // Finish by sweeping down to a knob on the bottom-left edge.
      anchors.push({ x: 16, y: height - 14, key: -2 });
    } else {
      // Narrow screens: a gentle wave down the badge column.
      anchors.push({ x: badges[0].x, y: -10, key: -1 });
      badges.forEach((badge, index) => {
        anchors.push({ ...badge, key: index });
        const next = badges[index + 1];
        if (next) anchors.push({ x: badge.x + (index % 2 ? -14 : 14), y: (badge.y + next.y) / 2 });
      });
      const last = badges[badges.length - 1];
      anchors.push({ x: last.x, y: height + 10, key: -2 });
    }

    const segments = wide.matches ? waveSegments(anchors) : splineSegments(anchors);
    const start = `M${anchors[0].x.toFixed(1)},${anchors[0].y.toFixed(1)}`;
    const full = `${start} ${segments.join(' ')}`;
    track.setAttribute('d', full);
    drawn.setAttribute('d', full);

    // Measure the length up to each key anchor so drawing can follow scroll position.
    measure.setAttribute('d', full);
    const total = measure.getTotalLength() || 1;
    keys = [];
    anchors.forEach((anchor, index) => {
      if (anchor.key === undefined) return;
      measure.setAttribute('d', `${start} ${segments.slice(0, index).join(' ')}`);
      const length = index === 0 ? 0 : measure.getTotalLength();
      keys.push({ y: anchor.y, at: length / total });
    });
    measure.setAttribute('d', '');

    // Knobs at both ends of the road (desktop only); each shadow falls toward the page edge.
    const roadWidth = parseFloat(getComputedStyle(section).getPropertyValue('--road-width')) || 20;
    const ends = [anchors[0], anchors[anchors.length - 1]];
    knobs.forEach((knob, knobIndex) => {
      const end = ends[knobIndex];
      const side = knobIndex === 0 ? 1 : -1;
      [knob.querySelector('.process-road__knob-shadow'), knob.querySelector('.process-road__knob-cap')].forEach((part, index) => {
        if (!part || !end) return;
        const visible = wide.matches;
        part.setAttribute('cx', (end.x + (index ? 0 : side * roadWidth * .22)).toFixed(1));
        part.setAttribute('cy', (end.y + (index ? 0 : roadWidth * .18)).toFixed(1));
        part.setAttribute('rx', visible ? (roadWidth * .85).toFixed(1) : '0');
        part.setAttribute('ry', visible ? (roadWidth * 1.15).toFixed(1) : '0');
      });
    });
  };

  const render = () => {
    frame = 0;
    if (motion.matches) {
      drawn.style.setProperty('--road-offset', '0');
      steps.forEach((step) => step.classList.add('is-reached'));
      return;
    }

    // The drawing tip follows a line 62% down the viewport.
    const tipY = window.innerHeight * .62 - road.getBoundingClientRect().top;
    let progress = 0;
    for (let i = 0; i < keys.length - 1; i += 1) {
      const from = keys[i];
      const to = keys[i + 1];
      if (tipY >= to.y) {
        progress = to.at;
        continue;
      }
      if (tipY > from.y) progress = from.at + (to.at - from.at) * clamp01((tipY - from.y) / (to.y - from.y || 1));
      break;
    }

    drawn.style.setProperty('--road-offset', (1 - progress).toFixed(4));
    // keys[0] is the start; keys[1..n] are the badges.
    steps.forEach((step, index) => step.classList.toggle('is-reached', progress >= keys[index + 1].at - .002));
  };

  const schedule = () => {
    if (!frame) frame = window.requestAnimationFrame(render);
  };

  const rebuild = () => {
    build();
    schedule();
  };

  section.classList.add('is-road-ready');
  rebuild();

  const resizeObserver = new ResizeObserver(rebuild);
  resizeObserver.observe(road);
  window.addEventListener('scroll', schedule, { passive: true });
  wide.addEventListener('change', rebuild);
  motion.addEventListener('change', schedule);
  document.fonts?.ready.then(rebuild);

  document.addEventListener('astro:before-swap', () => {
    if (frame) window.cancelAnimationFrame(frame);
    resizeObserver.disconnect();
    window.removeEventListener('scroll', schedule);
    wide.removeEventListener('change', rebuild);
    motion.removeEventListener('change', schedule);
  }, { once: true });
};

initializeProcessRoad();
document.addEventListener('astro:page-load', initializeProcessRoad);
