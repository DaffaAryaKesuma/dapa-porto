import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "featured" | "glass";
  cornerAccents?: boolean;
}

export function Card({
  children,
  className,
  variant = "default",
  cornerAccents = false,
  ...props
}: CardProps) {
  const baseStyles =
    "relative rounded-lg transition-all duration-300 overflow-hidden";

  const variantStyles = {
    default:
      "bg-white dark:bg-[#121216] border border-zinc-200 dark:border-zinc-800/80 shadow-sm hover:border-zinc-400 dark:hover:border-zinc-700",
    featured:
      "bg-white dark:bg-[#15151a] border border-yellow-500/30 shadow-lg shadow-yellow-500/5 hover:border-yellow-500/60 hover:shadow-yellow-500/10",
    glass:
      "bg-white/80 dark:bg-[#121216]/80 backdrop-blur-md border border-zinc-200/80 dark:border-zinc-800/60",
  };

  return (
    <div
      className={cn(
        baseStyles,
        variantStyles[variant],
        cornerAccents && "industrial-border",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
