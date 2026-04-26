import Icon from './Icon';
import { serviceAreas } from '@/lib/site';

const COLORS: Record<string, string> = {
  Tennessee: 'from-flame-500 to-flame-700',
  Georgia: 'from-navy-700 to-navy-900',
  Alabama: 'from-emerald-600 to-emerald-800',
};

export default function ServiceArea() {
  return (
    <section id="areas" className="navy-gradient relative overflow-hidden text-white">
      <div className="bg-grid absolute inset-0 opacity-50" />
      <div className="container-x relative grid gap-10 py-20 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
        <div>
          <div className="text-sm font-bold uppercase tracking-widest text-flame-400">
            Where we work
          </div>
          <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            Proudly serving the tri-state.
          </h2>
          <p className="mt-3 max-w-xl text-lg text-navy-100/85">
            From Signal Mountain to Scottsboro, we cover the greater Chattanooga area, North
            Georgia, and North Alabama. Don't see your town? Just ask — we probably do.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {Object.entries(serviceAreas).map(([state, cities]) => (
              <div
                key={state}
                className={`rounded-2xl bg-gradient-to-br ${COLORS[state]} p-5 shadow-lg`}
              >
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/85">
                  <Icon name="pin" className="h-4 w-4" />
                  {state}
                </div>
                <ul className="mt-3 space-y-1.5 text-sm font-semibold text-white">
                  {cities.map((c) => (
                    <li key={c} className="flex items-center gap-1.5">
                      <span className="h-1 w-1 rounded-full bg-white/60" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="aspect-square w-full overflow-hidden rounded-3xl border border-white/15 bg-white/5 backdrop-blur-sm shadow-2xl">
            <iframe
              title="Riverbend HVAC service area"
              src="https://www.google.com/maps?q=Chattanooga,TN&z=8&output=embed"
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-xl bg-flame-600 px-4 py-2 text-xs font-bold text-white shadow-lg">
            17+ cities · 3 states · 1 trusted crew
          </div>
        </div>
      </div>
    </section>
  );
}
