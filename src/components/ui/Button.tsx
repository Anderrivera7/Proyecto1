"use client";

import Link from "next/link";
import { cn, scrollToHash } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "whatsapp" | "ghost" | "white";
type ButtonSize = "sm" | "md" | "lg";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-sky-500 text-white hover:bg-sky-600 focus-visible:ring-sky-400/50 shadow-[0_2px_12px_rgba(56,189,248,0.35)]",
  secondary:
    "bg-[#f5f5f7] text-[#1d1d1f] hover:bg-[#e8e8ed] focus-visible:ring-sky-400/50",
  outline:
    "border border-black/[0.08] bg-transparent text-sky-600 hover:bg-sky-50/80 focus-visible:ring-sky-400/50",
  whatsapp:
    "bg-[#25D366] text-white hover:bg-[#20bd5a] focus-visible:ring-emerald-400/50 shadow-[0_2px_12px_rgba(37,211,102,0.35)]",
  ghost: "bg-transparent text-sky-600 hover:bg-sky-50/80 focus-visible:ring-sky-400/50",
  white:
    "bg-white text-sky-600 hover:bg-white/90 focus-visible:ring-white/50 shadow-[0_2px_16px_rgba(0,0,0,0.08)]",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-[13px]",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-[15px]",
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
    "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-[-0.01em] transition-all duration-300 ease-out hover:brightness-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
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
        <a
          href={href}
          className={styles}
          onClick={(e) => {
            e.preventDefault();
            scrollToHash(href);
            onClick?.(e);
          }}
        >
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
