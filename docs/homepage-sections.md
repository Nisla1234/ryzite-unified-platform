# Homepage sections

Order is fixed by the homepage brief. Do not add major sections between these without approval.

| # | Section | Component | Content source | Status |
| --- | --- | --- | --- | --- |
| 1 | Hero | `Hero.astro` | `home-translations.ts` | Existing |
| 2 | Business Challenge | `BusinessChallenge.astro` | `home-translations.ts` | Existing |
| 3 | Visitor Needs | `VisitorNeeds.astro` | `home-translations.ts` | Existing |
| 4 | Two Divisions | `HomeDivisions.astro` | `home-sections-translations.ts` | [PROPOSAL] copy; replaces AboutPreview on the homepage |
| 5–6 | Marketing Services, Technology Solutions | `Offerings.astro` | offerings data | Existing |
| 7 | Branding Scene | `BrandingScene.astro` | `home-sections-translations.ts` | [PROPOSAL] copy; CTA → `/services/branding-and-logo-design` |
| 8 | One Connected Plan | `ConnectedPlan.astro` | `home-sections-translations.ts` | [PROPOSAL] copy |
| 9 | Packages | `PackagesPreview.astro` | `resources-translations.ts` package cards | [PROPOSAL] options, no prices published |
| 10 | Payment Options | `PaymentOptions.astro` | `home-sections-translations.ts` | [OPEN] general overview only; not a confirmed payment policy |
| 11 | How We Work | `ProcessPreview.astro` | `resources-translations.ts` process steps (six steps, same as `/how-we-work`) | Existing process |
| 12 | Trust | `TrustPrinciples.astro` | `home-sections-translations.ts` | [PROPOSAL] copy |
| 13 | FAQs | `HomeFaq.astro` | `home-sections-translations.ts` | [PROPOSAL] answers; timeline and payment answers are non-committal |
| 14 | Closing Invitation | `ClosingInvitation.astro` | `home-sections-translations.ts` | [PROPOSAL] copy |

## In review (not on the homepage)

- `IdeaStory.astro` + `IdeaStoryScene.astro` + `src/scripts/idea-story.ts`: [PROPOSAL] "From Idea to Solution" scroll-scrubbed GSAP/SVG story (four scenes, pinned). Approved to be placed inside One Connected Plan (section 8), not as a new section. Review page: `/preview/idea-to-solution` (noindex, unlinked). Captions in `idea-story-translations.ts`; English approved as draft copy, Tamil and Sinhala need native-speaker review. Do not add to `index.astro` until the client approves the preview.

## Hidden from the homepage

- `AboutPreview.astro`: replaced by Two Divisions. Kept for possible reuse.
- `ReviewsTrust.astro`: Client Reviews subsection rendered inside Trust (12), below the trust points. It renders nothing until an official profile URL is confirmed in `src/data/reviews.ts`; ratings, counts, and quotes show only when verified values are entered there. Design review page: `/preview/client-reviews` (noindex, unlinked).

## Rules for these sections

- Never add payment amounts, percentages, schedules, deadlines, prices, or delivery timelines until they are approved.
- Package cards and process steps are read from `resources-translations.ts`; edit them there so `/packages`, `/how-we-work`, and the homepage stay in sync.
- Shared styles: `src/styles/home-sections.css` (`hs-*` classes). Shared reveal motion: `src/scripts/home-reveal.ts` (`data-hs-reveal`, `data-hs-delay`). The reveal waits for the hero intro and is skipped with `prefers-reduced-motion`.
- Tamil and Sinhala copy for the new sections needs native-speaker review before launch.
