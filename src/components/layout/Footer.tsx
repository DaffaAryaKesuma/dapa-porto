'use client';

import { useState, useEffect } from 'react';
import { Mail, ArrowUp, Cpu, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';
import { PERSONAL_INFO } from '@/data/portfolioData';

export function Footer() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString('id-ID', {
        timeZone: 'Asia/Jakarta',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      setTime(`${timeStr} WIB`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-zinc-200 dark:border-white/10 bg-white/50 dark:bg-[#060609]/80 backdrop-blur-2xl transition-colors relative z-10 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[150px] bg-yellow-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5 font-mono text-base font-bold text-zinc-950 dark:text-white">
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 animate-pulse" />
              <span>DAFFA ARYA KESUMA</span>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-md font-sans leading-relaxed">
              Full-Stack Web Developer berdedikasi membangun aplikasi web modern, arsitektur decoupled berkinerja tinggi, dan solusi digital yang presisi.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-900/80 border border-zinc-200 dark:border-white/10 text-xs font-mono text-zinc-700 dark:text-zinc-300">
              <Cpu className="w-3.5 h-3.5 text-yellow-500" />
              <span>LOCAL TIME: {time || '00:00:00 WIB'}</span>
            </div>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-zinc-900 dark:text-zinc-200 font-bold mb-4">
              // NAVIGASI CEPAT
            </h4>
            <ul className="space-y-2.5 font-mono text-xs text-zinc-600 dark:text-zinc-400">
              <li>
                <a href="#about" className="hover:text-yellow-500 transition-colors">
                  01. Tentang Saya
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-yellow-500 transition-colors">
                  02. Keahlian &amp; Stack
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-yellow-500 transition-colors">
                  03. Proyek &amp; Portofolio
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-yellow-500 transition-colors">
                  04. Hubungi Saya
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-zinc-900 dark:text-zinc-200 font-bold mb-4">
              // SAMBUNGAN KONEKSI
            </h4>
            <div className="flex flex-col gap-2.5">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-xs font-mono text-zinc-600 dark:text-zinc-400 hover:text-yellow-500 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>github.com/DaffaAryaKesuma</span>
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-xs font-mono text-zinc-600 dark:text-zinc-400 hover:text-yellow-500 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>linkedin.com/in/daffa-arya-kesuma</span>
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-2.5 text-xs font-mono text-zinc-600 dark:text-zinc-400 hover:text-yellow-500 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div className="flex items-center gap-1.5 text-center sm:text-left">
            <span>&copy; {new Date().getFullYear()} Daffa Arya Kesuma. Built with Next.js 16, Three.js, Tailwind CSS &amp; Framer Motion.</span>
          </div>

          <button
            type="button"
            suppressHydrationWarning
            onClick={scrollToTop}
            className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300 hover:text-yellow-500 transition-colors px-4 py-2 rounded-full border border-zinc-200 dark:border-white/10 bg-zinc-100 dark:bg-zinc-900/90 cursor-pointer shadow-sm hover:scale-105 active:scale-95 duration-200"
          >
            <span>KEMBALI KE ATAS</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
