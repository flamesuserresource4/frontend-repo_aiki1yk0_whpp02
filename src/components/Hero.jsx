import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative pt-28 pb-20 overflow-hidden">
      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900"
            >
              Turn clicks into clients with automated growth systems
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-lg text-gray-600"
            >
              We design and implement acquisition funnels, CRM workflows, and AI-powered outreach that scale revenue on autopilot.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <a href="#cta" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-white font-semibold shadow-sm hover:shadow-md">
                Book a Strategy Call
              </a>
              <a href="#solutions" className="inline-flex items-center justify-center rounded-md px-6 py-3 text-gray-700 font-semibold border border-gray-200 hover:bg-gray-50">
                Explore Solutions
              </a>
            </motion.div>

            <div className="mt-10 flex items-center gap-6 text-sm text-gray-600">
              <div className="flex -space-x-2">
                {[...Array(5)].map((_, i) => (
                  <img key={i} src={`https://i.pravatar.cc/40?img=${i+1}`} alt="avatar" className="h-8 w-8 rounded-full ring-2 ring-white" />
                ))}
              </div>
              <p>
                Trusted by founders and agencies to unlock compounding revenue
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl border border-gray-100 bg-white/70 backdrop-blur p-4 shadow-xl">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmR8ZW58MHwwfHx8MTc2MzMyMjkzMHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="dashboard" className="rounded-lg" />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg border border-gray-100 p-4 w-56">
                <p className="text-sm font-semibold text-gray-900">24% increase in booked calls</p>
                <p className="text-xs text-gray-500 mt-1">90 days after implementation</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
