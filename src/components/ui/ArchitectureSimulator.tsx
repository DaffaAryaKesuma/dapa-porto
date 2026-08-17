'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, CheckCircle2, ArrowRight, Zap, RefreshCw, Cpu, Layers } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

export function ArchitectureSimulator() {
  const [isSimulating, setIsSimulating] = useState(false);
  const [selectedEndpoint, setSelectedEndpoint] = useState<'auth_sanctum' | 'order_dispatch' | 'analytics_sync'>('auth_sanctum');
  const [latency, setLatency] = useState(28);
  const [hasSimulated, setHasSimulated] = useState(true);

  const endpoints = {
    auth_sanctum: {
      method: 'POST',
      path: '/api/v1/auth/token-authenticate',
      payload: '{\n  "client_app": "VUE_SPA_PORTAL",\n  "grant_type": "bearer_token",\n  "device": "Production_Client",\n  "scopes": ["read", "write"]\n}',
      response: '{\n  "status": "SUCCESS",\n  "code": 200,\n  "token": "sanctum_1|9f8a7b6c5d4e...",\n  "expires_in": 7200,\n  "role": "Superadmin"\n}',
    },
    order_dispatch: {
      method: 'POST',
      path: '/api/v1/orders/process-transaction',
      payload: '{\n  "order_id": "ORD-2026-9482",\n  "items_count": 4,\n  "payment_status": "PAID",\n  "acid_transaction": true\n}',
      response: '{\n  "status": "PROCESSED",\n  "code": 201,\n  "db_sync": "COMMITTED",\n  "inventory_updated": true,\n  "latency": "28ms"\n}',
    },
    analytics_sync: {
      method: 'GET',
      path: '/api/v1/analytics/realtime-metrics',
      payload: '{\n  "metric_type": "REVENUE_AND_PERFORMANCE",\n  "interval": "realtime_stream"\n}',
      response: '{\n  "status": "OK",\n  "throughput_rps": 1420,\n  "avg_query_time": "12ms",\n  "cache_hit_rate": "99.2%"\n}',
    },
  };

  const handleSimulate = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setHasSimulated(false);
    const randomLatency = Math.floor(Math.random() * 16) + 20;
    setLatency(randomLatency);

    setTimeout(() => {
      setIsSimulating(false);
      setHasSimulated(true);
    }, 850);
  };

  const active = endpoints[selectedEndpoint];

  return (
    <div className="w-full rounded-xl border border-zinc-200/80 dark:border-white/10 bg-white/80 dark:bg-[#0b0b10]/90 backdrop-blur-xl p-5 sm:p-6 shadow-xl relative overflow-hidden font-mono select-none">
      {/* Background Accent Mesh */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-zinc-200 dark:border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-xs font-bold text-zinc-900 dark:text-white uppercase tracking-wider">
            DECOUPLED REST API // REAL-TIME ARCHITECTURE SIMULATOR
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          {(['auth_sanctum', 'order_dispatch', 'analytics_sync'] as const).map((ep) => (
            <button
              type="button"
              suppressHydrationWarning
              key={ep}
              onClick={() => setSelectedEndpoint(ep)}
              className={`px-2.5 py-1 rounded text-[10px] uppercase font-bold tracking-wider transition-all cursor-pointer ${
                selectedEndpoint === ep
                  ? 'bg-yellow-500 text-zinc-950 shadow-sm shadow-yellow-500/20'
                  : 'bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-white'
              }`}
            >
              {ep.replace('_', ' ')}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Communication Nodes */}
      <div className="grid grid-cols-1 md:grid-cols-11 items-center gap-4 my-6">
        {/* Node 1: Vue.js SPA Client */}
        <div className="md:col-span-4 p-4 rounded-lg bg-zinc-50 dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-emerald-500 dark:text-emerald-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              FRONTEND SPA (VUE.JS / NEXT.JS)
            </span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
              CLIENT
            </span>
          </div>
          <p className="text-[10px] text-zinc-500 dark:text-zinc-400 font-sans">
            Axios Interceptor mengemas payload dengan Bearer Token.
          </p>
          <div className="pt-2 border-t border-zinc-200 dark:border-zinc-800/80 flex items-center justify-between text-[10px] text-zinc-400">
            <span className="text-yellow-600 dark:text-yellow-400 font-bold">{active.method}</span>
            <span className="truncate max-w-[140px] text-zinc-500">{active.path}</span>
          </div>
        </div>

        {/* Transmission Particle Channel */}
        <div className="md:col-span-3 flex flex-col items-center justify-center gap-2 py-2">
          <button
            type="button"
            suppressHydrationWarning
            onClick={handleSimulate}
            disabled={isSimulating}
            className="px-3.5 py-1.5 rounded-full bg-yellow-500 hover:bg-yellow-400 text-zinc-950 font-bold text-xs flex items-center gap-1.5 shadow-md shadow-yellow-500/20 active:scale-95 transition-all cursor-pointer disabled:opacity-50"
          >
            {isSimulating ? (
              <RefreshCw className="w-3.5 h-3.5 animate-spin" />
            ) : (
              <Play className="w-3.5 h-3.5 fill-current" />
            )}
            <span>{isSimulating ? 'DISPATCHING...' : 'DISPATCH API'}</span>
          </button>

          {/* Animated Particle Line */}
          <div className="w-full relative flex items-center justify-center h-4">
            <div className="w-full h-0.5 bg-zinc-200 dark:bg-zinc-800" />
            {isSimulating && (
              <motion.div
                initial={{ left: '0%' }}
                animate={{ left: '90%' }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                className="absolute w-3 h-3 rounded-full bg-yellow-400 shadow-[0_0_10px_#eab308] border border-white"
              />
            )}
          </div>

          <span className="text-[9px] text-zinc-500 font-bold tracking-widest uppercase">
            {isSimulating ? 'TRANSMITTING VIA HTTPS...' : `LATENCY: ${latency}ms`}
          </span>
        </div>

        {/* Node 2: Laravel REST API Backend */}
        <div className="md:col-span-4 p-4 rounded-lg bg-zinc-50 dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-red-500 dark:text-red-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-500" />
              BACKEND API (LARAVEL 11)
            </span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
              SERVER
            </span>
          </div>
          <p className="text-[10px] text-zinc-500 dark:text-zinc-400 font-sans">
            Eloquent Query terindeks mengeksekusi request dalam ACID transaction.
          </p>
          <div className="pt-2 border-t border-zinc-200 dark:border-zinc-800/80 flex items-center justify-between text-[10px] text-zinc-400">
            <span className="text-emerald-500 font-bold">200 OK</span>
            <span className="text-zinc-500">MySQL &amp; Sanctum</span>
          </div>
        </div>
      </div>

      {/* JSON Payload & Response Dual Panel */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
        <div className="p-3 rounded-lg bg-zinc-950 border border-zinc-800 text-xs">
          <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-zinc-800 text-[10px] text-zinc-500 font-bold">
            <span className="text-yellow-500">// REQUEST PAYLOAD</span>
            <span>JSON</span>
          </div>
          <pre className="text-[11px] text-yellow-300 font-mono overflow-x-auto whitespace-pre">
            {active.payload}
          </pre>
        </div>

        <div className="p-3 rounded-lg bg-zinc-950 border border-zinc-800 text-xs">
          <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-zinc-800 text-[10px] text-zinc-500 font-bold">
            <span className="text-emerald-400">// API RESPONSE ({latency}ms)</span>
            <span>REST_200</span>
          </div>
          <pre className="text-[11px] text-emerald-300 font-mono overflow-x-auto whitespace-pre">
            {active.response}
          </pre>
        </div>
      </div>
    </div>
  );
}
