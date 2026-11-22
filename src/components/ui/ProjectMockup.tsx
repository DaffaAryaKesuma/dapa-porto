'use client';

import { motion } from 'framer-motion';
import {
  Activity,
  CheckCircle2,
  Cpu,
  Database,
  Layers,
  Search,
  Server,
  ShieldCheck,
  TrendingUp,
  Zap,
} from 'lucide-react';

interface ProjectMockupProps {
  projectId: string;
  className?: string;
}

export function ProjectMockup({ projectId, className = '' }: ProjectMockupProps) {
  if (projectId === 'krgarage-system') {
    return (
      <div className={`w-full rounded-xl overflow-hidden border border-zinc-200 dark:border-white/10 bg-zinc-950 text-zinc-100 font-mono shadow-2xl ${className}`}>
        {/* macOS / Window Browser Header */}
        <div className="px-4 py-2.5 bg-zinc-900/90 border-b border-zinc-800 flex items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>

          <div className="flex-1 max-w-sm px-3 py-1 rounded-md bg-zinc-950/80 border border-zinc-800/80 text-[10px] text-zinc-400 flex items-center justify-between">
            <span className="truncate">https://krgarage.app/dashboard/analytics</span>
            <span className="text-emerald-400 text-[9px] font-bold">HTTPS: SECURE</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] text-zinc-400 font-bold hidden sm:inline">SANCTUM: ACTIVE</span>
          </div>
        </div>

        {/* Dashboard Body Preview */}
        <div className="p-4 sm:p-5 space-y-4 text-xs select-none">
          {/* Top KPI Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            <div className="p-3 rounded-lg bg-zinc-900/80 border border-zinc-800/80">
              <span className="text-[9px] text-zinc-400 uppercase block">Total Omzet (Bulan Ini)</span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-sm sm:text-base font-bold text-yellow-400">Rp 48.5M</span>
                <span className="text-[9px] text-emerald-400 flex items-center">+18%</span>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-zinc-900/80 border border-zinc-800/80">
              <span className="text-[9px] text-zinc-400 uppercase block">Servis Aktif</span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-sm sm:text-base font-bold text-white">12 Unit</span>
                <span className="text-[9px] text-yellow-400">Antrean</span>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-zinc-900/80 border border-zinc-800/80">
              <span className="text-[9px] text-zinc-400 uppercase block">Stok Suku Cadang</span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-sm sm:text-base font-bold text-emerald-400">842 SKU</span>
                <span className="text-[9px] text-zinc-500">Tersedia</span>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-zinc-900/80 border border-zinc-800/80">
              <span className="text-[9px] text-zinc-400 uppercase block">Efisiensi Sistem</span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-sm sm:text-base font-bold text-cyan-400">98.4%</span>
                <span className="text-[9px] text-emerald-400">Optimal</span>
              </div>
            </div>
          </div>

          {/* Main Visual: Live Analytics Chart & Queue Table */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
            {/* Left: SVG Spline Revenue Growth Chart */}
            <div className="md:col-span-7 p-3.5 rounded-lg bg-zinc-900/60 border border-zinc-800/80 space-y-2.5">
              <div className="flex items-center justify-between text-[11px] pb-1 border-b border-zinc-800/60">
                <span className="font-bold text-zinc-200 flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-yellow-400" />
                  Tren Pendapatan &amp; Transaksi Servis
                </span>
                <span className="text-[9px] text-zinc-500">Real-time Sync</span>
              </div>

              {/* Responsive SVG Chart */}
              <div className="h-28 w-full relative flex items-end pt-2">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 300 100" preserveAspectRatio="none">
                  {/* Grid Lines */}
                  <line x1="0" y1="20" x2="300" y2="20" stroke="#27272a" strokeDasharray="3 3" />
                  <line x1="0" y1="50" x2="300" y2="50" stroke="#27272a" strokeDasharray="3 3" />
                  <line x1="0" y1="80" x2="300" y2="80" stroke="#27272a" strokeDasharray="3 3" />

                  {/* Gradient Area Fill */}
                  <defs>
                    <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#eab308" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#eab308" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>

                  <path
                    d="M 0,80 Q 50,70 90,45 T 180,30 T 240,15 T 300,10 L 300,100 L 0,100 Z"
                    fill="url(#chartGradient)"
                  />
                  <path
                    d="M 0,80 Q 50,70 90,45 T 180,30 T 240,15 T 300,10"
                    fill="none"
                    stroke="#eab308"
                    strokeWidth="2.5"
                  />

                  {/* Highlight Data Points */}
                  <circle cx="90" cy="45" r="3.5" fill="#eab308" />
                  <circle cx="180" cy="30" r="3.5" fill="#eab308" />
                  <circle cx="240" cy="15" r="3.5" fill="#eab308" />
                  <circle cx="300" cy="10" r="4" fill="#34d399" />
                </svg>
              </div>

              <div className="flex items-center justify-between text-[9px] text-zinc-500 font-sans">
                <span>Minggu 1</span>
                <span>Minggu 2</span>
                <span>Minggu 3</span>
                <span>Minggu 4</span>
              </div>
            </div>

            {/* Right: Live Service Queue Table */}
            <div className="md:col-span-5 p-3.5 rounded-lg bg-zinc-900/60 border border-zinc-800/80 space-y-2">
              <div className="flex items-center justify-between text-[11px] pb-1 border-b border-zinc-800/60 font-bold text-zinc-200">
                <span>Antrean Servis</span>
                <span className="text-emerald-400 text-[9px]">3 Sedang Dikerjakan</span>
              </div>

              <div className="space-y-1.5">
                {[
                  { id: 'ORD-9482', unit: 'Yamaha NMAX 155', status: 'OVERHAUL', badge: 'bg-yellow-500/20 text-yellow-400' },
                  { id: 'ORD-9483', unit: 'Honda Vario 160', status: 'INSPECTION', badge: 'bg-cyan-500/20 text-cyan-400' },
                  { id: 'ORD-9484', unit: 'Kawasaki Ninja 250', status: 'COMPLETED', badge: 'bg-emerald-500/20 text-emerald-400' },
                ].map((row, i) => (
                  <div key={i} className="p-2 rounded bg-zinc-950/80 border border-zinc-800/60 flex items-center justify-between text-[10px]">
                    <div>
                      <span className="font-bold text-zinc-200 block">{row.unit}</span>
                      <span className="text-[9px] text-zinc-500">{row.id}</span>
                    </div>
                    <span className={`px-2 py-0.5 rounded text-[9px] font-bold ${row.badge}`}>
                      {row.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (projectId === 'dev-collab-platform') {
    return (
      <div className={`w-full rounded-xl overflow-hidden border border-zinc-200 dark:border-white/10 bg-zinc-950 text-zinc-100 font-mono shadow-xl ${className}`}>
        {/* Browser Top Bar */}
        <div className="px-3 py-2 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between text-xs">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-red-500/80" />
            <span className="w-2 h-2 rounded-full bg-yellow-500/80" />
            <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
          </div>
          <span className="text-[10px] text-zinc-400 truncate">devflow.app/sprint/board</span>
          <span className="text-[9px] text-cyan-400 font-bold">NEXT.JS 16</span>
        </div>

        {/* Kanban Board Grid */}
        <div className="p-3.5 grid grid-cols-3 gap-2 text-[10px]">
          <div className="p-2 rounded bg-zinc-900/70 border border-zinc-800/60 space-y-1.5">
            <span className="font-bold text-zinc-400 block text-[9px] uppercase">TO DO (2)</span>
            <div className="p-1.5 rounded bg-zinc-950 border border-zinc-800 text-zinc-300">
              <span className="block font-bold">API Rate Limiting</span>
              <span className="text-[8px] text-yellow-400 font-bold">Priority: High</span>
            </div>
          </div>

          <div className="p-2 rounded bg-zinc-900/70 border border-zinc-800/60 space-y-1.5">
            <span className="font-bold text-cyan-400 block text-[9px] uppercase">IN PROGRESS (1)</span>
            <div className="p-1.5 rounded bg-zinc-950 border border-cyan-500/40 text-zinc-300 shadow-sm">
              <span className="block font-bold text-white">OAuth2 Flow</span>
              <span className="text-[8px] text-cyan-400 font-bold">Assigned: Daffa</span>
            </div>
          </div>

          <div className="p-2 rounded bg-zinc-900/70 border border-zinc-800/60 space-y-1.5">
            <span className="font-bold text-emerald-400 block text-[9px] uppercase">DEPLOYED (3)</span>
            <div className="p-1.5 rounded bg-zinc-950 border border-emerald-500/30 text-zinc-300">
              <span className="block font-bold text-emerald-300">Kanban DND</span>
              <span className="text-[8px] text-emerald-400 font-bold">Status: Passed</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (projectId === 'secure-api-gateway') {
    return (
      <div className={`w-full rounded-xl overflow-hidden border border-zinc-200 dark:border-white/10 bg-zinc-950 text-zinc-100 font-mono shadow-xl ${className}`}>
        {/* Browser Top Bar */}
        <div className="px-3 py-2 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between text-xs">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-red-500/80" />
            <span className="w-2 h-2 rounded-full bg-yellow-500/80" />
            <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
          </div>
          <span className="text-[10px] text-zinc-400 truncate">api.gateway.internal/v1/metrics</span>
          <span className="text-[9px] text-emerald-400 font-bold">200 OK</span>
        </div>

        {/* Terminal / Metric Payload */}
        <div className="p-3.5 space-y-2 text-[10px]">
          <div className="flex items-center justify-between p-2 rounded bg-zinc-900/80 border border-zinc-800">
            <span className="text-zinc-400">RPS THROUGHPUT:</span>
            <span className="font-bold text-yellow-400">1,420 req/sec</span>
          </div>
          <div className="flex items-center justify-between p-2 rounded bg-zinc-900/80 border border-zinc-800">
            <span className="text-zinc-400">AUTH VALIDATION:</span>
            <span className="font-bold text-emerald-400">Sanctum Bearer (0.8ms)</span>
          </div>
          <div className="flex items-center justify-between p-2 rounded bg-zinc-900/80 border border-zinc-800">
            <span className="text-zinc-400">DATABASE QUERY:</span>
            <span className="font-bold text-cyan-400">Indexed MySQL (4.2ms)</span>
          </div>
        </div>
      </div>
    );
  }

  // Fallback: CloudPulse SaaS Metrics
  return (
    <div className={`w-full rounded-xl overflow-hidden border border-zinc-200 dark:border-white/10 bg-zinc-950 text-zinc-100 font-mono shadow-xl ${className}`}>
      {/* Browser Top Bar */}
      <div className="px-3 py-2 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between text-xs">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-red-500/80" />
          <span className="w-2 h-2 rounded-full bg-yellow-500/80" />
          <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
        </div>
        <span className="text-[10px] text-zinc-400 truncate">cloudpulse.io/analytics</span>
        <span className="text-[9px] text-cyan-400 font-bold">MULTI-TENANT</span>
      </div>

      <div className="p-3.5 space-y-2 text-[10px]">
        <div className="grid grid-cols-2 gap-2">
          <div className="p-2 rounded bg-zinc-900/80 border border-zinc-800">
            <span className="text-zinc-500 text-[8px] block">ACTIVE USERS</span>
            <span className="text-sm font-bold text-white">8,420</span>
          </div>
          <div className="p-2 rounded bg-zinc-900/80 border border-zinc-800">
            <span className="text-zinc-500 text-[8px] block">CACHE HIT</span>
            <span className="text-sm font-bold text-emerald-400">99.4%</span>
          </div>
        </div>
        <div className="p-2 rounded bg-zinc-900/60 border border-zinc-800 flex items-center justify-between">
          <span className="text-zinc-400 text-[9px]">Real-time Event Stream</span>
          <span className="text-emerald-400 font-bold text-[9px]">CONNECTED</span>
        </div>
      </div>
    </div>
  );
}
