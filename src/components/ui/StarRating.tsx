import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

type StarRatingProps = {
  rating: number;
  max?: number;
  className?: string;
};

export function StarRating({ rating, max = 5, className }: StarRatingProps) {
  return (
    <div
      className={cn("flex items-center gap-1", className)}
      aria-label={`Calificación: ${rating} de ${max} estrellas`}
    >
      {Array.from({ length: max }).map((_, index) => (
        <Star
          key={index}
          className={cn(
            "h-4 w-4",
            index < rating
              ? "fill-sky-400 text-sky-400"
              : "fill-slate-200 text-slate-200",
          )}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}
