'use client';
import Link from 'next/link';
import { useState } from 'react';
import Icon from './Icon';
import { site } from '@/lib/site';

const nav = [
  { href: '/#services', label: 'Services' },
  { href: '/#portfolio', label: 'Our Work' },
  { href: '/#areas', label: 'Service Area' },
  { href: '/#reviews', label: 'Reviews' },
  { href: '/#faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-hairline bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/75">
      <div className="container-x flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-900 text-white shadow-md">
            <span className="font-display text-lg font-extrabold">R</span>
          </div>
          <div className="leading-tight">
            <div className="font-display text-lg font-extrabold text-navy-900">
              Riverbend HVAC
            </div>
            <div className="text-[11px] font-semibold uppercase tracking-wider text-flame-600">
              Chattanooga · 24/7
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-sm font-semibold text-navy-700 transition-colors hover:text-flame-600"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${site.phoneRaw}`}
            className="hidden items-center gap-2 rounded-lg border border-navy-100 bg-white px-3 py-2 text-sm font-semibold text-navy-900 shadow-sm transition-colors hover:border-flame-400 hover:text-flame-700 sm:inline-flex"
          >
            <Icon name="phone" className="h-4 w-4 text-flame-600" />
            {site.phone}
          </a>
          <Link
            href="/#quote"
            className="hidden items-center gap-1 rounded-lg bg-flame-600 px-4 py-2 text-sm font-bold text-white shadow-glow btn-lift hover:bg-flame-700 sm:inline-flex"
          >
            Free Estimate
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-hairline text-navy-900 lg:hidden"
          >
            <Icon name={open ? 'x' : 'menu'} className="h-5 w-5" />
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-hairline bg-white lg:hidden">
          <div className="container-x flex flex-col gap-1 py-3">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-base font-semibold text-navy-800 hover:bg-navy-50"
              >
                {n.label}
              </Link>
            ))}
            <Link
              href="/#quote"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-lg bg-flame-600 px-4 py-3 text-center text-base font-bold text-white"
            >
              Get Free Estimate
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
