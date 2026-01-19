import { createClient } from '@supabase/supabase-js'

// Use fallback values if env vars are not set (for build time)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key'

// Using generic type to allow flexibility with new tables
export const supabase = createClient(supabaseUrl, supabaseAnonKey)
