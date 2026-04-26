import Image from 'next/image';
import Icon from './Icon';
import { site } from '@/lib/site';

const reasons = [
  {
    icon: 'badge',
    title: 'Family-owned & local',
    text: 'You\'ll talk to Colby and his crew — not a call center two states away.',
  },
  {
    icon: 'shield',
    title: 'Carrier-certified installs',
    text: 'Factory-trained on the most reliable equipment in the industry, with full warranty support.',
  },
  {
    icon: 'clock',
    title: 'No after-hours fees',
    text: 'Same flat pricing whether it\'s noon Tuesday or 2am Sunday. Period.',
  },
  {
    icon: 'truck',
    title: 'Fully-stocked trucks',
    text: 'Most repairs done same-day with parts on hand — no extra trip charges.',
  },
];

export default function Why() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-flame-200 to-navy-100 blur-2xl opacity-60" />
          <div className="relative overflow-hidden rounded-2xl border border-hairline shadow-xl">
            <Image
              src={`${site.cdn}/Photo_Asset_PNGS/stone_carrier_2.png`}
              alt="Riverbend HVAC team installation"
              width={1100}
              height={900}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -right-5 hidden rounded-2xl bg-navy-900 p-5 text-white shadow-xl sm:block">
            <div className="font-display text-3xl font-extrabold text-flame-400">
              {site.yearsInBusiness}+
            </div>
            <div className="text-xs uppercase tracking-wider text-navy-100">
              Years experience
              <br />
              in the tri-state
            </div>
          </div>
        </div>

        <div>
          <div className="text-sm font-bold uppercase tracking-widest text-flame-600">
            Why Riverbend
          </div>
          <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-navy-900 md:text-4xl">
            HVAC done the right way — by people who actually live here.
          </h2>
          <p className="mt-3 text-lg text-navy-700/80">
            Riverbend HVAC is a family-owned crew based in Chattanooga. We treat every home like
            it's our own — clean installs, straight talk, and pricing you can trust. No upsells,
            no surprises, no callbacks.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {reasons.map((r) => (
              <div
                key={r.title}
                className="rounded-xl border border-hairline bg-navy-50/60 p-5 transition-shadow hover:shadow-md"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-flame-100 text-flame-700">
                  <Icon name={r.icon} className="h-5 w-5" />
                </div>
                <div className="mt-3 font-display text-base font-extrabold text-navy-900">
                  {r.title}
                </div>
                <p className="mt-1 text-sm text-navy-700/85">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
