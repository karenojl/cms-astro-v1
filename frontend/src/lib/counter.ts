import type { CounterBackgroundTone } from "@/types/widgets";

export const counterTones: Record<
  CounterBackgroundTone,
  {
    from: string;
    via: string;
    to: string;
    border: string;
    shadow: string;
  }
> = {
  ocean: {
    from: "rgba(14, 165, 233, 0.34)",
    via: "rgba(59, 130, 246, 0.18)",
    to: "rgba(255, 255, 255, 0.08)",
    border: "rgba(14, 165, 233, 0.42)",
    shadow: "rgba(14, 165, 233, 0.18)",
  },
  sunset: {
    from: "rgba(249, 115, 22, 0.34)",
    via: "rgba(244, 63, 94, 0.18)",
    to: "rgba(255, 255, 255, 0.08)",
    border: "rgba(249, 115, 22, 0.42)",
    shadow: "rgba(249, 115, 22, 0.18)",
  },
  mint: {
    from: "rgba(16, 185, 129, 0.34)",
    via: "rgba(45, 212, 191, 0.18)",
    to: "rgba(255, 255, 255, 0.08)",
    border: "rgba(16, 185, 129, 0.42)",
    shadow: "rgba(16, 185, 129, 0.18)",
  },
  berry: {
    from: "rgba(236, 72, 153, 0.34)",
    via: "rgba(168, 85, 247, 0.18)",
    to: "rgba(255, 255, 255, 0.08)",
    border: "rgba(236, 72, 153, 0.42)",
    shadow: "rgba(168, 85, 247, 0.18)",
  },
};

export function resolveCounterTone(value: unknown): CounterBackgroundTone {
  if (typeof value === "string" && value in counterTones) {
    return value as CounterBackgroundTone;
  }

  return "ocean";
}

export function clampCounterNumber(
  value: unknown,
  fallback: number,
  options: { min: number; max: number },
) {
  const normalized = typeof value === "number" ? value : Number(value);

  if (!Number.isFinite(normalized)) {
    return fallback;
  }

  return Math.min(options.max, Math.max(options.min, Math.round(normalized)));
}
