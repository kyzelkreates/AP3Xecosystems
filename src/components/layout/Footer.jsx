import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const footerLinks = {
  Platform: [
    { label: 'Ecosystem', href: '/ecosystem' },
    { label: 'Projects', href: '/projects' },
    { label: 'Industries', href: '/industries' },
    { label: 'Technology', href: '/ecosystem#technology' },
  ],
  Products: [
    { label: 'AP3X Control OS', href: '/projects/ap3x-control-os' },
    { label: 'Fleet Control OS', href: '/projects/fleet-control-os' },
    { label: 'Driver PWA', href: '/projects/driver-pwa' },
  ],
  Industries: [
    { label: 'Logistics & Transport', href: '/industries' },
    { label: 'Healthcare', href: '/industries' },
    { label: 'Mental Health', href: '/industries' },
    { label: 'Workforce Ops', href: '/industries' },
  ],
  Company: [
    { label: 'Contact', href: '/contact' },
    { label: 'Request Pilot', href: '/contact' },
    { label: 'Partnerships', href: '/contact' },
  ],
}

export default function Footer() {
  return (
    <footer className="relative border-t border-ap3x-border/30 bg-ap3x-dark/50">
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4 group w-fit">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-ap3x-blue to-ap3x-cyan flex items-center justify-center shadow-glow-blue">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="none">
                  <path d="M12 2L22 7V17L12 22L2 17V7L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                  <circle cx="12" cy="12" r="3" fill="currentColor"/>
                </svg>
              </div>
              <div>
                <div className="text-white font-bold text-xl leading-none">AP3X</div>
                <div className="text-ap3x-cyan text-[10px] font-mono tracking-widest">ECOSYSTEM</div>
              </div>
            </Link>
            <p className="text-ap3x-muted text-sm leading-relaxed mb-6 max-w-xs">
              Modular AI operational infrastructure deployable across multiple industries from a single core platform.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-ap3x-cyan animate-pulse" />
              <span className="text-ap3x-cyan text-xs font-mono">SYSTEMS OPERATIONAL</span>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white text-xs font-semibold tracking-widest uppercase mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-ap3x-muted text-sm hover:text-ap3x-cyan transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-ap3x-border/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-ap3x-muted text-xs">
            © {new Date().getFullYear()} AP3X Ecosystem. Operational Intelligence Infrastructure.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-ap3x-muted text-xs font-mono">v2.4.1</span>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
              <span className="text-ap3x-muted text-xs">All Systems Nominal</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
