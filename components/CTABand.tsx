import Link from 'next/link';
import Icon from './Icon';
import { site } from '@/lib/site';

export default function CTABand() {
  return (
    <section className="flame-gradient">
      <div className="container-x flex flex-col items-center gap-6 py-14 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <div className="text-xs font-bold uppercase tracking-widest text-white/80">
            Lost heat? AC down? Don't sweat it.
          </div>
          <h2 className="mt-1 font-display text-3xl font-extrabold text-white md:text-4xl">
            We answer 24/7. Even on holidays.
          </h2>
          <p className="mt-1 text-white/85">
            Real human, real techs, real fast — no after-hours fees.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={`tel:${site.phoneRaw}`}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-navy-900 px-6 py-4 text-base font-bold text-white shadow-xl btn-lift hover:bg-navy-950"
          >
            <Icon name="phone" className="h-5 w-5" />
            {site.phone}
          </a>
          <Link
            href="#quote"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 text-base font-bold text-flame-700 shadow-xl btn-lift hover:bg-navy-50"
          >
            Schedule online
            <Icon name="arrow" className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
