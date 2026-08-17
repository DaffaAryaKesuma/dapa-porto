'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface PreloaderProps {
  onComplete?: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [count, setCount] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // List of morphing 3D metallic/chrome/bubble images with transparent PNGs
  const morphImages = [
    { src: '/images/loader/heart.png', alt: '3D Bubble Wrapped Chrome Heart' },
    { src: '/images/loader/piston.png', alt: '3D Chrome 2-Stroke Engine Piston' },
    { src: '/images/loader/star.png', alt: '3D Metallic Blue Foil Star' },
    { src: '/images/loader/smiley.png', alt: '3D Chrome Metallic Smiley Balloon' },
  ];

  // Counter 000 -> 100
  useEffect(() => {
    const duration = 2200; // ~2.2 seconds total sequence
    const intervalTime = 20;
    const totalSteps = duration / intervalTime;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = Math.min(Math.round((step / totalSteps) * 100), 100);
      setCount(progress);

      if (progress >= 100) {
        clearInterval(timer);
        setTimeout(() => {
          setIsLoaded(true);
          if (onComplete) onComplete();
        }, 400);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  // Image rapid morphing cycle (every 110ms like noth.in)
  useEffect(() => {
    const imageTimer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % morphImages.length);
    }, 110);

    return () => clearInterval(imageTimer);
  }, [morphImages.length]);

  // Format number as 3 digits: e.g. 000, 011, 095, 100
  const formattedCount = String(count).padStart(3, '0');

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          key="nothin-loader"
          initial={{ opacity: 1 }}
          exit={{
            y: '-100%',
            opacity: 0.95,
            transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[9999] bg-[#000000] flex flex-col justify-between items-center py-12 px-6 select-none overflow-hidden"
        >
          {/* Top subtle placeholder spacer */}
          <div className="w-full flex justify-between items-center opacity-0 pointer-events-none">
            <span className="font-mono text-xs">DAFFA.DEV</span>
            <span className="font-mono text-xs">2026</span>
          </div>

          {/* Central Noth.in Style Typography & Morphing 3D Object */}
          <div className="relative flex items-center justify-center gap-3 sm:gap-6 md:gap-10">
            {/* Left Letter "D" with Heavy Geometric Cut */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-white font-black text-7xl sm:text-9xl md:text-[11rem] lg:text-[13rem] leading-none tracking-tighter select-none"
            >
              D
            </motion.div>

            {/* Middle Morphing 3D Transparent Image Container */}
            <div className="relative w-28 h-28 sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-60 lg:h-60 flex items-center justify-center">
              {morphImages.map((img, idx) => (
                <motion.div
                  key={img.src}
                  initial={false}
                  animate={{
                    opacity: currentImageIndex === idx ? 1 : 0,
                    scale: currentImageIndex === idx ? 1 : 0.85,
                  }}
                  transition={{
                    duration: 0.08,
                    ease: 'easeInOut',
                  }}
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={260}
                    height={260}
                    priority
                    className="w-full h-full object-contain filter drop-shadow-[0_0_25px_rgba(255,255,255,0.2)]"
                  />
                </motion.div>
              ))}
            </div>

            {/* Right Letter / Apostrophe " ' " */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-white font-black text-7xl sm:text-9xl md:text-[11rem] lg:text-[13rem] leading-none tracking-tighter select-none"
            >
              &apos;
            </motion.div>
          </div>

          {/* Bottom Monospace 3-Digit Counter (e.g. "011") */}
          <div className="font-mono text-sm sm:text-base font-bold text-white tracking-widest select-none">
            <motion.span
              key={formattedCount}
              initial={{ opacity: 0.7 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.05 }}
            >
              {formattedCount}
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
