import { createClient } from "@supabase/supabase-js";
import { env } from "@/env";

/**
 * Supabase Admin Client (service_role).
 *
 * Bypasses Row-Level Security — use ONLY on the server side
 * for trusted operations (cron jobs, admin CRUD, etc.).
 *
 * This is a singleton: the same instance is reused across the
 * entire server process to avoid unnecessary connections.
 */
export const supabaseAdmin = createClient(
  env.NEXT_PUBLIC_SUPABASE_URL,
  env.SUPABASE_SERVICE_ROLE_KEY
);
