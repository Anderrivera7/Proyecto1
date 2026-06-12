import { cn } from "@/lib/utils";

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  error?: string;
};

export function Textarea({
  label,
  error,
  id,
  className,
  ...props
}: TextareaProps) {
  const textareaId = id ?? props.name;

  return (
    <div className="space-y-2">
      <label
        htmlFor={textareaId}
        className="block text-[13px] font-medium text-[#86868b]"
      >
        {label}
      </label>
      <textarea
        id={textareaId}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${textareaId}-error` : undefined}
        className={cn(
          "min-h-28 w-full resize-y rounded-xl border border-black/[0.06] bg-[#f5f5f7]/80 px-4 py-3.5 text-[15px] text-[#1d1d1f] outline-none transition-all duration-300 placeholder:text-[#86868b]/60 focus:border-sky-400/50 focus:bg-white focus:shadow-[0_0_0_4px_rgba(56,189,248,0.12)]",
          error && "border-red-300 focus:border-red-400 focus:shadow-[0_0_0_4px_rgba(239,68,68,0.1)]",
          className,
        )}
        {...props}
      />
      {error && (
        <p
          id={`${textareaId}-error`}
          className="text-sm text-red-600"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
}
