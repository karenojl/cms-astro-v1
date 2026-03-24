import type { VideoWidgetViewProps } from "@/types/widgets";

export function VideoWidgetView({ url, placeholder }: VideoWidgetViewProps) {
  const resolvedUrl = placeholder ? "https://youtu.be/Q5UX9yexEyM" : url;

  return (
    <video-widget
      className="video-widget block w-full overflow-hidden rounded-[2rem] bg-slate-100 shadow-sm ring-1 ring-slate-200"
      url={resolvedUrl}
    />
  );
}
