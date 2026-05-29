import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import HeroSection from '../components/sections/HeroSection'
import ProjectsShowcase from '../components/sections/ProjectsShowcase'
import IndustriesSection from '../components/sections/IndustriesSection'
import TechSection from '../components/sections/TechSection'
import InnovationSection from '../components/sections/InnovationSection'

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <ProjectsShowcase />
      <IndustriesSection />
      <TechSection />
      <InnovationSection />

      {/* Final CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ap3x-blue/5 to-transparent pointer-events-none" />
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-ap3x-cyan text-xs font-mono tracking-widest mb-4">READY TO DEPLOY?</div>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
              Start Your{' '}
              <span className="bg-gradient-to-r from-ap3x-blue to-ap3x-cyan bg-clip-text text-transparent">
                Pilot Deployment
              </span>
            </h2>
            <p className="text-ap3x-muted text-lg mb-10 max-w-xl mx-auto">
              From initial discussion to live operational system in under 72 hours.
              No lengthy procurement. No complex setup.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.03, boxShadow: '0 0 40px rgba(0,102,255,0.5)' }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-3 px-8 py-4 bg-ap3x-blue text-white font-bold rounded-xl shadow-glow-blue hover:bg-blue-500 transition-all text-base"
                >
                  Request a Pilot <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link to="/ecosystem">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-3 px-8 py-4 border border-ap3x-cyan/30 text-ap3x-cyan font-bold rounded-xl hover:bg-ap3x-cyan/5 transition-all text-base"
                >
                  Explore Full Ecosystem
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
