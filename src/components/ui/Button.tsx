import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "whatsapp" | "ghost" | "white";
type ButtonSize = "sm" | "md" | "lg";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-500 shadow-md shadow-blue-600/20",
  secondary:
    "bg-white text-blue-700 hover:bg-blue-50 focus-visible:ring-blue-400 border border-blue-100 shadow-sm",
  outline:
    "border-2 border-blue-200 bg-transparent text-blue-700 hover:border-blue-400 hover:bg-blue-50 focus-visible:ring-blue-400",
  whatsapp:
    "bg-emerald-500 text-white hover:bg-emerald-600 focus-visible:ring-emerald-400 shadow-md shadow-emerald-500/20",
  ghost: "bg-transparent text-blue-700 hover:bg-blue-50 focus-visible:ring-blue-400",
  white:
    "bg-white text-blue-700 hover:bg-blue-50 focus-visible:ring-white shadow-md",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  external?: boolean;
  className?: string;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLElement>;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onClick">;

export function Button({
  variant = "primary",
  size = "md",
  href,
  external,
  className,
  children,
  type = "button",
  onClick,
  ...props
}: ButtonProps) {
  const styles = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60",
    variantStyles[variant],
    sizeStyles[size],
    className,
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={styles}
          onClick={onClick}
        >
          {children}
        </a>
      );
    }

    if (href.startsWith("#")) {
      return (
        <a href={href} className={styles} onClick={onClick}>
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={styles} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={styles} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
