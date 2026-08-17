'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal, Cpu, ArrowUpRight } from 'lucide-react';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { NAV_LINKS, PERSONAL_INFO } from '@/data/portfolioData';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);

      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 140;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex justify-center px-4 sm:px-6 py-4 pointer-events-none">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={cn(
          'w-full max-w-5xl rounded-full transition-all duration-300 pointer-events-auto flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3',
          isScrolled
            ? 'bg-white/80 dark:bg-[#08080c]/80 backdrop-blur-2xl border border-zinc-200/90 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.25)]'
            : 'bg-white/50 dark:bg-zinc-950/40 backdrop-blur-xl border border-zinc-200/60 dark:border-white/5'
        )}
      >
        {/* Brand Logo with 3D Status Light */}
        <Link
          href="#home"
          className="flex items-center gap-2 group cursor-pointer focus:outline-none"
        >
          <div className="relative w-8 h-8 rounded-lg bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 flex items-center justify-center font-mono font-bold text-xs shadow-md group-hover:scale-105 transition-transform">
            <span>DK</span>
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-white dark:border-zinc-950 animate-pulse" />
          </div>
          <div className="hidden sm:flex flex-col text-left">
            <span className="font-mono text-xs font-bold tracking-wider text-zinc-900 dark:text-white leading-tight">
              DAFFA ARYA
            </span>
            <span className="font-mono text-[9px] text-yellow-600 dark:text-yellow-400 tracking-widest leading-tight">
              FULL-STACK // DEV
            </span>
          </div>
        </Link>

        {/* Desktop Floating Navigation Pills with layoutId Indicator */}
        <nav className="hidden md:flex items-center gap-1 bg-zinc-100/70 dark:bg-zinc-900/60 p-1 rounded-full border border-zinc-200/60 dark:border-white/5 font-mono text-xs">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  'relative px-3.5 py-1.5 rounded-full transition-colors duration-200 font-medium select-none',
                  isActive
                    ? 'text-zinc-950 dark:text-white font-bold'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white'
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavPill"
                    transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                    className="absolute inset-0 bg-yellow-400 dark:bg-yellow-500/25 border border-yellow-400/80 rounded-full shadow-[0_0_15px_rgba(234,179,8,0.3)] z-0"
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Right Actions: Theme Toggle & Quick CTA */}
        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />

          <Link
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-zinc-900 dark:bg-white hover:bg-yellow-500 dark:hover:bg-yellow-400 text-white dark:text-zinc-950 font-mono text-xs font-bold transition-all shadow-sm active:scale-95 cursor-pointer"
          >
            <span>HUBUNGI</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>

          {/* Mobile Menu Hamburger Button */}
          <button
            type="button"
            suppressHydrationWarning
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-yellow-500 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-4 right-4 z-50 rounded-2xl bg-white/95 dark:bg-[#0a0a0f]/95 backdrop-blur-2xl border border-zinc-200 dark:border-white/10 p-5 shadow-2xl pointer-events-auto md:hidden"
          >
            <div className="flex flex-col gap-2 font-mono text-sm">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      'flex items-center justify-between p-3 rounded-xl transition-all',
                      isActive
                        ? 'bg-yellow-500/15 border border-yellow-500/30 text-yellow-600 dark:text-yellow-400 font-bold'
                        : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900'
                    )}
                  >
                    <span>{link.name}</span>
                    <span className="text-xs text-zinc-400 font-mono">{link.number}</span>
                  </Link>
                );
              })}

              <div className="pt-3 mt-2 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-500">AVAILABLE FOR WORK</span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
