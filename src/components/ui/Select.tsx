import { cn } from "@/lib/utils";

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  error?: string;
  options: string[];
  placeholder?: string;
};

export function Select({
  label,
  error,
  options,
  placeholder = "Selecciona una opción",
  id,
  className,
  ...props
}: SelectProps) {
  const selectId = id ?? props.name;

  return (
    <div className="space-y-2">
      <label htmlFor={selectId} className="block text-[13px] font-medium text-[#86868b]">
        {label}
      </label>
      <select
        id={selectId}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${selectId}-error` : undefined}
        className={cn(
          "w-full rounded-xl border border-black/[0.06] bg-[#f5f5f7]/80 px-4 py-3.5 text-[15px] text-[#1d1d1f] outline-none transition-all duration-300 focus:border-sky-400/50 focus:bg-white focus:shadow-[0_0_0_4px_rgba(56,189,248,0.12)]",
          error && "border-red-300 focus:border-red-400 focus:shadow-[0_0_0_4px_rgba(239,68,68,0.1)]",
          className,
        )}
        {...props}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error && (
        <p id={`${selectId}-error`} className="text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
