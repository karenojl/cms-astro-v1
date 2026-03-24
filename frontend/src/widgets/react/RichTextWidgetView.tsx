import type { RichTextWidgetViewProps } from "@/types/widgets";

export function RichTextWidgetView({ content }: RichTextWidgetViewProps) {
  return (
    <div
      className="rich-text-widget max-w-none space-y-4 leading-7 text-slate-700"
      dangerouslySetInnerHTML={{ __html: content ?? "" }}
    />
  );
}
