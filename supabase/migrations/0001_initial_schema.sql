-- Onaks Fitness — initial Supabase schema (Phase 0 foundations)
-- Apply with the Supabase CLI (`supabase db push`) or paste into the SQL editor.
-- Nothing in the app reads this yet; wiring begins in Phase 1.

-- ---------------------------------------------------------------------------
-- admins: which auth users may manage the catalogue / view sales.
-- Add yourself after signing up:  insert into admins (user_id) values ('<your-auth-uid>');
-- ---------------------------------------------------------------------------
create table if not exists public.admins (
  user_id    uuid primary key references auth.users (id) on delete cascade,
  created_at timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- payment_plans: the product catalogue (ported from the old SQLite schema,
-- plus stripe_price_id / stripe_product_id for your own Stripe).
-- ---------------------------------------------------------------------------
create table if not exists public.payment_plans (
  id                  text primary key,                    -- e.g. 'male-fat-loss'
  title               text not null,
  description         text,
  price               integer not null,                    -- cents
  currency            text not null default 'usd',
  category            text,                                 -- male | female | specialty | guide | nutrition | combo | vegan ...
  is_active           boolean not null default true,
  stripe_product_id   text,                                 -- your Stripe Product
  stripe_price_id     text,                                 -- your Stripe Price (used at checkout)
  download_path       text,                                 -- object path in the 'downloads' storage bucket
  download_url        text,                                 -- optional public URL (prefer signed URLs from download_path)
  email_subject       text,
  email_message       text,
  email_html_template text,
  created_at          timestamptz not null default now(),
  updated_at          timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- purchases: one row per completed checkout (written by the stripe webhook).
-- ---------------------------------------------------------------------------
create table if not exists public.purchases (
  id                bigint generated always as identity primary key,
  stripe_session_id text unique not null,
  payment_plan_id   text references public.payment_plans (id),
  customer_email    text not null,
  customer_name     text,
  amount_paid       integer not null,                       -- cents
  currency          text not null default 'usd',
  payment_status    text not null default 'pending',        -- pending | completed | failed
  download_count    integer not null default 0,
  created_at        timestamptz not null default now()
);
create index if not exists purchases_email_idx on public.purchases (customer_email);

-- ---------------------------------------------------------------------------
-- leads: calculator + free-workout captures (replaces Mailchimp).
-- ---------------------------------------------------------------------------
create table if not exists public.leads (
  id         bigint generated always as identity primary key,
  email      text not null,
  first_name text,
  source     text not null,                                 -- 'calculator' | 'free-workout'
  meta       jsonb,                                         -- calc inputs, plan chosen, etc.
  created_at timestamptz not null default now()
);
create index if not exists leads_email_idx on public.leads (email);

-- ---------------------------------------------------------------------------
-- updated_at trigger for payment_plans
-- ---------------------------------------------------------------------------
create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin new.updated_at = now(); return new; end; $$;

drop trigger if exists payment_plans_set_updated_at on public.payment_plans;
create trigger payment_plans_set_updated_at
  before update on public.payment_plans
  for each row execute function public.set_updated_at();

-- ---------------------------------------------------------------------------
-- Row Level Security
--   - Edge Functions use the service_role key and BYPASS RLS (webhook writes
--     to purchases, lead inserts, download-count bumps happen there).
--   - The admin UI uses the logged-in admin's JWT; policies below gate it.
-- ---------------------------------------------------------------------------
alter table public.admins        enable row level security;
alter table public.payment_plans enable row level security;
alter table public.purchases     enable row level security;
alter table public.leads         enable row level security;

-- helper: is the current user an admin?
create or replace function public.is_admin()
returns boolean language sql stable as $$
  select exists (select 1 from public.admins a where a.user_id = auth.uid());
$$;

-- admins: a user can see their own admin row
create policy admins_select_self on public.admins
  for select to authenticated using (user_id = auth.uid());

-- payment_plans: anyone can read active plans; admins can do everything
create policy plans_read_active on public.payment_plans
  for select to anon, authenticated using (is_active = true);
create policy plans_admin_all on public.payment_plans
  for all to authenticated using (public.is_admin()) with check (public.is_admin());

-- purchases: admins may read; writes happen via service_role (webhook) only
create policy purchases_admin_read on public.purchases
  for select to authenticated using (public.is_admin());

-- leads: admins may read; writes happen via service_role (edge functions) only
create policy leads_admin_read on public.leads
  for select to authenticated using (public.is_admin());
