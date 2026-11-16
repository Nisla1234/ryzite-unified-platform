# Ryzite Website

**The Official Ryzite Business Website**

A multilingual business website developed using Astro, designed to showcase Ryzite's services, communicate its development process, and provide a streamlined project enquiry experience.

The application supports English, Tamil, and Sinhala, with a content management interface powered by Sveltia CMS and deployment configured for Cloudflare.

## Overview

The Ryzite website serves as the company's digital presence, providing visitors with information about its services, business approach, and project engagement process.

Built with a component-based architecture, the project emphasizes maintainability, responsive design, reusable UI components, and multilingual content management.

## Key Features

- **Multilingual Support** – English, Tamil, and Sinhala homepage content.
- **Responsive Interface** – Layouts designed for desktop and mobile devices.
- **Service Showcase** – Dedicated sections presenting company services and capabilities.
- **Project Enquiry Form** – Client-side form validation with email application integration through `mailto:`.
- **Content Management** – Sveltia CMS integration for managing website content through GitHub.
- **Language Persistence** – Remembers visitors' selected language using browser local storage.
- **Cloudflare Deployment** – Configured with the Astro Cloudflare adapter and Wrangler.
- **Reusable Architecture** – Shared components, layouts, and organized content structures.

## Technology Stack

| Category | Technologies |
|---|---|
| Framework | Astro |
| Languages | JavaScript, HTML5, CSS3 |
| Content Management | JSON, Sveltia CMS |
| Package Manager | pnpm |
| Hosting & Deployment | Cloudflare |
| Deployment CLI | Wrangler |
| Version Control | Git, GitHub |

## Prerequisites

Ensure the following versions are installed:

- Node.js `>=22.23.4`
- pnpm `9.10.0`

Verify your environment:

```bash
node --version
pnpm --version
```

If pnpm is unavailable, enable Corepack and activate the required version:

```bash
corepack enable
corepack prepare pnpm@9.10.0 --activate
```

## Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/Ryzite/ryzite-website.git
```

### 2. Navigate to the project directory

```bash
cd ryzite-website
```

### 3. Install dependencies

```bash
pnpm install
```

### 4. Start the development server

```bash
pnpm dev
```

Open the application in your browser:

```text
http://localhost:4321
```

Press `Ctrl + C` to stop the development server.

## Available Scripts

| Command | Description |
|---|---|
| `pnpm install` | Install project dependencies. |
| `pnpm dev` | Start the local development server. |
| `pnpm build` | Generate the production build in `dist/`. |
| `pnpm preview` | Preview the production build locally. |
| `pnpm astro <command>` | Execute Astro CLI commands, such as `astro check` when the required integration is available. |
| `pnpm generate-types` | Generate Cloudflare Worker types using Wrangler. |

### Production Build

```bash
pnpm build
pnpm preview
```

Run the build command before starting the production preview.

## Project Structure

```text
ryzite-website/
│
├── public/
│   ├── admin/                 # Sveltia CMS entry point and configuration
│   └── assets/                # Public images and uploaded media
│
├── src/
│   ├── assets/                # Imported application assets
│   ├── components/            # Reusable UI components
│   ├── data/                  # Multilingual content
│   │   ├── en.json             # English
│   │   ├── ta.json             # Tamil
│   │   └── si.json             # Sinhala
│   ├── layouts/               # Shared page layouts and metadata
│   ├── pages/                 # Astro routes and pages
│   ├── scripts/               # Client-side functionality
│   └── styles/                # Global and component styles
│
├── astro.config.mjs           # Astro and Cloudflare configuration
├── wrangler.jsonc             # Cloudflare Worker configuration
├── package.json               # Dependencies and scripts
├── pnpm-lock.yaml             # Dependency lockfile
└── README.md
```

## Application Routes

Astro generates routes based on the file structure inside `src/pages/`.

| Route Source | Description |
|---|---|
| `src/pages/index.astro` | Main landing page |
| `src/pages/services/` | Service-related pages |
| `src/pages/insights/` | Insights-related pages |
| `src/pages/work/` | Work and portfolio-related pages |

Some secondary routes use a shared construction-page component. Refer to the individual route implementation for its current content and functionality.

## Multilingual Content Management

Homepage content is maintained in JSON files:

| File | Language |
|---|---|
| `src/data/en.json` | English |
| `src/data/ta.json` | Tamil |
| `src/data/si.json` | Sinhala |

English is the default language. Visitors can switch between available languages, and their preference is persisted using browser local storage.

**Development guideline:** Maintain consistent content structures across all three language files whenever homepage content is modified.

## Content Management System

The project integrates **Sveltia CMS** for browser-based content management.

**CMS URL:**

```text
/admin/
```

**Configuration:**

```text
public/admin/config.yml
```

The CMS is configured to use:

- Repository: `Ryzite/ryzite-website`
- Publishing branch: `main`

Editing and publishing require the configured GitHub authentication and appropriate repository permissions.

Localized homepage content is maintained in `src/data/`. Review changes in the application before publishing.

## Contact Form

The project enquiry form currently provides:

- Browser-side validation of required fields.
- Email preparation using the `mailto:` mechanism.
- Integration with the visitor's default email application.

**Implementation note:** The current form does not use a backend API, persist enquiries, or verify successful email delivery.

## Cloudflare Deployment

The application is configured for Cloudflare using the Astro Cloudflare adapter and Wrangler.

### Deployment Requirements

- An active Cloudflare account.
- Wrangler authentication.
- Correct Cloudflare account and project configuration.

### Build and Deploy

```bash
pnpm build
pnpm exec wrangler deploy
```

### Generate Cloudflare Types

After modifying Cloudflare bindings, regenerate Worker types:

```bash
pnpm generate-types
```

## Development Guidelines

When contributing to the project:

1. Implement route and layout changes within `src/pages/` and `src/layouts/`.
2. Maintain reusable UI components within `src/components/`.
3. Organize styles within `src/styles/`.
4. Keep English, Tamil, and Sinhala homepage content synchronized.
5. Preserve existing functionality when introducing changes.
6. Verify responsive behaviour across desktop and mobile screen sizes.
7. Consider keyboard accessibility and reduced-motion preferences when modifying UI interactions.

## Build Verification

There is currently no automated test script configured in `package.json`.

Run the production build as the minimum verification step:

```bash
pnpm build
```

Review the affected pages and confirm that the production build completes successfully before submitting changes.

## Deployment Configuration

| Configuration | File |
|---|---|
| Astro Application | `astro.config.mjs` |
| Cloudflare Worker | `wrangler.jsonc` |
| Package Management | `package.json` |
| CMS Configuration | `public/admin/config.yml` |

---

**Repository:** [Ryzite/ryzite-website](https://github.com/Ryzite/ryzite-website)

**Framework:** Astro  
**Deployment:** Cloudflare  
**Content Management:** Sveltia CMS

*Developed for Ryzite.*
