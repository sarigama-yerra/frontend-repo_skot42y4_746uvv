import React from 'react'
import Spline from '@splinetool/react-spline'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#0a0a0a]">
      {/* 3D Background Cover */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays for depth; pointer-events-none so Spline stays interactive */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
        <div className="absolute -inset-x-10 -top-40 h-80 bg-gradient-to-r from-blue-600/20 via-purple-600/10 to-transparent blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 pt-36 pb-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
              Everything App for your teams
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-200/90 max-w-2xl">
              Huly, an open-source platform, serves as an all-in-one replacement of Linear, Jira, Slack, and Notion.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 px-6 py-3 text-white font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition">
                See in action <ArrowRight size={18} />
              </button>
              <div className="text-slate-400 text-sm">Open-source • MIT License</div>
            </div>
          </div>

          {/* App screenshot placeholder */}
          <div className="mt-16">
            <div className="relative rounded-2xl border border-white/10 bg-black/30 p-2 backdrop-blur">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-transparent blur-2xl" />
              <img
                src="https://images.unsplash.com/photo-1551281044-8e8d56e82d5e?q=80&w=2064&auto=format&fit=crop"
                alt="Huly App Mockup"
                className="relative rounded-xl ring-1 ring-white/10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
