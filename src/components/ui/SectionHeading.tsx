import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
  size?: "default" | "display";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  className,
  size = "default",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-3 text-xs font-semibold uppercase tracking-[0.12em]",
            light ? "text-white/70" : "text-sky-500",
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          size === "display" ? "text-display" : "text-headline",
          light ? "text-white" : "text-[#1d1d1f]",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 text-subhead",
            light && "text-white/75",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
