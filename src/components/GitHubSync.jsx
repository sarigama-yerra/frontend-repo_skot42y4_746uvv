import React from 'react'
import { GitBranch, Shield, Repeat, Lock, GitPullRequest, Bell } from 'lucide-react'

const features = [
  { icon: Repeat, title: 'Two-way synchronization', desc: 'Issues and PRs stay in sync across systems in real time.' },
  { icon: Lock, title: 'Private tasks', desc: 'Secure items that are only visible to you until shared.' },
  { icon: GitPullRequest, title: 'PR automation', desc: 'Auto-link tasks, enforce checks, and keep flows moving.' },
  { icon: Shield, title: 'Permissions', desc: 'Granular control for repos, teams, and environments.' },
  { icon: GitBranch, title: 'Branch naming', desc: 'Predictable conventions for clean, searchable history.' },
  { icon: Bell, title: 'Notifications', desc: 'Know exactly what needs your attention with rollups.' },
]

export default function GitHubSync() {
  return (
    <section className="relative bg-[#0a0a0a] py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 via-transparent to-blue-500/10" />
      <div className="max-w-6xl mx-auto px-4 relative">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">Sync with GitHub. Both ways.</h2>
        <p className="mt-4 text-slate-300 max-w-2xl">Tightly integrated, with a focus on developer experience.</p>

        <div className="mt-12">
          <div className="relative rounded-2xl p-2 bg-black/40 border border-white/10 overflow-hidden">
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-orange-500 via-blue-500 to-indigo-500 opacity-60 blur-xl" />
            <img src="https://images.unsplash.com/photo-1654277041218-84424c78f0ae?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxHaXRIdWIlMjBJbnRlZ3JhdGlvbnxlbnwwfDB8fHwxNzYzNzI2OTAxfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="GitHub Integration" className="relative rounded-xl ring-1 ring-white/10" />
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl bg-white/5 p-6 border border-white/10 hover:border-white/20 transition">
              <Icon className="text-orange-400" />
              <h3 className="mt-3 text-white font-semibold">{title}</h3>
              <p className="text-slate-300 text-sm mt-1">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
