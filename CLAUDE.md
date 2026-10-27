# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Artpay** — a Next.js App Router site (marketing + SaaS platform) offering installment payment solutions for the fine art market (auction houses, galleries, art fairs, e-commerce). The UI is Italian-language.

## Commands

```bash
bun install          # Install dependencies
bun run dev          # Start dev server with Turbopack (http://localhost:3000)
bun run build        # Production build
bun run start        # Serve production build
bun run lint         # Next.js ESLint
```

## Architecture

**Routing**: Next.js App Router (`src/app/` directory). Each `src/app/*/page.tsx` is a server component that:
1. Exports `metadata` (title, description, OG, Twitter, canonical, robots) via `buildMetadata()` from `src/lib/metadata.ts`
2. Optionally renders a `<script type="application/ld+json">` for JSON-LD structured data
3. Imports and renders the actual page component from `src/views/`

**Page components** live in `src/views/` and `src/views/solutions/`. Most are `"use client"` components (they use hooks or interactive UI). Server-side SEO metadata lives only in the `src/app/*/page.tsx` route files.

**Important**: Next.js treats `src/pages/` as the Pages Router directory. Page view components must live in `src/views/` (not `src/pages/`) to avoid being treated as routes.

**Component layers:**
- `src/components/ui/` — shadcn/ui primitives (don't edit directly)
- `src/components/sections/` — layout primitives (`Section`, `Container`, `Heading`, `PageHero`, `CtaRow`, `FinalCta`, `FastShowcase`)
- `src/components/` root — feature/business components (`Navbar`, `Footer`, `Layout`, etc.)

**Providers**: `app/providers.tsx` wraps the app with `QueryClientProvider`, `TooltipProvider`, and toast providers. It's `"use client"`.

**Layout**: `app/layout.tsx` → `app/providers.tsx` → `src/components/layout/Layout.tsx` (Navbar + content + RibbonFlow + Footer).

**Styling**: Tailwind CSS with an extended custom palette (electric iris, lumen violet, midnight ink, etc.) in `tailwind.config.ts`. CSS variables for theming in `app/globals.css`. Use `cn()` from `src/lib/utils.ts`.

**SEO utilities**: `src/lib/metadata.ts` exports `buildMetadata()`, `breadcrumbLd()`, and `SITE` constant. Each `app/*/page.tsx` imports from here to build its `metadata` export.

**Sitemap**: `app/sitemap.ts` generates `sitemap.xml` automatically at build time (replaces the old `scripts/generate-sitemap.ts`).

**Forms**: `react-hook-form` + `zod` for validation.

**Data fetching**: `@tanstack/react-query` (TanStack Query v5).

**Assets**: Images referenced via `.asset.json` sidecar files in `src/assets/` (Lovable CDN, URL in `.url` property). One direct PNG import in `Partner.tsx` uses `(conformita as { src: string }).src`.

## Path Alias

`@/*` resolves to `src/*` — use this in all imports.

## Key Conventions

- `bun` / `bunx` is the package manager.
- TypeScript strict mode is **off** — avoid adding overly strict type assertions.
- New shadcn/ui components: `bunx shadcn@latest add <component>` (reads `components.json`).
- Links use `next/link` with `href` prop (not `react-router-dom` `to` prop).
- Navigation hooks: use `usePathname` / `useRouter` from `next/navigation` (not react-router hooks).
- Add `"use client"` to any component that uses React hooks, event handlers, or browser APIs.