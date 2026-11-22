'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, EyeOff, Layers, Cpu, Sparkles, Terminal, Activity, Zap } from 'lucide-react';
import { useXRayStore } from '@/lib/xrayStore';
import { sound } from '@/lib/sound';
import { cn } from '@/lib/utils';

export function XRayInspector() {
  const { isXRayActive, toggleXRay } = useXRayStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleKeyDown = (e: KeyboardEvent) => {
      // Shortcut: Shift + X
      if (e.shiftKey && (e.key === 'X' || e.key === 'x')) {
        sound.playSwitch();
        toggleXRay();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [toggleXRay]);

  if (!mounted) return null;

  const handleToggle = () => {
    sound.playSwitch();
    toggleXRay();
  };

  return (
    <>
      {/* GLOBAL BLUEPRINT & TELEMETRY OVERLAY (WHEN X-RAY IS ACTIVE) */}
      <AnimatePresence>
        {isXRayActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 pointer-events-none z-[99990] overflow-hidden"
          >
            {/* Cyber Blueprint Grid Background */}
            <div
              className="absolute inset-0 opacity-25 dark:opacity-30"
              style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px',
              }}
            />

            {/* Corner Cyber HUD Target Marks */}
            <div className="absolute top-4 left-4 p-2 font-mono text-[10px] text-cyan-400 bg-black/80 border border-cyan-500/40 rounded-lg backdrop-blur-md space-y-1 shadow-lg shadow-cyan-500/10">
              <div className="flex items-center gap-1.5 font-bold">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <span>X-RAY BLUEPRINT HUD ACTIVE</span>
              </div>
              <p className="text-zinc-400 text-[9px]">ENGINE: Next.js 16.3.1 Turbopack</p>
              <p className="text-zinc-400 text-[9px]">CANVAS: Three.js WebGL Particle Buffer</p>
              <p className="text-zinc-400 text-[9px]">STATE: Zustand Store + SSR Hydration Safe</p>
            </div>

            <div className="absolute top-4 right-4 p-2 font-mono text-[10px] text-yellow-400 bg-black/80 border border-yellow-500/40 rounded-lg backdrop-blur-md space-y-1 shadow-lg shadow-yellow-500/10 hidden md:block">
              <div className="flex items-center gap-1.5 font-bold">
                <Activity className="w-3.5 h-3.5 text-yellow-400" />
                <span>REALTIME METRICS</span>
              </div>
              <p className="text-zinc-400 text-[9px]">AUDIO: Web Audio API Synthesizer</p>
              <p className="text-zinc-400 text-[9px]">PHYSICS: Framer Motion Spring Kinetics</p>
              <p className="text-zinc-400 text-[9px]">FPS TARGET: 60 FPS Stable VSync</p>
            </div>

            {/* Scanline Sweep Animation */}
            <motion.div
              initial={{ y: '-100%' }}
              animate={{ y: '200%' }}
              transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
              className="w-full h-32 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent pointer-events-none"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* FLOATING X-RAY TRIGGER BUTTON */}
      <div className="fixed bottom-6 left-6 z-[99995] font-mono select-none">
        <button
          type="button"
          suppressHydrationWarning
          onClick={handleToggle}
          aria-label="Toggle X-Ray Architecture Mode"
          className={cn(
            'group flex items-center gap-2.5 px-4 py-2.5 rounded-full border shadow-xl backdrop-blur-xl transition-all duration-300 cursor-pointer active:scale-95 text-xs font-bold',
            isXRayActive
              ? 'bg-cyan-950/90 text-cyan-300 border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.4)] animate-pulse'
              : 'bg-white/80 dark:bg-zinc-900/80 text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-white/10 hover:border-yellow-500/60 hover:text-yellow-600 dark:hover:text-yellow-400 shadow-zinc-900/10'
          )}
        >
          <div
            className={cn(
              'w-6 h-6 rounded-full flex items-center justify-center transition-colors',
              isXRayActive
                ? 'bg-cyan-500 text-black shadow-[0_0_10px_rgba(6,182,212,0.8)]'
                : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 group-hover:text-yellow-500'
            )}
          >
            {isXRayActive ? <Eye className="w-3.5 h-3.5" /> : <Layers className="w-3.5 h-3.5" />}
          </div>

          <div className="flex flex-col text-left">
            <span className="leading-none text-[11px] font-extrabold tracking-wider">
              {isXRayActive ? 'X-RAY: ACTIVE' : 'X-RAY INSPECTOR'}
            </span>
            <span className="text-[9px] text-zinc-400 font-normal leading-tight mt-0.5">
              Shift + X
            </span>
          </div>
        </button>
      </div>
    </>
  );
}

// Reusable Blueprint Annotation Tag for components
export function XRayTag({ label, tech }: { label: string; tech: string }) {
  const { isXRayActive } = useXRayStore();

  if (!isXRayActive) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className="absolute -top-3 -right-2 z-30 font-mono text-[9px] px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-400/80 shadow-md shadow-cyan-500/20 flex items-center gap-1 pointer-events-none select-none"
    >
      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
      <span className="font-bold">{label}</span>
      <span className="text-zinc-400">[{tech}]</span>
    </motion.div>
  );
}
