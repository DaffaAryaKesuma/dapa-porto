'use client';

import { motion } from 'framer-motion';

export function Marquee() {
  const items = [
    'FULL-STACK WEB DEVELOPMENT',
    'DECOUPLED SYSTEM ARCHITECTURE',
    'VUE.JS 3 SPA',
    'LARAVEL 11 REST API',
    'NEXT.JS 16 APP ROUTER',
    'CLEAN CODE PRINCIPLES',
    'DATABASE OPTIMIZATION',
    'TOKEN-BASED SANCTUM AUTH',
    'TAILWIND CSS & TYPESCRIPT',
    'ACID COMPLIANT TRANSACTIONS',
  ];

  return (
    <div className="w-full py-5 bg-zinc-100/50 dark:bg-zinc-950/40 border-y border-zinc-200/80 dark:border-white/5 overflow-hidden backdrop-blur-md relative select-none">
      {/* Edge gradient fade masks */}
      <div className="absolute top-0 left-0 bottom-0 w-24 bg-gradient-to-r from-white dark:from-[#050508] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-white dark:from-[#050508] to-transparent z-10 pointer-events-none" />

      <div className="flex w-max">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 28,
            ease: 'linear',
            repeat: Infinity,
          }}
          className="flex items-center gap-8 whitespace-nowrap font-mono text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest"
        >
          {items.concat(items).map((item, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 shadow-[0_0_8px_#eab308]" />
              <span className="hover:text-yellow-500 dark:hover:text-white transition-colors">
                {item}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
