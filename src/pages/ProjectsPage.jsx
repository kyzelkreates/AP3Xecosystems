import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Cpu, Truck, Smartphone } from 'lucide-react'
import { projectsConfig } from '../config/projectsConfig'
import SectionTag from '../components/ui/SectionTag'
import ParticleField from '../components/animations/ParticleField'

const iconMap = { cpu: Cpu, truck: Truck, smartphone: Smartphone }

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <ParticleField count={40} className="opacity-40" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex justify-center mb-4">
            <SectionTag>Product Suite</SectionTag>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black text-white mb-6"
          >
            AP3X System{' '}
            <span className="bg-gradient-to-r from-ap3x-blue to-ap3x-cyan bg-clip-text text-transparent">
              Demonstrations
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-ap3x-muted text-xl max-w-2xl mx-auto"
          >
            Explore each system in depth. View live dashboards, feature breakdowns, and architecture details for every AP3X module.
          </motion.p>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {projectsConfig.map((project, i) => {
              const Icon = iconMap[project.icon] || Cpu
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-2xl bg-ap3x-surface/40 border border-ap3x-border/50 overflow-hidden hover:border-ap3x-cyan/20 transition-all duration-500 group"
                >
                  <div className={`h-1.5 bg-gradient-to-r ${project.gradient}`} />
                  <div className="p-8">
                    <div className="flex flex-col lg:flex-row gap-8">
                      {/* Left info */}
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-4">
                          <div
                            className="w-14 h-14 rounded-xl flex items-center justify-center"
                            style={{ background: `linear-gradient(135deg, ${project.glowColor}40, rgba(5,13,26,1))`, border: `1px solid ${project.glowColor}30` }}
                          >
                            <Icon className="w-7 h-7 text-white" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-xs font-mono text-ap3x-muted tracking-wider">{project.category}</span>
                              <div className="w-1 h-1 rounded-full bg-ap3x-muted" />
                              <span className="text-xs font-mono text-ap3x-cyan">{project.status} · v{project.version}</span>
                            </div>
                            <h2 className="text-white font-black text-2xl">{project.name}</h2>
                          </div>
                        </div>
                        <p className="text-ap3x-text/70 text-base leading-relaxed mb-6">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.techStack.map((tech) => (
                            <span key={tech} className="px-2.5 py-1 text-xs rounded-md font-mono bg-ap3x-navy/60 border border-ap3x-border/40 text-ap3x-text/60">
                              {tech}
                            </span>
                          ))}
                        </div>
                        <Link to={project.route}>
                          <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="flex items-center gap-3 px-6 py-3 text-sm font-bold text-white rounded-xl transition-all"
                            style={{ background: `linear-gradient(135deg, ${project.glowColor}40, rgba(5,13,26,0.8))`, border: `1px solid ${project.glowColor}40` }}
                          >
                            Open Demo <ArrowRight className="w-4 h-4" />
                          </motion.button>
                        </Link>
                      </div>

                      {/* Right — metrics */}
                      <div className="lg:w-80">
                        <div className="text-ap3x-muted text-xs font-mono tracking-widest mb-3 uppercase">Live Metrics</div>
                        <div className="grid grid-cols-2 gap-3 mb-4">
                          {project.metrics.map((metric) => (
                            <div key={metric.label} className="p-3 rounded-xl bg-ap3x-navy/60 border border-ap3x-border/30 text-center">
                              <div className="text-lg font-black font-mono text-white">{metric.value}</div>
                              <div className="text-ap3x-muted text-[11px]">{metric.label}</div>
                              <div className="text-ap3x-cyan text-[10px] font-mono mt-1">{metric.trend}</div>
                            </div>
                          ))}
                        </div>
                        <div className="p-3 rounded-xl bg-ap3x-blue/10 border border-ap3x-blue/20">
                          <div className="text-ap3x-muted text-xs mb-1">Architecture Role</div>
                          <div className="text-ap3x-cyan text-sm font-semibold">{project.architectureRole}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
