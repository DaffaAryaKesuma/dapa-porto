'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download, Terminal, Layers, ShieldCheck, Zap, Activity, Cpu, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { TextReveal } from '@/components/ui/TextReveal';
import { GlitchText } from '@/components/ui/GlitchText';
import { EngineMesh3D } from '@/components/3d/EngineMesh3D';
import { ArchitectureSimulator } from '@/components/ui/ArchitectureSimulator';
import { PERSONAL_INFO } from '@/data/portfolioData';

export function Hero() {
  const stats = [
    { label: 'ARCHITECTURE', value: 'Decoupled SPA + API' },
    { label: 'BACKEND REST API', value: 'Laravel 11' },
    { label: 'FRONTEND SPA', value: 'Vue.js 3 + Next.js' },
    { label: 'SYSTEM DESIGN', value: 'Clean & Scalable' },
  ];

  return (
    <section
      id="home"
      className="min-h-screen pt-32 pb-24 relative flex flex-col justify-center overflow-hidden"
    >
      {/* 1. IMMERSIVE FULL-SCREEN 3D WEBGL ENGINE BACKGROUND */}
      <div className="absolute inset-0 w-full h-full z-0 opacity-80 dark:opacity-75 pointer-events-none">
        <EngineMesh3D />
      </div>

      {/* 2. DYNAMIC AMBIENT AURORA GLOW LAYERS */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-gradient-to-tr from-yellow-500/15 via-emerald-500/10 to-cyan-500/10 blur-[150px] pointer-events-none rounded-full z-0" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-yellow-500/10 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* 3. HERO CONTENT CONTAINER */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Top Live Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 mb-6"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 dark:bg-zinc-950/70 border border-zinc-200 dark:border-white/10 backdrop-blur-xl shadow-md">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <GlitchText
              text="SYS_STATUS: READY // FULL-STACK WEB DEVELOPER"
              className="text-xs text-zinc-800 dark:text-zinc-200 font-bold tracking-wider"
            />
          </div>
        </motion.div>

        {/* Hero Headline & Core Intro */}
        <div className="max-w-3xl space-y-6 mb-12">
          <div className="space-y-3">
            <span className="font-mono text-xs sm:text-sm font-bold text-yellow-600 dark:text-yellow-400 uppercase tracking-widest block">
              // FULL-STACK WEB DEVELOPER
            </span>

            {/* Kinetic Typography Masked Reveal */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-zinc-950 dark:text-white">
              <TextReveal as="span" delay={0.05}>
                Membangun Sistem Web Berkinerja Tinggi &amp;
              </TextReveal>{' '}
              <span className="shimmer-text font-black inline-block">
                Arsitektur Skalabel.
              </span>
            </h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-base sm:text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed font-sans"
          >
            Spesialisasi dalam merancang <strong className="text-zinc-950 dark:text-white font-semibold">arsitektur decoupled</strong>—menghubungkan antarmuka interaktif <em>Vue.js / Next.js</em> dengan backend <em>Laravel RESTful API</em> yang aman dan berkecepatan tinggi.
          </motion.p>

          {/* CTA Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-wrap items-center gap-3.5 pt-2"
          >
            <Button
              href="#projects"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
              className="shadow-xl shadow-yellow-500/25 uppercase font-bold"
            >
              Lihat Proyek
            </Button>

            <Button
              href={PERSONAL_INFO.cvUrl}
              download="cv-daffa-arya-kesuma.pdf"
              variant="secondary"
              size="lg"
              icon={<Download className="w-4 h-4" />}
              className="uppercase font-bold shadow-md"
            >
              Unduh CV
            </Button>
          </motion.div>

          {/* Micro Ticker Specs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="pt-6 border-t border-zinc-200 dark:border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4"
          >
            {stats.map((s, idx) => (
              <div key={idx} className="space-y-0.5">
                <span className="text-[9px] font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider block font-semibold">
                  {s.label}
                </span>
                <GlitchText
                  text={s.value}
                  className="text-xs font-bold text-zinc-900 dark:text-zinc-200 truncate"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Live Decoupled Architecture Simulator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="w-full shadow-2xl"
        >
          <ArchitectureSimulator />
        </motion.div>
      </div>
    </section>
  );
}
