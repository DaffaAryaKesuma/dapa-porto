'use client';

import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { Contact } from '@/components/sections/Contact';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { Preloader } from '@/components/ui/Preloader';
import { SmoothScroll } from '@/components/ui/SmoothScroll';
import { Floating3DArtifacts } from '@/components/ui/Floating3DArtifacts';
import { Marquee } from '@/components/ui/Marquee';

export default function Home() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <SmoothScroll>
      {/* Initial Diagnostics Preloader */}
      <Preloader onComplete={() => setLoadingComplete(true)} />

      {/* Top Viewport Radiant Scroll Progress Bar */}
      <ScrollProgress />

      {/* Floating 3D Parallax Mechanical Shapes */}
      <Floating3DArtifacts />

      {/* Main Page Layout Container */}
      <div className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-yellow-400 selection:text-zinc-950 transition-colors duration-300">
        {/* Background Technical Grid and Ambient Dots */}
        <div className="fixed inset-0 bg-tech-grid opacity-60 dark:opacity-40 pointer-events-none z-0" />
        <div className="fixed inset-0 bg-tech-dots opacity-40 dark:opacity-20 pointer-events-none z-0" />

        {/* Global Floating Pill Navigation */}
        <Navbar />

        {/* Page Content Sections */}
        <main className="relative z-10 flex flex-col">
          <Hero />

          {/* Infinite Kinetic Typography Marquee */}
          <Marquee />

          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>

        {/* Global Footer */}
        <Footer />
      </div>
    </SmoothScroll>
  );
}
