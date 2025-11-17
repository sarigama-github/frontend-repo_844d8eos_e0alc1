const announcements = [
  // Example items; replace dynamically later if needed
]

export default function Announcements() {
  return (
    <section id="announcements" className="mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-serif text-3xl text-gray-900 sm:text-4xl">Oznamy</h2>
        <p className="mt-3 text-gray-700">Aktuálne informácie – dovolenka, zmena hodín a pod.</p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {announcements.length === 0 ? (
          <div className="col-span-full rounded-2xl bg-white/70 p-6 text-center ring-1 ring-rose-100">
            <p className="text-gray-700">Momentálne žiadne oznamy.</p>
          </div>
        ) : (
          announcements.map((a) => (
            <div key={a.title} className="rounded-2xl bg-white/70 p-5 ring-1 ring-rose-100">
              <div className="text-xs tracking-wide text-gray-600">{a.date}</div>
              <p className="mt-1 font-medium text-gray-900">{a.title}</p>
              <p className="mt-1 text-sm text-gray-700">{a.desc}</p>
            </div>
          ))
        )}
      </div>
    </section>
  )
}
