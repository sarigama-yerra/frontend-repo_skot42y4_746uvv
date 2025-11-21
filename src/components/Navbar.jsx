import React from 'react'
import { Github, ChevronDown } from 'lucide-react'

const NavLink = ({ children }) => (
  <a href="#" className="text-sm text-slate-200 hover:text-white transition-colors px-3 py-2 rounded-md hover:bg-white/5">
    {children}
  </a>
)

export default function Navbar() {
  return (
    <div className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          {/* Left: Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 shadow-lg shadow-blue-500/30 flex items-center justify-center font-black text-white">H</div>
            <span className="text-white font-semibold tracking-tight">Huly</span>
          </div>

          {/* Center: Links */}
          <div className="hidden md:flex items-center">
            <NavLink>Pricing</NavLink>
            <NavLink>
              <span className="inline-flex items-center gap-1">Resources <ChevronDown size={14} className="opacity-70" /></span>
            </NavLink>
            <NavLink>
              <span className="inline-flex items-center gap-1">Community <ChevronDown size={14} className="opacity-70" /></span>
            </NavLink>
            <NavLink>Download</NavLink>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-2">
            <a href="#" className="hidden sm:inline-flex items-center gap-2 text-xs font-medium text-slate-200 hover:text-white px-3 py-2 rounded-md hover:bg-white/5 transition">
              <Github size={16} /> Star Us
            </a>
            <button className="text-xs font-semibold tracking-wide text-slate-200 hover:text-white px-4 py-2 rounded-md border border-white/20 hover:border-white/40 transition uppercase">Sign In</button>
            <button className="text-xs font-semibold tracking-wide text-white px-4 py-2 rounded-md bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-400 hover:to-indigo-400 transition uppercase">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  )
}
