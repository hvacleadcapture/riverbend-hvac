'use client';
import { useState } from 'react';
import Icon from './Icon';
import { services, site } from '@/lib/site';

export default function QuoteForm() {
  const [state, setState] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState('sending');
    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries());
    try {
      const r = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!r.ok) {
        const j = await r.json().catch(() => ({}));
        throw new Error(j.error || 'Something went wrong');
      }
      setState('sent');
      (e.target as HTMLFormElement).reset();
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Something went wrong';
      setErrorMsg(message);
      setState('error');
    }
  }

  if (state === 'sent') {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center">
        <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-white">
          <Icon name="check" className="h-6 w-6" />
        </div>
        <h3 className="mt-4 font-display text-xl font-extrabold text-navy-900">
          Got it — we'll call you back within 1 hour.
        </h3>
        <p className="mt-2 text-sm text-navy-700">
          Need help right now? Call us directly at{' '}
          <a href={`tel:${site.phoneRaw}`} className="font-bold text-flame-700 underline">
            {site.phone}
          </a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full name" name="name" required placeholder="John Smith" />
        <Field
          label="Phone"
          name="phone"
          type="tel"
          required
          placeholder="(423) 555-0123"
          autoComplete="tel"
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          label="Email"
          name="email"
          type="email"
          placeholder="you@example.com"
          autoComplete="email"
        />
        <Field label="City / Zip" name="city" placeholder="Chattanooga, TN 37402" />
      </div>

      <div>
        <label className="mb-1 block text-sm font-bold text-navy-900">Service needed</label>
        <select
          name="service"
          required
          defaultValue=""
          className="w-full rounded-xl border border-navy-200 bg-white px-3 py-2.5 text-sm text-navy-900 outline-none focus:border-flame-500 focus:ring-2 focus:ring-flame-200"
        >
          <option value="" disabled>
            Select a service…
          </option>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value="Other">Other / not sure</option>
        </select>
      </div>

      <div>
        <label className="mb-1 block text-sm font-bold text-navy-900">
          Tell us what's going on
        </label>
        <textarea
          name="message"
          rows={4}
          placeholder="AC is blowing warm air, started yesterday afternoon…"
          className="w-full resize-y rounded-xl border border-navy-200 bg-white px-3 py-2.5 text-sm text-navy-900 outline-none focus:border-flame-500 focus:ring-2 focus:ring-flame-200"
        />
      </div>

      <div className="flex items-start gap-2 rounded-lg bg-navy-50 px-3 py-2 text-xs text-navy-700">
        <Icon name="shield" className="mt-0.5 h-4 w-4 text-navy-500" />
        We never share your info. By submitting you agree to be contacted about your request.
      </div>

      {state === 'error' && (
        <div className="rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-800">
          {errorMsg}. Please call us directly at{' '}
          <a href={`tel:${site.phoneRaw}`} className="font-bold underline">
            {site.phone}
          </a>
          .
        </div>
      )}

      <button
        type="submit"
        disabled={state === 'sending'}
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-flame-600 px-6 py-4 text-base font-bold text-white shadow-glow transition-colors hover:bg-flame-700 disabled:opacity-70 sm:w-auto"
      >
        {state === 'sending' ? 'Sending…' : 'Get my free estimate'}
        <Icon name="arrow" className="h-5 w-5" />
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = 'text',
  required,
  placeholder,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label className="mb-1 block text-sm font-bold text-navy-900">
        {label}
        {required && <span className="ml-0.5 text-flame-600">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="w-full rounded-xl border border-navy-200 bg-white px-3 py-2.5 text-sm text-navy-900 placeholder:text-navy-400 outline-none focus:border-flame-500 focus:ring-2 focus:ring-flame-200"
      />
    </div>
  );
}
