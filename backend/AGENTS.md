# Backend AGENTS

## Purpose

`backend/` is the ApostropheCMS application. It owns content modeling, page types, widget availability, editing behavior, and Apostrophe runtime concerns.

## Entry Points

- App bootstrap: `app.js`
- Module definitions: `modules/`
- Shared backend-only layout: `views/layout.html`
- Small helper module: `lib/area.js`

`app.js` is the top-level registration point for custom and bundled modules. Most behavior is configured inside module folders rather than inline in `app.js`.

## Current Module Shape

Registered modules in `app.js` include:

- `@apostrophecms/vite`
- `@apostrophecms/rich-text-widget`
- `@apostrophecms/image-widget`
- `@apostrophecms/video-widget`
- `default-page`
- `@apostrophecms/blog`
- `@apostrophecms/blog-page`
- `nested-layout-widget`
- `nested-column-widget`

Important built-in configuration files present under `modules/@apostrophecms/`:

- `page/index.js`: page type menu
- `home-page/index.js`: home page schema and allowed widgets
- `blog/index.js`: blog piece schema and allowed widgets
- `layout-column-widget/index.js`: nested content area rules
- `layout-widget/index.js`, `image-widget/index.js`, `video-widget/index.js`: style controls
- `styles/index.js`: global style controls exposed through Apostrophe

Custom module present:

- `modules/nested-column-widget/index.js`

## Content Modeling Rules

Backend schema changes often require frontend follow-up.

Examples:

- Adding a page type usually requires a matching Astro template and template registry entry.
- Adding a widget to an area may require a new Astro widget component and widget registry entry.
- Renaming a module key requires coordinated updates in backend schema options and frontend registry files.

When editing backend modules, verify the frontend mapping in:

- `frontend/src/templates/index.js`
- `frontend/src/widgets/index.js`

## Editing Behavior

`views/layout.html` is intentionally minimal. It tells editors to keep the backend running and perform editing through the Astro frontend URL.

This backend is therefore not responsible for end-user page rendering in the normal flow. It is responsible for:

- content storage
- admin UI
- editing APIs
- media handling
- Apostrophe asset and migration tasks

## Commands

- `npm run dev`
- `npm run build`
- `npm run serve`
- `npm run migrate`

Operational notes:

- backend development expects MongoDB
- production build uses `node app @apostrophecms/asset:build`
- migrations use `node app @apostrophecms/migration:migrate`

The current checkout does not have dependencies installed, so commands that rely on `cross-env`, `nodemon`, or Apostrophe packages will fail until install is completed.

## Known Backend Gaps

Current mismatches worth preserving in context:

- `backend/modules/@apostrophecms/blog/index.js` allows a `two-column` widget, but no matching module exists in the repo.
- `backend/modules/@apostrophecms/layout-column-widget/index.js` allows `nested-layout`, while app registration and frontend widget mapping use `nested-layout-widget`.
- The repo contains deployment scripts under `backend/deployment/` and sync scripts under `backend/scripts/`, but they are legacy operational artifacts and should not be mistaken for the main local development path.
