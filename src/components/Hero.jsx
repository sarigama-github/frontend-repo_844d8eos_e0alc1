import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[84vh] w-full" id="home">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[84vh] max-w-7xl items-center px-6">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-rose-700 ring-1 ring-rose-200/70 backdrop-blur">
            Prémiová súkromná ambulancia pre ženy
          </div>
          <h1 className="mt-6 font-serif text-4xl leading-tight text-gray-900 sm:text-5xl md:text-6xl">
            Elegantná a citlivá starostlivosť o ženské zdravie
          </h1>
          <p className="mt-4 text-base leading-relaxed text-gray-700 sm:text-lg">
            MUDr. Valéria Mýtniková – gynekológia a pôrodníctvo
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-rose-300 to-amber-200 px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-rose-200 hover:from-rose-400 hover:to-amber-300 transition-all">
              Objednať sa
            </a>
            <a href="tel:+421317807337" className="inline-flex items-center justify-center rounded-full bg-white/80 px-6 py-3 text-sm font-semibold text-gray-900 ring-1 ring-gray-200 backdrop-blur hover:bg-white">
              Zavolať do ambulancie
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/90" />
    </section>
  )
}
