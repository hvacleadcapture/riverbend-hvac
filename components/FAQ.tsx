import { faqs } from '@/lib/site';

export default function FAQ() {
  return (
    <section id="faq" className="bg-white py-20">
      <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <div>
          <div className="text-sm font-bold uppercase tracking-widest text-flame-600">FAQ</div>
          <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-navy-900 md:text-4xl">
            Quick answers to common questions.
          </h2>
          <p className="mt-3 text-lg text-navy-700/80">
            Don't see your question? Call us — we're happy to talk it through.
          </p>
        </div>
        <div className="divide-y divide-navy-100 rounded-2xl border border-hairline bg-navy-50/50">
          {faqs.map((f, i) => (
            <details key={i} className="group p-5 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-start justify-between gap-3 font-display text-base font-extrabold text-navy-900">
                {f.q}
                <span className="ml-2 mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-flame-600 transition-transform group-open:rotate-45">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                    <path d="M12 5v14" />
                    <path d="M5 12h14" />
                  </svg>
                </span>
              </summary>
              <p className="mt-2 text-sm leading-relaxed text-navy-800">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
