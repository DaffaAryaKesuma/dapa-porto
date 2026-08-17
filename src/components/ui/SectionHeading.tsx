import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  number: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  number,
  title,
  subtitle,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12",
        align === "center" ? "text-center mx-auto" : "text-left",
        className
      )}
    >
      <div
        className={cn(
          "inline-flex items-center gap-2 font-mono text-xs md:text-sm font-semibold tracking-wider text-yellow-600 dark:text-yellow-400 mb-2 uppercase",
          align === "center" && "justify-center"
        )}
      >
        <span className="px-1.5 py-0.5 rounded bg-yellow-500/10 border border-yellow-500/30">
          {number}
        </span>
        <span className="text-zinc-400 dark:text-zinc-500">//</span>
        <span className="text-zinc-600 dark:text-zinc-400 tracking-widest">
          SPECIFICATION
        </span>
      </div>

      <div
        className={cn(
          "flex flex-col md:flex-row md:items-end gap-3",
          align === "center" && "md:justify-center"
        )}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
          {title}
        </h2>
      </div>

      {subtitle && (
        <p className="mt-3 text-sm md:text-base text-zinc-600 dark:text-zinc-400 max-w-2xl">
          {subtitle}
        </p>
      )}

      <div
        className={cn(
          "mt-4 h-[2px] w-16 bg-gradient-to-r from-yellow-500 to-transparent",
          align === "center" && "mx-auto from-transparent via-yellow-500 to-transparent w-28"
        )}
      />
    </div>
  );
}
