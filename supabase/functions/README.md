# Supabase Edge Functions

These are the owned-infra endpoints that replace `api.onaksfitness.com`. They are
scaffolded here and implemented per phase (none are deployed yet in Phase 0).

| Function | Phase | Replaces | Purpose |
|---|---|---|---|
| `send-calorie-results` | 1 | AWS SES handler | Email calculator results via Resend; store a `leads` row |
| `subscribe-workout` | 2 | Mailchimp | Store a `leads` row; email the 3/4-day plan via Resend |
| `create-checkout-session` | 5 | old `/api/create-checkout-session` | Create a Stripe Checkout Session from a plan's `stripe_price_id` |
| `stripe-webhook` | 5 | (new) | On `checkout.session.completed`: insert `purchases`, email receipt + signed download link |

Edge Functions run on Deno and use the **service_role** key (bypassing RLS) via
their function secrets. Catalogue reads and admin CRUD go directly through
`@supabase/supabase-js` with RLS, not through these functions.

Deploy (later phases): `supabase functions deploy <name>`.
Secrets: `supabase secrets set STRIPE_SECRET_KEY=... RESEND_API_KEY=...` etc.
