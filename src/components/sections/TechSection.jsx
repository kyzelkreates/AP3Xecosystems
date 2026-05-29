import React from 'react'
import { motion } from 'framer-motion'
import { Layers, Brain, Server, Settings } from 'lucide-react'
import { techStackConfig } from '../../config/featuresConfig'
import SectionTag from '../ui/SectionTag'

const categoryIcons = { layers: Layers, brain: Brain, server: Server, settings: Settings }
const colorMap = {
  blue: { bg: 'rgba(0,102,255,0.1)', border: 'rgba(0,102,255,0.3)', text: 'text-blue-400' },
  purple: { bg: 'rgba(124,58,237,0.1)', border: 'rgba(124,58,237,0.3)', text: 'text-purple-400' },
  cyan: { bg: 'rgba(0,229,255,0.1)', border: 'rgba(0,229,255,0.3)', text: 'text-cyan-400' },
  amber: { bg: 'rgba(245,158,11,0.1)', border: 'rgba(245,158,11,0.3)', text: 'text-amber-400' },
}

export function TechSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ap3x-navy/20 to-transparent pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mb-4"
          >
            <SectionTag>Technology Stack</SectionTag>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-black text-white mb-4"
          >
            Built on Modern Infrastructure
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-ap3x-muted text-lg max-w-2xl mx-auto"
          >
            Every layer of the AP3X stack is selected for production reliability, developer velocity, and enterprise scalability.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {techStackConfig.map((category, catIndex) => {
            const CatIcon = categoryIcons[category.icon] || Layers
            const colors = colorMap[category.color] || colorMap.blue

            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1, duration: 0.6 }}
                className="rounded-2xl bg-ap3x-surface/40 border border-ap3x-border/50 overflow-hidden hover:border-ap3x-border/80 transition-all duration-300"
              >
                {/* Category header */}
                <div className="p-5 border-b border-ap3x-border/30 flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ background: colors.bg, border: `1px solid ${colors.border}` }}
                  >
                    <CatIcon className={`w-5 h-5 ${colors.text}`} />
                  </div>
                  <h3 className="text-white font-bold">{category.category}</h3>
                </div>

                {/* Items */}
                <div className="p-5 grid grid-cols-2 gap-3">
                  {category.items.map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: catIndex * 0.1 + i * 0.05 }}
                      className="p-3 rounded-xl bg-ap3x-navy/40 border border-ap3x-border/30 hover:border-ap3x-border/60 transition-all group"
                    >
                      <div className={`text-sm font-bold mb-1 ${colors.text}`}>{item.name}</div>
                      <div className="text-ap3x-muted text-xs leading-relaxed">{item.description}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Architecture flow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 p-6 rounded-2xl bg-ap3x-surface/30 border border-ap3x-border/40"
        >
          <div className="text-center text-ap3x-muted text-xs font-mono tracking-widest mb-6 uppercase">System Architecture Flow</div>
          <div className="flex items-center justify-center gap-2 flex-wrap">
            {['React UI', '→', 'AP3X Control OS', '→', 'AI Agent Layer', '→', 'Supabase DB', '→', 'Real-Time WebSocket', '→', 'PWA Field Interface'].map((item, i) => (
              <span
                key={i}
                className={item === '→'
                  ? 'text-ap3x-cyan/40 text-sm'
                  : 'px-3 py-1.5 rounded-lg bg-ap3x-navy/60 border border-ap3x-border/40 text-ap3x-text/80 text-sm font-mono'
                }
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TechSection
