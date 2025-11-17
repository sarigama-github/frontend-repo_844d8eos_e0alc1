import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Hours from './components/Hours'
import Parking from './components/Parking'
import Announcements from './components/Announcements'
import Contact from './components/Contact'

function Footer() {
  return (
    <footer className="mt-20 border-t border-rose-100/80 bg-white/60">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} MUDr. Valéria Mýtniková</p>
        <a href="#home" className="text-sm text-gray-700 hover:text-rose-700">Späť hore</a>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-rose-50 via-white to-amber-50">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Hours />
        <Parking />
        <Announcements />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
