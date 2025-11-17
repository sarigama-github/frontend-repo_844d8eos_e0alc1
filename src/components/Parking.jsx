import { ParkingCircle, Info } from 'lucide-react'

export default function Parking() {
  return (
    <section id="parking" className="mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-serif text-3xl text-gray-900 sm:text-4xl">Parkovanie</h2>
        <p className="mt-3 text-gray-700">Ambulancia sa nachádza v regulovaných parkovacích zónach Galanty. Prosíme, používajte len vyznačené parkovacie miesta na ulici Na Štrande a sledujte dopravné značenie (platené zóny a časové obmedzenia).</p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        <Card icon={<ParkingCircle className="text-rose-800" size={22} />} title="Vyznačené miesta" desc="Parkujte výhradne na vyznačených miestach na ulici Na Štrande." />
        <Card icon={<Info className="text-rose-800" size={22} />} title="Regulované zóny" desc="Venujte pozornosť dopravnému značeniu a tarifám." />
        <Card icon={<Info className="text-rose-800" size={22} />} title="Obmedzenia času" desc="Sledujte možné časové limity pre státie." />
      </div>
    </section>
  )
}

function Card({ icon, title, desc }) {
  return (
    <div className="rounded-3xl bg-white/70 p-6 ring-1 ring-rose-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-rose-200 to-amber-200 ring-1 ring-rose-200/60">
          {icon}
        </div>
        <p className="font-medium text-gray-900">{title}</p>
      </div>
      <p className="mt-3 text-sm text-gray-700">{desc}</p>
    </div>
  )
}
