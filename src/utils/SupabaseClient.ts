// import subapase-js library
import { createClient } from "@supabase/supabase-js";
// .env.local variables are automatically loaded into Next
/* environment variables must be prepended by NEXT_PUBLIC_ to be exposed to the browser */
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
