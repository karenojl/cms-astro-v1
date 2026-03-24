import type { ReactNode } from "react";

import type { AposAreaData, AposAttachment, AposWidgetBase } from "@/types/apos";

export interface ButtonWidgetData extends AposWidgetBase {
  label?: string;
  title?: string;
  text?: string;
  url?: string;
  href?: string;
  linkHref?: string;
  variant?: string;
  style?: string;
  openInNewTab?: boolean;
  target?: string;
}

export interface FileWidgetData extends AposWidgetBase {
  _file?: AposAttachment[];
}

export interface ImageWidgetData extends AposWidgetBase {
  _image?: AposAttachment[];
  caption?: string;
  linkHref?: string;
  linkHrefTitle?: string;
  linkTarget?: string | null;
  linkTitle?: string;
  linkTo?: string;
  target?: string;
}

export interface RichTextWidgetData extends AposWidgetBase {
  content?: string;
}

export interface HeroWidgetData extends AposWidgetBase {
  label?: string;
  sublabel?: string;
  body?: AposAreaData;
}

export interface SlideshowWidgetData extends AposWidgetBase {
  slides?: AposAreaData;
}

export type CounterBackgroundTone = "ocean" | "sunset" | "mint" | "berry";

export interface CounterWidgetData extends AposWidgetBase {
  title?: string;
  initialValue?: number | string;
  backgroundTone?: string;
  borderWidth?: number | string;
  borderRadius?: number | string;
}

export interface ImagePresentation {
  src: string;
  alt?: string | null;
  className?: string;
  srcSet?: string;
  objectPosition: string;
  width?: number;
  height?: number;
  aspectRatio?: string;
}

export interface LinkPresentation {
  url: string;
  title?: string | null;
  target?: string | null;
  rel?: string | null;
}

export interface ButtonWidgetViewProps {
  label: string;
  href?: string;
  variant: "primary" | "secondary" | "text";
  target?: "_blank";
  rel?: string;
}

export interface FileWidgetViewProps {
  href?: string;
  title?: string;
}

export interface ImageWidgetViewProps {
  image: ImagePresentation;
  link?: LinkPresentation | null;
  caption?: string;
  className?: string;
}

export interface RichTextWidgetViewProps {
  content?: string;
}

export interface HeroWidgetViewProps {
  label?: string;
  sublabel?: string;
  children?: ReactNode;
}

export interface SlideshowWidgetViewProps {
  hasSlides: boolean;
  children?: ReactNode;
}

export interface VideoWidgetViewProps {
  url?: string;
  placeholder?: boolean;
}

export interface CounterWidgetViewProps {
  title?: string;
  initialValue: number;
  backgroundTone: CounterBackgroundTone;
  borderWidth: number;
  borderRadius: number;
}
