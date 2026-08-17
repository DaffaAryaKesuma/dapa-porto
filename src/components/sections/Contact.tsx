'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Send,
  CheckCircle2,
  Copy,
  MessageSquare,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card3D } from '@/components/ui/Card3D';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { TextReveal } from '@/components/ui/TextReveal';
import { GlitchText } from '@/components/ui/GlitchText';
import { PERSONAL_INFO } from '@/data/portfolioData';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSent(false), 5000);
    }, 1000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[300px] bg-yellow-500/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Copy Toast Notification */}
      <AnimatePresence>
        {copiedEmail && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-8 right-8 z-50 p-4 rounded-xl bg-zinc-950/95 border border-emerald-500/40 text-white font-mono text-xs shadow-2xl flex items-center gap-3 backdrop-blur-xl"
          >
            <div className="p-1.5 rounded-full bg-emerald-500/20 text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-emerald-400 block">EMAIL COPIED!</span>
              <span className="text-[11px] text-zinc-400">{PERSONAL_INFO.email}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          number="04"
          title="Hubungi & Kolaborasi"
          subtitle="Tertarik berdiskusi tentang proyek baru, arsitektur decoupled berkinerja tinggi, atau pertukaran wawasan teknik?"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12">
          {/* Left Column: Direct Info Card */}
          <div className="lg:col-span-5 space-y-6">
            <Card3D glowColor="yellow" className="p-6 sm:p-8 space-y-6">
              <div className="space-y-3">
                <Badge variant="mint" dot size="sm">
                  AVAILABLE FOR IMPACT
                </Badge>
                <h3 className="text-2xl font-extrabold text-zinc-950 dark:text-white leading-tight">
                  <TextReveal as="span">
                    Mari Bangun Solusi Web yang Presisi
                  </TextReveal>
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-300 font-sans leading-relaxed">
                  Saya selalu terbuka untuk berdiskusi seputar peluang Full-Stack Engineering, arsitektur RESTful API, integrasi basis data, maupun kerja sama tim produk.
                </p>
              </div>

              {/* Direct Email Dispatch Box with noth.in data-cursor */}
              <div
                data-cursor="copy"
                onClick={handleCopyEmail}
                className="p-4 rounded-xl bg-zinc-100 dark:bg-zinc-900/90 border border-zinc-200 dark:border-white/10 font-mono cursor-pointer hover:border-yellow-500/50 transition-colors"
              >
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest block mb-1 font-bold">
                  // DIRECT EMAIL DISPATCH (CLICK TO COPY)
                </span>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs sm:text-sm text-yellow-600 dark:text-yellow-400 font-bold truncate">
                    {PERSONAL_INFO.email}
                  </span>
                  <div className="p-2 rounded-lg bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 shrink-0 shadow-sm">
                    {copiedEmail ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </div>
                </div>
              </div>

              {/* Official Social Links */}
              <div className="space-y-2.5 pt-2">
                <span className="font-mono text-[11px] text-zinc-500 uppercase tracking-widest block font-bold">
                  // PROFIL RESMI
                </span>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl border border-zinc-200 dark:border-white/10 hover:border-yellow-500/50 hover:bg-zinc-50 dark:hover:bg-zinc-900/60 transition-all group"
                >
                  <div className="flex items-center gap-3 font-mono text-xs">
                    <div className="p-1.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 group-hover:text-yellow-500 transition-colors">
                      <GithubIcon className="w-4 h-4" />
                    </div>
                    <span className="text-zinc-900 dark:text-zinc-200 font-bold">GitHub</span>
                  </div>
                  <span className="text-[11px] font-mono text-zinc-400 group-hover:text-yellow-500">
                    <GlitchText text="@DaffaAryaKesuma →" />
                  </span>
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl border border-zinc-200 dark:border-white/10 hover:border-yellow-500/50 hover:bg-zinc-50 dark:hover:bg-zinc-900/60 transition-all group"
                >
                  <div className="flex items-center gap-3 font-mono text-xs">
                    <div className="p-1.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 group-hover:text-yellow-500 transition-colors">
                      <LinkedinIcon className="w-4 h-4" />
                    </div>
                    <span className="text-zinc-900 dark:text-zinc-200 font-bold">LinkedIn</span>
                  </div>
                  <span className="text-[11px] font-mono text-zinc-400 group-hover:text-yellow-500">
                    <GlitchText text="/in/daffa-arya-kesuma →" />
                  </span>
                </a>
              </div>
            </Card3D>
          </div>

          {/* Right Column: Modern Glass Dispatch Form */}
          <div className="lg:col-span-7">
            <Card3D glowColor="cyan" className="p-6 sm:p-8">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-zinc-200 dark:border-white/10 font-mono text-xs text-zinc-500">
                <span className="flex items-center gap-2 text-zinc-900 dark:text-zinc-200 font-bold">
                  <MessageSquare className="w-4 h-4 text-yellow-500" />
                  KIRIM PESAN LANGSUNG
                </span>
                <span className="text-emerald-500 font-bold">STATUS: READY</span>
              </div>

              {isSent && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 font-mono text-xs flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>Pesan Anda berhasil dicatat. Terima kasih telah menghubungi!</span>
                </motion.div>
              )}

              <form
                onSubmit={handleSubmit}
                suppressHydrationWarning
                autoComplete="off"
                className="space-y-4 font-mono"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase text-zinc-600 dark:text-zinc-400 mb-2 font-bold">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      required
                      suppressHydrationWarning
                      autoComplete="off"
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/90 text-zinc-900 dark:text-zinc-100 text-xs focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase text-zinc-600 dark:text-zinc-400 mb-2 font-bold">
                      Alamat Email *
                    </label>
                    <input
                      type="email"
                      required
                      suppressHydrationWarning
                      autoComplete="off"
                      placeholder="e.g. john@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/90 text-zinc-900 dark:text-zinc-100 text-xs focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase text-zinc-600 dark:text-zinc-400 mb-2 font-bold">
                    Subjek Proyek
                  </label>
                  <input
                    type="text"
                    suppressHydrationWarning
                    autoComplete="off"
                    placeholder="e.g. Diskusi Proyek Web Application"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/90 text-zinc-900 dark:text-zinc-100 text-xs focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase text-zinc-600 dark:text-zinc-400 mb-2 font-bold">
                    Detail Pesan *
                  </label>
                  <textarea
                    required
                    rows={4}
                    suppressHydrationWarning
                    autoComplete="off"
                    placeholder="Tuliskan gambaran proyek, timeline, atau detail diskusi Anda..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/90 text-zinc-900 dark:text-zinc-100 text-xs focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  variant="primary"
                  size="lg"
                  icon={<Send className="w-4 h-4" />}
                  className="w-full sm:w-auto uppercase font-bold shadow-lg shadow-yellow-500/25"
                >
                  {isSubmitting ? 'Mengirim...' : 'Kirim Pesan Sekarang'}
                </Button>
              </form>
            </Card3D>
          </div>
        </div>
      </div>
    </section>
  );
}
