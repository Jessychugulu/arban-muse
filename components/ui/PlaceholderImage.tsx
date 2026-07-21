import { placeholderImage } from "@/lib/placeholder";
import { cn } from "@/lib/utils";

interface PlaceholderImageProps {
  label: string;
  alt: string;
  tone?: "purple" | "gold" | "lavender" | "ink";
  ratio?: "square" | "portrait" | "landscape" | "wide";
  className?: string;
  imgClassName?: string;
}

/**
 * Stand-in for real product photography. Renders a generated, on-brand
 * SVG image so every card looks finished today and can be swapped for a
 * real photo later by replacing this component's usage with next/image.
 */
export default function PlaceholderImage({
  label,
  alt,
  tone = "purple",
  ratio = "square",
  className,
  imgClassName,
}: PlaceholderImageProps) {
  const src = placeholderImage(label, tone, ratio);
  const aspect = {
    square: "aspect-square",
    portrait: "aspect-[4/5]",
    landscape: "aspect-[6/5]",
    wide: "aspect-[2/1]",
  }[ratio];

  return (
    <div className={cn("relative overflow-hidden bg-neutral", aspect, className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={cn(
          "h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110",
          imgClassName
        )}
      />
    </div>
  );
}
