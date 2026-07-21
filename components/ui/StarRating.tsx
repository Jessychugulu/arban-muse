import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  rating: number;
  className?: string;
  size?: number;
}

/** Renders a 5-star rating row, filled proportionally to `rating`. */
export default function StarRating({ rating, className, size = 14 }: StarRatingProps) {
  return (
    <div
      className={cn("flex items-center gap-1", className)}
      role="img"
      aria-label={`Rated ${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i + 1 <= Math.round(rating);
        return (
          <Star
            key={i}
            size={size}
            className={filled ? "fill-accent text-accent" : "fill-transparent text-ink/20"}
            strokeWidth={1.5}
            aria-hidden
          />
        );
      })}
      <span className="ml-1 font-body text-xs text-ink/60">{rating.toFixed(1)}</span>
    </div>
  );
}
