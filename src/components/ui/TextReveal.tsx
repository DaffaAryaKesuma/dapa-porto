'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';
}

export function TextReveal({
  children,
  className = '',
  delay = 0,
  as: Component = 'div',
}: TextRevealProps) {
  const words = children.split(' ');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: { y: '110%', opacity: 0 },
    visible: {
      y: '0%',
      opacity: 1,
      transition: {
        duration: 0.65,
        ease: [0.215, 0.61, 0.355, 1] as const,
      },
    },
  };

  return (
    <Component className={cn('inline-block overflow-hidden', className)}>
      <motion.span
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="inline-flex flex-wrap gap-x-[0.25em]"
      >
        {words.map((word, index) => (
          <span key={index} className="inline-block overflow-hidden py-0.5">
            <motion.span
              variants={wordVariants}
              className="inline-block transform-style-3d will-change-transform"
            >
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Component>
  );
}
