# AGENTS.md

## Purpose

This repository is a two-app project that combines:

- `frontend/`: an Astro site that renders pages and widgets
- `backend/`: an ApostropheCMS app that stores content and powers editing

Treat it as a monorepo by convention, not as a workspace-managed monorepo. The root does not define shared package management, shared TypeScript config, or shared build tooling beyond convenience scripts.

## Canonical Workflow

1. Inspect the repo before changing it.
2. Treat `frontend` and `backend` as separate applications with a shared content contract.
3. Prefer `npm` commands because the repo only defines `npm` scripts and does not include `pnpm` or `yarn` lockfiles.
4. Verify each app independently instead of assuming root scripts fully validate the project.
5. Trust local files over the starter-kit README when they disagree.

## Repo Reality

- Root `package.json` is a command wrapper only.
- There are no lockfiles at the repo root or in app folders.
- There are no committed `.env` templates.
- Dependencies were not installed in the inspected checkout.
- Root scripts call into `frontend` and `backend`, but they are not the source of truth for app behavior.

## Shared Environment Requirements

The frontend and backend must use the same `APOS_EXTERNAL_FRONT_KEY` value.

Current repo behavior:

- `frontend/package.json` sets `APOS_EXTERNAL_FRONT_KEY=dev` in `npm run dev`
- `backend/package.json` sets `APOS_EXTERNAL_FRONT_KEY=dev` in `npm run dev`

Additional environment details from current repo and README:

- `APOS_HOST` may be needed when Astro must talk to a backend running on a non-default host or port.
- Backend development expects MongoDB to be available.

## Commands

Root convenience scripts:

- `npm install`: runs nested installs via `postinstall`
- `npm run build`: runs frontend build, then backend build
- `npm run migrate`: runs backend migration
- `npm run serve-frontend`
- `npm run serve-backend`

Preferred app-local commands:

- `cd frontend && npm run dev`
- `cd frontend && npm run build`
- `cd frontend && npm run preview`
- `cd backend && npm run dev`
- `cd backend && npm run build`
- `cd backend && npm run migrate`

## Cross-App Change Rules

When changing the backend content model, verify whether the frontend must also change.

Common cases that require coordinated edits:

- New page type in `backend/modules/...` usually requires a new template and template registry entry in `frontend/src/templates/index.js`.
- New widget type in backend schema options usually requires a new Astro widget component and widget registry entry in `frontend/src/widgets/index.js`.
- Renaming a backend module or widget key usually requires matching updates in both registry files.
- Area field changes may require frontend template updates if rendering assumptions change.

## Known Gaps To Preserve In Context

These are current repo issues, not assumptions:

- `frontend/astro.config.*` is missing even though the README describes it.
- `frontend/src/pages/[...slug].astro` imports `../styles/app.css`, but that file does not exist.
- `frontend/src/widgets/ImageWidget.astro` imports `../components/Figure.astro`, but that file does not exist.
- Backend widget names are not fully aligned:
  - `two-column` is referenced in `backend/modules/@apostrophecms/blog/index.js` with no matching module in the repo.
  - `nested-layout` is referenced in `backend/modules/@apostrophecms/layout-column-widget/index.js`, while app registration and frontend mapping use `nested-layout-widget`.
- Builds currently fail in a fresh checkout until dependencies are installed.

## File Map

- Repo-wide system overview: [`docs/architecture.md`](docs/architecture.md)
- Frontend operating guide: [`frontend/AGENTS.md`](frontend/AGENTS.md)
- Backend operating guide: [`backend/AGENTS.md`](backend/AGENTS.md)

Read this file first, then move into the relevant app guide before editing.
