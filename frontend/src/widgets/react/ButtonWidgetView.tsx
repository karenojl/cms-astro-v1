import { buttonVariants } from "@/lib/button";
import type { ButtonWidgetViewProps } from "@/types/widgets";

export function ButtonWidgetView({ label, href, variant, target, rel }: ButtonWidgetViewProps) {
  const className = buttonVariants({ variant });

  if (href) {
    return (
      <a className={className} href={href} target={target} rel={rel}>
        {label}
      </a>
    );
  }

  return <span className={className}>{label}</span>;
}
