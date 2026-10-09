// Supabase browser client (Phase 0 scaffold — not imported anywhere yet).
// Wiring begins in Phase 1. Reads public env vars; stays null if unconfigured
// so builds/previews never crash before the keys are set.
import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.VITE_SUPABASE_URL;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = url && anonKey ? createClient(url, anonKey) : null;

export const isSupabaseConfigured = Boolean(url && anonKey);
