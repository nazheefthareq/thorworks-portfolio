// lib/supabase/client.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Client ini aman digunakan di Client Components maupun Server Components untuk operasi Read (SELECT)
export const supabase = createClient(supabaseUrl, supabaseAnonKey);