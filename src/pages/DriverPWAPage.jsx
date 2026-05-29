import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Smartphone, CheckSquare, MapPin, WifiOff, MessageSquare, AlertTriangle, Clock, Package, ChevronRight, CheckCircle, Navigation, Battery, Signal } from 'lucide-react'
import SectionTag from '../components/ui/SectionTag'
import ParticleField from '../components/animations/ParticleField'

const activeJobs = [
  {
    id: 'JOB-4471',
    customer: 'Apex Distribution Ltd',
    address: '14 Commerce Park, Sheffield S9 3XF',
    type: 'DELIVERY',
    stops: 3,
    status: 'IN PROGRESS',
    eta: '14 min',
    priority: 'HIGH',
  },
  {
    id: 'JOB-4472',
    customer: 'BlueChip Retail Co.',
    address: '2 Meadow Way, Rotherham S60 1BJ',
    type: 'COLLECTION',
    stops: 1,
    status: 'PENDING',
    eta: '41 min',
    priority: 'NORMAL',
  },
  {
    id: 'JOB-4473',
    customer: 'Northern Parts Ltd',
    address: 'Unit 8, Tinsley Industrial, S9 1LQ',
    type: 'DELIVERY',
    stops: 2,
    status: 'SCHEDULED',
    eta: '1h 12m',
    priority: 'NORMAL',
  },
]

const checklist = [
  { label: 'Vehicle walk-around inspection', done: true },
  { label: 'Tyre pressure checked', done: true },
  { label: 'Dashboard warning lights clear', done: true },
  { label: 'Load secured and sealed', done: true },
  { label: 'Documents and POD scanner', done: false },
  { label: 'PPE and safety equipment', done: false },
]

const features = [
  {
    icon: Package,
    title: 'Active Job Management',
    desc: 'Real-time job queue with live status updates, route integration, and customer notifications — all from the driver\'s pocket.',
    color: 'text-cyan-400',
    bg: 'bg-cyan-400/10 border-cyan-400/20',
  },
  {
    icon: CheckSquare,
    title: 'Digital Checklists',
    desc: 'Pre-trip, post-trip, and safety checklists with photo capture. No more paper forms, no more missed checks.',
    color: 'text-blue-400',
    bg: 'bg-blue-400/10 border-blue-400/20',
  },
  {
    icon: MessageSquare,
    title: 'AI Field Assistant',
    desc: 'Voice and text AI assistant for route queries, job instructions, and escalation support — even offline.',
    color: 'text-purple-400',
    bg: 'bg-purple-400/10 border-purple-400/20',
  },
  {
    icon: WifiOff,
    title: 'Full Offline Mode',
    desc: 'Complete job functionality without connectivity. Data syncs automatically on reconnect with conflict resolution.',
    color: 'text-amber-400',
    bg: 'bg-amber-400/10 border-amber-400/20',
  },
  {
    icon: AlertTriangle,
    title: 'Incident Reporting',
    desc: 'GPS-tagged incident logging with photo evidence and instant escalation to the control room.',
    color: 'text-red-400',
    bg: 'bg-red-400/10 border-red-400/20',
  },
  {
    icon: Clock,
    title: 'Shift & Hours Tracking',
    desc: 'Automated shift start/end, break tracking, and WTD compliance integrated with Fleet Control OS.',
    color: 'text-green-400',
    bg: 'bg-green-400/10 border-green-400/20',
  },
]

function PhoneMockup() {
  const [activeTab, setActiveTab] = useState('jobs')

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.8 }}
      className="relative mx-auto"
      style={{ width: '260px' }}
    >
      {/* Phone shell */}
      <div className="relative rounded-[2.5rem] border-2 border-ap3x-border/60 bg-ap3x-black overflow-hidden shadow-2xl"
        style={{ boxShadow: '0 0 60px rgba(0,102,255,0.2), 0 0 120px rgba(0,102,255,0.05)' }}
      >
        {/* Notch */}
        <div className="flex justify-center pt-3 pb-2">
          <div className="w-20 h-5 bg-ap3x-dark rounded-full flex items-center justify-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-ap3x-cyan/60" />
            <div className="w-8 h-1 rounded-full bg-ap3x-border/60" />
          </div>
        </div>

        {/* Status bar */}
        <div className="flex items-center justify-between px-4 mb-2">
          <span className="text-white text-[10px] font-mono">09:41</span>
          <div className="flex items-center gap-1">
            <Signal className="w-3 h-3 text-white" />
            <Battery className="w-3 h-3 text-green-400" />
          </div>
        </div>

        {/* App header */}
        <div className="px-3 mb-3">
          <div className="flex items-center justify-between p-2.5 rounded-xl bg-ap3x-navy/80 border border-ap3x-border/40">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-ap3x-blue to-ap3x-cyan flex items-center justify-center">
                <svg viewBox="0 0 12 12" className="w-4 h-4 text-white" fill="none">
                  <path d="M6 1L11 3.5V8.5L6 11L1 8.5V3.5L6 1Z" stroke="currentColor" strokeWidth="1"/>
                  <circle cx="6" cy="6" r="1.5" fill="currentColor"/>
                </svg>
              </div>
              <div>
                <div className="text-white text-[10px] font-bold leading-none">AP3X Driver</div>
                <div className="text-ap3x-cyan text-[8px] font-mono">SHIFT ACTIVE</div>
              </div>
            </div>
            <div className="flex items-center gap-1 px-2 py-1 bg-green-500/10 border border-green-500/20 rounded-full">
              <div className="w-1 h-1 rounded-full bg-green-400 animate-pulse" />
              <span className="text-green-400 text-[8px] font-mono">LIVE</span>
            </div>
          </div>
        </div>

        {/* Tab bar */}
        <div className="flex px-3 gap-1 mb-3">
          {[
            { id: 'jobs', label: 'Jobs' },
            { id: 'check', label: 'Checks' },
            { id: 'ai', label: 'AI' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-1.5 rounded-lg text-[10px] font-semibold transition-all ${
                activeTab === tab.id
                  ? 'bg-ap3x-blue text-white'
                  : 'text-ap3x-muted bg-ap3x-navy/40'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="px-3 pb-4" style={{ minHeight: '280px' }}>
          <AnimatePresence mode="wait">
            {activeTab === 'jobs' && (
              <motion.div
                key="jobs"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="space-y-2"
              >
                {activeJobs.slice(0, 2).map(job => (
                  <div key={job.id} className="p-2.5 rounded-xl bg-ap3x-surface/60 border border-ap3x-border/40">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-ap3x-cyan text-[9px] font-mono font-bold">{job.id}</span>
                      <span className={`text-[8px] font-mono px-1.5 py-0.5 rounded-full ${
                        job.status === 'IN PROGRESS' ? 'bg-cyan-500/10 text-cyan-400' : 'bg-ap3x-muted/10 text-ap3x-muted'
                      }`}>{job.status}</span>
                    </div>
                    <div className="text-white text-[10px] font-semibold truncate">{job.customer}</div>
                    <div className="text-ap3x-muted text-[9px] flex items-center gap-1 mt-0.5">
                      <MapPin className="w-2.5 h-2.5" />
                      <span className="truncate">{job.address}</span>
                    </div>
                    <div className="flex items-center justify-between mt-1.5">
                      <span className="text-ap3x-muted text-[9px]">{job.stops} stop{job.stops > 1 ? 's' : ''}</span>
                      <span className="text-green-400 text-[9px] font-mono">ETA {job.eta}</span>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
            {activeTab === 'check' && (
              <motion.div
                key="check"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
              >
                <div className="text-white text-[10px] font-bold mb-2">Pre-Trip Inspection</div>
                <div className="space-y-1.5">
                  {checklist.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 p-1.5 rounded-lg bg-ap3x-navy/40">
                      <div className={`w-3.5 h-3.5 rounded flex items-center justify-center flex-shrink-0 ${
                        item.done ? 'bg-green-500/20 border border-green-500/30' : 'bg-ap3x-border/20 border border-ap3x-border/40'
                      }`}>
                        {item.done && <CheckCircle className="w-2.5 h-2.5 text-green-400" />}
                      </div>
                      <span className={`text-[9px] ${item.done ? 'text-ap3x-text/50 line-through' : 'text-ap3x-text/80'}`}>{item.label}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
            {activeTab === 'ai' && (
              <motion.div
                key="ai"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="space-y-2"
              >
                <div className="text-ap3x-muted text-[9px] text-center mb-3">AP3X AI Field Assistant</div>
                {[
                  { role: 'user', msg: 'Best route to next stop?' },
                  { role: 'ai', msg: 'A631 via Meadowhall is 4 min faster. Current ETA: 14 min.' },
                  { role: 'user', msg: 'Log a near miss at depot gate' },
                  { role: 'ai', msg: 'Incident form opened. GPS tagged. Add photo?' },
                ].map((m, i) => (
                  <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] px-2.5 py-1.5 rounded-xl text-[9px] leading-relaxed ${
                      m.role === 'user'
                        ? 'bg-ap3x-blue text-white'
                        : 'bg-ap3x-surface/80 border border-ap3x-border/40 text-ap3x-text/80'
                    }`}>
                      {m.msg}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Nav bar */}
        <div className="flex items-center justify-around px-4 py-3 border-t border-ap3x-border/30 bg-ap3x-dark/80">
          {[MapPin, Package, MessageSquare, CheckSquare].map((Icon, i) => (
            <button key={i} className={`p-1.5 rounded-lg ${i === 0 ? 'text-ap3x-cyan' : 'text-ap3x-muted'}`}>
              <Icon className="w-4 h-4" />
            </button>
          ))}
        </div>
      </div>

      {/* Floating glow */}
      <div className="absolute -inset-4 bg-ap3x-blue/5 rounded-[3rem] blur-2xl -z-10" />
    </motion.div>
  )
}

export default function DriverPWAPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <ParticleField count={40} className="opacity-40" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 mb-4">
                <SectionTag>Driver PWA</SectionTag>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                  <span className="text-purple-400 text-xs font-mono">2,840 FIELD OPS</span>
                </div>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl sm:text-5xl font-black text-white mb-6"
              >
                Mobile-First{' '}
                <span className="bg-gradient-to-r from-purple-400 to-ap3x-blue bg-clip-text text-transparent">
                  Field Intelligence
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-ap3x-muted text-lg leading-relaxed mb-8"
              >
                A progressive web app giving field operatives everything they need — jobs, checklists, AI assistance, offline mode — without an App Store installation.
              </motion.p>

              {/* PWA stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="grid grid-cols-2 gap-3 mb-8"
              >
                {[
                  { label: 'App Load Time', value: '0.8s', icon: Clock },
                  { label: 'Offline Capable', value: '100%', icon: WifiOff },
                  { label: 'Jobs This Month', value: '47,291', icon: Package },
                  { label: 'Install Rate', value: '94%', icon: Smartphone },
                ].map(({ label, value, icon: Icon }) => (
                  <div key={label} className="p-3 rounded-xl bg-ap3x-surface/50 border border-ap3x-border/40 flex items-center gap-3">
                    <Icon className="w-4 h-4 text-purple-400 flex-shrink-0" />
                    <div>
                      <div className="text-white font-bold font-mono">{value}</div>
                      <div className="text-ap3x-muted text-xs">{label}</div>
                    </div>
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-purple-500/5 border border-purple-500/20"
              >
                <Smartphone className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <div className="text-sm text-ap3x-text/70">
                  <span className="text-white font-semibold">No App Store required.</span> Installs directly from the browser via a single link. Works on iOS and Android.
                </div>
              </motion.div>
            </div>

            {/* Phone mockup */}
            <div className="flex justify-center">
              <PhoneMockup />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionTag>Capabilities</SectionTag>
            <h2 className="text-3xl font-black text-white mt-4 mb-4">Everything Field Teams Need</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => {
              const Icon = f.icon
              return (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="p-5 rounded-2xl bg-ap3x-surface/40 border border-ap3x-border/40 hover:border-ap3x-border/70 transition-all group"
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center border mb-4 ${f.bg}`}>
                    <Icon className={`w-5 h-5 ${f.color}`} />
                  </div>
                  <h3 className="text-white font-bold mb-2">{f.title}</h3>
                  <p className="text-ap3x-muted text-sm leading-relaxed">{f.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
