import type { AposAreaData } from "@/types/apos";

export function getAreaOrNull(area: unknown): AposAreaData | null {
  if (!area || typeof area !== "object") {
    return null;
  }

  if ((area as AposAreaData).metaType !== "area") {
    return null;
  }

  return area as AposAreaData;
}
