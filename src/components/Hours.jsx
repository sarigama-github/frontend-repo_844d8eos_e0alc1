const hours = [
  { day: 'Pondelok', ranges: ['09:30–13:00', '13:30–18:30'] },
  { day: 'Utorok', ranges: ['07:30–13:00', '13:30–15:30'] },
  { day: 'Streda', ranges: ['09:30–13:00', '13:30–18:30'] },
  { day: 'Štvrtok', ranges: ['07:30–13:00', '13:30–15:30'] },
  { day: 'Piatok', ranges: ['07:30–13:00'] },
]

export default function Hours() {
  return (
    <section id="hours" className="mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-serif text-3xl text-gray-900 sm:text-4xl">Ordinačné hodiny</h2>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {hours.map((h) => (
          <div key={h.day} className="rounded-2xl bg-white/70 p-5 ring-1 ring-rose-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
            <p className="font-medium text-gray-900">{h.day}</p>
            <div className="mt-2 text-sm text-gray-700 space-y-1">
              {h.ranges.map((r) => (
                <div key={r}>{r}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
