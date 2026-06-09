import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "mb-4 inline-flex rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest",
            light ? "bg-white/15 text-blue-100" : "bg-blue-50 text-blue-600",
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-tight",
          light ? "text-white" : "text-slate-900",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            light ? "text-blue-100" : "text-slate-500",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
