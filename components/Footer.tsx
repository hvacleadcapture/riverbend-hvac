import Link from 'next/link';
import Icon from './Icon';
import { services, serviceAreas, site } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-navy-100">
      <div className="container-x grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-flame-600 text-white">
              <span className="font-display text-lg font-extrabold">R</span>
            </div>
            <div className="font-display text-lg font-extrabold text-white">Riverbend HVAC</div>
          </Link>
          <p className="mt-4 max-w-xs text-sm text-navy-300">{site.shortPitch}</p>
          <div className="mt-5 space-y-2 text-sm">
            <a
              href={`tel:${site.phoneRaw}`}
              className="flex items-center gap-2 font-bold text-white hover:text-flame-300"
            >
              <Icon name="phone" className="h-4 w-4 text-flame-400" />
              {site.phone}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-2 text-navy-200 hover:text-white"
            >
              <Icon name="check" className="h-4 w-4 text-flame-400" />
              {site.email}
            </a>
            <div className="flex items-center gap-2 text-navy-200">
              <Icon name="pin" className="h-4 w-4 text-flame-400" />
              {site.address.city}, {site.address.state} · {site.address.region}
            </div>
            <div className="flex items-center gap-2 text-navy-200">
              <Icon name="clock" className="h-4 w-4 text-flame-400" />
              {site.hours}
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm font-extrabold uppercase tracking-wider text-white">
            Services
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href="#services" className="text-navy-200 hover:text-flame-300">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-extrabold uppercase tracking-wider text-white">
            Service area
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            {Object.entries(serviceAreas).map(([state, cities]) => (
              <li key={state}>
                <div className="text-xs font-bold uppercase tracking-wider text-flame-400">
                  {state}
                </div>
                <div className="mt-1 text-navy-200">{cities.join(' · ')}</div>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-extrabold uppercase tracking-wider text-white">
            Get in touch
          </h4>
          <p className="mt-4 text-sm text-navy-200">
            Need it fast? Call now. Need a quote? Send us a note and we'll call back within 1 hour.
          </p>
          <div className="mt-4 flex flex-col gap-3">
            <a
              href={`tel:${site.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-flame-600 px-4 py-3 text-sm font-bold text-white hover:bg-flame-700"
            >
              <Icon name="phone" className="h-4 w-4" />
              Call {site.phone}
            </a>
            <Link
              href="/#quote"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-navy-700 px-4 py-3 text-sm font-bold text-white hover:border-flame-500 hover:text-flame-300"
            >
              Request a free estimate
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-navy-900">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-6 text-xs text-navy-400 sm:flex-row">
          <div>© {new Date().getFullYear()} Riverbend HVAC · Licensed & Insured · Chattanooga, TN</div>
          <div>Family-owned · Carrier Authorized · Serving TN · GA · AL</div>
        </div>
      </div>
    </footer>
  );
}
