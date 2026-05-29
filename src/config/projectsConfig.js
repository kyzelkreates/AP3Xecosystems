/**
 * AP3X Projects Configuration
 * Add new projects by adding a single object entry to this array.
 * No component changes required.
 */

export const projectsConfig = [
  {
    id: 'ap3x-control-os',
    slug: 'ap3x-control-os',
    name: 'AP3X Control OS',
    tagline: 'Enterprise AI Command & Control Infrastructure',
    shortDescription: 'The core operational brain of the AP3X ecosystem. Manages AI orchestration, deployment pipelines, analytics, and multi-tenant infrastructure from a single unified control plane.',
    description: 'AP3X Control OS serves as the master orchestration layer for the entire ecosystem. It provides enterprise-grade AI agent routing, modular deployment management, real-time analytics, compliance monitoring, and infrastructure control — all from a cinematic unified interface.',
    status: 'LIVE',
    version: '2.4.1',
    category: 'Core Infrastructure',
    icon: 'cpu',
    color: 'blue',
    gradient: 'from-blue-600 to-cyan-500',
    glowColor: 'rgba(0,102,255,0.4)',
    architectureRole: 'Master Orchestration Layer',
    route: '/projects/ap3x-control-os',
    features: [
      { name: 'AI Agent Orchestration', description: 'Route and manage multiple AI agents across deployments', icon: 'brain' },
      { name: 'Deployment Manager', description: 'One-click modular system deployments across environments', icon: 'rocket' },
      { name: 'Real-Time Analytics', description: 'Live operational intelligence with predictive insights', icon: 'chart-bar' },
      { name: 'Compliance Engine', description: 'Automated compliance monitoring and audit trails', icon: 'shield' },
      { name: 'Infrastructure Control', description: 'Multi-tenant infrastructure management and scaling', icon: 'server' },
      { name: 'Automation Pipeline', description: 'Visual workflow builder with trigger-action automation', icon: 'zap' },
    ],
    metrics: [
      { label: 'Active Deployments', value: '24', unit: 'systems', trend: '+3' },
      { label: 'AI Agent Uptime', value: '99.98', unit: '%', trend: '+0.02' },
      { label: 'Ops Efficiency', value: '94', unit: '%', trend: '+12' },
      { label: 'Incidents Resolved', value: '1,847', unit: 'total', trend: 'auto' },
    ],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'WebSocket', 'Docker', 'Supabase'],
    highlights: [
      'Multi-tenant architecture supports unlimited client deployments',
      'AI agent routing with automatic failover and load balancing',
      'Sub-100ms response time for all critical operations',
      'Full audit log with tamper-proof compliance trails',
    ]
  },
  {
    id: 'fleet-control-os',
    slug: 'fleet-control-os',
    name: 'AP3X Fleet Control OS',
    tagline: 'Intelligent Fleet Operations & Dispatch Command',
    shortDescription: 'A complete fleet management operating system with live vehicle tracking, AI-powered dispatch, compliance automation, driver coordination, and predictive maintenance intelligence.',
    description: 'Fleet Control OS transforms fleet operations from reactive chaos into proactive intelligence. Real-time GPS tracking, automated dispatch algorithms, driver performance analytics, DVSA compliance automation, and predictive maintenance — deployed as a standalone module or integrated into the full AP3X ecosystem.',
    status: 'LIVE',
    version: '1.8.3',
    category: 'Vertical Module',
    icon: 'truck',
    color: 'cyan',
    gradient: 'from-cyan-500 to-blue-600',
    glowColor: 'rgba(0,229,255,0.4)',
    architectureRole: 'Vertical Operations Module',
    route: '/projects/fleet-control-os',
    features: [
      { name: 'Live Vehicle Tracking', description: 'Real-time GPS with geofencing and route deviation alerts', icon: 'map-pin' },
      { name: 'AI Dispatch Engine', description: 'Intelligent job assignment based on proximity, capacity, skill', icon: 'brain' },
      { name: 'DVSA Compliance', description: 'Automated tachograph data, WTD, and defect management', icon: 'shield-check' },
      { name: 'Driver Coordination', description: 'Two-way comms, job updates, and performance tracking', icon: 'users' },
      { name: 'Maintenance Intelligence', description: 'Predictive maintenance scheduling with supplier integration', icon: 'wrench' },
      { name: 'Operations Analytics', description: 'Fleet KPI dashboards with cost-per-mile analysis', icon: 'chart-line' },
    ],
    metrics: [
      { label: 'Active Vehicles', value: '312', unit: 'tracked', trend: '+28' },
      { label: 'On-Time Delivery', value: '96.4', unit: '%', trend: '+4.1' },
      { label: 'Fuel Efficiency', value: '18.3', unit: '%', trend: 'saved' },
      { label: 'Compliance Rate', value: '100', unit: '%', trend: 'auto' },
    ],
    techStack: ['React', 'Mapbox GL', 'Node.js', 'PostgreSQL', 'WebSocket', 'PWA', 'Supabase'],
    highlights: [
      'Live GPS tracking with sub-second refresh rates',
      'AI dispatch reduces average response time by 34%',
      'Automated DVSA compliance reporting saves 12hrs/week',
      'Offline-capable driver PWA for connectivity-poor areas',
    ]
  },
  {
    id: 'driver-pwa',
    slug: 'driver-pwa',
    name: 'AP3X Driver PWA',
    tagline: 'Mobile-First Operational Intelligence For Field Teams',
    shortDescription: 'A progressive web app giving drivers and field operatives a powerful, offline-capable interface for job management, checklists, signatures, AI assistance, and real-time coordination.',
    description: 'The Driver PWA bridges the gap between control room intelligence and field operations. Built mobile-first with offline capability, it handles job workflows, digital checklists, e-signatures, incident reporting, AI assistance, and shift management — all without requiring a native app install.',
    status: 'LIVE',
    version: '3.1.0',
    category: 'Mobile Interface',
    icon: 'smartphone',
    color: 'purple',
    gradient: 'from-purple-600 to-blue-500',
    glowColor: 'rgba(124,58,237,0.4)',
    architectureRole: 'Field Operations Interface',
    route: '/projects/driver-pwa',
    features: [
      { name: 'Active Job Management', description: 'Real-time job queue with status updates and navigation', icon: 'list-todo' },
      { name: 'Digital Checklists', description: 'Configurable pre/post-trip and safety checklists', icon: 'check-square' },
      { name: 'E-Signature Capture', description: 'Customer and compliance signature collection', icon: 'pen-tool' },
      { name: 'Incident Reporting', description: 'Photo-enabled incident logging with GPS tagging', icon: 'alert-triangle' },
      { name: 'AI Field Assistant', description: 'Voice and text AI assistant for field queries', icon: 'message-square' },
      { name: 'Offline Mode', description: 'Full functionality without connectivity, auto-syncs on reconnect', icon: 'wifi-off' },
    ],
    metrics: [
      { label: 'Active Users', value: '2,840', unit: 'field ops', trend: '+340' },
      { label: 'Jobs Completed', value: '47,291', unit: 'this month', trend: '+8.2%' },
      { label: 'Paperwork Eliminated', value: '100', unit: '%', trend: 'digital' },
      { label: 'App Load Time', value: '0.8', unit: 'seconds', trend: 'P95' },
    ],
    techStack: ['React PWA', 'Service Workers', 'IndexedDB', 'WebRTC', 'Geolocation API', 'Push Notifications'],
    highlights: [
      'Installs like a native app — no App Store required',
      'Works fully offline with background sync on reconnect',
      'Voice-enabled AI assistant for hands-free operation',
      'Biometric authentication support on compatible devices',
    ]
  },
]

export const getProjectBySlug = (slug) => projectsConfig.find(p => p.slug === slug)
export const getFeaturedProjects = () => projectsConfig.filter(p => p.status === 'LIVE')
