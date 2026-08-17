'use client';

import { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

export function CustomCursor() {
  const [cursorText, setCursorText] = useState('');
  const [cursorVariant, setCursorVariant] = useState<'default' | 'hover' | 'explore' | 'copy' | 'tilt'>('default');
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 450, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Check if device is touch-enabled
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const moveMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      // Check hovered element cursor attributes
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest('[data-cursor]') as HTMLElement | null;
      if (cursorTarget) {
        const type = cursorTarget.getAttribute('data-cursor');
        if (type === 'explore') {
          setCursorVariant('explore');
          setCursorText('EXPLORE ↗');
          return;
        } else if (type === 'copy') {
          setCursorVariant('copy');
          setCursorText('COPY @');
          return;
        } else if (type === 'tilt') {
          setCursorVariant('tilt');
          setCursorText('3D TILT');
          return;
        }
      }

      // Check standard interactive elements
      if (target.closest('a, button, input, textarea, [role="button"]')) {
        setCursorVariant('hover');
        setCursorText('');
      } else {
        setCursorVariant('default');
        setCursorText('');
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', moveMouse);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', moveMouse);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden select-none">
      {/* Trailing Fluid Cursor */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: cursorVariant === 'explore' || cursorVariant === 'copy' || cursorVariant === 'tilt' ? 1 : cursorVariant === 'hover' ? 1.4 : 1,
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        className="relative flex items-center justify-center pointer-events-none"
      >
        {cursorVariant === 'default' && (
          <div className="w-3.5 h-3.5 rounded-full bg-yellow-400/90 shadow-[0_0_12px_rgba(234,179,8,0.8)] border border-black/20" />
        )}

        {cursorVariant === 'hover' && (
          <div className="w-8 h-8 rounded-full border border-yellow-400 bg-yellow-400/20 backdrop-blur-xs shadow-[0_0_15px_rgba(234,179,8,0.4)] flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
          </div>
        )}

        {(cursorVariant === 'explore' || cursorVariant === 'copy' || cursorVariant === 'tilt') && (
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.6, opacity: 0 }}
            className="px-3.5 py-1.5 rounded-full bg-zinc-950/90 dark:bg-white/90 text-yellow-400 dark:text-zinc-950 border border-yellow-400/50 shadow-2xl backdrop-blur-md font-mono text-[10px] font-extrabold tracking-widest whitespace-nowrap"
          >
            {cursorText}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
