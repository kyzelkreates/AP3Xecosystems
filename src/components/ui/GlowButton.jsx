import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export function GlowButton({ to, href, onClick, children, variant = 'primary', size = 'md', className = '' }) {
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  }

  const variants = {
    primary: 'bg-ap3x-blue text-white hover:bg-blue-500 shadow-glow-blue hover:shadow-glow-cyan',
    outline: 'border border-ap3x-cyan/40 text-ap3x-cyan hover:bg-ap3x-cyan/10 hover:border-ap3x-cyan/70',
    ghost: 'text-ap3x-muted hover:text-white hover:bg-white/5',
    danger: 'bg-red-600 text-white hover:bg-red-500',
  }

  const classes = `inline-flex items-center gap-2 font-semibold rounded-lg transition-all duration-300 ${sizes[size]} ${variants[variant]} ${className}`

  const content = (
    <motion.span
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={classes}
    >
      {children}
    </motion.span>
  )

  if (to) return <Link to={to}>{content}</Link>
  if (href) return <a href={href} target="_blank" rel="noopener noreferrer">{content}</a>
  return <button onClick={onClick}>{content}</button>
}

export default GlowButton
