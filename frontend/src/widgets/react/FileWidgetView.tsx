import type { FileWidgetViewProps } from "@/types/widgets";

export function FileWidgetView({ href, title }: FileWidgetViewProps) {
  if (!href) {
    return <p className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-500">No file selected.</p>;
  }

  return (
    <a
      className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-900 shadow-sm transition-colors hover:bg-slate-50"
      href={href}
      download
    >
      <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
      {title || "Download file"}
    </a>
  );
}
