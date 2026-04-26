'use client';
import Image from 'next/image';
import { useRef, useState, useCallback } from 'react';
import { site } from '@/lib/site';

interface Props {
  before: string;
  after: string;
  alt: string;
}

export default function BeforeAfter({ before, after, alt }: Props) {
  const [pos, setPos] = useState(50);
  const wrapRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const onMove = useCallback((clientX: number) => {
    const el = wrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, x)));
  }, []);

  return (
    <div
      ref={wrapRef}
      className="relative aspect-[4/3] w-full select-none overflow-hidden rounded-xl border border-hairline bg-navy-100"
      onMouseMove={(e) => dragging.current && onMove(e.clientX)}
      onMouseUp={() => (dragging.current = false)}
      onMouseLeave={() => (dragging.current = false)}
      onTouchMove={(e) => onMove(e.touches[0].clientX)}
    >
      <Image src={`${site.cdn}${after}`} alt={`${alt} after`} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
        <Image src={`${site.cdn}${before}`} alt={`${alt} before`} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
      </div>
      <div
        className="ba-handle absolute top-0 bottom-0 -ml-[1px] w-0.5 bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.2)]"
        style={{ left: `${pos}%` }}
        onMouseDown={() => (dragging.current = true)}
        onTouchStart={() => (dragging.current = true)}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 grid h-9 w-9 place-items-center rounded-full bg-white text-navy-900 shadow-lg ring-2 ring-flame-600">
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 6l-6 6 6 6" />
            <path d="M15 6l6 6-6 6" />
          </svg>
        </div>
      </div>
      <div className="pointer-events-none absolute left-3 top-3 rounded-md bg-navy-900/90 px-2 py-1 text-xs font-bold uppercase tracking-wider text-white">
        Before
      </div>
      <div className="pointer-events-none absolute right-3 top-3 rounded-md bg-flame-600 px-2 py-1 text-xs font-bold uppercase tracking-wider text-white">
        After
      </div>
    </div>
  );
}
