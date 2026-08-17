import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "mint" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  href?: string;
  target?: string;
  download?: boolean | string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  children: React.ReactNode;
  className?: string;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  target,
  download,
  icon,
  iconPosition = "right",
  children,
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium tracking-wide transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none cursor-pointer select-none rounded-md font-mono text-sm";

  const sizeStyles = {
    sm: "px-3 py-1.5 text-xs gap-1.5",
    md: "px-5 py-2.5 text-sm gap-2",
    lg: "px-6 py-3 text-base gap-2.5 font-semibold",
  };

  const variantStyles = {
    primary:
      "bg-yellow-500 hover:bg-yellow-400 text-zinc-950 font-semibold border border-yellow-400 shadow-md shadow-yellow-500/10 hover:shadow-yellow-500/25 active:scale-[0.98]",
    secondary:
      "bg-zinc-100 dark:bg-zinc-900/90 text-zinc-800 dark:text-zinc-200 border border-zinc-300 dark:border-zinc-800 hover:border-yellow-500/60 dark:hover:border-yellow-500/60 hover:text-yellow-600 dark:hover:text-yellow-400 backdrop-blur-sm active:scale-[0.98]",
    mint:
      "bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold border border-emerald-400 shadow-md shadow-emerald-500/10 hover:shadow-emerald-500/25 active:scale-[0.98]",
    ghost:
      "bg-transparent text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50",
    danger:
      "bg-red-500/20 text-red-400 border border-red-500/40 hover:bg-red-500/30",
  };

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
    </>
  );

  const combinedClasses = cn(baseStyles, sizeStyles[size], variantStyles[variant], className);

  if (href) {
    const isInternal = href.startsWith("#") || href.startsWith("/");
    if (isInternal && !download) {
      return (
        <Link href={href} className={combinedClasses}>
          {content}
        </Link>
      );
    }
    return (
      <a
        href={href}
        target={target || "_blank"}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        download={download}
        className={combinedClasses}
      >
        {content}
      </a>
    );
  }

  return (
    <button type={props.type || "button"} suppressHydrationWarning className={combinedClasses} {...props}>
      {content}
    </button>
  );
}