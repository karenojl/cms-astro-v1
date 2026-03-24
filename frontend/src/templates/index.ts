import BlogIndexPage from "./BlogIndexPage.astro";
import BlogShowPage from "./BlogShowPage.astro";
import DefaultPage from "./DefaultPage.astro";
import HomePage from "./HomePage.astro";
import NotFoundPage from "./NotFoundPage.astro";

const templateComponents = {
  "@apostrophecms/home-page": HomePage,
  "default-page": DefaultPage,
  "@apostrophecms/blog-page:index": BlogIndexPage,
  "@apostrophecms/blog-page:show": BlogShowPage,
  "@apostrophecms/page:notFound": NotFoundPage,
} as const;

export default templateComponents;
