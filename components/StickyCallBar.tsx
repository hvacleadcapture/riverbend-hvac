import Icon from './Icon';
import { site } from '@/lib/site';

// Mobile-only sticky bottom bar — single most impactful conversion element.
export default function StickyCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-hairline bg-white p-2 shadow-2xl md:hidden">
      <a
        href={`tel:${site.phoneRaw}`}
        className="flex items-center justify-center gap-2 rounded-xl bg-flame-600 py-3 text-sm font-bold text-white"
      >
        <Icon name="phone" className="h-4 w-4" />
        Call now
      </a>
      <a
        href="#quote"
        className="flex items-center justify-center gap-2 rounded-xl bg-navy-900 py-3 text-sm font-bold text-white"
      >
        Free quote
        <Icon name="arrow" className="h-4 w-4" />
      </a>
    </div>
  );
}
