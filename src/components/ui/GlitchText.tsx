'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlitchTextProps {
  text: string;
  className?: string;
}

export function GlitchText({ text, className = '' }: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(false);
  const [displayText, setDisplayText] = useState(text);

  const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?/0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  const triggerGlitch = () => {
    if (isGlitching) return;
    setIsGlitching(true);
    let iterations = 0;

    const interval = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((char, index) => {
            if (index < iterations || char === ' ') {
              return text[index];
            }
            return glitchChars[Math.floor(Math.random() * glitchChars.length)];
          })
          .join('')
      );

      if (iterations >= text.length) {
        clearInterval(interval);
        setDisplayText(text);
        setIsGlitching(false);
      }

      iterations += 1 / 2;
    }, 28);
  };

  return (
    <motion.span
      onMouseEnter={triggerGlitch}
      className={cn('inline-block cursor-pointer select-none font-mono transition-colors duration-150', className)}
    >
      {displayText}
    </motion.span>
  );
}
