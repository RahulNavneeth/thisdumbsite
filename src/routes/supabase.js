import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://gbllkmagamdqvwfbcsxy.supabase.co';
const supabaseAnonkey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdibGxrbWFnYW1kcXZ3ZmJjc3h5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY0OTY2NTg5MCwiZXhwIjoxOTY1MjQxODkwfQ.vqahfWVtwhYvfTTwvU_oK0fJ2E9hns737sfsWmUzz9g';

export const supabase = createClient(supabaseUrl, supabaseAnonkey);
