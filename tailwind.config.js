/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ap3x: {
          black: '#020408',
          dark: '#050d1a',
          navy: '#0a1628',
          blue: '#0066ff',
          cyan: '#00e5ff',
          purple: '#7c3aed',
          glow: '#00b4ff',
          border: '#1a2d4a',
          surface: '#0d1f35',
          text: '#e2e8f0',
          muted: '#64748b',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(rgba(0,180,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,180,255,0.03) 1px, transparent 1px)',
        'hero-gradient': 'radial-gradient(ellipse at 50% 0%, rgba(0,102,255,0.15) 0%, rgba(0,229,255,0.05) 40%, transparent 70%)',
        'card-gradient': 'linear-gradient(135deg, rgba(13,31,53,0.8) 0%, rgba(5,13,26,0.9) 100%)',
        'glow-gradient': 'radial-gradient(ellipse at center, rgba(0,180,255,0.2) 0%, transparent 70%)',
      },
      backgroundSize: {
        'grid': '40px 40px',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'scan': 'scan 3s linear infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        }
      },
      boxShadow: {
        'glow-blue': '0 0 20px rgba(0,180,255,0.3), 0 0 60px rgba(0,180,255,0.1)',
        'glow-cyan': '0 0 20px rgba(0,229,255,0.3), 0 0 60px rgba(0,229,255,0.1)',
        'glow-purple': '0 0 20px rgba(124,58,237,0.3), 0 0 60px rgba(124,58,237,0.1)',
        'card': '0 4px 40px rgba(0,0,0,0.6), 0 0 0 1px rgba(0,180,255,0.08)',
      }
    },
  },
  plugins: [],
}
