import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const nodes = [
  { id: 'control', label: 'AP3X Control OS', sublabel: 'Master Orchestration', x: 50, y: 12, size: 'lg', color: '#0066ff' },
  { id: 'fleet', label: 'Fleet Control OS', sublabel: 'Transport Module', x: 20, y: 42, size: 'md', color: '#00e5ff' },
  { id: 'driver', label: 'Driver PWA', sublabel: 'Field Interface', x: 50, y: 56, size: 'md', color: '#7c3aed' },
  { id: 'health', label: 'Healthcare OS', sublabel: 'Clinical Module', x: 80, y: 42, size: 'md', color: '#22c55e' },
  { id: 'ai', label: 'AI Agent Layer', sublabel: 'Intelligence Core', x: 35, y: 80, size: 'sm', color: '#f59e0b' },
  { id: 'analytics', label: 'Analytics Engine', sublabel: 'Data Intelligence', x: 65, y: 80, size: 'sm', color: '#ec4899' },
]

const connections = [
  ['control', 'fleet'],
  ['control', 'driver'],
  ['control', 'health'],
  ['fleet', 'driver'],
  ['control', 'ai'],
  ['control', 'analytics'],
  ['fleet', 'ai'],
  ['health', 'analytics'],
]

export function EcosystemViz() {
  return (
    <div className="relative w-full aspect-square max-w-lg mx-auto">
      {/* SVG connections */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="0.5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        {connections.map(([fromId, toId], i) => {
          const from = nodes.find(n => n.id === fromId)
          const to = nodes.find(n => n.id === toId)
          if (!from || !to) return null
          return (
            <motion.line
              key={`${fromId}-${toId}`}
              x1={from.x} y1={from.y}
              x2={to.x} y2={to.y}
              stroke="rgba(0,180,255,0.25)"
              strokeWidth="0.3"
              filter="url(#glow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: i * 0.1 + 0.5, duration: 0.8 }}
            />
          )
        })}
        {/* Animated data packets */}
        {connections.slice(0, 4).map(([fromId, toId], i) => {
          const from = nodes.find(n => n.id === fromId)
          const to = nodes.find(n => n.id === toId)
          if (!from || !to) return null
          return (
            <motion.circle
              key={`packet-${i}`}
              r="0.7"
              fill="#00e5ff"
              filter="url(#glow)"
              initial={{ x: from.x, y: from.y, opacity: 0 }}
              animate={{
                x: [from.x, to.x, from.x],
                y: [from.y, to.y, from.y],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                delay: i * 0.8 + 1,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          )
        })}
      </svg>

      {/* Nodes */}
      {nodes.map((node, i) => (
        <motion.div
          key={node.id}
          className="absolute transform -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: i * 0.15, duration: 0.5, type: 'spring' }}
          whileHover={{ scale: 1.1 }}
        >
          <div className="relative group cursor-pointer">
            {/* Glow ring */}
            <div
              className="absolute inset-0 rounded-xl blur-md opacity-60 group-hover:opacity-100 transition-opacity"
              style={{ backgroundColor: node.color, transform: 'scale(1.3)' }}
            />
            {/* Card */}
            <div
              className={`relative rounded-xl border backdrop-blur-sm px-2 py-1.5 text-center ${
                node.size === 'lg' ? 'px-3 py-2' : node.size === 'sm' ? 'px-2 py-1' : 'px-2 py-1.5'
              }`}
              style={{
                background: `linear-gradient(135deg, ${node.color}20, rgba(5,13,26,0.9))`,
                borderColor: `${node.color}50`,
              }}
            >
              <div className={`text-white font-bold whitespace-nowrap ${
                node.size === 'lg' ? 'text-[9px]' : 'text-[7px]'
              }`}>{node.label}</div>
              <div className="text-white/50 text-[6px] whitespace-nowrap">{node.sublabel}</div>
            </div>
            {/* Pulse dot */}
            <div
              className="absolute -top-1 -right-1 w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: node.color }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default EcosystemViz
