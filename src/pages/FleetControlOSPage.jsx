import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { AreaChart, Area, LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip, BarChart, Bar } from 'recharts'
import { Truck, MapPin, Shield, Users, Wrench, Activity, CheckCircle, AlertTriangle, Clock, Navigation, Fuel, TrendingUp } from 'lucide-react'
import SectionTag from '../components/ui/SectionTag'
import ParticleField from '../components/animations/ParticleField'

const generateFleetData = (n = 20) =>
  Array.from({ length: n }, (_, i) => ({
    time: `${i}m`,
    active: Math.floor(Math.random() * 30 + 270),
    onTime: Math.floor(Math.random() * 5 + 92),
    fuel: Math.floor(Math.random() * 8 + 78),
  }))

const vehicles = [
  { id: 'V-0041', driver: 'J. Matthews', route: 'Leeds → Sheffield', status: 'EN ROUTE', speed: '62mph', eta: '14 min', fuel: 74 },
  { id: 'V-0089', driver: 'S. Khan', route: 'Manchester → Liverpool', status: 'ON STOP', speed: '0mph', eta: '22 min', fuel: 88 },
  { id: 'V-0012', driver: 'R. Clarke', route: 'Birmingham → Coventry', status: 'EN ROUTE', speed: '57mph', eta: '8 min', fuel: 51 },
  { id: 'V-0103', driver: 'T. Patel', route: 'Bristol → Bath', status: 'RETURNING', speed: '45mph', eta: '31 min', fuel: 63 },
  { id: 'V-0067', driver: 'L. Smith', route: 'Depot — Awaiting Dispatch', status: 'STANDBY', speed: '0mph', eta: '—', fuel: 97 },
  { id: 'V-0055', driver: 'M. Wilson', route: 'Newcastle → Sunderland', status: 'EN ROUTE', speed: '71mph', eta: '6 min', fuel: 42 },
]

const alerts = [
  { type: 'warning', msg: 'V-0055 — Speed advisory: 71mph on A19', time: '1m ago' },
  { type: 'info', msg: 'V-0089 — Stop duration exceeding estimate', time: '4m ago' },
  { type: 'success', msg: 'V-0041 — Route deviation auto-corrected', time: '7m ago' },
  { type: 'warning', msg: 'V-0012 — Fuel level below 55%', time: '12m ago' },
  { type: 'success', msg: 'Tachograph data uploaded — 6 vehicles', time: '18m ago' },
]

export default function FleetControlOSPage() {
  const [fleetData, setFleetData] = useState(generateFleetData())

  useEffect(() => {
    const t = setInterval(() => {
      setFleetData(prev => {
        const np = {
          time: `${prev.length}m`,
          active: Math.floor(Math.random() * 30 + 270),
          onTime: Math.floor(Math.random() * 5 + 92),
          fuel: Math.floor(Math.random() * 8 + 78),
        }
        return [...prev.slice(1), np]
      })
    }, 2500)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <ParticleField count={40} className="opacity-40" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 mb-4">
              <SectionTag>Fleet Control OS</SectionTag>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-cyan-400 text-xs font-mono">312 VEHICLES TRACKED</span>
              </div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl font-black text-white mb-4"
            >
              Intelligent Fleet{' '}
              <span className="bg-gradient-to-r from-ap3x-cyan to-ap3x-blue bg-clip-text text-transparent">
                Operations Command
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-ap3x-muted text-lg max-w-2xl"
            >
              Real-time fleet visibility, AI dispatch, DVSA compliance automation, and driver coordination — unified in one operational command center.
            </motion.p>
          </div>

          {/* KPI bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { label: 'Active Vehicles', value: fleetData[fleetData.length-1]?.active || 298, icon: Truck, color: 'text-cyan-400', unit: 'live' },
              { label: 'On-Time Rate', value: `${fleetData[fleetData.length-1]?.onTime || 96}%`, icon: Clock, color: 'text-green-400', unit: 'SLA' },
              { label: 'Fleet Fuel Avg', value: `${fleetData[fleetData.length-1]?.fuel || 82}%`, icon: Fuel, color: 'text-blue-400', unit: 'capacity' },
              { label: 'DVSA Compliance', value: '100%', icon: Shield, color: 'text-purple-400', unit: 'automated' },
            ].map((m) => {
              const Icon = m.icon
              return (
                <div key={m.label} className="p-4 rounded-xl bg-ap3x-surface/60 border border-ap3x-border/50">
                  <div className="flex items-center justify-between mb-2">
                    <Icon className={`w-4 h-4 ${m.color}`} />
                    <span className="text-ap3x-muted text-xs font-mono">{m.unit}</span>
                  </div>
                  <div className={`text-2xl font-black font-mono ${m.color}`}>{m.value}</div>
                  <div className="text-ap3x-muted text-xs mt-1">{m.label}</div>
                </div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Dashboard */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left — Live fleet table + charts */}
            <div className="lg:col-span-2 space-y-6">
              {/* Live vehicle tracking */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-ap3x-surface/40 border border-ap3x-border/50"
              >
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <div className="text-white font-bold">Live Vehicle Tracking</div>
                    <div className="text-ap3x-muted text-xs">Real-time GPS — 6 of 312 shown</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="text-cyan-400 text-xs font-mono">LIVE GPS</span>
                  </div>
                </div>
                <div className="space-y-2">
                  {vehicles.map((v) => (
                    <div key={v.id} className="flex items-center gap-3 p-3 rounded-xl bg-ap3x-navy/40 border border-ap3x-border/30 hover:border-ap3x-cyan/20 transition-all">
                      <div className={`w-2 h-2 rounded-full flex-shrink-0 ${
                        v.status === 'EN ROUTE' ? 'bg-cyan-400 animate-pulse' :
                        v.status === 'ON STOP' ? 'bg-yellow-400' :
                        v.status === 'RETURNING' ? 'bg-blue-400 animate-pulse' : 'bg-ap3x-muted'
                      }`} />
                      <div className="w-16 text-ap3x-cyan text-xs font-mono font-bold flex-shrink-0">{v.id}</div>
                      <div className="flex-1 min-w-0">
                        <div className="text-white text-xs font-semibold truncate">{v.driver}</div>
                        <div className="text-ap3x-muted text-[10px] truncate flex items-center gap-1">
                          <Navigation className="w-2.5 h-2.5 inline" /> {v.route}
                        </div>
                      </div>
                      <div className="flex items-center gap-3 flex-shrink-0 text-right">
                        <div>
                          <div className="text-ap3x-muted text-[10px]">ETA</div>
                          <div className="text-white text-xs font-mono">{v.eta}</div>
                        </div>
                        <div>
                          <div className="text-ap3x-muted text-[10px]">Fuel</div>
                          <div className={`text-xs font-mono ${v.fuel < 50 ? 'text-yellow-400' : 'text-green-400'}`}>{v.fuel}%</div>
                        </div>
                        <div className={`px-2 py-0.5 rounded text-[9px] font-mono font-semibold whitespace-nowrap ${
                          v.status === 'EN ROUTE' ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' :
                          v.status === 'ON STOP' ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20' :
                          v.status === 'RETURNING' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' :
                          'bg-ap3x-muted/10 text-ap3x-muted border border-ap3x-muted/20'
                        }`}>{v.status}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Charts row */}
              <div className="grid grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-5 rounded-2xl bg-ap3x-surface/40 border border-ap3x-border/50"
                >
                  <div className="text-white font-bold text-sm mb-1">Active Vehicles</div>
                  <div className="text-ap3x-muted text-xs mb-3">Hourly trend</div>
                  <ResponsiveContainer width="100%" height={110}>
                    <AreaChart data={fleetData.slice(-12)}>
                      <defs>
                        <linearGradient id="activeGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#00e5ff" stopOpacity={0.2}/>
                          <stop offset="95%" stopColor="#00e5ff" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="time" tick={{ fill: '#64748b', fontSize: 9 }} axisLine={false} tickLine={false} />
                      <Area type="monotone" dataKey="active" stroke="#00e5ff" strokeWidth={2} fill="url(#activeGrad)" dot={false} />
                    </AreaChart>
                  </ResponsiveContainer>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="p-5 rounded-2xl bg-ap3x-surface/40 border border-ap3x-border/50"
                >
                  <div className="text-white font-bold text-sm mb-1">On-Time Delivery %</div>
                  <div className="text-ap3x-muted text-xs mb-3">SLA performance</div>
                  <ResponsiveContainer width="100%" height={110}>
                    <LineChart data={fleetData.slice(-12)}>
                      <Line type="monotone" dataKey="onTime" stroke="#22c55e" strokeWidth={2} dot={false} />
                      <XAxis dataKey="time" tick={{ fill: '#64748b', fontSize: 9 }} axisLine={false} tickLine={false} />
                    </LineChart>
                  </ResponsiveContainer>
                </motion.div>
              </div>

              {/* Maintenance tracker */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-ap3x-surface/40 border border-ap3x-border/50"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Wrench className="w-4 h-4 text-ap3x-cyan" />
                  <div className="text-white font-bold">Predictive Maintenance</div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { vehicle: 'V-0055', task: 'Oil Change Due', urgency: 'HIGH', days: '3 days', color: 'text-red-400 border-red-400/20 bg-red-400/5' },
                    { vehicle: 'V-0012', task: 'Tyre Rotation', urgency: 'MED', days: '12 days', color: 'text-yellow-400 border-yellow-400/20 bg-yellow-400/5' },
                    { vehicle: 'V-0089', task: 'Annual Service', urgency: 'LOW', days: '31 days', color: 'text-green-400 border-green-400/20 bg-green-400/5' },
                  ].map((item) => (
                    <div key={item.vehicle} className={`p-3 rounded-xl border ${item.color}`}>
                      <div className="text-ap3x-cyan text-xs font-mono font-bold mb-1">{item.vehicle}</div>
                      <div className="text-white text-sm font-semibold">{item.task}</div>
                      <div className="text-ap3x-muted text-xs mt-1">{item.days}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right col */}
            <div className="space-y-6">
              {/* Alerts */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-5 rounded-2xl bg-ap3x-surface/40 border border-ap3x-border/50"
              >
                <div className="flex items-center gap-2 mb-4">
                  <AlertTriangle className="w-4 h-4 text-yellow-400" />
                  <div className="text-white font-bold text-sm">Operational Alerts</div>
                </div>
                <div className="space-y-3">
                  {alerts.map((a, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${
                        a.type === 'warning' ? 'bg-yellow-400' : a.type === 'success' ? 'bg-green-400' : 'bg-ap3x-cyan'
                      }`} />
                      <div>
                        <div className="text-ap3x-text/70 text-xs leading-relaxed">{a.msg}</div>
                        <div className="text-ap3x-muted text-[10px] mt-0.5">{a.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Compliance panel */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-5 rounded-2xl bg-ap3x-surface/40 border border-ap3x-border/50"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Shield className="w-4 h-4 text-purple-400" />
                  <div className="text-white font-bold text-sm">DVSA Compliance</div>
                </div>
                {[
                  { label: 'Tachograph Data', status: 'SYNC', color: 'text-green-400' },
                  { label: "Drivers' Hours (WTD)", status: 'PASS', color: 'text-green-400' },
                  { label: 'Defect Reports', status: 'CLEAR', color: 'text-green-400' },
                  { label: 'Vehicle Inspections', status: '2 DUE', color: 'text-yellow-400' },
                  { label: 'O-Licence Records', status: 'CURRENT', color: 'text-green-400' },
                ].map((c) => (
                  <div key={c.label} className="flex items-center justify-between py-2 border-b border-ap3x-border/20 last:border-0">
                    <span className="text-ap3x-muted text-xs">{c.label}</span>
                    <span className={`text-xs font-mono font-semibold ${c.color}`}>{c.status}</span>
                  </div>
                ))}
              </motion.div>

              {/* Dispatch AI */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-5 rounded-2xl bg-ap3x-surface/40 border border-ap3x-border/50"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Activity className="w-4 h-4 text-ap3x-cyan" />
                  <div className="text-white font-bold text-sm">AI Dispatch Engine</div>
                </div>
                <div className="space-y-2">
                  {[
                    { label: 'Jobs Queued', value: '7', color: 'text-white' },
                    { label: 'Auto-Assigned', value: '5', color: 'text-ap3x-cyan' },
                    { label: 'Avg Assignment Time', value: '0.4s', color: 'text-green-400' },
                    { label: 'Optimisation Score', value: '94%', color: 'text-ap3x-cyan' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between p-2 rounded-lg bg-ap3x-navy/40">
                      <span className="text-ap3x-muted text-xs">{item.label}</span>
                      <span className={`text-sm font-bold font-mono ${item.color}`}>{item.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
