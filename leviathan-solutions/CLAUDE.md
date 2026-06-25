# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # start dev server at localhost:3000
npm run build     # production build
npm run lint      # ESLint
npm test          # run all tests (Vitest, watch mode)
npm test -- --run # run tests once (CI mode)
```

Run a single test file:
```bash
npm test -- tests/components/Navbar.test.tsx --run
```

## Architecture

### Route groups

The app uses Next.js App Router with two layout groups that share no UI:

- `app/(public)/` — unauthenticated pages (home, login, signup, preview). No navbar.
- `app/(dashboard)/` — authenticated pages (`/heists`, `/heists/create`, `/heists/[id]`). Wraps every page with `<Navbar />`.

The parentheses in the folder names are Next.js route group syntax — they don't appear in URLs.

### Styling system

Tailwind CSS v4 is configured via PostCSS (`postcss.config.mjs`). Global theme tokens are defined in `app/globals.css` using the `@theme` block:

- **Colors**: `primary` (#C27AFF purple), `secondary` (#FB64B6 pink), `dark`/`light`/`lighter` (dark bg scale), `success`, `error`, `heading`, `body`
- **Font**: Inter (Google Fonts)

Utility classes `.center-content`, `.page-content`, and `.form-title` are defined globally in `globals.css` and used across pages.

Component-level styles use CSS Modules (e.g. `Navbar.module.css`) alongside Tailwind classes.

### Path alias

`@/*` maps to the repo root. Use `@/components/...`, `@/app/...` etc. for imports.

### Testing

Tests live in `tests/` mirroring the source structure (e.g. `tests/components/`). Vitest runs with jsdom and Testing Library globals enabled. `@testing-library/jest-dom` matchers are available globally via `vitest.setup.ts`.

## Additional Coding Preferences

- Do NOT use semicolons for JavaScript or TypeScript code.
- Do NOT apply Tailwind classes directly in component templates unless essential or just 1 at most. If an element needs more than a single Tailwind class, combine them into a custom class using the `@apply` directive.
- Use minimal project dependencies where possible.
- Use the `git switch -c` command to switch to new branches, not `git checkout`.
