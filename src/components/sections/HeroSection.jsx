import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Play, ChevronDown } from 'lucide-react'
import ParticleField from '../animations/ParticleField'
import EcosystemViz from '../animations/EcosystemViz'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Layered backgrounds */}
      <div className="absolute inset-0 bg-ap3x-black" />
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 grid-bg opacity-60" />
      <ParticleField count={70} className="opacity-70" />

      {/* Radial glow center */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-ap3x-blue/5 blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-ap3x-cyan/5 blur-2xl pointer-events-none" />

      {/* Scan line effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-full h-px bg-gradient-to-r from-transparent via-ap3x-cyan/20 to-transparent"
          animate={{ y: ['0vh', '100vh'] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — Text */}
          <div>
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-ap3x-cyan/20 bg-ap3x-cyan/5 mb-8"
            >
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-ap3x-cyan animate-pulse" />
                <div className="w-1.5 h-1.5 rounded-full bg-ap3x-blue animate-pulse" style={{ animationDelay: '0.3s' }} />
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" style={{ animationDelay: '0.6s' }} />
              </div>
              <span className="text-ap3x-cyan text-xs font-mono tracking-widest">AP3X ECOSYSTEM — OPERATIONAL</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight mb-6"
            >
              <span className="text-white">Operational</span>
              <br />
              <span className="bg-gradient-to-r from-ap3x-blue via-ap3x-cyan to-purple-400 bg-clip-text text-transparent">
                Intelligence
              </span>
              <br />
              <span className="text-white">Infrastructure</span>
              <br />
              <span className="text-ap3x-muted text-3xl sm:text-4xl lg:text-5xl font-light">for the Next Generation</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-ap3x-text/70 text-lg leading-relaxed mb-10 max-w-xl"
            >
              Deployable AI-powered operational systems adaptable across industries.
              One core platform — unlimited vertical applications.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Link to="/ecosystem">
                <motion.button
                  whileHover={{ scale: 1.03, boxShadow: '0 0 30px rgba(0,102,255,0.5)' }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-3 px-8 py-4 bg-ap3x-blue text-white font-bold rounded-xl shadow-glow-blue hover:bg-blue-500 transition-all duration-300 text-base"
                >
                  Explore Ecosystem
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link to="/projects">
                <motion.button
                  whileHover={{ scale: 1.03, borderColor: 'rgba(0,229,255,0.6)' }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-3 px-8 py-4 border border-ap3x-cyan/30 text-ap3x-cyan font-bold rounded-xl hover:bg-ap3x-cyan/5 transition-all duration-300 text-base"
                >
                  <Play className="w-4 h-4 fill-current" />
                  View Demonstrations
                </motion.button>
              </Link>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex gap-8"
            >
              {[
                { value: '5+', label: 'Industries' },
                { value: '99.98%', label: 'Uptime SLA' },
                { value: '< 72hrs', label: 'Deployment' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-black text-white font-mono">{stat.value}</div>
                  <div className="text-ap3x-muted text-xs tracking-wide">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Ecosystem visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="relative p-6 rounded-2xl glassmorphism glow-border">
              {/* Header bar */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-ap3x-border/40">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/70" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                    <div className="w-3 h-3 rounded-full bg-green-500/70" />
                  </div>
                  <span className="text-ap3x-muted text-xs font-mono ml-2">ap3x-ecosystem.live</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-ap3x-cyan animate-pulse" />
                  <span className="text-ap3x-cyan text-xs font-mono">LIVE</span>
                </div>
              </div>

              <EcosystemViz />

              {/* Status indicators */}
              <div className="mt-6 pt-4 border-t border-ap3x-border/40 grid grid-cols-3 gap-3">
                {[
                  { label: 'Nodes Active', value: '6/6', color: 'text-ap3x-cyan' },
                  { label: 'Data Flows', value: '2,847/s', color: 'text-purple-400' },
                  { label: 'AI Agents', value: '12 Live', color: 'text-green-400' },
                ].map((item) => (
                  <div key={item.label} className="text-center">
                    <div className={`text-sm font-bold font-mono ${item.color}`}>{item.value}</div>
                    <div className="text-ap3x-muted text-xs">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-4 -right-4 px-4 py-2 rounded-xl bg-ap3x-surface/90 border border-ap3x-border/60 shadow-card"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-ap3x-cyan animate-pulse" />
                <span className="text-white text-xs font-semibold">Multi-Industry Deploy</span>
              </div>
              <div className="text-ap3x-cyan text-xs font-mono text-right">5 verticals active</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-ap3x-muted text-xs font-mono tracking-widest">EXPLORE</span>
          <ChevronDown className="w-4 h-4 text-ap3x-muted" />
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
