import { cn } from "@/lib/utils";
import { ImageLink } from "@/components/react/ImageLink";
import type { ImageWidgetViewProps } from "@/types/widgets";

export function Figure({ image, link, caption, className }: ImageWidgetViewProps) {
  const hasCaption = Boolean(caption?.trim());

  return (
    <figure className={cn(className, hasCaption && "space-y-3")}>
      <ImageLink image={image} link={link} />
      {hasCaption ? <figcaption className="img-widget__caption px-2 text-sm text-slate-600">{caption}</figcaption> : null}
    </figure>
  );
}
