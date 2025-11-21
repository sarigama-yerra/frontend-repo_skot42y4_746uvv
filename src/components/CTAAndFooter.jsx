import React from 'react'
import { ArrowRight, Slack, Twitter, Linkedin, Github } from 'lucide-react'

export default function CTAAndFooter() {
  return (
    <section className="bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-4 py-24">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-transparent p-10">
          <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-gradient-to-br from-orange-500 to-pink-500 blur-3xl opacity-40 animate-pulse" />
          <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">Join the movement</h3>
          <p className="mt-4 text-slate-300 max-w-2xl">See Huly in action and connect with the community.</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 px-6 py-3 text-white font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition">
              See in action <ArrowRight size={18} />
            </button>
            <button className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-white font-semibold border border-white/20 hover:bg-white/20 transition">
              <Slack size={18} /> Join our Slack
            </button>
          </div>
        </div>

        <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-white/10 pt-8">
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Huly. All rights reserved.</p>
          <div className="flex items-center gap-6 text-slate-400 text-sm">
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-white"><Twitter size={18} /></a>
              <a href="#" className="hover:text-white"><Linkedin size={18} /></a>
              <a href="#" className="hover:text-white"><Github size={18} /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
