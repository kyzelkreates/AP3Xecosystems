import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Cpu, Truck, Smartphone, Brain, Database, Globe, Shield, Zap } from 'lucide-react'
import SectionTag from '../components/ui/SectionTag'
import EcosystemViz from '../components/animations/EcosystemViz'
import ParticleField from '../components/animations/ParticleField'
import { projectsConfig } from '../config/projectsConfig'
import { industriesConfig } from '../config/industriesConfig'

const archLayers = [
  {
    label: 'Control Layer',
    desc: 'AP3X Control OS — Master orchestration, AI routing, compliance, analytics',
    color: '#0066ff',
    icon: Cpu,
  },
  {
    label: 'Industry Systems',
    desc: 'Fleet OS, Healthcare OS, Workforce OS — Vertical operational modules',
    color: '#00e5ff',
    icon: Globe,
  },
  {
    label: 'Mobile PWAs',
    desc: 'Driver PWA, Worker PWA, Learner PWA — Field-operative interfaces',
    color: '#7c3aed',
    icon: Smartphone,
  },
  {
    label: 'AI Agent Layer',
    desc: 'Intelligent routing, predictions, NLP assistants, anomaly detection',
    color: '#f59e0b',
    icon: Brain,
  },
  {
    label: 'Data Infrastructure',
    desc: 'Supabase real-time DB, offline sync, multi-tenant isolation',
    color: '#22c55e',
    icon: Database,
  },
]

export default function EcosystemPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <ParticleField count={50} className="opacity-50" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex justify-center mb-4">
              <SectionTag>AP3X Ecosystem</SectionTag>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl font-black text-white mb-6"
            >
              Modular AI Operational{' '}
              <span className="bg-gradient-to-r from-ap3x-blue to-ap3x-cyan bg-clip-text text-transparent">
                Infrastructure
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-ap3x-muted text-xl max-w-3xl mx-auto leading-relaxed"
            >
              AP3X is not a single product. It is an operational intelligence platform — a composable set of systems that can be reconfigured and deployed across any industry vertical.
            </motion.p>
          </div>

          {/* Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-lg mx-auto p-8 rounded-2xl glassmorphism glow-border"
          >
            <div className="text-center mb-4">
              <span className="text-ap3x-cyan text-xs font-mono tracking-widest">LIVE ECOSYSTEM MAP</span>
            </div>
            <EcosystemViz />
          </motion.div>
        </div>
      </section>

      {/* Architecture Layers */}
      <section className="py-20 relative">
        <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionTag>Architecture</SectionTag>
            <h2 className="text-3xl font-black text-white mt-4 mb-4">System Architecture Layers</h2>
            <p className="text-ap3x-muted max-w-xl mx-auto">Each layer is independently deployable yet deeply integrated — from the master control plane to the field operative's pocket.</p>
          </div>

          <div className="relative max-w-2xl mx-auto">
            {/* Connecting line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-ap3x-blue via-ap3x-cyan to-ap3x-purple opacity-30" />

            {archLayers.map((layer, i) => {
              const Icon = layer.icon
              return (
                <motion.div
                  key={layer.label}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6 mb-6 last:mb-0"
                >
                  <div className="flex-shrink-0 relative z-10">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
                      style={{ background: `linear-gradient(135deg, ${layer.color}30, rgba(5,13,26,0.9))`, border: `1px solid ${layer.color}40` }}
                    >
                      <Icon className="w-7 h-7" style={{ color: layer.color }} />
                    </div>
                    {i < archLayers.length - 1 && (
                      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-px h-6 opacity-50" style={{ backgroundColor: layer.color }} />
                    )}
                  </div>
                  <div className="pt-3">
                    <div className="text-white font-bold text-lg" style={{ color: layer.color }}>{layer.label}</div>
                    <div className="text-ap3x-text/60 text-sm mt-1">{layer.desc}</div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Core Products */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionTag>Core Products</SectionTag>
            <h2 className="text-3xl font-black text-white mt-4 mb-4">Deployable System Modules</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projectsConfig.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-ap3x-surface/40 border border-ap3x-border/50 hover:border-ap3x-cyan/20 transition-all group"
              >
                <div className={`h-1 rounded-full bg-gradient-to-r ${project.gradient} mb-5`} />
                <div className="text-ap3x-muted text-xs font-mono tracking-wider mb-1">{project.category}</div>
                <h3 className="text-white font-bold text-lg mb-2">{project.name}</h3>
                <p className="text-ap3x-muted text-sm mb-5">{project.shortDescription}</p>
                <Link
                  to={project.route}
                  className="flex items-center gap-2 text-ap3x-cyan text-sm font-semibold hover:gap-3 transition-all"
                >
                  View System <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Expansion */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ap3x-navy/20 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionTag>Industry Expansion</SectionTag>
            <h2 className="text-3xl font-black text-white mt-4 mb-4">Deployed Across 5 Verticals</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {industriesConfig.map((ind, i) => (
              <motion.div
                key={ind.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-4 rounded-xl bg-ap3x-surface/30 border border-ap3x-border/40 text-center hover:border-opacity-60 transition-all"
                style={{ borderColor: ind.accentColor + '30' }}
              >
                <div className="text-2xl mb-2" style={{ color: ind.accentColor }}>
                  {['🚛', '🏥', '🧠', '🎓', '👥'][i]}
                </div>
                <div className="text-white text-sm font-bold">{ind.shortName}</div>
                <div className="text-ap3x-muted text-xs mt-1">{ind.brandName}</div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-6">
            <p className="text-ap3x-muted text-sm">
              Same AP3X core infrastructure — adapted branding, workflows, and terminology for each vertical
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
