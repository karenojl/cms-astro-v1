import dayjs from "dayjs";

import type { BlogIndexPageViewProps } from "@/types/templates";

export function BlogIndexPageView({ title, pieces, pagination }: BlogIndexPageViewProps) {
  return (
    <section className="bp-content space-y-10">
      <header className="space-y-3">
        {title ? <h1 className="text-4xl font-semibold tracking-tight text-slate-950">{title}</h1> : null}
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">Blog Posts</p>
      </header>

      <div className="space-y-6">
        {pieces.map((piece) => (
          <article key={piece.id} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">
              Released on {piece.publishedAt ? dayjs(piece.publishedAt).format("MMMM D, YYYY") : "Unknown date"}
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
              <a className="transition-colors hover:text-slate-600" href={piece.url}>
                {piece.title || "Untitled post"}
              </a>
            </h2>
          </article>
        ))}
      </div>

      {pagination.length > 1 ? (
        <nav className="flex flex-wrap gap-3" aria-label="Pagination">
          {pagination.map((page) => (
            <a
              key={page.number}
              className={[
                "inline-flex h-11 min-w-11 items-center justify-center rounded-full border px-4 text-sm font-medium transition-colors",
                page.current
                  ? "border-slate-900 bg-slate-900 text-white"
                  : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50",
              ].join(" ")}
              href={page.url}
              aria-current={page.current ? "page" : undefined}
            >
              {page.number}
            </a>
          ))}
        </nav>
      ) : null}
    </section>
  );
}
