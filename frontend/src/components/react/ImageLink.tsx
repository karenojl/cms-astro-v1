import type { ImagePresentation, LinkPresentation } from "@/types/widgets";

interface ImageLinkProps {
  image: ImagePresentation;
  link?: LinkPresentation | null;
}

function buildImageStyle(image: ImagePresentation) {
  const style: Record<string, string> = {
    objectPosition: image.objectPosition,
  };

  if (image.aspectRatio) {
    style.aspectRatio = image.aspectRatio.replace("/", " / ");
  }

  return style;
}

export function ImageLink({ image, link }: ImageLinkProps) {
  const imageElement = (
    <img
      className={image.className}
      src={image.src}
      alt={image.alt ?? ""}
      loading="lazy"
      decoding="async"
      srcSet={image.srcSet}
      width={image.width}
      height={image.height}
      style={buildImageStyle(image)}
    />
  );

  if (!link?.url) {
    return imageElement;
  }

  return (
    <a href={link.url} title={link.title ?? undefined} target={link.target ?? undefined} rel={link.rel ?? undefined}>
      {imageElement}
    </a>
  );
}
