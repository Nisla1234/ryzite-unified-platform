# Repository Guidelines

## Project Structure & Module Organization

This is an Astro 7 site targeting Cloudflare. Routes live in `src/pages/`, page chrome in `src/layouts/`, and reusable UI in `src/components/`. Put imported assets in `src/assets/` and stable-URL files in `public/`. Requirements and decisions belong in `docs/RYZITE_MASTER_REQUIREMENTS_AND_BRAND_PLAYBOOK.md`.

## Requirements, Brand & Approval Gates

Read the entire master playbook before changing the site. Preserve `[CLIENT]`, `[BASELINE]`, `[PROPOSAL]`, `[UNVERIFIED]`, and `[OPEN]`; proposals are not approvals. Never invent projects, testimonials, metrics, guarantees, credentials, prices, contacts, or form success.

Use business-first copy for nontechnical buyers. Keep “Grow my business” and “Build my idea” visible, with `Get a Quote` primary. The Connected Engine/Signal Path, tokens, routes, and draft copy remain proposals. Hide Work or Testimonials without approved evidence.

## Build, Test & Development Commands

- `pnpm install` — install the locked dependencies; use Node `>=22.23.4` and pnpm `9.10.0`.
- `pnpm exec astro dev --background` — start development. Manage it with `astro dev status`, `logs`, or `stop`.
- `pnpm build` — create the production build and catch integration errors.
- `pnpm preview` — inspect the built site locally.
- `pnpm generate-types` — refresh Cloudflare Wrangler types after binding changes.

No automated test runner is configured yet. Treat `pnpm build` as the minimum check.

## Coding Style & Naming Conventions

Use TypeScript/ES modules, semantic HTML, reusable Astro components, and minimal client JavaScript. Use four-space JSON and two-space Astro/CSS indentation. Name components `PascalCase.astro`, routes/files lowercase kebab-case, and variables/functions `camelCase`. Centralize design and motion values in tokens or CSS custom properties.

## Testing Guidelines

Review changed pages in a real browser at mobile and desktop widths. Check keyboard use, focus, headings, form errors, overflow, and `prefers-reduced-motion`. Content must work without animation. Count a quote only after backend-confirmed persistence/delivery; `/thank-you/` alone cannot imply submission.

## Commit & Pull Request Guidelines

History mixes plain messages and Conventional Commits; prefer `feat:`, `fix:`, `docs:`, or `chore:` plus an imperative summary. PRs must name the requirement and approval status, list checks, include visual screenshots, note accessibility/motion impact and open decisions, and identify the next small task.

## Security & Release Safety

Keep secrets and enquiry data out of source, static builds, URLs, logs, and analytics. Forms require server validation and abuse protection. Do not publish claims, tracking, legal text, proof, routes, or brand identity without review.
