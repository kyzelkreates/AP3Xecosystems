import React, { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

export function AnimatedCounter({ value, duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const numericValue = parseFloat(String(value).replace(/[^0-9.]/g, ''))
  const suffix = String(value).replace(/[0-9.]/g, '')

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const step = numericValue / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= numericValue) {
        setCount(numericValue)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start * 10) / 10)
      }
    }, 16)
    return () => clearInterval(timer)
  }, [isInView, numericValue, duration])

  const display = Number.isInteger(numericValue) ? Math.floor(count) : count.toFixed(1)

  return <span ref={ref}>{display}{suffix}</span>
}

export default AnimatedCounter
