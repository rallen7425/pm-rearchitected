import { createClient } from "@supabase/supabase-js";
import WebSocket from "ws";

export function getSupabaseClient() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) throw new Error("Missing Supabase env vars");
  return createClient(url, key, {
    db: { schema: "pm_rearchitected" },
    // Node 20 has no native WebSocket; @supabase/supabase-js needs one even
    // though this app doesn't use Realtime. Node 22+ can drop this.
    realtime: { transport: WebSocket as unknown as typeof globalThis.WebSocket },
  });
}
