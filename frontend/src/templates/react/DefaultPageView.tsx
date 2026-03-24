import type { DefaultPageViewProps } from "@/types/templates";

export function DefaultPageView({ title, children }: DefaultPageViewProps) {
  return (
    <section className="bp-content space-y-8">
      {title ? <h1 className="text-4xl font-semibold tracking-tight text-slate-950">{title}</h1> : null}
      {children}
    </section>
  );
}
