import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
};

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <article
      className={cn(
        "rounded-3xl border border-sky-100/80 bg-white p-6 shadow-sm sm:p-8",
        hover && "card-hover",
        className,
      )}
    >
      {children}
    </article>
  );
}
