import Icon from './Icon';
import { site } from '@/lib/site';

export default function SpecialsBanner() {
  return (
    <div className="flame-gradient text-white">
      <div className="container-x flex flex-wrap items-center justify-center gap-x-4 gap-y-1 py-2 text-center text-sm font-semibold">
        <span className="inline-flex items-center gap-1.5">
          <Icon name="tag" className="h-4 w-4" />
          $0 Down · 0% APR Financing Available
        </span>
        <span className="hidden h-4 w-px bg-white/40 sm:inline-block" />
        <span className="hidden sm:inline">$50 Off Any Repair · Mention this banner</span>
        <span className="h-4 w-px bg-white/40" />
        <a href={`tel:${site.phoneRaw}`} className="underline-offset-2 hover:underline">
          Call {site.phone}
        </a>
      </div>
    </div>
  );
}
