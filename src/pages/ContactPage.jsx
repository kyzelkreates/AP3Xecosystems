import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle, Building2, Handshake, Lightbulb, Monitor, Cpu, Truck, Smartphone, ChevronDown } from 'lucide-react'
import SectionTag from '../components/ui/SectionTag'
import ParticleField from '../components/animations/ParticleField'

const inquiryTypes = [
  { id: 'pilot', label: 'Request a Pilot', icon: Monitor, desc: 'Test AP3X in your environment' },
  { id: 'partnership', label: 'Partnership Discussion', icon: Handshake, desc: 'Commercial or reseller partnership' },
  { id: 'innovation', label: 'Innovation Collaboration', icon: Lightbulb, desc: 'R&D, grants, or accelerator partnerships' },
  { id: 'enterprise', label: 'Enterprise Demonstration', icon: Building2, desc: 'Full platform walkthrough for your team' },
]

const projectCategories = [
  { id: 'control-os', label: 'AP3X Control OS', icon: Cpu },
  { id: 'fleet-os', label: 'Fleet Control OS', icon: Truck },
  { id: 'driver-pwa', label: 'Driver PWA', icon: Smartphone },
  { id: 'full-ecosystem', label: 'Full Ecosystem', icon: Monitor },
]

const industries = [
  'Logistics & Transport',
  'Healthcare',
  'Mental Health & Recovery',
  'Training & Education',
  'Workforce Operations',
  'Other / Multiple',
]

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    organisation: '',
    email: '',
    inquiryType: '',
    projectCategory: '',
    industry: '',
    message: '',
    fleetSize: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 1500))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <ParticleField count={40} className="opacity-40" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex justify-center mb-4">
            <SectionTag>Get In Touch</SectionTag>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black text-white mb-6"
          >
            Start Your{' '}
            <span className="bg-gradient-to-r from-ap3x-blue to-ap3x-cyan bg-clip-text text-transparent">
              Deployment Journey
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-ap3x-muted text-xl max-w-2xl mx-auto"
          >
            From initial conversation to live operational system in under 72 hours. Let's talk about what AP3X can do for your organisation.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Left — info panel */}
            <div className="lg:col-span-2 space-y-6">
              {/* Inquiry types */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-ap3x-surface/40 border border-ap3x-border/50"
              >
                <div className="text-white font-bold mb-4">How Can We Help?</div>
                <div className="space-y-3">
                  {inquiryTypes.map((type) => {
                    const Icon = type.icon
                    return (
                      <div key={type.id} className="flex items-start gap-3 p-3 rounded-xl bg-ap3x-navy/40 border border-ap3x-border/30">
                        <div className="w-9 h-9 rounded-lg bg-ap3x-blue/10 border border-ap3x-blue/20 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-4 h-4 text-ap3x-cyan" />
                        </div>
                        <div>
                          <div className="text-white text-sm font-semibold">{type.label}</div>
                          <div className="text-ap3x-muted text-xs">{type.desc}</div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </motion.div>

              {/* Ecosystem summary */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-6 rounded-2xl bg-ap3x-surface/40 border border-ap3x-border/50"
              >
                <div className="text-white font-bold mb-4">Ecosystem Summary</div>
                <div className="space-y-2.5">
                  {[
                    { label: 'AP3X Control OS', desc: 'Master orchestration & AI', color: 'bg-blue-400' },
                    { label: 'Fleet Control OS', desc: 'Transport & logistics ops', color: 'bg-cyan-400' },
                    { label: 'Driver PWA', desc: 'Mobile field interface', color: 'bg-purple-400' },
                    { label: 'Industry Modules', desc: '5 verticals deployable', color: 'bg-green-400' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full flex-shrink-0 ${item.color}`} />
                      <div>
                        <div className="text-white text-sm font-semibold">{item.label}</div>
                        <div className="text-ap3x-muted text-xs">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Deployment promise */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-5 rounded-2xl border border-ap3x-cyan/20 bg-ap3x-cyan/5 text-center"
              >
                <div className="text-4xl font-black text-white mb-1">72hrs</div>
                <div className="text-ap3x-cyan text-sm font-semibold mb-2">From Contract to Live System</div>
                <div className="text-ap3x-muted text-xs">No lengthy procurement. No complex setup. We handle everything.</div>
              </motion.div>
            </div>

            {/* Right — Form */}
            <div className="lg:col-span-3">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center p-12 rounded-2xl bg-ap3x-surface/40 border border-green-500/30 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200 }}
                      className="w-20 h-20 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mb-6"
                    >
                      <CheckCircle className="w-10 h-10 text-green-400" />
                    </motion.div>
                    <h3 className="text-white font-black text-3xl mb-3">Message Received</h3>
                    <p className="text-ap3x-muted text-lg max-w-sm">
                      Our team will be in touch within 24 hours to discuss your requirements and next steps.
                    </p>
                    <div className="mt-8 px-5 py-3 rounded-xl bg-ap3x-navy/60 border border-ap3x-border/40">
                      <div className="text-ap3x-muted text-xs font-mono">REFERENCE</div>
                      <div className="text-ap3x-cyan text-sm font-mono font-bold">AP3X-{Date.now().toString(36).toUpperCase()}</div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    onSubmit={handleSubmit}
                    className="p-8 rounded-2xl bg-ap3x-surface/40 border border-ap3x-border/50 space-y-5"
                  >
                    <div className="text-white font-bold text-lg mb-2">Enquiry Details</div>

                    {/* Inquiry type selector */}
                    <div>
                      <label className="block text-ap3x-muted text-xs font-semibold tracking-wider uppercase mb-2">Type of Enquiry</label>
                      <div className="grid grid-cols-2 gap-2">
                        {inquiryTypes.map((type) => {
                          const Icon = type.icon
                          return (
                            <button
                              key={type.id}
                              type="button"
                              onClick={() => setForm(f => ({ ...f, inquiryType: type.id }))}
                              className={`flex items-center gap-2 p-3 rounded-xl border text-left transition-all ${
                                form.inquiryType === type.id
                                  ? 'border-ap3x-cyan/50 bg-ap3x-cyan/5 text-ap3x-cyan'
                                  : 'border-ap3x-border/40 text-ap3x-muted hover:border-ap3x-border/70'
                              }`}
                            >
                              <Icon className="w-4 h-4 flex-shrink-0" />
                              <span className="text-xs font-semibold">{type.label}</span>
                            </button>
                          )
                        })}
                      </div>
                    </div>

                    {/* Name & org */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-ap3x-muted text-xs font-semibold tracking-wider uppercase mb-2">Full Name *</label>
                        <input
                          required
                          value={form.name}
                          onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                          className="w-full px-4 py-3 rounded-xl bg-ap3x-navy/60 border border-ap3x-border/50 text-white placeholder-ap3x-muted/50 text-sm focus:outline-none focus:border-ap3x-cyan/50 transition-all"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-ap3x-muted text-xs font-semibold tracking-wider uppercase mb-2">Organisation *</label>
                        <input
                          required
                          value={form.organisation}
                          onChange={e => setForm(f => ({ ...f, organisation: e.target.value }))}
                          className="w-full px-4 py-3 rounded-xl bg-ap3x-navy/60 border border-ap3x-border/50 text-white placeholder-ap3x-muted/50 text-sm focus:outline-none focus:border-ap3x-cyan/50 transition-all"
                          placeholder="Company / organisation"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-ap3x-muted text-xs font-semibold tracking-wider uppercase mb-2">Email Address *</label>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl bg-ap3x-navy/60 border border-ap3x-border/50 text-white placeholder-ap3x-muted/50 text-sm focus:outline-none focus:border-ap3x-cyan/50 transition-all"
                        placeholder="you@organisation.com"
                      />
                    </div>

                    {/* Project + Industry */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-ap3x-muted text-xs font-semibold tracking-wider uppercase mb-2">System of Interest</label>
                        <div className="relative">
                          <select
                            value={form.projectCategory}
                            onChange={e => setForm(f => ({ ...f, projectCategory: e.target.value }))}
                            className="w-full px-4 py-3 rounded-xl bg-ap3x-navy/60 border border-ap3x-border/50 text-white text-sm focus:outline-none focus:border-ap3x-cyan/50 transition-all appearance-none"
                          >
                            <option value="">Select system...</option>
                            {projectCategories.map(p => <option key={p.id} value={p.id}>{p.label}</option>)}
                          </select>
                          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ap3x-muted pointer-events-none" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-ap3x-muted text-xs font-semibold tracking-wider uppercase mb-2">Industry</label>
                        <div className="relative">
                          <select
                            value={form.industry}
                            onChange={e => setForm(f => ({ ...f, industry: e.target.value }))}
                            className="w-full px-4 py-3 rounded-xl bg-ap3x-navy/60 border border-ap3x-border/50 text-white text-sm focus:outline-none focus:border-ap3x-cyan/50 transition-all appearance-none"
                          >
                            <option value="">Select industry...</option>
                            {industries.map(ind => <option key={ind} value={ind}>{ind}</option>)}
                          </select>
                          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ap3x-muted pointer-events-none" />
                        </div>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-ap3x-muted text-xs font-semibold tracking-wider uppercase mb-2">Message *</label>
                      <textarea
                        required
                        rows={5}
                        value={form.message}
                        onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl bg-ap3x-navy/60 border border-ap3x-border/50 text-white placeholder-ap3x-muted/50 text-sm focus:outline-none focus:border-ap3x-cyan/50 transition-all resize-none"
                        placeholder="Tell us about your operational challenge, team size, current systems, and what you'd like to achieve with AP3X..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={loading}
                      whileHover={{ scale: loading ? 1 : 1.02 }}
                      whileTap={{ scale: loading ? 1 : 0.98 }}
                      className="w-full flex items-center justify-center gap-3 py-4 bg-ap3x-blue text-white font-bold rounded-xl shadow-glow-blue hover:bg-blue-500 transition-all disabled:opacity-70 text-base"
                    >
                      {loading ? (
                        <>
                          <div className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Enquiry
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
