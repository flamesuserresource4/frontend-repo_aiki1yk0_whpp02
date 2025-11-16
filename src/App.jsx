import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Solutions from './components/Solutions'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Solutions />
        <Process />
        <Testimonials />
        <CTA />
      </main>
      <footer id="about" className="border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
          <div>
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-blue-600 to-indigo-600 mb-3" />
            <p className="text-sm text-gray-600">Alera Automations builds automated growth systems that turn clicks into clients.</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Company</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#solutions" className="hover:text-gray-900">Solutions</a></li>
              <li><a href="#process" className="hover:text-gray-900">Process</a></li>
              <li><a href="#testimonials" className="hover:text-gray-900">Testimonials</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Get in touch</h4>
            <p className="text-sm text-gray-600">hello@aleraautomations.com</p>
            <a href="#cta" className="mt-4 inline-flex items-center rounded-md bg-gray-900 px-4 py-2 text-white text-sm font-semibold">Book a call</a>
          </div>
        </div>
        <p className="mt-8 text-center text-xs text-gray-500">© {new Date().getFullYear()} Alera Automations. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
