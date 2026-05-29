import React from 'react'
import { motion } from 'framer-motion'
import { Tablet, Cpu, Building2, Flag, TrendingUp, TrendingDown, Users, Shield, Target, Clock } from 'lucide-react'
import { innovationMetrics, innovationPillars } from '../../config/featuresConfig'
import SectionTag from '../ui/SectionTag'

const pillarIcons = { tablet: Tablet, cpu: Cpu, 'building-2': Building2, flag: Flag }
const metricIcons = { building: Building2, clock: Clock, users: Users, 'trending-down': TrendingDown, shield: Shield, target: Target }
const colorMap = {
  blue: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
  cyan: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20',
  purple: 'text-purple-400 bg-purple-400/10 border-purple-400/20',
  amber: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
}

export function InnovationSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ap3x-navy/30 to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ap3x-blue/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ap3x-cyan/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mb-4"
          >
            <SectionTag>Innovation Impact</SectionTag>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-black text-white mb-4"
          >
            Built for Public Benefit &{' '}
            <span className="bg-gradient-to-r from-ap3x-blue to-ap3x-cyan bg-clip-text text-transparent">
              UK Innovation
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-ap3x-muted text-lg max-w-2xl mx-auto"
          >
            AP3X is designed to modernise UK operational infrastructure, making enterprise-grade AI accessible to the SMEs that power British industry.
          </motion.p>
        </div>

        {/* Impact metrics */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
          {innovationMetrics.map((metric, i) => {
            const Icon = metricIcons[metric.icon] || TrendingUp
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-5 rounded-xl bg-ap3x-surface/40 border border-ap3x-border/40 text-center group hover:border-ap3x-cyan/20 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-ap3x-cyan/10 border border-ap3x-cyan/20 flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-5 h-5 text-ap3x-cyan" />
                </div>
                <div className="text-2xl font-black text-white font-mono mb-1">{metric.value}</div>
                <div className="text-white text-sm font-semibold mb-1">{metric.label}</div>
                <div className="text-ap3x-muted text-xs">{metric.desc}</div>
              </motion.div>
            )
          })}
        </div>

        {/* Innovation pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {innovationPillars.map((pillar, i) => {
            const Icon = pillarIcons[pillar.icon] || Cpu
            const colors = colorMap[pillar.color] || colorMap.blue

            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="p-6 rounded-2xl bg-ap3x-surface/30 border border-ap3x-border/40 hover:border-ap3x-border/70 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center border ${colors}`}>
                    <Icon className={`w-6 h-6 ${colors.split(' ')[0]}`} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">{pillar.title}</h3>
                    <p className="text-ap3x-text/60 text-sm leading-relaxed mb-3">{pillar.description}</p>
                    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold border ${colors}`}>
                      <TrendingUp className="w-3 h-3" />
                      {pillar.stat}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Grant-ready callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 p-8 rounded-2xl border border-ap3x-blue/30 bg-gradient-to-br from-ap3x-blue/5 via-ap3x-surface/30 to-ap3x-cyan/5 text-center"
        >
          <div className="text-ap3x-cyan text-xs font-mono tracking-widest mb-3">INNOVATION INFRASTRUCTURE</div>
          <h3 className="text-white font-black text-2xl mb-3">
            Accelerator-Ready. Grant-Eligible. Enterprise-Deployable.
          </h3>
          <p className="text-ap3x-muted text-sm max-w-xl mx-auto mb-6">
            AP3X is designed to meet the criteria for UK Innovate, SBRI, and Growth Hub funding programmes while delivering immediate commercial value.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['UK Innovate Aligned', 'SBRI Compatible', 'Horizon Europe Ready', 'Accelerator-Grade', 'Open for Pilots'].map((tag) => (
              <span key={tag} className="px-3 py-1.5 rounded-full text-xs font-semibold bg-ap3x-blue/20 border border-ap3x-blue/30 text-ap3x-cyan">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default InnovationSection
