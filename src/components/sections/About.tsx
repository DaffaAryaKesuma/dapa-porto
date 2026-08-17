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
          title="Tentang Saya"
          subtitle="Merancang dan membangun arsitektur web modern dengan standar performa tinggi, kebersihan kode, dan skalabilitas data."
        />

        {/* 3D Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-12">
          {/* Bento Card 1: Decoupled Architecture Core - 7 Cols */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-7"
          >
            <Card3D glowColor="yellow" className="p-6 sm:p-8 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-6">
                  <Badge variant="yellow" dot size="sm">
                    CORE EXPERTISE
                  </Badge>
                  <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400">
                    DECOUPLED // FULL-STACK
                  </span>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-zinc-950 dark:text-white tracking-tight">
                    <TextReveal as="span">
                      Fokus pada Arsitektur Web Skalabel &amp; Efisien
                    </TextReveal>
                  </h3>

                  <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-sans">
                    Saya adalah seorang <strong className="text-zinc-950 dark:text-white font-semibold">Full-Stack Web Developer</strong> dengan latar belakang pendidikan Informatika. Saya fokus dalam merancang antarmuka pengguna yang cepat dan responsif serta arsitektur backend RESTful API yang terstruktur dengan baik.
                  </p>

                  <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-sans">
                    Spesialisasi utama saya terletak pada perancangan arsitektur <strong className="text-yellow-600 dark:text-yellow-400 font-semibold">decoupled</strong>—menghubungkan antarmuka frontend Single Page Application (SPA) berbasis <em>Vue.js / Next.js</em> dengan backend <em>Laravel REST API</em> yang aman dan berkinerja tinggi.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-zinc-200 dark:border-white/10 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-zinc-500 font-semibold">Keahlian Kunci:</span>
                {['Vue.js 3', 'Laravel 11', 'REST API', 'MySQL', 'Next.js', 'Tailwind CSS'].map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[11px] px-2.5 py-1 rounded bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Card3D>
          </motion.div>

          {/* Bento Card 2: Clean Code & High Performance - 5 Cols */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-5"
          >
            <Card3D glowColor="cyan" className="p-6 sm:p-8 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-6">
                  <Badge variant="cyan" dot size="sm">
                    ENGINEERING VALUES
                  </Badge>
                  <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400">
                    CLEAN CODE
                  </span>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-zinc-950 dark:text-white tracking-tight">
                    <TextReveal as="span">
                      Standar Kualitas &amp; Integritas Data
                    </TextReveal>
                  </h3>

                  <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-sans">
                    Bagi saya, setiap baris kode harus ditulis dengan standar keterbacaan tinggi, modular, dan terstruktur agar memudahkan kolaborasi tim serta pemeliharaan jangka panjang.
                  </p>

                  <div className="space-y-2.5 pt-2 font-mono text-xs">
                    <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Type-Safe &amp; Strict Linting Rules</span>
                    </div>
                    <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>ACID-Compliant Transactions</span>
                    </div>
                    <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Sub-50ms API Latency Target</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-zinc-200 dark:border-white/10 font-mono text-xs text-zinc-500 flex items-center justify-between">
                <span>PARADIGMA</span>
                <span className="font-bold text-cyan-500">MODULAR &amp; SCALABLE</span>
              </div>
            </Card3D>
          </motion.div>

          {/* Bento Card 3: 4 Engineering Pillars - Full 12 Cols */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-12"
          >
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
        </div>
      </div>
    </section>
  );
}
