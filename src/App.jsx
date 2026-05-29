import React from 'react'
import { Routes, Route } from 'react-router-dom'
import PageLayout from './components/layout/PageLayout'
import HomePage from './pages/HomePage'
import EcosystemPage from './pages/EcosystemPage'
import ProjectsPage from './pages/ProjectsPage'
import ControlOSPage from './pages/ControlOSPage'
import FleetControlOSPage from './pages/FleetControlOSPage'
import DriverPWAPage from './pages/DriverPWAPage'
import IndustriesPage from './pages/IndustriesPage'
import ContactPage from './pages/ContactPage'

export default function App() {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ecosystem" element={<EcosystemPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/ap3x-control-os" element={<ControlOSPage />} />
        <Route path="/projects/fleet-control-os" element={<FleetControlOSPage />} />
        <Route path="/projects/driver-pwa" element={<DriverPWAPage />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </PageLayout>
  )
}
