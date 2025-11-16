const quotes = [
  {
    name: 'Maya R.',
    role: 'Founder, SaaS',
    quote: 'They rebuilt our funnel and CRM in three weeks. Pipeline doubled and we now book meetings while we sleep.'
  },
  {
    name: 'Jordan K.',
    role: 'Agency Owner',
    quote: 'Finally a team that ships outcomes. Clean systems, clear dashboards, and consistent booked calls.'
  },
  {
    name: 'Ethan L.',
    role: 'Ecommerce Lead',
    quote: 'Attribution and automations tightened everything up. CAC down 32%, LTV trending up.'
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-gray-900">Results our clients see</h2>
          <p className="mt-3 text-gray-600">A sample of outcomes from recent build-outs.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {quotes.map((q) => (
            <figure key={q.name} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <blockquote className="text-gray-700">“{q.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-gray-600">{q.name} — {q.role}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
