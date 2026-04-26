import BeforeAfter from './BeforeAfter';
import Icon from './Icon';
import { portfolio } from '@/lib/site';

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-navy-50 py-20">
      <div className="container-x">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <div className="text-sm font-bold uppercase tracking-widest text-flame-600">
            Real installs, real customers
          </div>
          <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-navy-900 md:text-4xl">
            Drag the slider — see the difference
          </h2>
          <p className="mt-3 text-lg text-navy-700/80">
            Every job we do is documented. Here are a few recent transformations from across the
            tri-state.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {portfolio.map((p) => (
            <article
              key={p.title}
              className="overflow-hidden rounded-2xl bg-white p-4 shadow-sm transition-shadow hover:shadow-lg"
            >
              <BeforeAfter before={p.before} after={p.after} alt={p.title} />
              <div className="px-1 pt-4 pb-1">
                <h3 className="font-display text-lg font-extrabold text-navy-900">{p.title}</h3>
                <div className="mt-1 flex items-center gap-1 text-xs font-semibold text-flame-700">
                  <Icon name="pin" className="h-3.5 w-3.5" />
                  {p.location}
                </div>
                <p className="mt-2 text-sm text-navy-700/80">{p.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
