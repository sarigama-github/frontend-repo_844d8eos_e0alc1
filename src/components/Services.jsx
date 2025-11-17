const services = [
  'Preventívne gynekologické prehliadky',
  'Tehotenská poradňa',
  'Ultrazvukové vyšetrenia',
  'Diagnostika gynekologických ťažkostí',
  'Poradenstvo & predpis antikoncepcie',
  'Cytologické vyšetrenia a skríning',
]

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-serif text-3xl text-gray-900 sm:text-4xl">Služby ambulancie</h2>
        <p className="mt-3 text-gray-700">Komplexná starostlivosť s dôrazom na komfort a diskrétnosť.</p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <div key={s} className="group relative overflow-hidden rounded-3xl bg-white/70 p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] ring-1 ring-rose-100 transition-transform hover:-translate-y-0.5">
            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-rose-200/60 to-amber-200/60 blur-xl" />
            <p className="relative text-base text-gray-900">{s}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
