import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Cpu, Truck, Smartphone, ChevronDown, ChevronUp, CheckCircle } from 'lucide-react'
import { projectsConfig } from '../../config/projectsConfig'
import SectionTag from '../ui/SectionTag'

const iconMap = { cpu: Cpu, truck: Truck, smartphone: Smartphone }

function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false)
  const Icon = iconMap[project.icon] || Cpu

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      className="group relative rounded-2xl bg-ap3x-surface/40 border border-ap3x-border/50 overflow-hidden hover:border-ap3x-cyan/30 transition-all duration-500"
    >
      {/* Top gradient bar */}
      <div className={`h-1 bg-gradient-to-r ${project.gradient}`} />

      {/* Glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{ boxShadow: `inset 0 0 60px ${project.glowColor}15` }}
      />

      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-5">
          <div className="flex items-center gap-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
              style={{ background: `linear-gradient(135deg, ${project.glowColor}40, rgba(5,13,26,1))`, border: `1px solid ${project.glowColor}30` }}
            >
              <Icon className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-mono font-medium text-ap3x-muted tracking-widest uppercase">{project.category}</span>
                <div className="w-1 h-1 rounded-full bg-ap3x-muted" />
                <span className="text-[10px] font-mono text-ap3x-cyan tracking-wider">{project.status}</span>
              </div>
              <h3 className="text-white font-bold text-lg leading-tight">{project.name}</h3>
            </div>
          </div>
          <div className="text-ap3x-muted text-xs font-mono px-2 py-1 bg-ap3x-navy/50 rounded-md">
            v{project.version}
          </div>
        </div>

        {/* Architecture role */}
        <div className="mb-4 px-3 py-2 rounded-lg bg-ap3x-navy/40 border border-ap3x-border/30">
          <span className="text-ap3x-muted text-xs">Architecture Role: </span>
          <span className="text-ap3x-cyan text-xs font-semibold">{project.architectureRole}</span>
        </div>

        {/* Description */}
        <p className="text-ap3x-text/60 text-sm leading-relaxed mb-5">
          {project.shortDescription}
        </p>

        {/* Feature grid */}
        <div className="grid grid-cols-2 gap-2 mb-5">
          {project.features.slice(0, 4).map((feature) => (
            <div key={feature.name} className="flex items-start gap-2 p-2 rounded-lg bg-ap3x-navy/30">
              <div className="w-4 h-4 rounded mt-0.5 flex-shrink-0" style={{ backgroundColor: `${project.glowColor}20`, border: `1px solid ${project.glowColor}30` }}>
                <div className="w-full h-full rounded flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: project.glowColor }} />
                </div>
              </div>
              <div>
                <div className="text-white text-xs font-semibold leading-tight">{feature.name}</div>
                <div className="text-ap3x-muted text-[10px] leading-tight mt-0.5">{feature.description}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Metrics row */}
        <div className="grid grid-cols-2 gap-2 mb-5">
          {project.metrics.slice(0, 2).map((metric) => (
            <div key={metric.label} className="p-2 rounded-lg bg-black/30 border border-ap3x-border/20 text-center">
              <div className="text-white font-bold font-mono text-base">{metric.value}</div>
              <div className="text-ap3x-muted text-[10px]">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Expandable section */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="border-t border-ap3x-border/30 pt-4 mb-5">
                <div className="text-white text-xs font-semibold mb-3 tracking-wide">KEY HIGHLIGHTS</div>
                <ul className="space-y-2">
                  {project.highlights.map((hl) => (
                    <li key={hl} className="flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-ap3x-cyan flex-shrink-0 mt-0.5" />
                      <span className="text-ap3x-text/70 text-xs">{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-white text-xs font-semibold mb-2 tracking-wide">TECH STACK</div>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <span key={tech} className="px-2 py-0.5 text-[10px] rounded font-mono bg-ap3x-navy/60 border border-ap3x-border/40 text-ap3x-text/70">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Actions */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-ap3x-border/30">
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1.5 text-ap3x-muted text-xs hover:text-white transition-colors"
          >
            {expanded ? <><ChevronUp className="w-3.5 h-3.5" />Less details</> : <><ChevronDown className="w-3.5 h-3.5" />More details</>}
          </button>
          <Link to={project.route}>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white rounded-lg transition-all duration-300"
              style={{ background: `linear-gradient(135deg, ${project.glowColor}40, rgba(5,13,26,0.8))`, border: `1px solid ${project.glowColor}30` }}
            >
              View Demo <ArrowRight className="w-3.5 h-3.5" />
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export function ProjectsShowcase() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mb-4"
          >
            <SectionTag>Core Systems</SectionTag>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-black text-white mb-4"
          >
            The AP3X Product Suite
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-ap3x-muted text-lg max-w-2xl mx-auto"
          >
            Three interconnected systems forming a complete operational intelligence stack.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsConfig.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsShowcase
