import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Truck, HeartPulse, Brain, GraduationCap, Users } from 'lucide-react'
import { industriesConfig } from '../config/industriesConfig'
import SectionTag from '../components/ui/SectionTag'
import ParticleField from '../components/animations/ParticleField'

const iconMap = { truck: Truck, 'heart-pulse': HeartPulse, brain: Brain, 'graduation-cap': GraduationCap, users: Users }

export default function IndustriesPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <ParticleField count={40} className="opacity-40" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex justify-center mb-4">
            <SectionTag>Industry Deployments</SectionTag>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black text-white mb-6"
          >
            Same Core.{' '}
            <span className="bg-gradient-to-r from-ap3x-cyan to-purple-400 bg-clip-text text-transparent">
              Any Industry.
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-ap3x-muted text-xl max-w-3xl mx-auto leading-relaxed mb-8"
          >
            The AP3X infrastructure adapts its workflows, terminology, and branding to serve any operational sector — with the same proven reliability and AI intelligence underneath.
          </motion.p>

          {/* Core badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-ap3x-blue/10 border border-ap3x-blue/30"
          >
            <div className="w-2 h-2 rounded-full bg-ap3x-blue animate-pulse" />
            <span className="text-ap3x-cyan font-mono text-sm font-semibold">SAME CORE INFRASTRUCTURE — DIFFERENT INDUSTRIES</span>
          </motion.div>
        </div>
      </section>

      {/* Industries grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {industriesConfig.map((industry, i) => {
              const Icon = iconMap[industry.icon] || Truck
              const isEven = i % 2 === 0

              return (
                <motion.div
                  key={industry.id}
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.6 }}
                  className="rounded-2xl bg-ap3x-surface/40 border border-ap3x-border/50 overflow-hidden hover:border-opacity-60 transition-all duration-500"
                  style={{ borderColor: industry.accentColor + '30' }}
                >
                  {/* Color bar */}
                  <div className={`h-1.5 bg-gradient-to-r ${industry.gradient}`} />

                  <div className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      {/* Left — identity */}
                      <div>
                        <div className="flex items-center gap-4 mb-4">
                          <div
                            className="w-14 h-14 rounded-2xl flex items-center justify-center"
                            style={{ background: `linear-gradient(135deg, ${industry.accentColor}25, rgba(5,13,26,0.9))`, border: `1px solid ${industry.accentColor}35` }}
                          >
                            <Icon className="w-7 h-7" style={{ color: industry.accentColor }} />
                          </div>
                          <div>
                            <div className="text-xs font-mono tracking-wider mb-1" style={{ color: industry.accentColor }}>INDUSTRY DEPLOYMENT #{i + 1}</div>
                            <h2 className="text-white font-black text-2xl">{industry.brandName}</h2>
                          </div>
                        </div>

                        <div className="text-ap3x-muted text-sm font-semibold mb-2">{industry.name}</div>
                        <p className="text-ap3x-text/60 text-sm leading-relaxed mb-5">{industry.description}</p>

                        <div className="px-3 py-2 rounded-lg bg-ap3x-navy/50 border border-ap3x-border/30 mb-5">
                          <div className="text-ap3x-muted text-xs mb-1">Powered By</div>
                          <div className="text-ap3x-cyan text-sm font-semibold">{industry.coreSystem}</div>
                        </div>

                        <Link to="/contact">
                          <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all"
                            style={{
                              background: `linear-gradient(135deg, ${industry.accentColor}15, rgba(5,13,26,0.8))`,
                              border: `1px solid ${industry.accentColor}30`,
                              color: industry.accentColor,
                            }}
                          >
                            Request Demo <ArrowRight className="w-4 h-4" />
                          </motion.button>
                        </Link>
                      </div>

                      {/* Middle — metrics */}
                      <div>
                        <div className="text-ap3x-muted text-xs font-mono tracking-widest uppercase mb-3">Impact Metrics</div>
                        <div className="grid grid-cols-2 gap-3">
                          {industry.metrics.map((m) => (
                            <div
                              key={m.label}
                              className="p-3 rounded-xl text-center bg-ap3x-navy/50 border border-ap3x-border/30"
                              style={{ borderColor: industry.accentColor + '20' }}
                            >
                              <div className="text-xl font-black font-mono" style={{ color: industry.accentColor }}>{m.value}</div>
                              <div className="text-white text-xs font-semibold">{m.label}</div>
                              <div className="text-ap3x-muted text-[10px] mt-1">{m.desc}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Right — workflows */}
                      <div>
                        <div className="text-ap3x-muted text-xs font-mono tracking-widest uppercase mb-3">Operational Workflows</div>
                        <div className="space-y-2.5">
                          {industry.workflows.map((wf) => (
                            <div key={wf} className="flex items-start gap-2.5">
                              <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: industry.accentColor }} />
                              <span className="text-ap3x-text/70 text-sm">{wf}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Infrastructure callout */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 p-8 rounded-2xl border border-ap3x-cyan/20 bg-gradient-to-br from-ap3x-blue/5 to-ap3x-cyan/5 text-center"
          >
            <div className="text-ap3x-cyan text-xs font-mono tracking-widest mb-3">MODULAR ARCHITECTURE</div>
            <h3 className="text-white font-black text-3xl mb-4">Your Industry. Our Infrastructure.</h3>
            <p className="text-ap3x-muted text-lg max-w-2xl mx-auto mb-8">
              Don't see your industry? The AP3X platform is designed to be configured for any operational sector with workforce management, compliance, or real-time coordination needs.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-ap3x-blue text-white font-bold rounded-xl shadow-glow-blue text-base"
              >
                Discuss Your Use Case <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
