export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid gap-10 md:grid-cols-2 items-start">
        <div>
          <h2 className="font-serif text-3xl text-gray-900 sm:text-4xl">Kontakt</h2>
          <div className="mt-6 space-y-4">
            <Row label="Telefón" value="+421 31 780 73 37" link="tel:+421317807337" />
            <Row label="E-mail" value="mytnikova.valeria@stonline.sk" link="mailto:mytnikova.valeria@stonline.sk" />
            <Row label="Adresa" value="Ulica na Štrande 1475/25, 924 01 Galanta" />
          </div>
        </div>
        <div>
          <div className="overflow-hidden rounded-3xl border border-rose-100/80 bg-white/70 p-2 shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
            <div className="aspect-[4/3] w-full rounded-2xl">
              <iframe
                title="Mapa"
                src="https://www.google.com/maps?q=Ulica%20na%20%C5%A0trande%201475/25,%20924%2001%20Galanta&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Row({ label, value, link }) {
  const content = link ? (
    <a href={link} className="text-gray-900 hover:text-rose-700 transition-colors">{value}</a>
  ) : (
    <span className="text-gray-900">{value}</span>
  )

  return (
    <div className="flex items-center justify-between rounded-2xl bg-white/70 p-4 ring-1 ring-rose-100">
      <span className="text-sm tracking-wide text-gray-600">{label}</span>
      {content}
    </div>
  )
}
