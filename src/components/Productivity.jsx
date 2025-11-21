import React from 'react'

const cards = [
  {
    title: 'Keyboard shortcuts',
    desc: 'Power through your work with extensive shortcuts for every action.',
    img: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=2064&auto=format&fit=crop',
  },
  {
    title: 'Team Planner',
    desc: 'Plan sprints and workload with a visual timeline and capacity.',
    img: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2064&auto=format&fit=crop',
  },
  {
    title: 'Time-blocking',
    desc: 'Turn tasks into time blocks on your calendar to focus deeply.',
    img: 'https://images.unsplash.com/photo-1557683304-673a23048d34?q=80&w=2064&auto=format&fit=crop',
  },
  {
    title: 'Notifications',
    desc: 'Stay on top of updates with fine-grained controls and summaries.',
    img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2064&auto=format&fit=crop',
  },
]

export default function Productivity() {
  return (
    <section className="bg-[#F5F5F5] py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#111827] tracking-tight">Unmatched productivity</h2>
        <p className="mt-4 text-[#6B7280] max-w-2xl">A unified workspace that keeps your team aligned and moving fast.</p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {cards.map((c) => (
            <div key={c.title} className="group relative overflow-hidden rounded-2xl bg-[#0a0a0a] p-6 border border-black/20">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition" />
              <div className="aspect-video overflow-hidden rounded-xl ring-1 ring-white/5">
                <img src={c.img} alt={c.title} className="w-full h-full object-cover" />
              </div>
              <h3 className="mt-5 text-white text-xl font-bold">{c.title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
