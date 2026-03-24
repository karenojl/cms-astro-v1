import type { SlideshowWidgetViewProps } from "@/types/widgets";

export function SlideshowWidgetView({ hasSlides, children }: SlideshowWidgetViewProps) {
  return (
    <section className="slideshow-widget rounded-[2rem] bg-slate-100 p-4 sm:p-6">
      {hasSlides ? children : <p className="slideshow-widget__empty text-sm text-slate-500">No slides configured.</p>}
    </section>
  );
}
