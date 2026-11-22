'use client';

import { useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { sound } from '@/lib/sound';

export function SoundToggle() {
  const [isMuted, setIsMuted] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsMuted(sound.getMuted());

    const handleSoundToggle = (e: Event) => {
      const customEvent = e as CustomEvent<{ isMuted: boolean }>;
      setIsMuted(customEvent.detail.isMuted);
    };

    window.addEventListener('sound_toggle', handleSoundToggle);
    return () => window.removeEventListener('sound_toggle', handleSoundToggle);
  }, []);

  if (!mounted) {
    return (
      <div className="w-9 h-9 border border-zinc-300 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900/50 rounded-full flex items-center justify-center text-zinc-500">
        <span className="w-4 h-4" />
      </div>
    );
  }

  const handleToggle = () => {
    const nextMuted = sound.toggleMute();
    setIsMuted(nextMuted);
  };

  return (
    <button
      type="button"
      suppressHydrationWarning
      onClick={handleToggle}
      aria-label={isMuted ? 'Aktifkan Suara Audio' : 'Matikan Suara Audio'}
      className="group relative flex items-center justify-center w-9 h-9 rounded-full border border-zinc-300 dark:border-white/10 bg-white/80 dark:bg-zinc-900/80 hover:border-yellow-500/60 dark:hover:border-yellow-500/60 text-zinc-800 dark:text-zinc-200 hover:text-yellow-600 dark:hover:text-yellow-400 transition-all duration-200 cursor-pointer shadow-sm active:scale-95"
      title={isMuted ? 'Aktifkan Efek Suara' : 'Matikan Efek Suara'}
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        {isMuted ? (
          <VolumeX className="w-4 h-4 text-zinc-400 transition-transform duration-200 group-hover:scale-110" />
        ) : (
          <div className="flex items-center gap-0.5">
            <span className="w-0.5 h-2 bg-yellow-500 rounded-full animate-pulse" />
            <span className="w-0.5 h-3.5 bg-yellow-500 rounded-full animate-pulse [animation-delay:150ms]" />
            <span className="w-0.5 h-2 bg-yellow-500 rounded-full animate-pulse [animation-delay:300ms]" />
          </div>
        )}
      </div>
      <span className="sr-only">Toggle sound</span>
    </button>
  );
}
