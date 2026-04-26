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

interface Lead extends Required<Pick<LeadPayload, 'name' | 'phone' | 'service'>> {
  email: string;
  city: string;
  message: string;
  user_agent: string;
  referer: string;
  created_at: string;
}

function bad(msg: string, status = 400) {
  return NextResponse.json({ ok: false, error: msg }, { status });
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

async function sendEmail(lead: Lead) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.NOTIFY_EMAIL || 'colby@riverbendhvac.com';
  const fromAddress = process.env.RESEND_FROM || 'onboarding@resend.dev';
  if (!apiKey) {
    console.log('[lead] RESEND_API_KEY not set, skipping email send');
    return;
  }
  const subject = `New lead from ${lead.name} - ${lead.service}`;
  const ts = new Date().toLocaleString('en-US', {
    timeZone: 'America/New_York',
    timeStyle: 'short',
    dateStyle: 'medium',
  });
  const escName = escapeHtml(lead.name);
  const escPhone = escapeHtml(lead.phone);
  const escEmail = escapeHtml(lead.email);
  const escCity = escapeHtml(lead.city);
  const escService = escapeHtml(lead.service);
  const escMessage = escapeHtml(lead.message);
  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f8fafc;">
      <div style="background: linear-gradient(135deg, #f97316 0%, #ea580c 100%); color: #fff; padding: 24px; border-radius: 14px 14px 0 0;">
        <div style="font-size: 12px; text-transform: uppercase; letter-spacing: 1px; opacity: 0.9; font-weight: 700;">New Website Lead</div>
        <h1 style="margin: 8px 0 0; font-size: 24px; font-weight: 800;">${escName}</h1>
        <div style="opacity: 0.92; margin-top: 4px; font-size: 14px;">${ts} ET</div>
      </div>
      <div style="background: #ffffff; border: 1px solid #e2e8f0; border-top: none; padding: 24px; border-radius: 0 0 14px 14px;">
        <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
          <tr><td style="padding: 10px 0; color: #64748b; width: 110px; border-bottom: 1px solid #f1f5f9;">Name</td><td style="font-weight: 600; color: #0f2138; border-bottom: 1px solid #f1f5f9;">${escName}</td></tr>
          <tr><td style="padding: 10px 0; color: #64748b; border-bottom: 1px solid #f1f5f9;">Phone</td><td style="font-weight: 600; border-bottom: 1px solid #f1f5f9;"><a href="tel:${escPhone}" style="color: #ea580c; text-decoration: none;">${escPhone}</a></td></tr>
          ${escEmail ? `<tr><td style="padding: 10px 0; color: #64748b; border-bottom: 1px solid #f1f5f9;">Email</td><td style="font-weight: 600; border-bottom: 1px solid #f1f5f9;"><a href="mailto:${escEmail}" style="color: #ea580c; text-decoration: none;">${escEmail}</a></td></tr>` : ''}
          ${escCity ? `<tr><td style="padding: 10px 0; color: #64748b; border-bottom: 1px solid #f1f5f9;">City</td><td style="font-weight: 600; color: #0f2138; border-bottom: 1px solid #f1f5f9;">${escCity}</td></tr>` : ''}
          <tr><td style="padding: 10px 0; color: #64748b;">Service</td><td style="font-weight: 600; color: #0f2138;">${escService}</td></tr>
        </table>
        ${escMessage ? `<div style="margin-top: 18px; padding: 16px; background: #f8fafc; border-left: 3px solid #f97316; border-radius: 6px;"><div style="font-size: 11px; color: #64748b; text-transform: uppercase; font-weight: 700; letter-spacing: 1px; margin-bottom: 6px;">Message</div><div style="color: #0f2138; line-height: 1.55; white-space: pre-wrap;">${escMessage}</div></div>` : ''}
        <div style="margin-top: 24px; padding-top: 20px; border-top: 1px solid #e2e8f0; text-align: center;">
          <a href="tel:${escPhone}" style="display: inline-block; background: #f97316; color: #ffffff; padding: 14px 28px; border-radius: 10px; text-decoration: none; font-weight: 700; font-size: 15px;">Call ${escName} now</a>
        </div>
      </div>
      <div style="text-align: center; padding: 16px; color: #94a3b8; font-size: 12px;">Riverbend HVAC - auto-notification from riverbendhvac.com</div>
    </div>
  `;

  const r = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: `Riverbend HVAC Leads <${fromAddress}>`,
      to: [to],
      reply_to: lead.email || undefined,
      subject,
      html,
    }),
  });
  if (!r.ok) {
    const txt = await r.text();
    console.error('[lead] Resend error:', r.status, txt);
  }
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

  const lead: Lead = {
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

  // Save to Supabase
  const supabase = getSupabase();
  if (supabase) {
    const { error } = await supabase.from('leads').insert(lead);
    if (error) {
      console.error('[lead] supabase insert error:', error);
    }
  } else {
    console.log('[lead] (no Supabase configured) New lead:', JSON.stringify(lead, null, 2));
  }

  // Send email notification (non-blocking failure)
  try {
    await sendEmail(lead);
  } catch (err) {
    console.error('[lead] email send error:', err);
  }

  return NextResponse.json({ ok: true });
}
