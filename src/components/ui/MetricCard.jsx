import React from 'react'
import { motion } from 'framer-motion'

export function MetricCard({ label, value, unit, trend, icon: Icon, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="p-4 rounded-xl bg-ap3x-surface/60 border border-ap3x-border/40 hover:border-ap3x-cyan/20 transition-all duration-300 group"
    >
      <div className="flex items-start justify-between gap-2">
        <div>
          <div className="text-2xl font-bold text-white font-mono">{value}</div>
          {unit && <div className="text-ap3x-muted text-xs mt-0.5">{unit}</div>}
          <div className="text-ap3x-text/70 text-sm mt-2">{label}</div>
        </div>
        {trend && (
          <div className="px-2 py-1 rounded-md bg-ap3x-cyan/10 text-ap3x-cyan text-xs font-mono whitespace-nowrap">
            {trend}
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default MetricCard
