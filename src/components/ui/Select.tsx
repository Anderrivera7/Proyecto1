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
      <label htmlFor={selectId} className="block text-sm font-semibold text-slate-700">
        {label}
      </label>
      <select
        id={selectId}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${selectId}-error` : undefined}
        className={cn(
          "w-full rounded-2xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 text-slate-900 outline-none transition-all focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-100",
          error && "border-red-400 focus:border-red-400 focus:ring-red-100",
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
