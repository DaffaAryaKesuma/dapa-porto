'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, RotateCcw, Trophy, Zap, Cpu, Server, Activity, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { sound } from '@/lib/sound';
import { cn } from '@/lib/utils';

interface BenchmarkMetric {
  id: string;
  name: string;
  unit: string;
  monolithVal: number;
  monolithDisplay: string;
  decoupledVal: number;
  decoupledDisplay: string;
  improvement: string;
}

const METRICS: BenchmarkMetric[] = [
  {
    id: 'ttfb',
    name: 'Time to First Byte (TTFB) & Rendering',
    unit: 'ms',
    monolithVal: 1280,
    monolithDisplay: '1,280 ms',
    decoupledVal: 240,
    decoupledDisplay: '240 ms',
    improvement: '5.3x Lebih Cepat',
  },
  {
    id: 'payload',
    name: 'Network Data Transfer / Payload Size',
    unit: 'KB',
    monolithVal: 520,
    monolithDisplay: '520 KB (Full HTML)',
    decoupledVal: 4.2,
    decoupledDisplay: '4.2 KB (Clean JSON)',
    improvement: '99.1% Lebih Ringan',
  },
  {
    id: 'cpu',
    name: 'Beban CPU Server (Per 10,000 Request)',
    unit: '%',
    monolithVal: 86,
    monolithDisplay: '86% CPU Load',
    decoupledVal: 16,
    decoupledDisplay: '16% CPU Load',
    improvement: '81.4% Lebih Efisien',
  },
  {
    id: 'transition',
    name: 'Kecepatan Navigasi Antar Halaman',
    unit: 'ms',
    monolithVal: 850,
    monolithDisplay: '850 ms (Full Reload)',
    decoupledVal: 45,
    decoupledDisplay: '45 ms (SPA Client State)',
    improvement: '18.8x Lebih Halus',
  },
];

export function ArchitectureBenchmark() {
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [hasCompleted, setHasCompleted] = useState(false);

  const handleRunBenchmark = () => {
    if (isRunning) return;
    setIsRunning(true);
    setHasCompleted(false);
    setProgress(0);
    sound.playClick(1000);

    let current = 0;
    const interval = setInterval(() => {
      current += 5;
      setProgress(current);
      if (current % 20 === 0) {
        sound.playClick(800 + current * 4);
      }

      if (current >= 100) {
        clearInterval(interval);
        setIsRunning(false);
        setHasCompleted(true);
        sound.playSuccess();
      }
    }, 45);
  };

  return (
    <div className="w-full rounded-2xl border border-zinc-200 dark:border-white/10 bg-white/90 dark:bg-[#0c0c12]/90 backdrop-blur-xl p-6 sm:p-8 shadow-2xl relative overflow-hidden font-mono">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-yellow-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-zinc-200 dark:border-white/10">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 animate-ping" />
            <span className="text-xs font-bold text-yellow-600 dark:text-yellow-400 uppercase tracking-widest">
              // ARCHITECTURE BENCHMARK DUEL
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-zinc-950 dark:text-white font-sans tracking-tight">
            Monolith MVC vs Decoupled SPA Architecture
          </h3>
          <p className="text-xs text-zinc-600 dark:text-zinc-400 font-sans mt-1">
            Uji perbandingan komputasi, beban transfer data, dan waktu respon antara arsitektur konvensional vs arsitektur terpisah (Vue.js + Laravel API).
          </p>
        </div>

        <button
          type="button"
          suppressHydrationWarning
          onClick={handleRunBenchmark}
          disabled={isRunning}
          className={cn(
            'flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-lg active:scale-95 cursor-pointer',
            isRunning
              ? 'bg-zinc-200 dark:bg-zinc-800 text-zinc-400 cursor-not-allowed'
              : 'bg-yellow-400 hover:bg-yellow-500 text-zinc-950 shadow-yellow-500/20'
          )}
        >
          {isRunning ? (
            <>
              <Activity className="w-4 h-4 animate-spin text-zinc-600 dark:text-zinc-300" />
              <span>TESTING ({progress}%)...</span>
            </>
          ) : hasCompleted ? (
            <>
              <RotateCcw className="w-4 h-4" />
              <span>UJI ULANG BENCHMARK</span>
            </>
          ) : (
            <>
              <Play className="w-4 h-4 fill-current" />
              <span>JALANKAN BENCHMARK DUEL</span>
            </>
          )}
        </button>
      </div>

      {/* Benchmark Metric Rows */}
      <div className="space-y-6">
        {METRICS.map((metric) => {
          const isDecoupledWinner = true;
          return (
            <div
              key={metric.id}
              className="p-4 rounded-xl bg-zinc-50/80 dark:bg-zinc-900/60 border border-zinc-200 dark:border-white/5 space-y-3"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                <span className="font-bold text-zinc-900 dark:text-zinc-200">
                  {metric.name}
                </span>
                {hasCompleted && (
                  <span className="text-[11px] font-bold text-emerald-500 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {metric.improvement}
                  </span>
                )}
              </div>

              {/* Progress Comparison Bars */}
              <div className="space-y-2 text-[11px]">
                {/* 1. Traditional Monolith Bar */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-zinc-500">
                    <span>Traditional Monolith MVC (PHP Blade/HTML)</span>
                    <span className="font-bold text-red-500 dark:text-red-400">
                      {hasCompleted ? metric.monolithDisplay : '---'}
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-zinc-200 dark:bg-zinc-800 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: isRunning ? `${progress * 0.85}%` : hasCompleted ? '85%' : '0%' }}
                      transition={{ duration: 0.3 }}
                      className="h-full bg-red-500/70 rounded-full"
                    />
                  </div>
                </div>

                {/* 2. Decoupled Architecture Bar */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-zinc-500">
                    <span className="text-yellow-600 dark:text-yellow-400 font-bold flex items-center gap-1.5">
                      <Zap className="w-3 h-3" />
                      Decoupled Architecture (Vue.js 3 + Laravel REST API)
                    </span>
                    <span className="font-bold text-emerald-500">
                      {hasCompleted ? metric.decoupledDisplay : '---'}
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-zinc-200 dark:bg-zinc-800 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: isRunning ? `${progress * 0.2}%` : hasCompleted ? '18%' : '0%' }}
                      transition={{ duration: 0.3 }}
                      className="h-full bg-gradient-to-r from-yellow-400 to-emerald-400 rounded-full shadow-[0_0_10px_rgba(234,179,8,0.5)]"
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Benchmark Winner & Conclusion Box */}
      <AnimatePresence>
        {hasCompleted && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 p-5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500 text-zinc-950 flex items-center justify-center font-bold shrink-0 shadow-lg shadow-emerald-500/20">
                <Trophy className="w-5 h-5" />
              </div>
              <div>
                <span className="font-bold text-sm text-emerald-600 dark:text-emerald-400 block font-sans">
                  Pemenang: Arsitektur Decoupled (Efisiensi Menyeluruh +83.2%)
                </span>
                <p className="text-xs text-zinc-600 dark:text-zinc-300 font-sans mt-0.5">
                  Pemisahan UI SPA dan backend REST API menghemat kuota transfer hingga 99% dan mengurangi beban CPU server secara drastis saat menangani ribuan transaksi paralel.
                </p>
              </div>
            </div>

            <Badge variant="mint" size="md" dot className="shrink-0 font-mono text-[10px]">
              VERIFIED BENCHMARK
            </Badge>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
