/// <reference types="astro/client" />

declare module "*.astro" {
  const AstroComponent: (props: Record<string, unknown>) => unknown;
  export default AstroComponent;
}

declare module "@apostrophecms/apostrophe-astro/lib/attachment.js" {
  export function getAttachmentUrl(attachment?: unknown): string | undefined;
  export function getAttachmentSrcset(attachment?: unknown): string | undefined;
  export function getFocalPoint(attachment?: unknown): string;
  export function getWidth(attachment?: unknown): number | undefined;
  export function getHeight(attachment?: unknown): number | undefined;
}

declare module "@apostrophecms/apostrophe-astro/lib/util.js" {
  export function slugify(value: string): string;
}

declare module "@apostrophecms/apostrophe-astro/lib/aposPageFetch.js" {
  export default function aposPageFetch(request: Request): Promise<unknown>;
}

declare module "@apostrophecms/apostrophe-astro/lib/aposSetQueryParameter.js" {
  export default function setParameter(url: URL, key: string, value: string | number): string;
}

declare namespace React {
  namespace JSX {
    interface IntrinsicElements {
      "video-widget": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        url?: string;
      };
    }
  }
}
