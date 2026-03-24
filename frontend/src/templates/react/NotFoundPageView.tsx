import type { NotFoundPageViewProps } from "@/types/templates";

export function NotFoundPageView({ title }: NotFoundPageViewProps) {
  return (
    <section className="bp-content flex min-h-[40vh] flex-col items-start justify-center gap-4">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">404</p>
      <h1 className="text-4xl font-semibold tracking-tight text-slate-950">{title || "Page not found"}</h1>
      <p className="max-w-xl text-base text-slate-600">The requested page could not be resolved from Apostrophe content.</p>
    </section>
  );
}
