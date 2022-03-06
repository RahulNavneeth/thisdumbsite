import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://gbllkmagamdqvwfbcsxy.supabase.co';
const supabaseAnonkey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdibGxrbWFnYW1kcXZ3ZmJjc3h5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY0NjU0OTcyOSwiZXhwIjoxOTYyMTI1NzI5fQ.dUUa7kPn025tER-xAqMxGOlu0hk0ucvAiRRMEN0OvmA';

export const supabase = createClient(supabaseUrl, supabaseAnonkey);
