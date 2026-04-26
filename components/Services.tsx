import Image from 'next/image';
import Link from 'next/link';
import Icon from './Icon';
import { services, site } from '@/lib/site';

export default function Services() {
  return (
    <section id="services" className="bg-white py-20">
      <div className="container-x">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <div className="text-sm font-bold uppercase tracking-widest text-flame-600">
            What we do
          </div>
          <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-navy-900 md:text-4xl">
            Complete heating & cooling solutions
          </h2>
          <p className="mt-3 text-lg text-navy-700/80">
            From a noisy unit to a full system replacement — one trusted local crew handles it
            all.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.slug}
              className="group relative overflow-hidden rounded-2xl border border-hairline bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-44 w-full overflow-hidden bg-navy-100">
                <Image
                  src={`${site.cdn}${s.image}`}
                  alt={s.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-navy-900/0 to-transparent" />
                <div className="absolute left-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-flame-600 text-white shadow-lg">
                  <Icon name={s.icon} className="h-5 w-5" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-extrabold text-navy-900">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-navy-700/80">{s.blurb}</p>
                <ul className="mt-4 space-y-1.5">
                  {s.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-center gap-2 text-sm font-medium text-navy-800"
                    >
                      <Icon name="check" className="h-4 w-4 text-flame-600" />
                      {b}
                    </li>
                  ))}
                </ul>
                <Link
                  href="#quote"
                  className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-flame-700 transition-colors hover:text-flame-800"
                >
                  Get a free quote
                  <Icon name="arrow" className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
