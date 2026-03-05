const SUPABASE_url = "https://yvtgzbahicdprhgcwzhw.supabase.co";

const SUPABASE_anon = "sb_publishable_e3a7KiZtMBZYr0PD5gqkeg_QtBH_Ilu"

 export const supabase = window.supabase.createClient(
  SUPABASE_url,
  SUPABASE_anon
);