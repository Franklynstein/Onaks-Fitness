# Backend migration: old API → Supabase + Resend + your Stripe

The previous developer's backend (`api.onaksfitness.com`) is being replaced. Its code
was never in this repo; the frontend just called it. We are rebuilding on owned services.

## Decisions (approved)
- Endpoints: **Supabase Edge Functions** (Deno).
- Stripe: **your** account; store `stripe_price_id` on each plan; checkout uses it.
- Leads: stored in Supabase (`leads`), emailed via **Resend**; **Mailchimp dropped**.
- Admin: **Supabase Auth** email+password, single admin (you).
- No old-data migration; seed fresh products.

## Phases (lowest risk first)
0. **Foundations** — schema, client scaffold, env docs, deps. *(this change; nothing wired)*
1. Calculator email via Resend (+ lead). *(free tool, isolated)*
2. Free-workout lead capture + plan email via Resend.
3. Programmes catalogue read from Supabase.
4. Admin + Supabase Auth; CRUD via RLS; PDFs → Supabase Storage.
5. Stripe checkout + webhook fulfilment. *(money path, last; test mode first)*
6. Cutover & decommission (remove `api.onaksfitness.com`, dead code, old secrets).

## What Phase 0 added
- `supabase/migrations/0001_initial_schema.sql` — `admins`, `payment_plans` (+ `stripe_price_id`), `purchases`, `leads`, RLS policies, `updated_at` trigger.
- `src/lib/supabase.js` — browser client scaffold (not imported anywhere yet).
- `.env.example` — full new-stack env var list (client vs edge-function secrets).
- `supabase/functions/README.md` — the four functions and their phases.
- Dependency: `@supabase/supabase-js`.

Nothing is wired to the running app; the live site still uses the old API until later phases.

## Before Phase 1 — what I need from you
See the "What I need from you" section in the handoff message. In short: Supabase project
ref + URL + anon key + service_role key, apply the migration, create your admin user and
add it to `admins`; Resend API key + verified sender; Stripe (test + live) keys. Once I have
the non-secret identifiers and the secrets are placed as Edge Function secrets, Phase 1 begins.
