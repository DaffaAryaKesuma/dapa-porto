import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "yellow" | "mint" | "cyan" | "outline";
  size?: "sm" | "md";
  dot?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function Badge({
  variant = "default",
  size = "md",
  dot = false,
  children,
  className,
  ...props
}: BadgeProps) {
  const baseStyles =
    "inline-flex items-center gap-1.5 font-mono tracking-tight uppercase select-none rounded";

  const sizeStyles = {
    sm: "px-2 py-0.5 text-[10px] font-medium",
    md: "px-2.5 py-1 text-xs font-medium",
  };

  const variantStyles = {
    default:
      "bg-zinc-200 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-700/60",
    yellow:
      "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border border-yellow-500/30",
    mint:
      "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30",
    cyan:
      "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30",
    outline:
      "bg-transparent text-zinc-600 dark:text-zinc-400 border border-dashed border-zinc-400 dark:border-zinc-700",
  };

  const dotColors = {
    default: "bg-zinc-400 dark:bg-zinc-500",
    yellow: "bg-yellow-400 animate-pulse",
    mint: "bg-emerald-400 animate-pulse",
    cyan: "bg-cyan-400 animate-pulse",
    outline: "bg-zinc-400",
  };

  return (
    <span
      className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      {...props}
    >
      {dot && (
        <span className={cn("w-1.5 h-1.5 rounded-full shrink-0", dotColors[variant])} />
      )}
      {children}
    </span>
  );
}
