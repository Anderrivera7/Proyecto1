import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
};

export function Card({ children, className, hover = true, glass = false }: CardProps) {
  return (
    <article
      className={cn(
        "rounded-[1.75rem] p-7 sm:p-8",
        glass
          ? "glass-card"
          : "border border-black/[0.04] bg-white shadow-[0_2px_16px_rgba(0,0,0,0.04)]",
        hover && "card-hover",
        className,
      )}
    >
      {children}
    </article>
  );
}
