# Frontend AGENTS

## Purpose

`frontend/` is the Astro application shell. It does not own content modeling. It receives Apostrophe page data through `@apostrophecms/apostrophe-astro` and renders templates and widgets through a mixed Astro + React stack.

## Entry Points

- Main route: `src/pages/[...slug].astro`
- Template registry: `src/templates/index.ts`
- Widget registry: `src/widgets/index.ts`
- Shared styles entry: `src/styles/app.css`

## Rendering Model

The frontend uses a single catch-all route:

- `src/pages/[...slug].astro` calls `aposPageFetch(Astro.request)`
- the returned `aposData` is passed to `AposLayout`
- page rendering is delegated to `AposTemplate`
- area rendering is delegated to `AposArea`

This means Astro routing is content-driven. Most new page behavior is implemented by adding or updating template components rather than by adding new route files.

Astro remains the routing and Apostrophe bridge layer. Most UI should now live in React `tsx` components under:

- `src/templates/react/`
- `src/widgets/react/`
- `src/components/react/`

## Template Rules

`src/templates/index.ts` maps Apostrophe page type names to Astro components.

Current mappings:

- `@apostrophecms/home-page` -> `HomePage.astro`
- `default-page` -> `DefaultPage.astro`
- `@apostrophecms/blog-page:index` -> `BlogIndexPage.astro`
- `@apostrophecms/blog-page:show` -> `BlogShowPage.astro`
- `@apostrophecms/page:notFound` -> `NotFoundPage.astro`

When adding or renaming a backend page type:

1. create or update the matching Astro template wrapper
2. add or update the React view in `src/templates/react/` when the UI changes
3. update `src/templates/index.ts`
4. verify the backend type name matches the mapping key exactly

## Widget Rules

`src/widgets/index.ts` maps Apostrophe widget names to Astro components.

Current local widget wrappers:

- `RichTextWidget.astro`
- `ImageWidget.astro`
- `VideoWidget.astro`
- `FileWidget.astro`
- `ButtonWidget.astro`
- `HeroWidget.astro`
- `SlideshowWidget.astro`

Current integration-based widget components:

- `@apostrophecms/layout` -> upstream `LayoutWidget.astro`
- `@apostrophecms/layout-column` -> upstream `LayoutColumnWidget.astro`
- `nested-layout-widget` -> upstream `LayoutWidget.astro`
- `nested-column-widget` -> upstream `LayoutColumnWidget.astro`

When adding or renaming a widget in backend schema options:

1. confirm the backend module key
2. add or update the Astro wrapper if needed
3. add or update the React view under `src/widgets/react/`
4. update `src/widgets/index.ts`
5. verify the widget is allowed inside the relevant backend area field

## Editing Guidance

Change by concern:

- Page-level wrappers: `src/templates/`
- Widget-level wrappers: `src/widgets/`
- React page/widget/component views: `src/templates/react/`, `src/widgets/react/`, `src/components/react/`
- Shared helpers: `src/lib/`
- Shared types: `src/types/`
- Shared CSS and Tailwind entry: `src/styles/`

Before changing rendering behavior, check:

- whether `aposData.page`, `aposData.piece`, or area data shape is assumed by the wrapper
- whether the backend schema still provides the fields the view reads
- whether the registry keys still match backend module names
- whether any CSS selector is relied on by Apostrophe style controls

Do not assume the starter-kit README reflects the current working state of this folder.

## Commands

- `npm run dev`
- `npm run build`
- `npm run preview`
- `npm run check`
- `npm run typecheck`
