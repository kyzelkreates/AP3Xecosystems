/**
 * AP3X Platform Features Configuration
 * Technology capabilities and platform features.
 */

export const techStackConfig = [
  {
    category: 'Frontend Architecture',
    icon: 'layers',
    color: 'blue',
    items: [
      { name: 'React 18', description: 'Component-driven UI with concurrent rendering', icon: 'atom' },
      { name: 'Progressive Web App', description: 'Native-like experience without App Store friction', icon: 'smartphone' },
      { name: 'Framer Motion', description: 'Production-grade animation and transition system', icon: 'play' },
      { name: 'Tailwind CSS', description: 'Utility-first design system for consistent UI', icon: 'palette' },
    ]
  },
  {
    category: 'AI Integration Layer',
    icon: 'brain',
    color: 'purple',
    items: [
      { name: 'AI Agent Routing', description: 'Intelligent task routing to specialised AI agents', icon: 'git-branch' },
      { name: 'Predictive Analytics', description: 'ML-powered forecasting and anomaly detection', icon: 'trending-up' },
      { name: 'NLP Processing', description: 'Natural language interfaces for operational queries', icon: 'message-square' },
      { name: 'Computer Vision', description: 'Image analysis for inspection and documentation', icon: 'eye' },
    ]
  },
  {
    category: 'Infrastructure',
    icon: 'server',
    color: 'cyan',
    items: [
      { name: 'Supabase Backend', description: 'Realtime database, auth, and storage infrastructure', icon: 'database' },
      { name: 'Multi-Tenant Architecture', description: 'Isolated client environments on shared infrastructure', icon: 'shield' },
      { name: 'Edge Deployment', description: 'Global CDN with sub-50ms content delivery', icon: 'globe' },
      { name: 'WebSocket Real-Time', description: 'Bidirectional communication for live operational data', icon: 'radio' },
    ]
  },
  {
    category: 'Operational Systems',
    icon: 'settings',
    color: 'amber',
    items: [
      { name: 'Offline-First PWA', description: 'IndexedDB sync with zero-downtime field operations', icon: 'wifi-off' },
      { name: 'Mobile Synchronisation', description: 'Conflict-free data sync across devices and teams', icon: 'refresh-cw' },
      { name: 'Push Notifications', description: 'Real-time alerts for critical operational events', icon: 'bell' },
      { name: 'Biometric Auth', description: 'Device biometric security for field access control', icon: 'fingerprint' },
    ]
  },
]

export const innovationMetrics = [
  { label: 'Industries Deployable', value: '5+', icon: 'building', desc: 'Same core, different verticals' },
  { label: 'Deployment Time', value: '< 72hrs', icon: 'clock', desc: 'From contract to live system' },
  { label: 'Workforce Impact', value: '10,000+', icon: 'users', desc: 'Operatives digitised' },
  { label: 'Cost Reduction', value: '40-60%', icon: 'trending-down', desc: 'Vs traditional systems' },
  { label: 'Uptime SLA', value: '99.98%', icon: 'shield', desc: 'Production guarantee' },
  { label: 'UK SMEs Targeted', value: '500K+', icon: 'target', desc: 'Addressable market' },
]

export const innovationPillars = [
  {
    title: 'Workforce Digitisation',
    description: 'Eliminating paper-based operational workflows and replacing them with intelligent, trackable digital systems accessible to every team member.',
    icon: 'tablet',
    stat: '100% paperless operations',
    color: 'blue',
  },
  {
    title: 'AI-Assisted Operations',
    description: 'Embedding practical AI at every operational touchpoint — from dispatch optimisation to anomaly detection — without requiring specialist expertise.',
    icon: 'cpu',
    stat: '34% average efficiency gain',
    color: 'cyan',
  },
  {
    title: 'SME Modernisation',
    description: 'Delivering enterprise-grade operational intelligence to SMEs who have historically been priced out of complex technology platforms.',
    icon: 'building-2',
    stat: '60% lower cost than legacy systems',
    color: 'purple',
  },
  {
    title: 'UK Innovation Impact',
    description: 'Developing sovereign AI operational infrastructure that strengthens UK competitiveness across logistics, healthcare, and workforce sectors.',
    icon: 'flag',
    stat: '500K+ UK SME addressable market',
    color: 'amber',
  },
]
