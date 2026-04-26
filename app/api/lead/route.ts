import { NextRequest, NextResponse } from 'next/server';
import { getSupabase } from '@/lib/supabase';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

interface LeadPayload {
  name?: string;
  phone?: string;
  email?: string;
  city?: string;
  service?: string;
  message?: string;
}

function bad(msg: string, status = 400) {
  return NextResponse.json({ ok: false, error: msg }, { status });
}

export async function POST(req: NextRequest) {
  let body: LeadPayload = {};
  try {
    body = (await req.json()) as LeadPayload;
  } catch {
    return bad('Invalid JSON body');
  }

  const name = (body.name || '').trim();
  const phone = (body.phone || '').trim();
  const email = (body.email || '').trim();
  const city = (body.city || '').trim();
  const service = (body.service || '').trim();
  const message = (body.message || '').trim();

  if (!name || !phone || !service) {
    return bad('Name, phone and service are required');
  }
  if (name.length > 120 || phone.length > 40 || message.length > 4000) {
    return bad('Field too long');
  }

  const lead = {
    name,
    phone,
    email,
    city,
    service,
    message,
    user_agent: req.headers.get('user-agent') || '',
    referer: req.headers.get('referer') || '',
    created_at: new Date().toISOString(),
  };

  const supabase = getSupabase();
  if (supabase) {
    const { error } = await supabase.from('leads').insert(lead);
    if (error) {
      console.error('[lead] supabase insert error:', error);
      return bad('Could not save your request — please call us directly.', 500);
    }
  } else {
    console.log('[lead] (no Supabase configured) New lead:', JSON.stringify(lead, null, 2));
  }

  return NextResponse.json({ ok: true });
}
