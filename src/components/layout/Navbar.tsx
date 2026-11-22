'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal, Cpu, ArrowUpRight } from 'lucide-react';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { SoundToggle } from '@/components/ui/SoundToggle';
import { NAV_LINKS, PERSONAL_INFO } from '@/data/portfolioData';
import { sound } from '@/lib/sound';
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

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pt-4 pointer-events-none">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={cn(
          'w-full max-w-5xl flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-full transition-all duration-300 pointer-events-auto border shadow-lg',
          isScrolled
            ? 'bg-white/85 dark:bg-[#08080c]/85 border-zinc-300 dark:border-white/10 backdrop-blur-xl shadow-zinc-950/10 dark:shadow-black/40'
            : 'bg-white/60 dark:bg-zinc-950/60 border-zinc-200/80 dark:border-white/5 backdrop-blur-md'
        )}
      >
        {/* Brand / Logo */}
        <Link
          href="#home"
          onClick={() => sound.playClick()}
          className="flex items-center gap-2.5 font-mono text-xs font-bold text-zinc-900 dark:text-white group select-none"
        >
          <div className="w-8 h-8 rounded-full bg-yellow-400 dark:bg-yellow-500 text-zinc-950 flex items-center justify-center font-black text-sm shadow-md shadow-yellow-500/20 group-hover:rotate-12 transition-transform">
            DK
          </div>
          <div className="flex flex-col">
            <span className="tracking-wider group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">
              DAFFA ARYA
            </span>
            <span className="text-[9px] text-zinc-500 dark:text-zinc-400 tracking-widest font-medium -mt-0.5">
              FULL-STACK // DEV
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 font-mono text-xs">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => sound.playClick()}
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

        {/* Right Actions: Sound Toggle, Theme Toggle & Quick CTA */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Sound Synthesizer Toggle */}
          <SoundToggle />

          {/* Theme Switcher Toggle */}
          <ThemeToggle />

          <Link
            href="#contact"
            onClick={() => sound.playClick()}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-zinc-900 dark:bg-white hover:bg-yellow-500 dark:hover:bg-yellow-400 text-white dark:text-zinc-950 font-mono text-xs font-bold transition-all shadow-sm active:scale-95 cursor-pointer"
          >
            <span>HUBUNGI</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>

          {/* Mobile Menu Hamburger Button */}
          <button
            type="button"
            suppressHydrationWarning
            onClick={() => {
              sound.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="md:hidden p-2 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-yellow-500 transition-colors cursor-pointer"
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
            className="absolute top-18 left-4 right-4 bg-white/95 dark:bg-zinc-950/95 border border-zinc-200 dark:border-zinc-800 backdrop-blur-2xl rounded-2xl p-5 shadow-2xl pointer-events-auto md:hidden"
          >
            <div className="flex flex-col gap-2 font-mono text-sm">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => {
                      sound.playClick();
                      setMobileMenuOpen(false);
                    }}
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
