import type { CSSProperties } from "react";
import { useState } from "react";

import { counterTones } from "@/lib/counter";
import type { CounterWidgetViewProps } from "@/types/widgets";

export function CounterWidgetView({
  title,
  initialValue,
  backgroundTone,
  borderWidth,
  borderRadius,
}: CounterWidgetViewProps) {
  const [count, setCount] = useState(initialValue);
  const tone = counterTones[backgroundTone];

  const shellStyle: CSSProperties = {
    borderWidth: `${borderWidth}px`,
    borderRadius: `${borderRadius}px`,
    borderColor: tone.border,
    boxShadow: `0 24px 60px ${tone.shadow}`,
  };

  const gradientStyle: CSSProperties = {
    backgroundImage: `linear-gradient(135deg, ${tone.from} 0%, ${tone.via} 52%, ${tone.to} 100%)`,
  };

  return (
    <section
      className="counter-widget relative isolate overflow-hidden border bg-white/60 p-6 text-slate-950 backdrop-blur-md sm:p-8"
      style={shellStyle}
    >
      <div aria-hidden="true" className="absolute inset-0" style={gradientStyle} />
      <div aria-hidden="true" className="absolute inset-0 bg-white/35" />

      <div className="relative z-10 flex flex-col gap-6">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-700/80">Counter Widget</p>
          {title ? <h3 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">{title}</h3> : null}
        </div>

        <div className="flex justify-center">
          <output
            aria-live="polite"
            className="inline-flex min-h-28 min-w-28 items-center justify-center rounded-full border border-white/70 bg-white/80 px-8 text-5xl font-black tabular-nums tracking-tight text-slate-950 shadow-[0_12px_30px_rgba(15,23,42,0.12)] sm:min-h-32 sm:min-w-32 sm:text-6xl"
          >
            {count}
          </output>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          <button
            type="button"
            className="rounded-full border border-slate-900/15 bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition-transform duration-150 hover:-translate-y-0.5 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-950/30"
            onClick={() => setCount((value) => value + 1)}
          >
            +1
          </button>
          <button
            type="button"
            className="rounded-full border border-slate-900/15 bg-white/80 px-4 py-3 text-sm font-semibold text-slate-900 transition-transform duration-150 hover:-translate-y-0.5 hover:bg-white focus:outline-none focus:ring-2 focus:ring-slate-900/20"
            onClick={() => setCount((value) => value - 1)}
          >
            -1
          </button>
          <button
            type="button"
            className="rounded-full border border-slate-900/15 bg-transparent px-4 py-3 text-sm font-semibold text-slate-800 transition-transform duration-150 hover:-translate-y-0.5 hover:bg-white/45 focus:outline-none focus:ring-2 focus:ring-slate-900/20"
            onClick={() => setCount(initialValue)}
          >
            Reset
          </button>
        </div>
      </div>
    </section>
  );
}
