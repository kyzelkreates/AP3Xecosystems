import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'

const navLinks = [
  { label: 'Ecosystem', href: '/ecosystem' },
  {
    label: 'Projects',
    href: '/projects',
    children: [
      { label: 'AP3X Control OS', href: '/projects/ap3x-control-os' },
      { label: 'Fleet Control OS', href: '/projects/fleet-control-os' },
      { label: 'Driver PWA', href: '/projects/driver-pwa' },
    ]
  },
  { label: 'Industries', href: '/industries' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setDropdownOpen(null)
  }, [location])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ap3x-dark/90 backdrop-blur-xl border-b border-ap3x-border/50 shadow-lg shadow-black/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-ap3x-blue to-ap3x-cyan flex items-center justify-center shadow-glow-blue">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="none">
                  <path d="M12 2L22 7V17L12 22L2 17V7L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                  <circle cx="12" cy="12" r="3" fill="currentColor"/>
                </svg>
              </div>
              <div className="absolute inset-0 rounded-lg bg-ap3x-blue/30 blur-md group-hover:bg-ap3x-cyan/40 transition-all duration-300"/>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-lg leading-none tracking-wide">AP3X</span>
              <span className="text-ap3x-cyan text-[10px] font-mono leading-none tracking-widest">ECOSYSTEM</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.href} className="relative">
                {link.children ? (
                  <div
                    onMouseEnter={() => setDropdownOpen(link.href)}
                    onMouseLeave={() => setDropdownOpen(null)}
                  >
                    <button
                      className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        location.pathname.startsWith(link.href)
                          ? 'text-ap3x-cyan bg-ap3x-cyan/10'
                          : 'text-ap3x-muted hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {link.label}
                      <ChevronDown className="w-3 h-3" />
                    </button>
                    <AnimatePresence>
                      {dropdownOpen === link.href && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-0 mt-2 w-52 rounded-xl bg-ap3x-dark/95 backdrop-blur-xl border border-ap3x-border/60 shadow-card overflow-hidden"
                        >
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              to={child.href}
                              className="block px-4 py-3 text-sm text-ap3x-muted hover:text-white hover:bg-ap3x-blue/10 transition-all duration-150"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={link.href}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      location.pathname === link.href
                        ? 'text-ap3x-cyan bg-ap3x-cyan/10'
                        : 'text-ap3x-muted hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/contact"
              className="px-4 py-2 text-sm font-semibold text-ap3x-cyan border border-ap3x-cyan/30 rounded-lg hover:bg-ap3x-cyan/10 hover:border-ap3x-cyan/60 transition-all duration-200"
            >
              Request Pilot
            </Link>
            <Link
              to="/ecosystem"
              className="px-4 py-2 text-sm font-semibold text-white bg-ap3x-blue rounded-lg hover:bg-blue-500 transition-all duration-200 shadow-glow-blue"
            >
              Explore Ecosystem
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-ap3x-muted hover:text-white hover:bg-white/10 transition-all"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-ap3x-dark/95 backdrop-blur-xl border-b border-ap3x-border/50"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <div key={link.href}>
                  <Link
                    to={link.href}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                      location.pathname === link.href
                        ? 'text-ap3x-cyan bg-ap3x-cyan/10'
                        : 'text-ap3x-muted hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="ml-4 mt-1 space-y-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          className="block px-4 py-2 rounded-lg text-xs text-ap3x-muted hover:text-white transition-all"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-3 border-t border-ap3x-border/30 space-y-2">
                <Link to="/contact" className="block w-full text-center px-4 py-3 text-sm font-semibold text-ap3x-cyan border border-ap3x-cyan/30 rounded-lg">
                  Request Pilot
                </Link>
                <Link to="/ecosystem" className="block w-full text-center px-4 py-3 text-sm font-semibold text-white bg-ap3x-blue rounded-lg">
                  Explore Ecosystem
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
