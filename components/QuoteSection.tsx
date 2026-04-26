import Icon from './Icon';
import QuoteForm from './QuoteForm';
import { site } from '@/lib/site';

export default function QuoteSection() {
  return (
    <section id="quote" className="relative bg-navy-50 py-20">
      <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
        <div>
          <div className="text-sm font-bold uppercase tracking-widest text-flame-600">
            Free, no-obligation
          </div>
          <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-navy-900 md:text-4xl">
            Get your free estimate.
          </h2>
          <p className="mt-3 text-lg text-navy-700/80">
            Fill out the form and a real person — usually Colby — will call you back within 1 hour
            during business hours, or first thing in the morning if it's late.
          </p>

          <div className="mt-8 space-y-4">
            <Item
              icon="phone"
              title="Need it sooner?"
              text={
                <>
                  Call{' '}
                  <a href={`tel:${site.phoneRaw}`} className="font-bold text-flame-700 underline">
                    {site.phone}
                  </a>{' '}
                  — answered 24/7.
                </>
              }
            />
            <Item
              icon="clock"
              title="Same-day appointments"
              text="Most repair calls happen within 4 hours."
            />
            <Item
              icon="badge"
              title="Honest pricing"
              text="Up-front quotes. No surprise upsells. No diagnostic fee with repair."
            />
            <Item
              icon="shield"
              title="100% satisfaction"
              text="If you're not happy, we make it right — full stop."
            />
          </div>
        </div>

        <div className="rounded-3xl border border-hairline bg-white p-6 shadow-xl md:p-8">
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}

function Item({ icon, title, text }: { icon: string; title: string; text: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-flame-700 shadow-sm">
        <Icon name={icon} className="h-5 w-5" />
      </div>
      <div>
        <div className="font-display text-base font-extrabold text-navy-900">{title}</div>
        <div className="text-sm text-navy-700/85">{text}</div>
      </div>
    </div>
  );
}
