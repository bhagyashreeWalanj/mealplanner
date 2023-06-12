import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl: any = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey: any = process.env.REACT_APP_SUPABASE_ANON_KEY;
const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey);

export const CDNURL =
  "https://rixfolsvairsbvmikclq.supabase.co/storage/v1/object/public/images/";

export default supabase;
