import React from 'react'

export default function Knowledge() {
  return (
    <section className="bg-[#F5F5F5] py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#111827] tracking-tight">Knowledge at Your Fingertips</h2>
        <p className="mt-4 text-[#6B7280] max-w-2xl">Collaborative documents, versioned, and searchable. Built for teams.</p>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          <div className="rounded-2xl overflow-hidden ring-1 ring-slate-200">
            <img src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2064&auto=format&fit=crop" alt="Docs mockup" />
          </div>
          <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200">
            <pre className="text-sm bg-slate-900 text-slate-100 p-4 rounded-lg overflow-auto"><code>{`const doc = await huly.createDoc({
  title: 'Engineering Onboarding',
  tags: ['docs', 'onboarding'],
  collaborators: ['@alex', '@sam']
})`}</code></pre>
            <p className="mt-4 text-[#6B7280] text-sm">Write, edit, and collaborate in real time with comments and mentions.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
