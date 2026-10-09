// Edge Function: send-calorie-results
// Emails the calculator results via Resend and stores a `leads` row.
// Deploy: supabase functions deploy send-calorie-results
// Secrets: supabase secrets set RESEND_API_KEY=... RESEND_FROM_EMAIL=hello@onaksfitness.com
// (SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are injected automatically.)
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { corsHeaders } from '../_shared/cors.ts';

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
const FROM = Deno.env.get('RESEND_FROM_EMAIL') ?? 'hello@onaksfitness.com';

const ACTIVITY: Record<string, string> = {
  '1.2': 'Sedentary',
  '1.375': 'Lightly active',
  '1.55': 'Moderately active',
  '1.725': 'Very active',
  '1.9': 'Extra active',
};
const GOAL: Record<string, string> = { lose: 'Weight loss', maintain: 'Maintenance', gain: 'Weight gain' };

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  });
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });
  if (req.method !== 'POST') return json({ error: 'Method not allowed' }, 405);

  try {
    const { email, profile = {}, results = {} } = await req.json();
    if (!email || results.calories == null) return json({ error: 'Missing email or results' }, 400);

    // Store the lead (service role bypasses RLS). Don't fail the email if this errors.
    try {
      const supabase = createClient(
        Deno.env.get('SUPABASE_URL')!,
        Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
      );
      const { error } = await supabase.from('leads').insert({
        email,
        first_name: null,
        source: 'calculator',
        meta: { profile, results },
      });
      if (error) console.error('lead insert failed:', error.message);
    } catch (e) {
      console.error('lead insert threw:', e);
    }

    if (!RESEND_API_KEY) return json({ error: 'Email service not configured' }, 500);

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: `Onaks Fitness <${FROM}>`,
        to: [email],
        subject: 'Your calorie and macro results — Onaks Fitness',
        html: renderEmail(profile, results),
      }),
    });
    if (!res.ok) {
      console.error('Resend failed:', await res.text());
      return json({ error: 'Email send failed' }, 502);
    }
    return json({ ok: true });
  } catch (e) {
    console.error(e);
    return json({ error: 'Server error' }, 500);
  }
});

function renderEmail(profile: Record<string, unknown>, r: Record<string, number>): string {
  const sex = profile.sex === 'f' ? 'Female' : 'Male';
  const goal = GOAL[String(profile.goal)] ?? 'Maintenance';
  const activity = ACTIVITY[String(profile.activity)] ?? '—';
  const card = 'background:#151515;padding:20px;border-radius:12px;margin:16px 0;color:#F4F6F4';
  const row = (l: string, v: string) =>
    `<p style="margin:4px 0;color:#9BA39D">${l}: <strong style="color:#F4F6F4">${v}</strong></p>`;
  const macro = (l: string, v: number, c: string) =>
    `<td style="padding:12px;text-align:center;background:#1C1C1C;border-radius:10px">
       <div style="font-size:24px;font-weight:800;color:${c}">${v}g</div>
       <div style="font-size:13px;color:#9BA39D">${l}</div></td>`;
  return `
  <div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:0 auto;padding:20px;background:#0f0f0f">
    <h1 style="color:#00EB2B;text-align:center;font-size:24px">Your calorie and macro results</h1>
    <div style="${card}">
      <h2 style="color:#00EB2B;font-size:16px;margin:0 0 10px">Your details</h2>
      ${row('Sex', sex)}
      ${row('Age', `${profile.age} years`)}
      ${row('Weight', `${profile.weightKg} kg`)}
      ${row('Height', `${profile.heightCm} cm`)}
      ${row('Activity', activity)}
      ${row('Goal', goal)}
    </div>
    <div style="background:linear-gradient(90deg,#00EB2B,#00B4FB);padding:22px;border-radius:12px;margin:16px 0;text-align:center;color:#081108">
      <div style="font-size:14px;font-weight:700">Recommended daily calories</div>
      <div style="font-size:34px;font-weight:800">${r.calories} kcal</div>
    </div>
    <table style="width:100%;border-spacing:8px 0"><tr>
      ${macro('Protein', r.protein, '#00EB2B')}
      ${macro('Carbs', r.carbs, '#00B4FB')}
      ${macro('Fat', r.fat, '#8be0ff')}
    </tr></table>
    <div style="${card}">
      <p style="margin:4px 0;color:#9BA39D">BMR: <strong style="color:#F4F6F4">${r.bmr} kcal/day</strong> (burned at rest)</p>
      <p style="margin:4px 0;color:#9BA39D">TDEE: <strong style="color:#F4F6F4">${r.tdee} kcal/day</strong> (with activity)</p>
      <p style="margin:12px 0 0;color:#9BA39D">Hit your protein target first, track for two weeks, and adjust slowly. Want me to do the rest? Just reply to this email.</p>
    </div>
    <p style="text-align:center;color:#9BA39D;font-size:13px;margin-top:20px">Onaks Fitness</p>
  </div>`;
}
