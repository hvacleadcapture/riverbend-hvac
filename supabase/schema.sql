-- Run this in the Supabase SQL editor (Project → SQL → New query) once.
-- Creates the leads table and an RLS policy that lets the anon key insert
-- but does NOT let it read other people's leads.

create table if not exists public.leads (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  name        text not null,
  phone       text not null,
  email       text,
  city        text,
  service     text,
  message     text,
  user_agent  text,
  referer     text,
  status      text not null default 'new'  -- new | contacted | scheduled | won | lost
);

create index if not exists leads_created_at_idx on public.leads (created_at desc);

alter table public.leads enable row level security;

-- Anonymous (public site) can INSERT only.
drop policy if exists "anon insert leads" on public.leads;
create policy "anon insert leads"
on public.leads for insert
to anon
with check (true);

-- (Optional) authenticated users (Colby logged into Supabase) can read all leads.
drop policy if exists "auth read leads" on public.leads;
create policy "auth read leads"
on public.leads for select
to authenticated
using (true);
