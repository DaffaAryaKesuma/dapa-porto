'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  CheckCircle2,
  Cpu,
  ArrowUpRight,
  Zap,
  Layers,
  Sparkles,
} from 'lucide-react';
import { GithubIcon } from '@/components/ui/Icons';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card3D } from '@/components/ui/Card3D';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { TextReveal } from '@/components/ui/TextReveal';
import { GlitchText } from '@/components/ui/GlitchText';
import { PROJECTS } from '@/data/portfolioData';
import { cn } from '@/lib/utils';

export function Projects() {
  const [selectedFilter, setSelectedFilter] = useState<'All' | 'Full-Stack' | 'Frontend' | 'Backend'>('All');

  const filterOptions: ('All' | 'Full-Stack' | 'Frontend' | 'Backend')[] = [
    'All',
    'Full-Stack',
    'Frontend',
    'Backend',
  ];

  const filteredProjects =
    selectedFilter === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedFilter);

  const featuredProject = PROJECTS.find((p) => p.featured);
  const regularProjects = filteredProjects.filter(
    (p) => !p.featured || selectedFilter !== 'All'
  );

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Ambient background mesh */}
      <div className="absolute top-1/3 right-5 w-96 h-96 bg-yellow-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          number="03"
          title="Portofolio Proyek Terpilih"
          subtitle="Kompilasi proyek sistem web end-to-end, REST API backend, dan antarmuka interaktif yang telah saya kembangkan."
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8 mb-12">
          <div className="inline-flex flex-wrap p-1.5 rounded-full bg-white/70 dark:bg-zinc-900/70 border border-zinc-200 dark:border-white/10 backdrop-blur-xl font-mono text-xs shadow-md">
            {filterOptions.map((filter) => {
              const isActive = selectedFilter === filter;
              return (
                <button
                  type="button"
                  suppressHydrationWarning
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={cn(
                    'relative px-4 py-2 rounded-full font-bold uppercase tracking-wider transition-colors duration-200 cursor-pointer select-none',
                    isActive
                      ? 'text-zinc-950 dark:text-white'
                      : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white'
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeProjectFilter"
                      transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                      className="absolute inset-0 bg-yellow-400 dark:bg-yellow-500/25 border border-yellow-400/80 rounded-full shadow-[0_0_15px_rgba(234,179,8,0.3)] z-0"
                    />
                  )}
                  <span className="relative z-10">
                    {filter} {filter === 'All' ? `(${PROJECTS.length})` : ''}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* FEATURED HIGHLIGHT PROJECT (KRGARAGE) WITH CONIC ROTATING BORDER */}
        {(selectedFilter === 'All' || selectedFilter === 'Full-Stack') && featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="mb-3 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 animate-ping" />
              <span className="font-mono text-xs font-bold text-yellow-600 dark:text-yellow-400 uppercase tracking-widest">
                // FEATURED SYSTEM ARCHITECTURE
              </span>
            </div>

            {/* 3D Card with Conic Spinning Border Wrapper */}
            <div
              data-cursor="explore"
              className="p-[2px] rounded-2xl conic-gradient-border shadow-2xl cursor-pointer"
            >
              <Card3D
                glowColor="yellow"
                className="p-6 sm:p-10 bg-white/95 dark:bg-[#0c0c12]/95 backdrop-blur-2xl rounded-2xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant="yellow" size="md" dot>
                        FEATURED HIGHLIGHT
                      </Badge>
                      <Badge variant="default" size="md">
                        {featuredProject.category}
                      </Badge>
                      <span className="text-[11px] font-mono text-emerald-500 font-bold ml-auto">
                        LIVE REPOSITORIES
                      </span>
                    </div>

                    <div>
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-950 dark:text-white tracking-tight leading-tight">
                        <TextReveal as="span">
                          {featuredProject.title}
                        </TextReveal>
                      </h3>
                      <p className="font-mono text-xs text-yellow-600 dark:text-yellow-400 mt-1.5">
                        <GlitchText text="KRGARAGE // DECOUPLED ENTERPRISE ERP & MANAGEMENT SYSTEM" />
                      </p>
                    </div>

                    <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed font-sans">
                      {featuredProject.longDescription || featuredProject.description}
                    </p>

                    <div className="space-y-2.5 pt-2">
                      <h4 className="font-mono text-xs font-bold text-zinc-900 dark:text-zinc-200 uppercase tracking-wider">
                        Fitur Utama &amp; Integritas Data:
                      </h4>
                      <ul className="space-y-2">
                        {featuredProject.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 font-sans"
                          >
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {featuredProject.tags.map((tag) => (
                        <Badge key={tag} variant="outline" size="sm">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Dual Action Repository Buttons */}
                    <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-zinc-200 dark:border-white/10">
                      {featuredProject.githubFrontendUrl && (
                        <Button
                          href={featuredProject.githubFrontendUrl}
                          variant="secondary"
                          size="md"
                          icon={<GithubIcon className="w-4 h-4" />}
                          className="font-mono text-xs font-bold"
                        >
                          Frontend Repo (Vue.js)
                        </Button>
                      )}

                      {featuredProject.githubBackendUrl && (
                        <Button
                          href={featuredProject.githubBackendUrl}
                          variant="secondary"
                          size="md"
                          icon={<GithubIcon className="w-4 h-4" />}
                          className="font-mono text-xs font-bold"
                        >
                          Backend Repo (Laravel)
                        </Button>
                      )}

                      {featuredProject.demoUrl && (
                        <Button
                          href={featuredProject.demoUrl}
                          variant="primary"
                          size="md"
                          icon={<ExternalLink className="w-4 h-4" />}
                          className="font-mono text-xs font-bold shadow-lg shadow-yellow-500/20"
                        >
                          Live Demo
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Right Telemetry Column */}
                  <div className="lg:col-span-5 flex flex-col justify-between gap-5 h-full">
                    <div className="p-5 rounded-xl bg-zinc-100/90 dark:bg-zinc-900/90 border border-zinc-200 dark:border-white/10 font-mono space-y-4 shadow-md">
                      <div className="flex items-center justify-between text-xs text-zinc-500 pb-3 border-b border-zinc-200 dark:border-white/10">
                        <span className="flex items-center gap-2 text-zinc-900 dark:text-zinc-200 font-bold">
                          <Cpu className="w-4 h-4 text-yellow-500" />
                          TELEMETRI SISTEM
                        </span>
                        <span className="text-emerald-400 font-bold flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                          OPTIMAL
                        </span>
                      </div>

                      <div className="space-y-3">
                        {featuredProject.metrics?.map((metric, i) => (
                          <div
                            key={i}
                            className="flex items-center justify-between text-xs border-b border-zinc-200/60 dark:border-zinc-800/60 pb-2.5 last:border-b-0"
                          >
                            <span className="text-zinc-500">{metric.label}</span>
                            <span className="font-bold text-zinc-900 dark:text-zinc-200">
                              {metric.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-zinc-950 text-zinc-300 border border-zinc-800 font-mono text-xs space-y-2">
                      <div className="text-yellow-400 font-bold flex items-center gap-1.5">
                        <Zap className="w-3.5 h-3.5" />
                        <span>Decoupled Pattern (Vue.js &rarr; Laravel API)</span>
                      </div>
                      <p className="text-[11px] text-zinc-400 font-sans leading-relaxed">
                        Frontend SPA berkomunikasi secara asynchronous via Axios interceptors dengan token-based authentication (Sanctum).
                      </p>
                    </div>
                  </div>
                </div>
              </Card3D>
            </div>
          </motion.div>
        )}

        {/* Regular Projects 3D Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-zinc-200 dark:border-white/10 pb-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-zinc-500 font-bold">
              // DAFTAR PROYEK LAINNYA ({regularProjects.length})
            </h4>
          </div>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {regularProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  data-cursor="explore"
                >
                  <Card3D
                    glowColor={
                      project.category === 'Frontend'
                        ? 'cyan'
                        : project.category === 'Backend'
                        ? 'yellow'
                        : 'mint'
                    }
                    className="p-6 flex flex-col justify-between h-full group"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2 mb-4">
                        <Badge
                          variant={
                            project.category === 'Frontend'
                              ? 'cyan'
                              : project.category === 'Backend'
                              ? 'yellow'
                              : 'mint'
                          }
                          size="sm"
                        >
                          {project.category}
                        </Badge>

                        <div className="flex items-center gap-2.5">
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="GitHub Repository"
                              className="text-zinc-400 hover:text-yellow-500 transition-colors p-1"
                            >
                              <GithubIcon className="w-4 h-4" />
                            </a>
                          )}
                          {project.demoUrl && (
                            <a
                              href={project.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="Live Demo"
                              className="text-zinc-400 hover:text-yellow-500 transition-colors p-1"
                            >
                              <ArrowUpRight className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      </div>

                      <h4 className="font-bold text-base text-zinc-900 dark:text-white group-hover:text-yellow-500 transition-colors">
                        {project.title}
                      </h4>

                      <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-2.5 line-clamp-3 leading-relaxed font-sans">
                        {project.description}
                      </p>

                      <ul className="mt-4 space-y-1.5">
                        {project.features.slice(0, 2).map((feat, idx) => (
                          <li
                            key={idx}
                            className="text-[11px] text-zinc-500 flex items-center gap-2 font-sans"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 shrink-0" />
                            <span className="truncate">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 pt-4 border-t border-zinc-200 dark:border-white/5">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-white/5"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card3D>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
