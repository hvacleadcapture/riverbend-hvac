# Riverbend HVAC

Modern Next.js 14 website for Riverbend HVAC (Chattanooga, TN). Built with Tailwind CSS and Supabase, deployed on Vercel.

## Local development

    npm install
    cp .env.example .env.local
    npm run dev

Open http://localhost:3000

## Deploy to Vercel

1. Push this repo to GitHub.
2. Go to vercel.com/new, pick the repo, click Deploy. Vercel auto-detects Next.js — defaults are correct.
3. Add environment variables in Vercel project Settings → Environment Variables:
   - NEXT_PUBLIC_SUPABASE_URL
   - NEXT_PUBLIC_SUPABASE_ANON_KEY
4. Redeploy.

## Supabase setup (lead capture)

1. Create a project at supabase.com.
2. Open the SQL editor and run supabase/schema.sql — it creates the leads table with the right RLS policies.
3. Copy your project URL and anon key from Project Settings → API into Vercel env vars.
4. New leads now show up in Supabase → Table editor → leads.

If env vars are missing, the form still works — leads write to Vercel's server logs as a fallback.

## Project layout

- app/ — Next.js App Router pages (homepage + /contact + API route)
- components/ — UI components (Header, Hero, Services, BeforeAfter slider, etc.)
- lib/site.ts — Single source of truth for business info, services, areas, reviews, FAQs
- lib/supabase.ts — Server-side Supabase client
- public/ — Static assets (drop self-hosted images here later)
- supabase/schema.sql — One-time DB setup

## Editing copy

Almost every word, phone number, and service is in lib/site.ts. Change once → updates everywhere.

## Photos

Currently images load from the previous site CDN (riverbendhvac.com) via next.config.mjs remote patterns. To self-host:

1. Drop the originals into public/images/
2. In lib/site.ts, change cdn from "https://www.riverbendhvac.com" to "" and update each image path to /images/...

## Conversion-optimized features

- Sticky header with click-to-call phone number
- Mobile-only sticky bottom call bar (highest-impact mobile conversion element)
- Dual hero CTA (call vs schedule online)
- Trust badges + Google review count above the fold
- Real photos of his actual installs (before/after sliders)
- Quote form with short required fields
- Service-area cards by state (TN, GA, AL)
- FAQ + JSON-LD HVACBusiness schema for local SEO
- Auto sitemap.xml + robots.txt
- WebP/AVIF auto-conversion via Next Image
