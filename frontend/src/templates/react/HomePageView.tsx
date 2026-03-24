import type { HomePageViewProps } from "@/types/templates";

export function HomePageView({ isLoggedIn, isEditMode, title, children }: HomePageViewProps) {
  return (
    <section className="bp-welcome overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 px-6 py-10 text-white shadow-xl sm:px-10">
      <div className="mx-auto max-w-4xl space-y-8">
        <header className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300">Apostrophe Astro</p>
          <h1 className="bp-welcome__headline text-4xl font-semibold tracking-tight sm:text-6xl">
            {title || "Welcome to Apostrophe 3"}
          </h1>
          <p className="max-w-2xl text-base text-slate-300 sm:text-lg">
            This frontend now uses Astro as the rendering shell while React and TypeScript take over the component
            layer.
          </p>
        </header>

        {!isLoggedIn ? (
          <div className="space-y-4 rounded-[1.5rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h2 className="bp-welcome__help text-xl font-semibold">First time spinning up the Apostrophe Astro combined project?</h2>
            <p className="text-sm leading-7 text-slate-200">
              Use the credentials created during setup with the Apostrophe CLI or create a new user in the Apostrophe
              project folder with:
            </p>
            <pre className="bp-welcome__code overflow-x-auto rounded-2xl bg-slate-950/80 p-4 text-sm text-cyan-200 ring-1 ring-white/10">
              <span className="bp-welcome__code__context mb-2 block text-xs uppercase tracking-[0.25em] text-slate-400">
                Command Line
              </span>
              <code>npm run add-user -- myUsername admin</code>
            </pre>
            <p>
              <a
                className="bp-button bp-button--cta inline-flex items-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-slate-200"
                href="/login"
              >
                Then log in here.
              </a>
            </p>
          </div>
        ) : null}

        <div className="rounded-[1.5rem] bg-white px-6 py-8 text-slate-900 shadow-lg">
          <div className="space-y-3">
            <p className="text-sm text-slate-600">
              {isLoggedIn && !isEditMode
                ? "Enter Edit mode from the admin bar to begin."
                : "Add and edit content below in the content area."}
            </p>
          </div>
          <div className="bp-welcome__area mt-6 space-y-6">{children}</div>
        </div>
      </div>
    </section>
  );
}
