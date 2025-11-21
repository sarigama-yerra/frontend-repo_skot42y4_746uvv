import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeatureTabs from './components/FeatureTabs'
import Productivity from './components/Productivity'
import Office from './components/Office'
import GitHubSync from './components/GitHubSync'
import MetaBrain from './components/MetaBrain'
import Knowledge from './components/Knowledge'
import CTAAndFooter from './components/CTAAndFooter'

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />
      <main className="pt-16">{/* offset for fixed navbar */}
        <Hero />
        <FeatureTabs />
        <Productivity />
        <Office />
        <GitHubSync />
        <MetaBrain />
        <Knowledge />
        <CTAAndFooter />
      </main>
    </div>
  )
}

export default App
