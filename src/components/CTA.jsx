export default function CTA() {
  return (
    <section id="cta" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 sm:p-12 text-center text-white shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-bold">Ready to engineer predictable growth?</h3>
          <p className="mt-3 text-white/90">Get a free audit and tailored roadmap for your acquisition system.</p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="https://cal.com" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-blue-700 font-semibold shadow hover:shadow-md">
              Book a Strategy Call
            </a>
            <a href="#solutions" className="inline-flex items-center justify-center rounded-md border border-white/30 px-5 py-3 font-semibold hover:bg-white/10">
              See What We Build
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
