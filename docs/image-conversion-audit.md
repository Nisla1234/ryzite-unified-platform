# RYZITE image conversion audit

## Scope and status

- Inventoried raster and SVG files under `public/` and `src/`.
- Found 32 raster assets: 13 PNG, 9 JPEG, and 10 WebP.
- Found 6 existing SVG assets.
- No live assets, references, layouts, or animations were changed.
- No separate conversion preview was created: the reviewed raster assets are either detailed 3D/photographic artwork or the dimensional, shaded RYZITE wordmark. Reconstructing them as SVG would introduce visible differences. No raster candidate met the brief's visual-fidelity requirement for a genuine vector conversion.
- The expected `docs/RYZITE_MASTER_REQUIREMENTS_AND_BRAND_PLAYBOOK.md` file is absent from this checkout. `AGENTS.md` and `README.md` were reviewed instead.
- Exact on-disk byte sizes could not be collected in this audit. Dimensions below are source-declared values when available, not independently measured metadata. `Not declared` means the source did not provide dimensions; those values should be measured before any format change.

## Raster asset audit

| Original file | Format | Dimensions (px) | SVG suitable? / expected fidelity | Estimated size impact and recommended action |
|---|---:|---:|---|---|
| `public/Original Logo.png` | PNG | 1080 × 1080 (declared) | No. Embossed lettering, gradients, and shadow make a faithful hand-built vector costly and risky. | Keep as raster for now; if optimizing, compare PNG with WebP/AVIF at the displayed size. Byte impact unmeasured. Used by the navbar and as the favicon/apple-touch image. |
| `public/assets/ryzite-build-idea.png` | PNG | 1536 × 1024 (declared) | No. Detailed 3D studio artwork. | Preserve as raster; test WebP/AVIF visually. Byte impact unmeasured. Used by the homepage pathway. |
| `public/assets/ryzite-construction-illustration.png` | PNG | Not declared | No. Textured line-art illustration with glow/shading; tracing would lose texture. | Preserve as raster; assess WebP/AVIF against alpha and edge quality. Byte impact unmeasured. Used by the construction page. |
| `public/assets/ryzite-footer-logo.png` | PNG | 1061 × 731 (declared) | No. Dimensional logo treatment and shadow. | Preserve as raster; compare an alpha-capable WebP/AVIF export if supported by target browsers. Byte impact unmeasured. Used in the footer. |
| `public/assets/ryzite-grow-business.png` | PNG | 1536 × 1024 (declared) | No. Detailed 3D studio artwork. | Preserve as raster; test WebP/AVIF visually. Byte impact unmeasured. Used by the homepage pathway. |
| `public/assets/ryzite-hero-studio.png` | PNG | 1536 × 1024 (declared) | No. Hand, lighting, glow, and interface render are complex raster detail. | Preserve as raster; test WebP/AVIF visually. Byte impact unmeasured. Used in the landing hero. |
| `public/assets/ryzite-logo.png` | PNG | Not declared | No. Shaded wordmark; vector reconstruction could alter letterforms and shadow. | Preserve unless confirmed unused and approved for removal; raster optimization impact unmeasured. No source reference found. |
| `public/images/hero/ry-front-plain.png` | PNG | 1180 × 1333 (declared) | No. Detailed 3D character with soft shading and transparency. | Keep PNG or compare alpha-capable WebP/AVIF. Byte impact unmeasured. Used by hero, business-challenge, and service-card compositions. |
| `public/images/hero/ry-front.png` | PNG | 1180 × 1333 (declared) | No. Detailed 3D character with lettering, shading, and transparency. | Keep PNG or compare alpha-capable WebP/AVIF. Byte impact unmeasured. No direct source reference found. |
| `public/images/hero/ry.png` | PNG | 1180 × 1333 (declared) | No. Detailed 3D character and transparent cutout. | Keep PNG or compare alpha-capable WebP/AVIF. Byte impact unmeasured. Used in the animated hero. |
| `public/images/hero/zite-front-plain.png` | PNG | 1180 × 1333 (declared) | No. Detailed 3D character with soft shading and transparency. | Keep PNG or compare alpha-capable WebP/AVIF. Byte impact unmeasured. Used by hero, business-challenge, and service-card compositions. |
| `public/images/hero/zite-front.png` | PNG | 1180 × 1333 (declared) | No. Detailed 3D character with lettering, shading, and transparency. | Keep PNG or compare alpha-capable WebP/AVIF. Byte impact unmeasured. No direct source reference found. |
| `public/images/hero/zite.png` | PNG | 1180 × 1333 (declared) | No. Detailed 3D character and transparent cutout. | Keep PNG or compare alpha-capable WebP/AVIF. Byte impact unmeasured. Used in the animated hero. |
| `public/images/solutions/online-store-development.jpeg` | JPEG | 736 × 414 (declared) | No. Detailed generated product artwork. | Keep raster; compare optimized WebP/AVIF at display dimensions. Byte impact unmeasured. Used by solution cards. |
| `public/images/solutions/custom-software.jpeg` | JPEG | 735 × 490 (declared) | No. Detailed photographic/3D-style artwork. | Keep raster; compare optimized WebP/AVIF at display dimensions. Byte impact unmeasured. Used by solution cards. |
| `public/images/solutions/mobile-app-development.jpeg` | JPEG | 735 × 490 (declared) | No. Detailed generated product artwork. | Keep raster; compare optimized WebP/AVIF at display dimensions. Byte impact unmeasured. Used by solution cards. |
| `public/images/solutions/customer-chatbots.jpeg` | JPEG | 735 × 440 (declared) | No. Detailed generated character/interface artwork. | Keep raster; compare optimized WebP/AVIF at display dimensions. Byte impact unmeasured. Used by solution cards. |
| `public/images/solutions/business-workflow-automation.jpeg` | JPEG | 735 × 490 (declared) | No. Detailed generated product artwork. | Keep raster; compare optimized WebP/AVIF at display dimensions. Byte impact unmeasured. Used by solution cards. |
| `public/images/solutions/ui-ux-design.jpeg` | JPEG | 735 × 490 (declared) | No. Detailed generated workspace/interface artwork. | Keep raster; compare optimized WebP/AVIF at display dimensions. Byte impact unmeasured. Used by solution cards. |
| `public/images/solutions/software-api-integrations.jpeg` | JPEG | 736 × 736 (declared) | No. Detailed isometric artwork. | Keep raster; compare optimized WebP/AVIF at display dimensions. Byte impact unmeasured. Used by solution cards. |
| `public/images/solutions/website-care-maintenance.jpeg` | JPEG | 735 × 490 (declared) | No. Detailed generated workspace/interface artwork. | Keep raster; compare optimized WebP/AVIF at display dimensions. Byte impact unmeasured. Used by solution cards. |
| `public/images/solutions/website-development.jpeg` | JPEG | 735 × 490 (declared) | No. Detailed generated product artwork. | Keep raster; compare optimized WebP/AVIF at display dimensions. Byte impact unmeasured. No direct source reference found; current card uses the SVG below. |
| `public/images/business-challenge.webp` | WebP | 1536 × 1024 (declared) | No. Detailed 3D still life, reflections, and lighting. | Already WebP; retain unless a measured AVIF comparison is visually equivalent. No further savings estimated. Used by the business-challenge section. |
| `public/images/solutions/automation.webp` | WebP | Not declared | No. Detailed 3D product artwork. | Already WebP; retain unless measured AVIF is visually equivalent. Not referenced in current source search. |
| `public/images/solutions/chatbots.webp` | WebP | Not declared | No. Detailed 3D character artwork. | Already WebP; retain unless measured AVIF is visually equivalent. Not referenced in current source search. |
| `public/images/solutions/design.webp` | WebP | Not declared | No. Detailed 3D product artwork. | Already WebP; retain unless measured AVIF is visually equivalent. Not referenced in current source search. |
| `public/images/solutions/integrations.webp` | WebP | Not declared | No. Detailed 3D product artwork. | Already WebP; retain unless measured AVIF is visually equivalent. Not referenced in current source search. |
| `public/images/solutions/maintenance.webp` | WebP | Not declared | No. Detailed 3D product artwork. | Already WebP; retain unless measured AVIF is visually equivalent. Not referenced in current source search. |
| `public/images/solutions/mobile.webp` | WebP | Not declared | No. Detailed 3D product artwork. | Already WebP; retain unless measured AVIF is visually equivalent. Not referenced in current source search. |
| `public/images/solutions/software.webp` | WebP | Not declared | No. Detailed 3D product artwork. | Already WebP; retain unless measured AVIF is visually equivalent. Not referenced in current source search. |
| `public/images/solutions/store.webp` | WebP | Not declared | No. Detailed 3D product artwork. | Already WebP; retain unless measured AVIF is visually equivalent. Not referenced in current source search. |
| `public/images/solutions/website.webp` | WebP | Not declared | No. Detailed 3D product artwork. | Already WebP; retain unless measured AVIF is visually equivalent. Not referenced in current source search. |

## Existing SVG assets

These are already vectors and need no conversion:

- `public/favicon.svg`
- `public/images/about-marketing-technology.svg`
- `public/images/solutions/website-development.svg` — currently used for the business website solution card.
- `src/assets/astro.svg`
- `src/assets/background.svg`
- `src/assets/logo-drawing-paths.svg`

## Recommendations before any approval-based replacement

1. Measure the actual byte size and intrinsic pixel dimensions of every raster file; some dimensions above are HTML declarations and some assets have no declaration.
2. Confirm whether the unreferenced logo and WebP solution-background files are still needed before optimizing or removing them.
3. If smaller downloads are desired, benchmark optimized WebP/AVIF variants for the detailed raster artwork and compare them at actual desktop/mobile render sizes. Keep originals until visual review and approval.
4. No site references should change unless a preview is approved. No assets were replaced or copied in this audit.
