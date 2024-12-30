import { createClient } from '@supabase/supabase-js';
import { Database } from '@shared/types/database.types.ts';

export const supabase = createClient<Database>(
  `${import.meta.env.VITE_SUPABASE_PROJECT_URL}`,
  `${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
);
