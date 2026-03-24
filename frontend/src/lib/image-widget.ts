import {
  getAttachmentUrl,
  getAttachmentSrcset,
  getFocalPoint,
  getHeight,
  getWidth,
} from "@apostrophecms/apostrophe-astro/lib/attachment.js";
import { slugify } from "@apostrophecms/apostrophe-astro/lib/util.js";

import placeholderImg from "../../public/images/image-widget-placeholder.jpg";

import type { LinkPresentation, ImagePresentation, ImageWidgetData } from "@/types/widgets";

export interface ImageWidgetPresentation {
  image: ImagePresentation;
  link?: LinkPresentation | null;
  caption?: string;
  className: string;
}

export function buildImageWidgetPresentation(
  widget: ImageWidgetData = {},
): ImageWidgetPresentation {
  const placeholder = widget.aposPlaceholder;
  const imageObject = widget._image?.[0];
  const src = placeholder ? placeholderImg.src : getAttachmentUrl(imageObject) || placeholderImg.src;
  const srcSet = placeholder ? "" : getAttachmentSrcset(imageObject) || "";
  const objectPosition = placeholder ? "center center" : getFocalPoint(imageObject);
  const width = imageObject ? getWidth(imageObject) : undefined;
  const height = imageObject ? getHeight(imageObject) : undefined;
  const aspectRatio = width && height ? `${width}/${height}` : undefined;

  let link: LinkPresentation | null = {
    url: widget.linkHref ?? "",
    title: widget.linkHrefTitle || widget.caption,
    target: widget.linkTarget ?? null,
    rel: null,
  };

  switch (widget.linkTo) {
    case "none": {
      link = null;
      break;
    }
    case "_url": {
      link.rel = widget.target === "_blank" ? "noopener noreferrer" : null;
      break;
    }
    default: {
      if (widget.linkTo) {
        const name = `_${slugify(widget.linkTo)}`;
        const linkedItems = widget[name] as Array<{ _url?: string; title?: string }> | undefined;
        const item = linkedItems?.[0];
        link.url = item?._url ?? "";
        link.title = widget.linkTitle || item?.title;
      }
    }
  }

  return {
    image: {
      src,
      alt: imageObject?.alt || imageObject?.attachment?._alt || "",
      className: "img-widget__image h-full w-full object-cover",
      srcSet,
      objectPosition,
      width: typeof width === "number" ? width : undefined,
      height: typeof height === "number" ? height : undefined,
      aspectRatio,
    },
    link: link?.url ? link : null,
    caption: widget.caption,
    className: "img-widget overflow-hidden rounded-3xl bg-slate-100 shadow-sm ring-1 ring-slate-200",
  };
}
