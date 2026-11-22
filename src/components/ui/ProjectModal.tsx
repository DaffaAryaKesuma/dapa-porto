'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ExternalLink,
  CheckCircle2,
  Cpu,
  Layers,
  Database,
  ShieldCheck,
  Zap,
  ArrowRight,
  TrendingUp,
  AlertCircle,
  Lightbulb,
  FileCode,
  Network,
  Table,
} from 'lucide-react';
import { GithubIcon } from '@/components/ui/Icons';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ProjectMockup } from '@/components/ui/ProjectMockup';
import { Project } from '@/data/portfolioData';
import { cn } from '@/lib/utils';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'database' | 'casestudy'>('overview');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const tabs = [
    { id: 'overview', label: 'Ringkasan & Fitur', icon: Layers },
    { id: 'architecture', label: 'Arsitektur & Alur Data', icon: Network },
    { id: 'database', label: 'Database & API', icon: Database },
    { id: 'casestudy', label: 'Problem & Solusi (Case Study)', icon: Lightbulb },
  ] as const;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop Blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-[#0c0c12] border border-zinc-200 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col z-10 font-sans"
        >
          {/* Modal Header Bar */}
          <div className="px-6 py-4 border-b border-zinc-200 dark:border-white/10 flex items-center justify-between gap-4 bg-zinc-50/80 dark:bg-zinc-900/60 backdrop-blur-md shrink-0">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="font-mono text-xs font-bold text-zinc-500 uppercase tracking-widest hidden sm:inline">
                // CASE STUDY DEEP DIVE
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] text-zinc-400 hidden sm:inline">ESC TO CLOSE</span>
              <button
                type="button"
                suppressHydrationWarning
                onClick={onClose}
                aria-label="Close modal"
                className="p-1.5 rounded-lg border border-zinc-200 dark:border-white/10 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Scrollable Content Area */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1">
            {/* Title & Category Header */}
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge
                  variant={
                    project.category === 'Frontend'
                      ? 'cyan'
                      : project.category === 'Backend'
                      ? 'yellow'
                      : 'mint'
                  }
                  size="sm"
                  dot
                >
                  {project.category}
                </Badge>
                {project.featured && (
                  <Badge variant="yellow" size="sm">
                    FEATURED SYSTEM
                  </Badge>
                )}
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 dark:text-white tracking-tight leading-tight">
                {project.title}
              </h2>
            </div>

            {/* Interactive Live UI Mockup Preview */}
            <div className="w-full shadow-lg rounded-xl overflow-hidden">
              <ProjectMockup projectId={project.id} />
            </div>

            {/* Navigation Tabs Inside Modal */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-zinc-100 dark:bg-zinc-900/80 border border-zinc-200 dark:border-white/10 font-mono text-xs">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    type="button"
                    suppressHydrationWarning
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={cn(
                      'flex items-center gap-2 px-3.5 py-2 rounded-lg font-bold transition-all cursor-pointer flex-1 sm:flex-initial text-center justify-center',
                      isActive
                        ? 'bg-white dark:bg-zinc-800 text-zinc-950 dark:text-white shadow-sm border border-zinc-200 dark:border-white/10'
                        : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white'
                    )}
                  >
                    <Icon className={cn('w-3.5 h-3.5', isActive ? 'text-yellow-500' : 'text-zinc-400')} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* TAB 1: OVERVIEW & FITUR */}
            {activeTab === 'overview' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div className="space-y-3">
                  <h3 className="font-mono text-xs font-bold text-yellow-600 dark:text-yellow-400 uppercase tracking-widest">
                    // DESKRIPSI SISTEM
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed font-sans">
                    {project.longDescription || project.description}
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="font-mono text-xs font-bold text-zinc-900 dark:text-zinc-200 uppercase tracking-wider">
                    Fitur &amp; Kemampuan Utama:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.features.map((feat, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-white/5 flex items-start gap-3"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-xs text-zinc-700 dark:text-zinc-300 font-sans leading-relaxed">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Badges */}
                <div className="space-y-2.5 pt-2">
                  <h3 className="font-mono text-xs font-bold text-zinc-900 dark:text-zinc-200 uppercase tracking-wider">
                    Teknologi &amp; Framework:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" size="md">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 2: ARSITEKTUR & ALUR DATA */}
            {activeTab === 'architecture' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div className="space-y-3">
                  <h3 className="font-mono text-xs font-bold text-yellow-600 dark:text-yellow-400 uppercase tracking-widest">
                    // DIAGRAM ALUR DATA (DECOUPLED PIPELINE)
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-sans">
                    Arsitektur decoupled memisahkan presentation layer di client-side dengan business logic &amp; data persistence di backend API.
                  </p>
                </div>

                <div className="space-y-2 font-mono">
                  {project.caseStudy?.architectureDiagram?.map((step, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-900/80 border border-zinc-200 dark:border-white/10 flex items-center justify-between gap-3 text-xs"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-yellow-500/20 border border-yellow-500/40 text-yellow-500 flex items-center justify-center font-bold text-xs">
                          {idx + 1}
                        </span>
                        <span className="text-zinc-900 dark:text-zinc-200 font-bold">{step}</span>
                      </div>
                      <span className="text-emerald-400 text-[10px] hidden sm:inline">PASSIVE / ACTIVE</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* TAB 3: SCHEMA DATABASE & API */}
            {activeTab === 'database' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                {/* Database Tables */}
                <div className="space-y-3">
                  <h3 className="font-mono text-xs font-bold text-yellow-600 dark:text-yellow-400 uppercase tracking-widest flex items-center gap-2">
                    <Table className="w-4 h-4 text-yellow-500" />
                    RELATIONAL DATABASE SCHEMA (3NF)
                  </h3>
                  <div className="space-y-2 font-mono text-xs">
                    {project.caseStudy?.databaseSchema?.map((tbl, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900/80 border border-zinc-200 dark:border-white/10"
                      >
                        <div className="flex items-center justify-between pb-1 mb-1 border-b border-zinc-200 dark:border-zinc-800">
                          <span className="text-emerald-500 dark:text-emerald-400 font-bold">
                            table: {tbl.table}
                          </span>
                          <span className="text-zinc-400 text-[10px]">InnoDB / Indexed</span>
                        </div>
                        <p className="text-[11px] text-zinc-600 dark:text-zinc-300 truncate">
                          {tbl.columns}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* REST API Endpoints */}
                <div className="space-y-3 pt-2">
                  <h3 className="font-mono text-xs font-bold text-zinc-900 dark:text-zinc-200 uppercase tracking-wider flex items-center gap-2">
                    <Network className="w-4 h-4 text-cyan-400" />
                    RESTful API Endpoints:
                  </h3>
                  <div className="space-y-2 font-mono text-xs">
                    {project.caseStudy?.keyEndpoints?.map((ep, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-zinc-950 text-zinc-200 border border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                      >
                        <div className="flex items-center gap-2.5">
                          <span
                            className={cn(
                              'px-2 py-0.5 rounded text-[10px] font-bold',
                              ep.method === 'POST' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-emerald-500/20 text-emerald-400'
                            )}
                          >
                            {ep.method}
                          </span>
                          <span className="font-bold text-zinc-100">{ep.path}</span>
                        </div>
                        <span className="text-[11px] text-zinc-400 font-sans">{ep.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 4: PROBLEM & SOLUSI (CASE STUDY) */}
            {activeTab === 'casestudy' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                {/* Challenge Box */}
                <div className="p-5 rounded-xl bg-red-500/10 border border-red-500/20 space-y-2">
                  <div className="flex items-center gap-2 text-red-600 dark:text-red-400 font-mono text-xs font-bold uppercase">
                    <AlertCircle className="w-4 h-4" />
                    <span>Tantangan Rekayasa (The Challenge):</span>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 font-sans leading-relaxed">
                    {project.caseStudy?.challenge || project.description}
                  </p>
                </div>

                {/* Solution Box */}
                <div className="p-5 rounded-xl bg-yellow-500/10 border border-yellow-500/20 space-y-2">
                  <div className="flex items-center gap-2 text-yellow-600 dark:text-yellow-400 font-mono text-xs font-bold uppercase">
                    <Lightbulb className="w-4 h-4" />
                    <span>Solusi Arsitektur (The Engineering Solution):</span>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 font-sans leading-relaxed">
                    {project.caseStudy?.solution || project.description}
                  </p>
                </div>

                {/* Impact Box */}
                <div className="p-5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 space-y-2">
                  <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-mono text-xs font-bold uppercase">
                    <TrendingUp className="w-4 h-4" />
                    <span>Hasil &amp; Dampak Terukur (Measurable Impact):</span>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 font-sans leading-relaxed">
                    {project.caseStudy?.impact || 'Peningkatan efisiensi operasional dan reliabilitas sistem.'}
                  </p>
                </div>
              </motion.div>
            )}
          </div>

          {/* Modal Footer Actions */}
          <div className="px-6 py-4 border-t border-zinc-200 dark:border-white/10 flex flex-wrap items-center justify-between gap-3 bg-zinc-50/80 dark:bg-zinc-900/60 backdrop-blur-md shrink-0">
            <div className="flex flex-wrap items-center gap-2.5">
              {project.githubFrontendUrl && (
                <Button
                  href={project.githubFrontendUrl}
                  variant="secondary"
                  size="sm"
                  icon={<GithubIcon className="w-3.5 h-3.5" />}
                  className="font-mono text-xs font-bold"
                >
                  Frontend Repo
                </Button>
              )}

              {project.githubBackendUrl && (
                <Button
                  href={project.githubBackendUrl}
                  variant="secondary"
                  size="sm"
                  icon={<GithubIcon className="w-3.5 h-3.5" />}
                  className="font-mono text-xs font-bold"
                >
                  Backend Repo
                </Button>
              )}

              {project.githubUrl && (
                <Button
                  href={project.githubUrl}
                  variant="secondary"
                  size="sm"
                  icon={<GithubIcon className="w-3.5 h-3.5" />}
                  className="font-mono text-xs font-bold"
                >
                  GitHub Repo
                </Button>
              )}

              {project.demoUrl && (
                <Button
                  href={project.demoUrl}
                  variant="primary"
                  size="sm"
                  icon={<ExternalLink className="w-3.5 h-3.5" />}
                  className="font-mono text-xs font-bold shadow-md shadow-yellow-500/20"
                >
                  Live Demo
                </Button>
              )}
            </div>

            <Button
              onClick={onClose}
              variant="ghost"
              size="sm"
              className="font-mono text-xs uppercase"
            >
              Tutup Modal
            </Button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
