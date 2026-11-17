// Geometry for the glassy ribbon behind the homepage hero robots.
// Shared by the server render (first frame, no JavaScript needed) and the client animation.
// Coordinates are in the hero SVG's 1440 × 680 viewBox.

export interface RibbonConfig {
  /** Resting height of the ribbon's centre line at the edges. */
  base: number;
  /** How far the centre line rises in the middle, under the CTA. */
  rise: number;
  /** Width of that central rise. */
  spread: number;
  /** Height and wavelength of the travelling ripple. */
  ripple: number;
  rippleLength: number;
  /** Maximum half-thickness and wavelength of the twist. */
  twist: number;
  twistLength: number;
  /** Phase offset so the two ribbons never line up. */
  offset: number;
  /** Direction the ripples travel: 1 = left to right, -1 = right to left. */
  direction: 1 | -1;
}

export const ribbons: RibbonConfig[] = [
  // Back ribbon: lighter and slimmer, flowing the other way for depth.
  { base: 585, rise: 95, spread: 460, ripple: 30, rippleLength: 1300, twist: 46, twistLength: 1040, offset: 1.9, direction: -1 },
  // Front glass ribbon.
  { base: 615, rise: 130, spread: 390, ripple: 38, rippleLength: 1150, twist: 66, twistLength: 860, offset: 0, direction: 1 },
];

/** Horizontal size of one repeat of the moving reflection gradient. */
export const reflectionLength = 760;

const startX = -120;
const endX = 1560;
const step = 12;
const tau = Math.PI * 2;

const point = (x: number, y: number) => `${x.toFixed(1)} ${y.toFixed(1)}`;

/**
 * Builds the ribbon outline for a given phase (0 → 2π loops seamlessly, because every
 * time term uses a whole-number multiple of the phase).
 */
export const buildRibbon = (config: RibbonConfig, phase: number) => {
  const { base, rise, spread, ripple, rippleLength, twist, twistLength, offset, direction } = config;
  const top: string[] = [];
  const bottom: string[] = [];
  for (let x = startX; x <= endX; x += step) {
    const crest = Math.exp(-(((x - 720) / spread) ** 2));
    const centre = base - rise * crest
      + ripple * Math.sin((tau * x) / rippleLength - phase * direction + offset)
      + ripple * .35 * Math.sin((tau * x) / (rippleLength * .43) + phase * 2 * direction);
    // Half-thickness dips below zero now and then, so the edges cross and the band reads as a twist.
    const half = twist * (.3 + .7 * Math.sin((tau * x) / twistLength - phase * direction + offset * 1.7));
    top.push(point(x, centre - half));
    bottom.push(point(x, centre + half));
  }
  const topEdge = `M${top.join('L')}`;
  return {
    body: `${topEdge}L${bottom.reverse().join('L')}Z`,
    topEdge,
    bottomEdge: `M${bottom.join('L')}`,
  };
};

/** Shift for the reflection gradient so the highlights slide along with the flow. */
export const reflectionShift = (config: RibbonConfig, phase: number) => (phase / tau) * reflectionLength * config.direction;
