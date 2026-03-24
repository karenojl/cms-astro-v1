import type { HeroWidgetViewProps } from "@/types/widgets";

export function HeroWidgetView({ label, sublabel, children }: HeroWidgetViewProps) {
  return (
    <section className="hero-widget overflow-hidden rounded-[2rem] bg-slate-950 px-6 py-10 text-white shadow-xl sm:px-10">
      <div className="mx-auto max-w-4xl space-y-6">
        {(label || sublabel) ? (
          <header className="space-y-3">
            {label ? <h2 className="hero-widget__title text-3xl font-semibold tracking-tight sm:text-5xl">{label}</h2> : null}
            {sublabel ? <p className="hero-widget__subtitle max-w-2xl text-base text-slate-300 sm:text-lg">{sublabel}</p> : null}
          </header>
        ) : null}
        {children ? <div className="space-y-6">{children}</div> : null}
      </div>
    </section>
  );
}
