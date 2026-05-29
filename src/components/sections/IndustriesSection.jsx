import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Truck, HeartPulse, Brain, GraduationCap, Users, CheckCircle, TrendingUp, ArrowRight } from 'lucide-react'
import { industriesConfig } from '../../config/industriesConfig'
import SectionTag from '../ui/SectionTag'
import { Link } from 'react-router-dom'

const iconMap = {
  truck: Truck,
  'heart-pulse': HeartPulse,
  brain: Brain,
  'graduation-cap': GraduationCap,
  users: Users,
}

function IndustryCard({ industry, index, isActive, onClick }) {
  const Icon = iconMap[industry.icon] || Truck

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onClick={onClick}
      className={`cursor-pointer rounded-xl border transition-all duration-300 ${
        isActive
          ? 'border-opacity-60 bg-ap3x-surface/60'
          : 'border-ap3x-border/40 bg-ap3x-surface/20 hover:border-ap3x-border/70 hover:bg-ap3x-surface/40'
      }`}
      style={isActive ? {
        borderColor: industry.accentColor + '60',
        boxShadow: `0 0 20px ${industry.accentColor}15`,
      } : {}}
    >
      <div className="p-4">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ background: `${industry.accentColor}15`, border: `1px solid ${industry.accentColor}30` }}
          >
            <Icon className="w-5 h-5" style={{ color: industry.accentColor }} />
          </div>
          <div>
            <div className="text-white font-semibold text-sm">{industry.name}</div>
            <div className="text-ap3x-muted text-xs">{industry.coreSystem}</div>
          </div>
          {isActive && (
            <div className="ml-auto w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: industry.accentColor }} />
          )}
        </div>
      </div>
    </motion.div>
  )
}

function IndustryDetail({ industry }) {
  const Icon = iconMap[industry.icon] || Truck

  return (
    <motion.div
      key={industry.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="rounded-2xl border bg-ap3x-surface/40 overflow-hidden"
      style={{ borderColor: industry.accentColor + '30' }}
    >
      {/* Header */}
      <div className="p-6 border-b border-ap3x-border/30" style={{ background: industry.bgAccent }}>
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center"
              style={{ background: `linear-gradient(135deg, ${industry.accentColor}30, rgba(5,13,26,0.9))`, border: `1px solid ${industry.accentColor}40` }}
            >
              <Icon className="w-7 h-7" style={{ color: industry.accentColor }} />
            </div>
            <div>
              <div className="text-ap3x-muted text-xs font-mono tracking-widest mb-1">INDUSTRY DEPLOYMENT</div>
              <h3 className="text-white font-black text-xl">{industry.brandName}</h3>
              <div className="text-ap3x-muted text-sm">{industry.tagline}</div>
            </div>
          </div>
          <div
            className="px-3 py-1.5 rounded-lg text-xs font-mono font-semibold"
            style={{ background: `${industry.accentColor}15`, color: industry.accentColor, border: `1px solid ${industry.accentColor}30` }}
          >
            {industry.name}
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Core infrastructure badge */}
        <div className="flex items-center gap-2 mb-5 px-3 py-2.5 rounded-lg bg-ap3x-blue/10 border border-ap3x-blue/20">
          <div className="w-2 h-2 rounded-full bg-ap3x-blue animate-pulse" />
          <span className="text-ap3x-blue text-xs font-mono font-semibold">SAME CORE INFRASTRUCTURE</span>
          <span className="text-ap3x-muted text-xs">— adapted for {industry.shortName}</span>
        </div>

        <p className="text-ap3x-text/70 text-sm leading-relaxed mb-6">{industry.description}</p>

        {/* Metrics grid */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {industry.metrics.map((metric) => (
            <div
              key={metric.label}
              className="p-3 rounded-xl bg-ap3x-navy/60 border border-ap3x-border/30"
            >
              <div className="text-xl font-black font-mono" style={{ color: industry.accentColor }}>{metric.value}</div>
              <div className="text-white text-xs font-semibold">{metric.label}</div>
              <div className="text-ap3x-muted text-[11px]">{metric.desc}</div>
            </div>
          ))}
        </div>

        {/* Workflows */}
        <div className="mb-6">
          <div className="text-white text-xs font-semibold tracking-widest uppercase mb-3">Operational Workflows</div>
          <div className="space-y-2">
            {industry.workflows.map((wf) => (
              <div key={wf} className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 flex-shrink-0" style={{ color: industry.accentColor }} />
                <span className="text-ap3x-text/70 text-sm">{wf}</span>
              </div>
            ))}
          </div>
        </div>

        <Link to="/contact">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all duration-300"
            style={{
              background: `linear-gradient(135deg, ${industry.accentColor}20, rgba(5,13,26,0.8))`,
              border: `1px solid ${industry.accentColor}30`,
              color: industry.accentColor
            }}
          >
            Request {industry.shortName} Demo <ArrowRight className="w-4 h-4" />
          </motion.button>
        </Link>
      </div>
    </motion.div>
  )
}

export function IndustriesSection() {
  const [activeId, setActiveId] = useState(industriesConfig[0].id)
  const activeIndustry = industriesConfig.find(i => i.id === activeId)

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mb-4"
          >
            <SectionTag>Industry Deployments</SectionTag>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-black text-white mb-4"
          >
            One Platform.{' '}
            <span className="bg-gradient-to-r from-ap3x-cyan to-ap3x-blue bg-clip-text text-transparent">
              Every Industry.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-ap3x-muted text-lg max-w-2xl mx-auto"
          >
            The AP3X infrastructure adapts its interface, terminology, and workflows to serve any operational industry — while sharing the same proven core.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left — Industry list */}
          <div className="space-y-3">
            {industriesConfig.map((industry, i) => (
              <IndustryCard
                key={industry.id}
                industry={industry}
                index={i}
                isActive={activeId === industry.id}
                onClick={() => setActiveId(industry.id)}
              />
            ))}
          </div>

          {/* Right — Detail panel */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              {activeIndustry && (
                <IndustryDetail key={activeIndustry.id} industry={activeIndustry} />
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IndustriesSection
