import React from 'react'

export default function FeatureTabs() {
  const features = [
    'Team Planner',
    'Project Management',
    'Virtual Office',
    'Chat',
    'Documents',
    'Inbox',
  ]

  return (
    <section className="bg-[#0a0a0a] border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-slate-300 text-sm">
          {features.map((f, i) => (
            <div key={f} className="flex items-center gap-6">
              <span className="hover:text-white transition">{f}</span>
              {i < features.length - 1 && <span className="text-slate-600">•</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
