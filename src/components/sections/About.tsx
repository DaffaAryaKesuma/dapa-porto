'use client';

import { motion } from 'framer-motion';
import {
  Code2,
  Database,
  Layers,
  Zap,
  Server,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Globe,
  Terminal,
} from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card3D } from '@/components/ui/Card3D';
import { Badge } from '@/components/ui/Badge';
import { TextReveal } from '@/components/ui/TextReveal';
import { GlitchText } from '@/components/ui/GlitchText';
import { ArchitectureBenchmark } from '@/components/ui/ArchitectureBenchmark';
import { XRayTag } from '@/components/ui/XRayInspector';
import { PERSONAL_INFO } from '@/data/portfolioData';

export function About() {
  const principles = [
    {
      title: 'Decoupled System Architecture',
      description:
        'Spesialisasi dalam memisahkan backend REST API berkecepatan tinggi dengan antarmuka frontend SPA untuk skalabilitas dan fleksibilitas maksimal.',
      icon: Layers,
      color: 'yellow',
    },
    {
      title: 'Clean Code & Type-Safety',
      description:
        'Menulis kode yang terstruktur, mudah dipelihara (maintainable), modular, serta terlindungi dengan type-safety TypeScript.',
      icon: Code2,
      color: 'mint',
    },
    {
      title: 'Database Schema Optimization',
      description:
        'Merancang relasi database terindeks, skema 3NF, integritas transaksi ACID, dan optimasi query untuk waktu respon minimal.',
      icon: Database,
      color: 'cyan',
    },
    {
      title: 'Security & Token Authentication',
      description:
        'Implementasi autentikasi modern berbasis token (Sanctum), middleware proteksi route, dan enkripsi payload data.',
      icon: ShieldCheck,
      color: 'yellow',
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Dynamic Ambient Blur */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          number="01"
          title="Tentang Saya & Filosofi Rekayasa"
          subtitle="Menggabungkan pemikiran arsitektur perangkat lunak yang kokoh dengan implementasi antarmuka yang presisi."
        />

        {/* 3D Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-12">
          {/* Card 1: Core Bio & Developer Persona (8 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8 relative"
          >
            <XRayTag label="BENTO GRID COMPONENT" tech="React + Framer Motion" />
            <Card3D glowColor="yellow" className="p-6 sm:p-8 h-full flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-zinc-200 dark:border-white/10 pb-4">
                  <span className="font-mono text-xs text-yellow-600 dark:text-yellow-400 flex items-center gap-1.5 font-bold">
                    <Terminal className="w-3.5 h-3.5" />
                    DEVELOPER_MANIFESTO.md
                  </span>
                  <Badge variant="yellow" size="sm" dot>
                    FULL-STACK
                  </Badge>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-zinc-950 dark:text-white tracking-tight leading-snug">
                  <TextReveal as="span">
                    Membangun jembatan antara logika backend yang andal dan interaksi web yang responsif.
                  </TextReveal>
                </h3>

                <div className="space-y-3 text-sm text-zinc-600 dark:text-zinc-300 font-sans leading-relaxed">
                  {PERSONAL_INFO.aboutMe.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-zinc-200 dark:border-white/10 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
                <div className="flex items-center gap-2 text-zinc-500">
                  <Globe className="w-4 h-4 text-emerald-500" />
                  <span>BERBASIS DI: {PERSONAL_INFO.location}</span>
                </div>
                <div className="text-yellow-600 dark:text-yellow-400 font-bold">
                  <GlitchText text="// READY FOR WEB ENGINEERING CHALLENGES" />
                </div>
              </div>
            </Card3D>
          </motion.div>

          {/* Card 2: Technical Focus Capsule (4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-4 relative"
          >
            <XRayTag label="TELEMETRY METRICS" tech="Tailwind v4 JIT" />
            <Card3D glowColor="cyan" className="p-6 sm:p-8 h-full flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-zinc-200 dark:border-white/10 pb-4">
                  <span className="font-mono text-xs text-cyan-500 flex items-center gap-1.5 font-bold">
                    <Cpu className="w-3.5 h-3.5" />
                    SPESIALISASI TEKNIS
                  </span>
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                </div>

                <div className="space-y-4">
                  <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-white/5 space-y-1">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block font-bold">
                      ARSITEKTUR UTAMA
                    </span>
                    <h4 className="font-bold text-sm text-zinc-900 dark:text-white">
                      Decoupled Web Architecture
                    </h4>
                    <p className="text-xs text-zinc-500">
                      Vue.js SPA di frontend &amp; Laravel REST API di backend.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-white/5 space-y-1">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block font-bold">
                      STANDAR INTEGRITAS
                    </span>
                    <h4 className="font-bold text-sm text-zinc-900 dark:text-white">
                      Type-Safety &amp; Clean Code
                    </h4>
                    <p className="text-xs text-zinc-500">
                      TypeScript, ACID database transactions, dan RESTful standards.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-white/5 space-y-1">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block font-bold">
                      FOKUS SKALABILITAS
                    </span>
                    <h4 className="font-bold text-sm text-zinc-900 dark:text-white">
                      High-Throughput APIs
                    </h4>
                    <p className="text-xs text-zinc-500">
                      Sanctum token auth, indexed MySQL queries, dan Pinia state sync.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-200 dark:border-white/10 font-mono text-[11px] text-zinc-500 flex items-center justify-between">
                <span>SYSTEM STATUS</span>
                <span className="text-emerald-500 font-bold">100% OPERATIONAL</span>
              </div>
            </Card3D>
          </motion.div>

          {/* Card 3: 4 Engineering Pillars (12 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-12 relative"
          >
            <XRayTag label="PILLARS OF CODE" tech="CSS Grid 3D Tilt" />
            <Card3D glowColor="mint" className="p-6 sm:p-8">
              <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-widest text-zinc-500 font-bold">
                    // PRINSIP PENGEMBANGAN PERANGKAT LUNAK
                  </h4>
                  <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white mt-1">
                    Fondasi Utama dalam Membangun Solusi Web
                  </h3>
                </div>
                <Badge variant="mint" size="sm">
                  PRODUCTION TESTED
                </Badge>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {principles.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="p-5 rounded-xl border border-zinc-200/80 dark:border-white/5 bg-zinc-50/80 dark:bg-zinc-900/40 space-y-3"
                    >
                      <div className="w-10 h-10 rounded-lg bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-white/10 flex items-center justify-center text-yellow-500 shadow-sm">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="font-bold text-sm text-zinc-900 dark:text-white">
                        {item.title}
                      </h4>
                      <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </Card3D>
          </motion.div>

          {/* Card 4: LIVE ARCHITECTURE BENCHMARK DUEL (12 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-12 relative"
          >
            <XRayTag label="LIVE BENCHMARK DUEL" tech="Web Audio + Reactive Benchmark" />
            <ArchitectureBenchmark />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
