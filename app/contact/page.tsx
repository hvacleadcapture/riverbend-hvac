import type { Metadata } from 'next';
import SpecialsBanner from '@/components/SpecialsBanner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyCallBar from '@/components/StickyCallBar';
import QuoteForm from '@/components/QuoteForm';
import Icon from '@/components/Icon';
import { site, serviceAreas } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact Riverbend HVAC | (423) 309-7339',
  description:
    'Contact Chattanooga\'s 24/7 HVAC pros. Free estimates, same-day service, and honest pricing across TN, GA, and AL.',
};

export default function ContactPage() {
  return (
    <>
      <SpecialsBanner />
      <Header />
      <main>
        <section className="navy-gradient text-white">
          <div className="container-x grid items-center gap-10 py-16 lg:grid-cols-2">
            <div>
              <div className="text-sm font-bold uppercase tracking-widest text-flame-400">
                Contact us
              </div>
              <h1 className="mt-2 font-display text-4xl font-extrabold leading-tight md:text-5xl">
                Let's get your home comfortable again.
              </h1>
              <p className="mt-3 text-lg text-navy-100/85">
                Call now or fill out the form — Colby or one of our techs will be in touch fast.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href={`tel:${site.phoneRaw}`}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-flame-600 text-white">
                    <Icon name="phone" className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-flame-300">
                      Call us · 24/7
                    </div>
                    <div className="font-display text-2xl font-extrabold">{site.phone}</div>
                  </div>
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-700 text-flame-300">
                    <Icon name="check" className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-flame-300">
                      Email
                    </div>
                    <div className="font-display text-base font-extrabold">{site.email}</div>
                  </div>
                </a>
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-700 text-flame-300">
                    <Icon name="pin" className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-flame-300">
                      Based in
                    </div>
                    <div className="font-display text-base font-extrabold">
                      Chattanooga, TN — serving {Object.values(serviceAreas).flat().length}+ cities
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-6 text-navy-900 shadow-2xl md:p-8">
              <h2 className="font-display text-xl font-extrabold">Request a free estimate</h2>
              <p className="mt-1 text-sm text-navy-600">
                We respond within 1 hour during business hours.
              </p>
              <div className="mt-5">
                <QuoteForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyCallBar />
    </>
  );
}
