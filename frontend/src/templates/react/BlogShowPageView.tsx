import dayjs from "dayjs";

import type { BlogShowPageViewProps } from "@/types/templates";

export function BlogShowPageView({ title, publishedAt, children }: BlogShowPageViewProps) {
  return (
    <section className="bp-content space-y-8">
      <header className="space-y-3">
        {title ? <h1 className="text-4xl font-semibold tracking-tight text-slate-950">{title}</h1> : null}
        {publishedAt ? <p className="text-sm text-slate-500">Released on {dayjs(publishedAt).format("MMMM D, YYYY")}</p> : null}
      </header>
      {children}
    </section>
  );
}
