# Frontend AGENTS

## Purpose

`frontend/` is the Astro application. It does not own content modeling. It receives Apostrophe page data through `@apostrophecms/apostrophe-astro` and renders templates and widgets.

## Entry Points

- Main route: `src/pages/[...slug].astro`
- Template registry: `src/templates/index.js`
- Widget registry: `src/widgets/index.js`
- Shared styles: `src/styles/styles.css`

## Rendering Model

The frontend uses a single catch-all route:

- `src/pages/[...slug].astro` calls `aposPageFetch(Astro.request)`
- the returned `aposData` is passed to `AposLayout`
- page rendering is delegated to `AposTemplate`
- area rendering is delegated to `AposArea`

This means Astro routing is content-driven. Most new page behavior is implemented by adding or updating template components rather than by adding new route files.

## Template Rules

`src/templates/index.js` maps Apostrophe page type names to Astro components.

Current mappings:

- `@apostrophecms/home-page` -> `HomePage.astro`
- `default-page` -> `DefaultPage.astro`
- `@apostrophecms/blog-page:index` -> `BlogIndexPage.astro`
- `@apostrophecms/blog-page:show` -> `BlogShowPage.astro`
- `@apostrophecms/page:notFound` -> `NotFoundPage.astro`

When adding or renaming a backend page type:

1. create or update the matching Astro template
2. update `src/templates/index.js`
3. verify the backend type name matches the mapping key exactly

## Widget Rules

`src/widgets/index.js` maps Apostrophe widget names to Astro components.

Current local widget components:

- `RichTextWidget.astro`
- `ImageWidget.astro`
- `VideoWidget.astro`
- `FileWidget.astro`

Current integration-based widget components:

- `@apostrophecms/layout` -> upstream `LayoutWidget.astro`
- `@apostrophecms/layout-column` -> upstream `LayoutColumnWidget.astro`
- `nested-layout-widget` -> upstream `LayoutWidget.astro`
- `nested-column-widget` -> upstream `LayoutColumnWidget.astro`

When adding or renaming a widget in backend schema options:

1. confirm the backend module key
2. add or update the Astro widget component if needed
3. update `src/widgets/index.js`
4. verify the widget is allowed inside the relevant backend area field

## Editing Guidance

Change by concern:

- Page-level rendering: `src/templates/`
- Widget-level rendering: `src/widgets/`
- Reusable markup helpers: `src/components/`
- Shared CSS: `src/styles/`

Before changing rendering behavior, check:

- whether `aposData.page`, `aposData.piece`, or area data shape is assumed by the template
- whether the backend schema still provides the fields the template reads
- whether the registry keys still match backend module names

## Known Frontend Gaps

These are present in the current repo:

- `src/pages/[...slug].astro` imports `../styles/app.css`, but `src/styles/app.css` is missing.
- `src/widgets/ImageWidget.astro` imports `../components/Figure.astro`, but that file is missing.
- There is no committed `astro.config.*` file in `frontend/`, despite the README describing one.

Do not assume the starter-kit README reflects the current working state of this folder.

## Commands

- `npm run dev`
- `npm run build`
- `npm run preview`

The current checkout does not have dependencies installed, so `astro`-based commands will fail until install is completed.
