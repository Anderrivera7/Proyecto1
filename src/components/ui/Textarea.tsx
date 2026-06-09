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
        className="block text-sm font-semibold text-slate-700"
      >
        {label}
      </label>
      <textarea
        id={textareaId}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${textareaId}-error` : undefined}
        className={cn(
          "min-h-32 w-full resize-y rounded-2xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-100",
          error && "border-red-400 focus:border-red-400 focus:ring-red-100",
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
