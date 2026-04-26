import Icon from './Icon';
import { reviews, site } from '@/lib/site';

export default function Reviews() {
  return (
    <section id="reviews" className="bg-white py-20">
      <div className="container-x">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <div className="text-sm font-bold uppercase tracking-widest text-flame-600">
            What customers say
          </div>
          <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-navy-900 md:text-4xl">
            5 stars, every time.
          </h2>
          <div className="mt-4 inline-flex items-center gap-3 rounded-full border border-hairline bg-navy-50 px-4 py-2">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Icon key={i} name="star" className="h-5 w-5 text-flame-500" />
              ))}
            </div>
            <span className="text-sm font-bold text-navy-900">
              {site.google.rating.toFixed(1)} / 5 from {site.google.reviews}+ Google reviews
            </span>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {reviews.map((r) => (
            <blockquote
              key={r.name}
              className="flex h-full flex-col rounded-2xl border border-hairline bg-navy-50/40 p-6 transition-shadow hover:shadow-md"
            >
              <div className="flex">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Icon key={i} name="star" className="h-4 w-4 text-flame-500" />
                ))}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-navy-800">"{r.text}"</p>
              <footer className="mt-4 flex items-center gap-3 border-t border-hairline pt-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-900 text-sm font-bold text-white">
                  {r.name[0]}
                </div>
                <div className="text-xs">
                  <div className="font-bold text-navy-900">{r.name}</div>
                  <div className="text-navy-600">{r.location}</div>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
