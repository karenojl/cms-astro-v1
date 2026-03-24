# Architecture Overview

## Summary

This project combines an Astro frontend with an ApostropheCMS backend. The backend owns content and editing. The frontend owns page rendering. The two sides are linked through `@apostrophecms/apostrophe-astro`.

This document reflects the checked-in repo, including known gaps, and should be treated as more authoritative than the starter-kit README when they differ.

## Runtime Architecture

### Request Flow

1. A browser request hits the Astro app.
2. Astro routes all page requests through `frontend/src/pages/[...slug].astro`.
3. That route calls `aposPageFetch(Astro.request)` from `@apostrophecms/apostrophe-astro`.
4. Apostrophe returns page-oriented data as `aposData`.
5. Astro wraps the response in `AposLayout`.
6. `AposTemplate` resolves the page type through `frontend/src/templates/index.js`.
7. Any Apostrophe areas inside the resolved template are rendered through `AposArea`.
8. Widgets inside those areas are resolved through `frontend/src/widgets/index.js`.

### Editing Flow

1. ApostropheCMS runs separately in `backend/`.
2. Editors authenticate against the backend.
3. The backend layout tells editors to use the Astro frontend URL for actual page editing.
4. `@apostrophecms/apostrophe-astro` bridges editing and content retrieval between Astro and Apostrophe.

## Content-Model Architecture

### Backend Ownership

The backend owns:

- page type registration in `backend/modules/@apostrophecms/page/index.js`
- page and piece schemas in module `index.js` files
- allowed widget lists inside area fields
- Apostrophe style controls in `backend/modules/@apostrophecms/styles/index.js`

### Frontend Ownership

The frontend owns:

- page templates in `frontend/src/templates/`
- widget renderers in `frontend/src/widgets/`
- reusable rendering helpers in `frontend/src/components/`
- Astro-side CSS in `frontend/src/styles/`

### Contract Between Apps

The cross-app contract is name-based:

- backend page type names must match frontend template registry keys
- backend widget type names must match frontend widget registry keys
- template and widget components must expect the field shapes returned in `aposData`

Any backend schema or naming change should be treated as a potential frontend task.

## Deployment Artifacts

The repo includes backend deployment files under `backend/deployment/` and sync scripts under `backend/scripts/`.

These files appear to target a legacy Stagecoach-style deployment flow. They are not the primary source of truth for local development architecture and should be treated separately from the frontend/backend runtime model.

## Change Matrix

| Change | Primary backend edit | Primary frontend edit | Verify |
| --- | --- | --- | --- |
| Add page type | `backend/modules/@apostrophecms/page/index.js` plus new module config | new template in `frontend/src/templates/` and registry entry in `frontend/src/templates/index.js` | route resolves and template renders |
| Add widget | module registration and allowed widget lists in backend schemas | new component in `frontend/src/widgets/` and registry entry in `frontend/src/widgets/index.js` | widget renders through `AposArea` |
| Change page schema | relevant backend module `index.js` | update templates that read changed fields | page data shape still matches template assumptions |
| Change widget schema | relevant backend widget module or area config | update widget component props/field reads | widget data shape still matches renderer |
| Change site styles | optional style controls in `backend/modules/@apostrophecms/styles/index.js` | CSS in `frontend/src/styles/` or component styles | styles apply in rendered Astro output |
| Change editing behavior | backend module config or backend layout | sometimes none, sometimes template/widget support | editing still works through frontend URL |
| Change deployment behavior | `backend/deployment/` or `backend/scripts/` | Astro hosting/runtime config if introduced later | deployment docs still match repo |

## Commands and Environment

### Root

- `npm install`
- `npm run build`
- `npm run migrate`

Root commands are wrappers only.

### Frontend

- `cd frontend && npm run dev`
- `cd frontend && npm run build`
- `cd frontend && npm run preview`

### Backend

- `cd backend && npm run dev`
- `cd backend && npm run build`
- `cd backend && npm run migrate`

### Shared Environment

- frontend and backend must share the same `APOS_EXTERNAL_FRONT_KEY`
- `APOS_HOST` may be needed when the frontend targets a non-default backend host
- backend expects MongoDB

## Known Repo Gaps

These are concrete findings from the checked-in files:

- `frontend/astro.config.*` is missing even though the README references it and frontend dependencies imply Astro adapter configuration should exist.
- `frontend/src/pages/[...slug].astro` imports `../styles/app.css`, but `frontend/src/styles/app.css` is absent.
- `frontend/src/widgets/ImageWidget.astro` imports `../components/Figure.astro`, but `frontend/src/components/Figure.astro` is absent.
- `backend/modules/@apostrophecms/blog/index.js` references `two-column`, but no matching module is present.
- `backend/modules/@apostrophecms/layout-column-widget/index.js` references `nested-layout`, while `backend/app.js` and `frontend/src/widgets/index.js` use `nested-layout-widget`.
- The inspected checkout had no installed dependencies, so build validation is currently blocked until install is run.

## Recommended Follow-Up Backlog

1. Add or restore the missing Astro config file and confirm adapter/output settings.
2. Resolve missing frontend imports: `src/styles/app.css` and `src/components/Figure.astro`.
3. Normalize widget naming between backend schema options, module registration, and frontend widget registry.
4. Decide whether `two-column` should be implemented, renamed, or removed.
5. After installing dependencies, run frontend, backend, and root builds and update docs if command behavior differs from current assumptions.
