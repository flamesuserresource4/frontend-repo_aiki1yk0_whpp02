import { TrendingUp, Workflow, Bot, Mail, Gauge, LineChart } from 'lucide-react'

const solutions = [
  {
    icon: TrendingUp,
    title: 'Acquisition Funnels',
    desc: 'High-converting landing pages, lead magnets, and nurture sequences built to capture and qualify demand.'
  },
  {
    icon: Workflow,
    title: 'CRM & Automations',
    desc: 'HubSpot/GoHighLevel pipelines, lead routing, SLAs, and lifecycle automation that prevent revenue leaks.'
  },
  {
    icon: Bot,
    title: 'AI Assistants',
    desc: 'Chat, SMS, and email agents that book meetings, handle FAQs, and follow-up at scale.'
  },
  {
    icon: Mail,
    title: 'Outbound Systems',
    desc: 'Research, list building, multichannel outreach, and appointment-setting frameworks.'
  },
  {
    icon: Gauge,
    title: 'Performance Ops',
    desc: 'Attribution, analytics, and conversion tracking to optimize your customer journey.'
  },
  {
    icon: LineChart,
    title: 'Reporting & Insights',
    desc: 'Dashboards and weekly reporting so you always know what’s working.'
  }
]

export default function Solutions() {
  return (
    <section id="solutions" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-gray-900">What we build</h2>
          <p className="mt-3 text-gray-600">End-to-end revenue systems that attract, convert, and retain customers — with automation doing the heavy lifting.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((s) => (
            <div key={s.title} className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-11 w-11 rounded-lg bg-blue-600/10 text-blue-600 flex items-center justify-center">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
