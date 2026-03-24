import RichTextWidget from './RichTextWidget.astro';
import ImageWidget from './ImageWidget.astro';
import VideoWidget from './VideoWidget.astro';
import LayoutWidget from '@apostrophecms/apostrophe-astro/widgets/LayoutWidget.astro';
import LayoutColumnWidget from '@apostrophecms/apostrophe-astro/widgets/LayoutColumnWidget.astro';
import NestedLayoutWidget from '@apostrophecms/apostrophe-astro/widgets/LayoutWidget.astro';
import NestedLayoutColumnWidget from '@apostrophecms/apostrophe-astro/widgets/LayoutColumnWidget.astro';
import FileWidget from './FileWidget.astro';
import ButtonWidget from './ButtonWidget.astro';
import HeroWidget from './HeroWidget.astro';
import SlideshowWidget from './SlideshowWidget.astro';

const widgetComponents = {
  '@apostrophecms/rich-text': RichTextWidget,
  '@apostrophecms/image': ImageWidget,
  '@apostrophecms/video': VideoWidget,
  'button': ButtonWidget,
  '@apostrophecms/layout': LayoutWidget,
  '@apostrophecms/layout-column': LayoutColumnWidget,
  'hero': HeroWidget,
  'slideshow': SlideshowWidget,
  'nested-layout': NestedLayoutWidget,
  'nested-layout-widget': NestedLayoutWidget,
  'nested-column': NestedLayoutColumnWidget,
  'nested-column-widget': NestedLayoutColumnWidget,
  '@apostrophecms/file': FileWidget,
};

export default widgetComponents;
