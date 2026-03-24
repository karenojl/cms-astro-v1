import LayoutWidget from "@apostrophecms/apostrophe-astro/widgets/LayoutWidget.astro";
import LayoutColumnWidget from "@apostrophecms/apostrophe-astro/widgets/LayoutColumnWidget.astro";

import ButtonWidget from "./ButtonWidget.astro";
import FileWidget from "./FileWidget.astro";
import HeroWidget from "./HeroWidget.astro";
import ImageWidget from "./ImageWidget.astro";
import RichTextWidget from "./RichTextWidget.astro";
import SlideshowWidget from "./SlideshowWidget.astro";
import VideoWidget from "./VideoWidget.astro";

const widgetComponents = {
  "@apostrophecms/rich-text": RichTextWidget,
  "@apostrophecms/image": ImageWidget,
  "@apostrophecms/video": VideoWidget,
  "@apostrophecms/file": FileWidget,
  "@apostrophecms/layout": LayoutWidget,
  "@apostrophecms/layout-column": LayoutColumnWidget,
  "button": ButtonWidget,
  "button-widget": ButtonWidget,
  "hero": HeroWidget,
  "hero-widget": HeroWidget,
  "slideshow": SlideshowWidget,
  "slideshow-widget": SlideshowWidget,
  "nested-layout": LayoutWidget,
  "nested-layout-widget": LayoutWidget,
  "nested-column": LayoutColumnWidget,
  "nested-column-widget": LayoutColumnWidget,
} as const;

export default widgetComponents;
