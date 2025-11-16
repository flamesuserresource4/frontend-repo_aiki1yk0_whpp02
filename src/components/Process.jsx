import { CheckCircle2 } from 'lucide-react'

const steps = [
  {
    title: 'Strategy Sprint',
    desc: 'Deep-dive on offer, ICP, and funnel strategy. We map the revenue engine end-to-end.'
  },
  {
    title: 'Build & Automate',
    desc: 'Landing pages, CRM, integrations, and AI assistants — shipped fast with tight QA.'
  },
  {
    title: 'Launch & Optimize',
    desc: 'We monitor metrics, fix bottlenecks, and iterate to unlock compound growth.'
  }
]

export default function Process() {
  return (
    <section id="process" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-gray-900">How we work</h2>
          <p className="mt-3 text-gray-600">A focused, collaborative process designed to ship outcomes — not busywork.</p>
        </div>

        <ol className="mt-10 grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <li key={s.title} className="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <span className="absolute -top-3 -left-3 h-8 w-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold shadow">{i+1}</span>
              <h3 className="font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
              <div className="mt-4 flex items-center gap-2 text-sm text-green-600">
                <CheckCircle2 className="h-4 w-4" /> Milestone delivered
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
