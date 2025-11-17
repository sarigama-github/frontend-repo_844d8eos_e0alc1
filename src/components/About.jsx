export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="grid gap-10 md:grid-cols-2 items-center">
        <div className="order-2 md:order-1">
          <h2 className="font-serif text-3xl text-gray-900 sm:text-4xl">O lekárke</h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            MUDr. Valéria Mýtniková je špecialistka v odbore gynekológia a pôrodníctvo. S dôrazom na citlivý prístup a diskrétnu, profesionálnu starostlivosť poskytuje komplexné služby pre ženy v každom období života.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4">
            <InfoRow label="Ambulancia" value="MUDr. Mýtniková Valéria – Súkromná gynekologická ambulancia s.r.o." />
            <InfoRow label="Adresa" value="Ulica na Štrande 1475/25, 924 01 Galanta" />
            <InfoRow label="Telefón" value="+421 31 780 73 37" link="tel:+421317807337" />
            <InfoRow label="E-mail" value="mytnikova.valeria@stonline.sk" link="mailto:mytnikova.valeria@stonline.sk" />
          </div>
        </div>
        <div className="order-1 md:order-2">
          <div className="relative overflow-hidden rounded-3xl border border-rose-100/80 bg-gradient-to-br from-rose-50 to-amber-50 p-2 shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
            <div className="aspect-[4/3] w-full rounded-2xl bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-rose-100 via-white to-amber-50" />
            <div className="absolute inset-0 rounded-3xl ring-1 ring-rose-200/60" />
          </div>
        </div>
      </div>
    </section>
  )
}

function InfoRow({ label, value, link }) {
  const content = link ? (
    <a href={link} className="text-gray-900 hover:text-rose-700 transition-colors">{value}</a>
  ) : (
    <span className="text-gray-900">{value}</span>
  )

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between rounded-2xl bg-white/70 p-4 ring-1 ring-rose-100">
      <span className="text-sm tracking-wide text-gray-600">{label}</span>
      {content}
    </div>
  )
}
