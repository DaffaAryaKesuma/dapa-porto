'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2,
  Server,
  Layers,
  Globe,
  Palette,
  Cpu,
  Database,
  Zap,
  TerminalSquare,
  GitBranch,
  Send,
  ArrowLeftRight,
  Terminal,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card3D } from '@/components/ui/Card3D';
import { Badge } from '@/components/ui/Badge';
import { SKILL_CATEGORIES } from '@/data/portfolioData';
import { cn } from '@/lib/utils';

export function Skills() {
  const [activeTab, setActiveTab] = useState<'frontend' | 'backend' | 'database' | 'tools'>('frontend');

  const getIcon = (iconName: string) => {
    const props = { className: 'w-5 h-5' };
    switch (iconName) {
      case 'Layers':
        return <Layers {...props} />;
      case 'Globe':
        return <Globe {...props} />;
      case 'Code2':
        return <Code2 {...props} />;
      case 'Palette':
        return <Palette {...props} />;
      case 'Cpu':
        return <Cpu {...props} />;
      case 'Server':
        return <Server {...props} />;
      case 'Network':
        return <ArrowLeftRight {...props} />;
      case 'Database':
        return <Database {...props} />;
      case 'Zap':
        return <Zap {...props} />;
      case 'TerminalSquare':
        return <TerminalSquare {...props} />;
      case 'GitBranch':
        return <GitBranch {...props} />;
      case 'Send':
        return <Send {...props} />;
      case 'ArrowLeftRight':
        return <ArrowLeftRight {...props} />;
      case 'Terminal':
        return <Terminal {...props} />;
      default:
        return <Cpu {...props} />;
    }
  };

  const activeCategory = SKILL_CATEGORIES.find((c) => c.categoryKey === activeTab) || SKILL_CATEGORIES[0];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          number="02"
          title="Matriks Teknologi & Keahlian"
          subtitle="Teknologi dan ekosistem teruji yang saya gunakan untuk merancang antarmuka cepat serta arsitektur backend andal."
        />

        {/* Tab Selector Capsule with spring layoutId */}
        <div className="flex justify-center mt-10 mb-12">
          <div className="inline-flex p-1.5 rounded-full bg-white/70 dark:bg-zinc-900/70 border border-zinc-200 dark:border-white/10 backdrop-blur-xl font-mono text-xs shadow-lg">
            {SKILL_CATEGORIES.map((cat) => {
              const isActive = activeTab === cat.categoryKey;
              return (
                <button
                  type="button"
                  suppressHydrationWarning
                  key={cat.categoryKey}
                  onClick={() => setActiveTab(cat.categoryKey)}
                  className={cn(
                    'relative px-4 sm:px-6 py-2 rounded-full font-bold uppercase tracking-wider transition-colors duration-200 cursor-pointer select-none',
                    isActive
                      ? 'text-zinc-950 dark:text-white'
                      : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white'
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeSkillTab"
                      transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                      className="absolute inset-0 bg-yellow-400 dark:bg-yellow-500/25 border border-yellow-400/80 rounded-full shadow-[0_0_15px_rgba(234,179,8,0.3)] z-0"
                    />
                  )}
                  <span className="relative z-10">{cat.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Skill Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {activeCategory.skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Card3D
                  glowColor={
                    activeTab === 'frontend'
                      ? 'yellow'
                      : activeTab === 'backend'
                      ? 'mint'
                      : 'cyan'
                  }
                  className="p-5 h-full flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="p-2.5 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 text-yellow-500">
                        {getIcon(skill.iconName)}
                      </div>

                      <Badge
                        variant={
                          skill.level === 'Advanced'
                            ? 'yellow'
                            : skill.level === 'Expert'
                            ? 'mint'
                            : 'default'
                        }
                        size="sm"
                      >
                        {skill.level}
                      </Badge>
                    </div>

                    <h4 className="text-base font-bold text-zinc-900 dark:text-white">
                      {skill.name}
                    </h4>

                    <p className="text-xs text-zinc-600 dark:text-zinc-400 font-sans leading-relaxed">
                      {skill.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-zinc-200 dark:border-white/5 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                    <span className="flex items-center gap-1 text-emerald-500">
                      <CheckCircle2 className="w-3 h-3" /> VERIFIED
                    </span>
                    <span>STANDAR PRODUKSI</span>
                  </div>
                </Card3D>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
