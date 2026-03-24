# Architecture Overview

## Summary

This project combines an Astro frontend shell with an ApostropheCMS backend. The backend owns content and editing. The frontend owns page rendering, with Astro handling routing and Apostrophe bridging while React + TypeScript handle most UI components. The two sides are linked through `@apostrophecms/apostrophe-astro`.

This document reflects the checked-in repo and should be treated as more authoritative than the starter-kit README when they differ.

## Runtime Architecture

### Request Flow

1. A browser request hits the Astro app.
2. Astro routes all page requests through `frontend/src/pages/[...slug].astro`.
3. That route calls `aposPageFetch(Astro.request)` from `@apostrophecms/apostrophe-astro`.
4. Apostrophe returns page-oriented data as `aposData`.
5. Astro wraps the response in `AposLayout`.
6. `AposTemplate` resolves the page type through `frontend/src/templates/index.ts`.
7. Thin Astro templates render React page views and any required `AposArea` bridges.
8. Widgets inside those areas are resolved through `frontend/src/widgets/index.ts`.
9. Thin Astro widget wrappers render React widget views or custom element bridges when DOM APIs are needed.

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

- page template wrappers in `frontend/src/templates/`
- React page views in `frontend/src/templates/react/`
- widget wrappers in `frontend/src/widgets/`
- React widget views in `frontend/src/widgets/react/`
- reusable rendering helpers in `frontend/src/components/` and `frontend/src/components/react/`
- shared types and adapter helpers in `frontend/src/types/` and `frontend/src/lib/`
- Tailwind entry and global CSS in `frontend/src/styles/`

### Contract Between Apps

The cross-app contract is name-based:

- backend page type names must match frontend template registry keys
- backend widget type names must match frontend widget registry keys
- template and widget wrappers must expect the field shapes returned in `aposData`
- React views should receive normalized typed props instead of raw `Astro.props`

Any backend schema or naming change should be treated as a potential frontend task.

## Deployment Artifacts

The repo includes backend deployment files under `backend/deployment/` and sync scripts under `backend/scripts/`.

These files appear to target a legacy Stagecoach-style deployment flow. They are not the primary source of truth for local development architecture and should be treated separately from the frontend/backend runtime model.

## Change Matrix

| Change | Primary backend edit | Primary frontend edit | Verify |
| --- | --- | --- | --- |
| Add page type | `backend/modules/@apostrophecms/page/index.js` plus new module config | new template wrapper in `frontend/src/templates/`, optional React view in `frontend/src/templates/react/`, and registry entry in `frontend/src/templates/index.ts` | route resolves and template renders |
| Add widget | module registration and allowed widget lists in backend schemas | new wrapper in `frontend/src/widgets/`, optional React view in `frontend/src/widgets/react/`, and registry entry in `frontend/src/widgets/index.ts` | widget renders through `AposArea` |
| Change page schema | relevant backend module `index.js` | update wrappers or views that read changed fields | page data shape still matches template assumptions |
| Change widget schema | relevant backend widget module or area config | update wrapper normalization or view props | widget data shape still matches renderer |
| Change site styles | optional style controls in `backend/modules/@apostrophecms/styles/index.js` | Tailwind or CSS in `frontend/src/styles/` and component classNames | styles apply in rendered Astro output |
| Change editing behavior | backend module config or backend layout | sometimes none, sometimes wrapper or view support | editing still works through frontend URL |
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
- `cd frontend && npm run check`
- `cd frontend && npm run typecheck`

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

- `backend/modules/@apostrophecms/blog/index.js` references `two-column`, but no matching module is present.
- `backend/modules/@apostrophecms/layout-column-widget/index.js` references `nested-layout`, while `backend/app.js` and the frontend registry also support `nested-layout-widget`.
- backend and frontend currently rely on alias keys like `slideshow` and `slideshow-widget` to stay compatible during migration.

## Recommended Follow-Up Backlog

1. Normalize widget naming between backend schema options, module registration, and frontend widget registry so aliases can be removed.
2. Decide whether `two-column` should be implemented, renamed, or removed.
3. Add linting and frontend rendering tests once the new React view layer stabilizes.
4. Decide whether the video widget should keep the custom element bridge or move to a React-first embed strategy.
