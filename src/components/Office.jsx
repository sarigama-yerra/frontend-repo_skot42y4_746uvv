import React from 'react'
import { Settings, Phone, Users } from 'lucide-react'

export default function Office() {
  return (
    <section className="bg-[#F5F5F5] py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#111827] tracking-tight">Work together. Like in the office.</h2>
        <p className="mt-4 text-[#6B7280] max-w-2xl">A virtual HQ for your team with meetings, collaboration, and presence.</p>

        <div className="mt-10 rounded-2xl overflow-hidden ring-1 ring-slate-200">
          <img src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2064&auto=format&fit=crop" alt="Video call mockup" className="w-full" />
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-xl bg-white p-6 ring-1 ring-slate-200">
            <Settings className="text-blue-500" />
            <h3 className="mt-3 font-semibold text-[#111827]">Customize workspace</h3>
            <p className="text-[#6B7280] text-sm mt-1">Tailor spaces, roles, and permissions for how your team works.</p>
          </div>
          <div className="rounded-xl bg-white p-6 ring-1 ring-slate-200">
            <Phone className="text-blue-500" />
            <h3 className="mt-3 font-semibold text-[#111827]">Audio and video calls</h3>
            <p className="text-[#6B7280] text-sm mt-1">Spin up meetings instantly with screen share and recording.</p>
          </div>
          <div className="rounded-xl bg-white p-6 ring-1 ring-slate-200">
            <Users className="text-blue-500" />
            <h3 className="mt-3 font-semibold text-[#111827]">Invite guests</h3>
            <p className="text-[#6B7280] text-sm mt-1">Work with clients and partners securely in shared spaces.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
