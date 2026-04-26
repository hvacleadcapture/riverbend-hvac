import Icon from './Icon';

const items = [
  { icon: 'badge', text: 'Licensed & Insured' },
  { icon: 'shield', text: 'Carrier Authorized' },
  { icon: 'truck', text: 'Same-Day Service' },
  { icon: 'clock', text: '24/7 Emergency' },
  { icon: 'check', text: 'Free Estimates' },
];

export default function TrustBar() {
  return (
    <section className="border-y border-hairline bg-navy-50">
      <div className="container-x grid grid-cols-2 gap-y-3 py-4 sm:grid-cols-3 md:grid-cols-5">
        {items.map((it) => (
          <div
            key={it.text}
            className="flex items-center justify-center gap-2 text-sm font-semibold text-navy-800"
          >
            <Icon name={it.icon} className="h-5 w-5 text-flame-600" />
            {it.text}
          </div>
        ))}
      </div>
    </section>
  );
}
