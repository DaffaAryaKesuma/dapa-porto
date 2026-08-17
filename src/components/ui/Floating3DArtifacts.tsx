'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Code2, Cpu, Zap, Layers, Database } from 'lucide-react';

export function Floating3DArtifacts() {
  const { scrollYProgress } = useScroll();

  // Distinct parallax depths
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -220]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -320]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [360, 0]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Floating Code Node (Left Top Parallax) */}
      <motion.div
        style={{ y: y1, rotate: rotate1 }}
        className="absolute top-1/4 -left-12 sm:left-6 opacity-30 dark:opacity-20 text-yellow-500"
      >
        <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full border-2 border-dashed border-yellow-500/50 flex items-center justify-center p-4 backdrop-blur-xs">
          <div className="w-16 h-16 rounded-full border border-yellow-400/80 flex items-center justify-center">
            <Code2 className="w-6 h-6 text-yellow-400" />
          </div>
        </div>
      </motion.div>

      {/* Floating Cyber CPU Core (Right Mid Parallax) */}
      <motion.div
        style={{ y: y2, rotate: rotate2 }}
        className="absolute top-1/2 -right-8 sm:right-10 opacity-30 dark:opacity-20 text-emerald-400"
      >
        <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl border border-emerald-500/40 rotate-45 flex items-center justify-center backdrop-blur-xs shadow-[0_0_30px_rgba(52,211,153,0.1)]">
          <div className="w-16 h-16 rounded-xl border border-emerald-400/60 -rotate-12 flex items-center justify-center">
            <Cpu className="w-6 h-6 text-emerald-400" />
          </div>
        </div>
      </motion.div>

      {/* Floating Database Node (Bottom Left Parallax) */}
      <motion.div
        style={{ y: y3 }}
        className="absolute bottom-1/4 left-10 sm:left-24 opacity-25 dark:opacity-15 text-cyan-400"
      >
        <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-2 border-cyan-500/30 flex items-center justify-center p-3 animate-pulse-slow">
          <Database className="w-5 h-5 text-cyan-400" />
        </div>
      </motion.div>
    </div>
  );
}
