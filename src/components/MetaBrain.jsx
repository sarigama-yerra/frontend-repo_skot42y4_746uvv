import React from 'react'

const items = [
  { title: 'Create tasks', desc: 'Capture ideas instantly with quick add from anywhere.' },
  { title: 'Plan your work', desc: 'Turn goals into actionable steps with timelines.' },
  { title: 'Take notes', desc: 'Rich docs with mentions, embeds, and AI summarization.' },
  { title: 'Track progress', desc: 'Dashboards that show momentum and blockers.' },
  { title: 'Connect knowledge', desc: 'Link tasks, docs, and decisions together.' },
]

export default function MetaBrain() {
  return (
    <section className="bg-[#F5F5F5] py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#111827] tracking-tight">Huly MetaBrain</h2>
        <p className="mt-4 text-[#6B7280] max-w-2xl">A second brain for your team that connects tasks, docs, and conversations.</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((i) => (
            <div key={i.title} className="relative rounded-2xl bg-white p-6 ring-1 ring-slate-200 hover:shadow-xl transition">
              <div className="absolute -top-4 -left-4 h-24 w-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 blur-2xl opacity-20" />
              <h3 className="font-semibold text-[#111827]">{i.title}</h3>
              <p className="text-[#6B7280] text-sm mt-2">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
