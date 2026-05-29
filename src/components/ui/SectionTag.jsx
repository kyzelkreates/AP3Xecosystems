import React from 'react'

export function SectionTag({ children, className = '' }) {
  return (
    <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border border-ap3x-cyan/30 bg-ap3x-cyan/5 text-ap3x-cyan text-xs font-mono font-medium tracking-widest uppercase ${className}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-ap3x-cyan animate-pulse" />
      {children}
    </span>
  )
}

export default SectionTag
