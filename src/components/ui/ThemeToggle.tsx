'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-9 h-9 border border-zinc-300 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900/50 rounded-full flex items-center justify-center text-zinc-500">
        <span className="w-4 h-4" />
      </div>
    );
  }

  const currentTheme = theme === 'system' ? resolvedTheme : theme;
  const isDark = currentTheme === 'dark';

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <button
      type="button"
      suppressHydrationWarning
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="group relative flex items-center justify-center w-9 h-9 rounded-full border border-zinc-300 dark:border-white/10 bg-white/80 dark:bg-zinc-900/80 hover:border-yellow-500/60 dark:hover:border-yellow-500/60 text-zinc-800 dark:text-zinc-200 hover:text-yellow-600 dark:hover:text-yellow-400 transition-all duration-200 cursor-pointer shadow-sm active:scale-95"
      title={isDark ? 'Ganti ke Light Mode' : 'Ganti ke Dark Mode'}
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        {isDark ? (
          <Sun className="w-4 h-4 text-yellow-400 transition-transform duration-300 group-hover:rotate-45" />
        ) : (
          <Moon className="w-4 h-4 text-zinc-800 transition-transform duration-300 group-hover:-rotate-12" />
        )}
      </div>
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
