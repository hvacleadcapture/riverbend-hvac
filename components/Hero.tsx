import Image from 'next/image';
import Link from 'next/link';
import Icon from './Icon';
import { site } from '@/lib/site';

export default function Hero() {
  return (
    <section className="navy-gradient relative overflow-hidden text-white">
      <div className="bg-grid absolute inset-0 opacity-60" />
      <div className="container-x relative grid items-center gap-10 py-16 md:py-24 lg:grid-cols-2 lg:gap-14">
        <div className="animate-fade-up">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-flame-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-flame-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-flame-500" />
            </span>
            Open now · 24/7 emergency service
          </div>

          <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
            Chattanooga's
            <br />
            <span className="bg-gradient-to-r from-flame-400 to-flame-600 bg-clip-text text-transparent">
              5-star HVAC team
            </span>
            <br />
            on the way.
          </h1>

          <p className="mt-5 max-w-xl text-lg text-navy-100/90">
            Family-owned, factory-trained, and ready when you are. Honest pricing, same-day
            service, and Carrier-certified installs across Chattanooga, North Georgia & North
            Alabama.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={`tel:${site.phoneRaw}`}
              className="group inline-flex items-center gap-3 rounded-xl bg-flame-600 px-6 py-4 text-base font-bold text-white shadow-glow btn-lift hover:bg-flame-700"
            >
              <Icon name="phone" className="h-5 w-5" />
              <span>
                Call {site.phone}
                <span className="block text-xs font-medium text-flame-100">
                  Real human answers · 24/7
                </span>
              </span>
            </a>
            <Link
              href="#quote"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-4 text-base font-bold text-white backdrop-blur transition-colors hover:bg-white/10"
            >
              Get free estimate
              <Icon name="arrow" className="h-5 w-5" />
            </Link>
          </div>

          <ul className="mt-8 grid grid-cols-2 gap-3 text-sm sm:grid-cols-4">
            {[
              'Licensed & Insured',
              '24/7 availability',
              `${site.yearsInBusiness}+ yrs experience`,
              'Carrier certified',
            ].map((t) => (
              <li key={t} className="flex items-center gap-2 text-navy-100/85">
                <Icon name="check" className="h-4 w-4 text-flame-400" />
                {t}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Icon key={i} name="star" className="h-5 w-5 text-flame-400" />
              ))}
            </div>
            <div className="text-sm">
              <div className="font-semibold text-white">
                {site.google.rating.toFixed(1)} from {site.google.reviews}+ Google reviews
              </div>
              <div className="text-xs text-navy-200">
                "Same-day service. Fair price. Honest crew."
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[28px] bg-gradient-to-tr from-flame-500/30 to-transparent blur-2xl" />
          <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
            <Image
              src={`${site.cdn}/Photo_Asset_PNGS/stone_carrier_1.png`}
              alt="Riverbend HVAC Carrier installation"
              width={1200}
              height={900}
              priority
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-3 left-3 rounded-lg bg-white/95 px-3 py-2 text-xs font-bold text-navy-900 shadow-lg">
              Carrier Factory-Authorized Dealer
            </div>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-3">
            {[
              { k: '500+', v: 'Happy customers' },
              { k: '24/7', v: 'Emergency service' },
              { k: '100%', v: 'Licensed & insured' },
            ].map((s) => (
              <div
                key={s.v}
                className="rounded-xl border border-white/10 bg-white/5 p-3 text-center backdrop-blur"
              >
                <div className="font-display text-2xl font-extrabold text-flame-400">{s.k}</div>
                <div className="text-[11px] uppercase tracking-wider text-navy-100/80">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
