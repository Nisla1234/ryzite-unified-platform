# RYZITE Master Requirements and Brand Playbook

> **Status: DRAFT — pending client approval (prepared 2026-11-18).**
> Until the approval log at the end is signed off, this file is a review draft, not the official
> playbook. It was compiled only from existing project sources (listed in §1). Nothing here adds
> new business requirements. Conflicts and gaps are listed as `[OPEN]` in §14 for a decision.

## 0. How to read this document

Status tags (defined in `AGENTS.md`; must be preserved wherever they appear):

| Tag | Meaning |
| --- | --- |
| `[CLIENT]` | Stated or supplied by the client. |
| `[BASELINE]` | Existing, agreed project rule or established implementation. |
| `[PROPOSAL]` | Suggested by the team; **not** approved. Proposals are not approvals. |
| `[UNVERIFIED]` | Present in the project but not yet confirmed (facts, rights, data). |
| `[OPEN]` | Needs a client decision before launch. |

## 1. Sources used

- `AGENTS.md` (repository guidelines)
- `README.md`
- `docs/homepage-sections.md`, `docs/hero-assets.md`, `docs/business-challenge-image.md`, `docs/solution-backgrounds.md`
- Status comments in `src/` (`[PROPOSAL]`, `[OPEN]`, `[UNVERIFIED]` tags)
- `src/styles/tokens.css`, `src/styles/home-sections.css`, `package.json`
- Client briefs given in the build session on 2026-11-18 (marked `[CLIENT]`)

## 2. Business and audience

- `[BASELINE]` RYZITE is a digital marketing and technology business; the website presents its
  services, how it works, and a project enquiry route (`README.md`).
- `[BASELINE]` Two pathways: **Grow my business** (marketing) and **Build my idea** (technology).
- `[BASELINE]` Write business-first copy for **nontechnical buyers** (`AGENTS.md`).
- `[OPEN]` Target markets, locations served, and company facts (registration, team, years
  active) are not documented anywhere in the project.

## 3. Brand identity

### 3.1 Name and logo

- `[BASELINE]` Name is written **RYZITE** in UI copy.
- `[BASELINE]` Logo files in use: `public/images/ryzite-logo.webp` (header), `public/assets/ryzite-footer-logo.webp`,
  `public/Original Logo.png` (favicon / touch icon). `public/images/hero/ryzite-wordmark.png` is a
  crop of the header logo used on hero slide 1 `[CLIENT]` (requested 2026-11-18).
- `[OPEN]` No logo usage rules exist (clear space, minimum size, backgrounds, do/don't).

### 3.2 Typography

- `[BASELINE]` **Fira Sans** for all English text (400/500/600/700); Tamil and Sinhala fall back to
  **Noto Sans Tamil** / **Noto Sans Sinhala** (`tokens.css`).
- `[BASELINE]` **Fira Sans Extra Condensed** (700) for condensed display titles (process steps, FAQ title,
  footer wordmark).
- `[BASELINE]` All web fonts are SIL Open Font License 1.1; licence files and copyright notices are kept in
  `licenses/fonts/`. Add one there for every new font family.
- `[BASELINE]` One shared type scale in `tokens.css` (`--size-hero`, `--size-h1` … `--size-eyebrow`).

### 3.3 Colour

The project currently contains **three different blue sets** and a legacy palette:

| Source | Values | Status |
| --- | --- | --- |
| Client briefs, 2026-11-18; `home-sections.css` | Royal `#0655E9`, Deep `#0643CF`, Light/Cyan `#078BE9`, white, pale blue | `[CLIENT]` stated as "existing brand palette" |
| Hero / header / Business Challenge | `#064BED`, ink `#0A1734`, muted `#465771`, CTA gradient `#008AFF → #063DF3` | `[BASELINE]` in code |
| `PackagesPreview.astro` | "Logo blues" navy `#0A1080`, royal `#2840C8`, azure `#2078F0` | `[PROPOSAL]` |
| `tokens.css` | ink, paper `#FAF8F4`, lime `#C9FF57`, lilac `#D3B8FF` | `[BASELINE]` tokens; lime/lilac unused on homepage |

- `[CLIENT]` **Approved 2026-11-18 for the Trust Principles section only:** Royal Blue `#0655E9`,
  Deep Blue `#0643CF`, Light Blue `#078BE9`. This does not change the Hero, Header, Packages,
  buttons, or global colour tokens.
- `[OPEN]` Confirm one official site-wide palette and retire the others (§14).

### 3.4 Tone and messaging

- `[BASELINE]` Plain, business-first language; no jargon aimed at technical buyers.
- `[PROPOSAL]` The "Connected Engine / Signal Path" concept, design tokens, routes, and draft copy
  remain proposals (`AGENTS.md`).
- `[PROPOSAL]` Hero scene copy ("Grow Beyond Digital.", "Smarter Solutions. Stronger Business.",
  "Let's Build Something Great.") — supplied by the client 2026-11-18 `[CLIENT]`, still draft copy.

## 4. Calls to action

- `[BASELINE]` Keep **Grow my business** and **Build my idea** visible, with **Get a Quote** as the
  primary CTA (`AGENTS.md`).
- `[OPEN]` Current site differs: the header button reads **Start a Project**, and the hero CTAs are
  **Explore Solutions / View Services / Let's Talk** `[CLIENT]`. Get a Quote is not the primary
  CTA on the homepage today.

## 5. Content integrity rules

- `[BASELINE]` Never invent projects, testimonials, metrics, guarantees, credentials, prices,
  contacts, or form success (`AGENTS.md`).
- `[BASELINE]` Hide **Work** and **Testimonials** until approved evidence exists.
- `[BASELINE]` No payment amounts, percentages, schedules, deadlines, prices, or delivery
  timelines until approved (`docs/homepage-sections.md`).
- `[BASELINE]` Reviews: a platform card shows only with a confirmed official profile URL; ratings
  and counts copied from the live profile with a `checkedOn` date; quotes must be real and linked;
  no scraping or unofficial APIs (`src/data/reviews.ts`).
- `[BASELINE]` Trust points describe the working approach on `/how-we-work`; they are not
  guarantees (`TrustPrinciples.astro`).

## 6. Languages

- `[BASELINE]` English (default), Tamil, Sinhala; the visitor's choice persists in local storage.
- `[BASELINE]` Keep the three languages structurally in sync.
- `[OPEN]` All Tamil and Sinhala copy for new sections needs native-speaker review before launch.

## 7. Site structure

### 7.1 Routes in the codebase

`/`, `/about`, `/about-us`, `/services`, `/services/[slug]`, `/solutions`, `/solutions/[slug]`,
`/packages`, `/how-we-work`, `/articles`, `/our-work`, `/contact`, `/thank-you`; review pages
`/preview/idea-to-solution` and `/preview/client-reviews` (noindex, unlinked).

- `[OPEN]` `/about` and `/about-us` both exist; `/our-work` conflicts with "hide Work without
  evidence". `README.md` lists `src/pages/insights/` and `src/pages/work/`, which do not exist.

### 7.2 Homepage order

`[BASELINE]` Fixed by the homepage brief; no major sections added between these without approval
(`docs/homepage-sections.md`):

1. Hero — scroll-scrubbed video hero `[PROPOSAL]` (replaced the earlier hero, 2026-11-18)
2. Business Challenge
3. Visitor Needs
4. Two Divisions `[PROPOSAL]`
5–6. Marketing Services, Technology Solutions
7. Branding Scene `[PROPOSAL]`
8. One Connected Plan `[PROPOSAL]` (Idea Story planned inside it, preview only)
9. Packages `[PROPOSAL]`, no prices
10. Payment Options `[OPEN]` overview only
11. How We Work
12. Trust `[PROPOSAL]`, with Client Reviews subsection below it
13. FAQs `[PROPOSAL]`
~~14. Closing Invitation~~ — removed from the homepage at the client's request (2026-11-18)

## 8. Enquiries and forms

- `[BASELINE]` Forms require **server validation and abuse protection** (`AGENTS.md`).
- `[BASELINE]` Count a quote only after backend-confirmed persistence/delivery; `/thank-you/`
  alone cannot imply submission.
- `[OPEN]` Current contact form uses `mailto:` with browser-only validation and no backend
  (`README.md`) — this does not meet the rules above.

## 9. Security and release safety

- `[BASELINE]` Keep secrets and enquiry data out of source, static builds, URLs, logs, analytics.
- `[BASELINE]` Do not publish claims, tracking, legal text, proof, routes, or brand identity
  without review.
- `[OPEN]` No approved analytics/tracking, privacy policy, or legal text is documented.

## 10. Accessibility and motion

- `[BASELINE]` Semantic HTML; check keyboard use, focus, headings, form errors, overflow.
- `[BASELINE]` Respect `prefers-reduced-motion`; content must work without animation or JavaScript.
- `[BASELINE]` Review changed pages in a real browser at mobile and desktop widths.

## 11. Design system and implementation

- `[BASELINE]` Astro 7 on Cloudflare; TypeScript/ES modules; minimal client JavaScript; GSAP is
  the existing animation library.
- `[BASELINE]` Centralise design and motion values in tokens / CSS custom properties.
- `[BASELINE]` Shared homepage styles `src/styles/home-sections.css` (`hs-*`); shared scroll reveal
  `src/scripts/home-reveal.ts` (`data-hs-reveal`, `data-hs-delay`).
- `[BASELINE]` Naming: `PascalCase.astro` components, kebab-case routes/files, camelCase code;
  four-space JSON, two-space Astro/CSS.
- `[BASELINE]` Minimum check: `pnpm build` (no automated test runner yet).

## 12. Pull requests

- `[BASELINE]` Prefer `feat:` / `fix:` / `docs:` / `chore:` commit prefixes. PRs name the requirement
  and approval status, list checks, include screenshots, note accessibility/motion impact and open
  decisions, and identify the next small task.

## 13. Asset rights register

| Asset | Status |
| --- | --- |
| Hero video `Novu_London_fashion_landing_page_b5275c3a.mp4` (1280×720) | `[UNVERIFIED]` source and rights |
| Payment step images (`public/images/payments/`) — handshake carries a "pngtree" watermark | `[UNVERIFIED]` rights |
| Visitor Needs covers — two carry a third-party "REN" mark | `[OPEN]` rights |
| Offerings covers (first three), Connected Plan icons | `[OPEN]` rights |
| Review platform marks (simplified SVGs) | `[UNVERIFIED]` replace with official brand assets |
| Generated images (Business Challenge, solution backgrounds, robots) | `[BASELINE]` prompts recorded in `docs/` |

## 14. Open decisions needing approval

1. **Official site-wide colour palette** — choose between the sets in §3.3 (Trust Principles
   colours already approved; scope limited to that section).
2. **Primary CTA** — Get a Quote vs. Start a Project vs. hero CTAs (§4).
3. **Logo usage rules** (§3.1).
4. **Business facts** — markets served, company details, contact details to publish (§2).
5. **Work / Our Work route** — hide until evidence, or approve content (§7.1).
6. **Duplicate About routes** — `/about` vs `/about-us` (§7.1).
7. **Enquiry backend** — replace `mailto:` with server-validated, abuse-protected submission (§8).
8. **Analytics, privacy policy, legal text** (§9).
9. **Asset rights** for every item in §13.
10. **Native-speaker review** of Tamil and Sinhala (§6).
11. **Approval of all `[PROPOSAL]` copy and sections** (§3.4, §7.2), including the video hero.
12. **README corrections** — routes and content-file locations are out of date (§7.1).

## 15. Approval log

| Date | Item | Decision | Approved by |
| --- | --- | --- | --- |
| 2026-11-18 | Trust Principles colours `#0655E9`, `#0643CF`, `#078BE9` | Approved for Trust Principles section only | Client |
| 2026-11-18 | How We Work "winding road" layout in `#0655E9`, `#0643CF`, `#078BE9` | Client instructed to build (section scope only; layout `[PROPOSAL]`) | Client |
| — | This playbook (draft) | Pending | — |
