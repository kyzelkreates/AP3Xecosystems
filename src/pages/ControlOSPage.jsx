import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip, BarChart, Bar } from 'recharts'
import { Cpu, Shield, Zap, Server, Brain, Activity, AlertCircle, CheckCircle, Clock, TrendingUp, ArrowUpRight, ArrowDownRight, Globe } from 'lucide-react'
import SectionTag from '../components/ui/SectionTag'
import ParticleField from '../components/animations/ParticleField'

const generateTimeData = (points = 20) =>
  Array.from({ length: points }, (_, i) => ({
    time: `${i}m`,
    requests: Math.floor(Math.random() * 400 + 1800),
    latency: Math.floor(Math.random() * 20 + 40),
    errors: Math.floor(Math.random() * 5),
    agents: Math.floor(Math.random() * 4 + 10),
  }))

const activityFeed = [
  { type: 'success', msg: 'Fleet Control OS — deployment sync complete', time: '0s ago', icon: CheckCircle },
  { type: 'info', msg: 'AI Agent #7 routed to Healthcare module', time: '2s ago', icon: Brain },
  { type: 'success', msg: 'Driver PWA — 48 field ops synced', time: '8s ago', icon: Zap },
  { type: 'warning', msg: 'Compliance check triggered — Region 4', time: '15s ago', icon: AlertCircle },
  { type: 'success', msg: 'Analytics pipeline completed — 2.4M events', time: '22s ago', icon: Activity },
  { type: 'info', msg: 'New deployment initialised — WorkCore OS', time: '31s ago', icon: Server },
  { type: 'success', msg: 'Anomaly resolved — auto-mitigation applied', time: '47s ago', icon: Shield },
  { type: 'info', msg: 'Tenant #14 resource allocation updated', time: '58s ago', icon: Globe },
]

const deployments = [
  { name: 'FleetCore OS — Client A', status: 'LIVE', health: 100, uptime: '99.99%', region: 'UK-NORTH' },
  { name: 'CareCore OS — NHS Partner', status: 'LIVE', health: 99, uptime: '99.97%', region: 'UK-EAST' },
  { name: 'WorkCore OS — FieldForce Ltd', status: 'LIVE', health: 98, uptime: '99.91%', region: 'UK-WEST' },
  { name: 'LearnCore OS — TechCorp', status: 'STAGING', health: 100, uptime: '—', region: 'EU-WEST' },
  { name: 'MindCore OS — WellnessGroup', status: 'DEPLOYING', health: 85, uptime: '—', region: 'UK-SOUTH' },
]

export default function ControlOSPage() {
  const [chartData, setChartData] = useState(generateTimeData())
  const [tick, setTick] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setChartData(prev => {
        const newPoint = {
          time: `${prev.length}m`,
          requests: Math.floor(Math.random() * 400 + 1800),
          latency: Math.floor(Math.random() * 20 + 40),
          errors: Math.floor(Math.random() * 5),
          agents: Math.floor(Math.random() * 4 + 10),
        }
        return [...prev.slice(1), newPoint]
      })
      setTick(t => t + 1)
    }, 2000)
    return () => clearInterval(timer)
  }, [])

  const liveRequest = chartData[chartData.length - 1]?.requests || 2100
  const liveLatency = chartData[chartData.length - 1]?.latency || 52

  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <ParticleField count={50} className="opacity-40" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 mb-4">
              <SectionTag>AP3X Control OS</SectionTag>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 text-xs font-mono">LIVE SYSTEM</span>
              </div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl font-black text-white mb-4"
            >
              Enterprise AI Command{' '}
              <span className="bg-gradient-to-r from-ap3x-blue to-ap3x-cyan bg-clip-text text-transparent">
                Center
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-ap3x-muted text-lg max-w-2xl"
            >
              The master orchestration layer. Manage AI agents, deployments, compliance, analytics, and multi-tenant infrastructure from a single control plane.
            </motion.p>
          </div>

          {/* Top metrics bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
          >
            {[
              { label: 'Requests/min', value: liveRequest.toLocaleString(), trend: '+2.1%', icon: Activity, color: 'text-ap3x-cyan' },
              { label: 'Avg Latency', value: `${liveLatency}ms`, trend: '-1ms', icon: Clock, color: 'text-green-400' },
              { label: 'AI Agents Live', value: `${chartData[chartData.length-1]?.agents || 12}`, trend: 'active', icon: Brain, color: 'text-purple-400' },
              { label: 'Deployments', value: '24', trend: '3 pending', icon: Server, color: 'text-blue-400' },
            ].map((metric) => {
              const Icon = metric.icon
              return (
                <div key={metric.label} className="p-4 rounded-xl bg-ap3x-surface/60 border border-ap3x-border/50">
                  <div className="flex items-center justify-between mb-2">
                    <Icon className={`w-4 h-4 ${metric.color}`} />
                    <span className="text-ap3x-muted text-xs">{metric.trend}</span>
                  </div>
                  <div className={`text-2xl font-black font-mono ${metric.color}`}>{metric.value}</div>
                  <div className="text-ap3x-muted text-xs mt-1">{metric.label}</div>
                </div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Main Dashboard */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left col — Charts */}
            <div className="lg:col-span-2 space-y-6">
              {/* Request volume chart */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-ap3x-surface/40 border border-ap3x-border/50"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-white font-bold">Request Volume</div>
                    <div className="text-ap3x-muted text-xs">Live operations throughput</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-ap3x-cyan animate-pulse" />
                    <span className="text-ap3x-cyan text-xs font-mono">LIVE</span>
                  </div>
                </div>
                <ResponsiveContainer width="100%" height={180}>
                  <AreaChart data={chartData}>
                    <defs>
                      <linearGradient id="reqGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#00e5ff" stopOpacity={0.2}/>
                        <stop offset="95%" stopColor="#00e5ff" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="time" tick={{ fill: '#64748b', fontSize: 10 }} axisLine={false} tickLine={false} interval={4} />
                    <YAxis tick={{ fill: '#64748b', fontSize: 10 }} axisLine={false} tickLine={false} width={45} />
                    <Tooltip
                      contentStyle={{ background: '#0d1f35', border: '1px solid #1a2d4a', borderRadius: '8px', fontSize: '11px' }}
                      labelStyle={{ color: '#64748b' }}
                      itemStyle={{ color: '#00e5ff' }}
                    />
                    <Area type="monotone" dataKey="requests" stroke="#00e5ff" strokeWidth={2} fill="url(#reqGrad)" dot={false} />
                  </AreaChart>
                </ResponsiveContainer>
              </motion.div>

              {/* AI Agent + Latency row */}
              <div className="grid grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-5 rounded-2xl bg-ap3x-surface/40 border border-ap3x-border/50"
                >
                  <div className="text-white font-bold mb-1 text-sm">AI Agent Pool</div>
                  <div className="text-ap3x-muted text-xs mb-4">Active routing agents</div>
                  <ResponsiveContainer width="100%" height={100}>
                    <BarChart data={chartData.slice(-10)}>
                      <Bar dataKey="agents" fill="#7c3aed" radius={[2, 2, 0, 0]} />
                      <XAxis dataKey="time" tick={{ fill: '#64748b', fontSize: 9 }} axisLine={false} tickLine={false} />
                    </BarChart>
                  </ResponsiveContainer>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-5 rounded-2xl bg-ap3x-surface/40 border border-ap3x-border/50"
                >
                  <div className="text-white font-bold mb-1 text-sm">System Latency</div>
                  <div className="text-ap3x-muted text-xs mb-4">Response time (ms)</div>
                  <ResponsiveContainer width="100%" height={100}>
                    <LineChart data={chartData.slice(-10)}>
                      <Line type="monotone" dataKey="latency" stroke="#0066ff" strokeWidth={2} dot={false} />
                      <XAxis dataKey="time" tick={{ fill: '#64748b', fontSize: 9 }} axisLine={false} tickLine={false} />
                    </LineChart>
                  </ResponsiveContainer>
                </motion.div>
              </div>

              {/* Deployments table */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-ap3x-surface/40 border border-ap3x-border/50"
              >
                <div className="text-white font-bold mb-4">Active Deployments</div>
                <div className="space-y-2">
                  {deployments.map((dep) => (
                    <div key={dep.name} className="flex items-center gap-3 p-3 rounded-xl bg-ap3x-navy/40 border border-ap3x-border/30">
                      <div className={`w-2 h-2 rounded-full flex-shrink-0 ${dep.status === 'LIVE' ? 'bg-green-400' : dep.status === 'STAGING' ? 'bg-yellow-400' : 'bg-blue-400'} animate-pulse`} />
                      <div className="flex-1 min-w-0">
                        <div className="text-white text-sm font-medium truncate">{dep.name}</div>
                        <div className="text-ap3x-muted text-xs">{dep.region}</div>
                      </div>
                      <div className="flex items-center gap-3 flex-shrink-0">
                        <div className="text-right">
                          <div className="text-white text-xs font-mono">{dep.uptime}</div>
                          <div className="text-ap3x-muted text-[10px]">uptime</div>
                        </div>
                        <div
                          className={`px-2 py-0.5 rounded text-[10px] font-mono font-semibold ${
                            dep.status === 'LIVE' ? 'bg-green-500/10 text-green-400 border border-green-500/20' :
                            dep.status === 'STAGING' ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20' :
                            'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                          }`}
                        >
                          {dep.status}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right col — Activity + compliance */}
            <div className="space-y-6">
              {/* Live activity feed */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-5 rounded-2xl bg-ap3x-surface/40 border border-ap3x-border/50"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-white font-bold text-sm">Live Activity</div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-ap3x-cyan animate-pulse" />
                    <span className="text-ap3x-cyan text-xs font-mono">STREAM</span>
                  </div>
                </div>
                <div className="space-y-2.5 max-h-72 overflow-y-auto">
                  {activityFeed.map((item, i) => {
                    const Icon = item.icon
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="flex items-start gap-2.5"
                      >
                        <Icon className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 ${
                          item.type === 'success' ? 'text-green-400' :
                          item.type === 'warning' ? 'text-yellow-400' : 'text-ap3x-cyan'
                        }`} />
                        <div className="flex-1 min-w-0">
                          <div className="text-ap3x-text/70 text-xs leading-relaxed">{item.msg}</div>
                          <div className="text-ap3x-muted text-[10px] mt-0.5">{item.time}</div>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>

              {/* System health */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-5 rounded-2xl bg-ap3x-surface/40 border border-ap3x-border/50"
              >
                <div className="text-white font-bold text-sm mb-4">System Health</div>
                {[
                  { label: 'API Gateway', val: 100, color: 'bg-green-400' },
                  { label: 'AI Orchestrator', val: 98, color: 'bg-ap3x-cyan' },
                  { label: 'Database Cluster', val: 100, color: 'bg-green-400' },
                  { label: 'WebSocket Layer', val: 97, color: 'bg-ap3x-cyan' },
                  { label: 'Compliance Engine', val: 100, color: 'bg-green-400' },
                ].map((item) => (
                  <div key={item.label} className="mb-3 last:mb-0">
                    <div className="flex justify-between mb-1">
                      <span className="text-ap3x-muted text-xs">{item.label}</span>
                      <span className="text-white text-xs font-mono">{item.val}%</span>
                    </div>
                    <div className="h-1.5 bg-ap3x-navy/60 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${item.val}%` }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className={`h-full rounded-full ${item.color}`}
                      />
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Compliance panel */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-5 rounded-2xl bg-ap3x-surface/40 border border-ap3x-border/50"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Shield className="w-4 h-4 text-ap3x-cyan" />
                  <div className="text-white font-bold text-sm">Compliance Engine</div>
                </div>
                {[
                  { label: 'GDPR Compliance', status: 'PASS', color: 'text-green-400' },
                  { label: 'DVSA Tachograph', status: 'PASS', color: 'text-green-400' },
                  { label: 'ISO 27001 Controls', status: 'PASS', color: 'text-green-400' },
                  { label: 'Audit Log Integrity', status: 'PASS', color: 'text-green-400' },
                  { label: 'Data Retention Policy', status: 'ACTIVE', color: 'text-ap3x-cyan' },
                ].map((check) => (
                  <div key={check.label} className="flex items-center justify-between py-2 border-b border-ap3x-border/20 last:border-0">
                    <span className="text-ap3x-text/60 text-xs">{check.label}</span>
                    <span className={`text-xs font-mono font-semibold ${check.color}`}>{check.status}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
