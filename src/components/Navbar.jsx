import { useState } from 'react'
import { Menu, Phone } from 'lucide-react'

const navItems = [
  { label: 'O mne', href: '#about' },
  { label: 'Služby', href: '#services' },
  { label: 'Ordinačné hodiny', href: '#hours' },
  { label: 'Parkovanie', href: '#parking' },
  { label: 'Oznamy', href: '#announcements' },
  { label: 'Kontakt', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl/0">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-full border border-white/30 bg-white/60 px-5 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.06)] backdrop-blur-xl">
          <a href="#" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-rose-200 via-rose-100 to-amber-100 ring-1 ring-rose-200/60" />
            <div className="leading-tight">
              <p className="font-serif text-lg text-gray-900">MUDr. Valéria Mýtniková</p>
              <p className="text-xs tracking-wide text-gray-600">gynekológia a pôrodníctvo</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-gray-700 hover:text-rose-700 transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-rose-300 to-amber-200 px-4 py-2 text-sm font-medium text-gray-900 shadow-sm ring-1 ring-rose-300/50 hover:from-rose-400 hover:to-amber-300 transition-all">
              <Phone size={16} className="text-rose-800" /> Zavolať
            </a>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white/70">
            <Menu size={20} />
          </button>
        </div>

        {open && (
          <div className="mt-2 overflow-hidden rounded-2xl border border-white/40 bg-white/70 p-4 shadow-xl md:hidden">
            <div className="grid gap-3">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-white">
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-rose-300 to-amber-200 px-4 py-2 text-sm font-medium text-gray-900 ring-1 ring-rose-200">
                <Phone size={16} className="text-rose-800" /> Zavolať
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
