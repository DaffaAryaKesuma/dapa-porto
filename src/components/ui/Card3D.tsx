'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface Card3DProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'yellow' | 'mint' | 'cyan' | 'default';
  cornerAccents?: boolean;
}

export function Card3D({
  children,
  className,
  glowColor = 'yellow',
  cornerAccents = true,
  ...props
}: Card3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation (-10 to 10 deg)
    const rotX = -((y - centerY) / centerY) * 9;
    const rotY = ((x - centerX) / centerX) * 9;

    setRotateX(rotX);
    setRotateY(rotY);

    // Glare position percentage
    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;
    setGlarePosition({ x: glareX, y: glareY, opacity: 0.18 });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlarePosition((prev) => ({ ...prev, opacity: 0 }));
  };

  const glowStyles = {
    yellow: 'hover:border-yellow-500/50 hover:shadow-[0_0_30px_rgba(234,179,8,0.15)]',
    mint: 'hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(52,211,153,0.15)]',
    cyan: 'hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]',
    default: 'hover:border-zinc-500/50 hover:shadow-lg',
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
      }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 30,
      }}
      className={cn(
        'relative rounded-xl border border-zinc-200/90 dark:border-white/10 bg-white/80 dark:bg-[#0d0d12]/80 backdrop-blur-xl transition-colors duration-200 overflow-hidden transform-style-3d group select-none',
        glowStyles[glowColor],
        className
      )}
      {...(props as any)}
    >
      {/* Specular Glare Layer */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-10"
        style={{
          opacity: glarePosition.opacity,
          background: `radial-gradient(circle 240px at ${glarePosition.x}% ${glarePosition.y}%, rgba(255,255,255,0.4), transparent 80%)`,
        }}
      />

      {/* Industrial Corner Bracket Accents */}
      {cornerAccents && (
        <>
          <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-yellow-500/80 z-20 pointer-events-none" />
          <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-yellow-500/80 z-20 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b-2 border-l-2 border-yellow-500/80 z-20 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-yellow-500/80 z-20 pointer-events-none" />
        </>
      )}

      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  );
}
