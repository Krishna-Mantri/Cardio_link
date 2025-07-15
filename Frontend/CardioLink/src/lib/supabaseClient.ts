// src/lib/supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://volyowgwokekxyhvxzsu.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZvbHlvd2d3b2tla3h5aHZ4enN1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUwMDU1NzQsImV4cCI6MjA2MDU4MTU3NH0.iS_akSEa2D31InMVVuPPn4Vbzuj4lUO_Ch6K4uwe064';

export const supabase = createClient(supabaseUrl, supabaseKey);


/* 
project URL:https://volyowgwokekxyhvxzsu.supabase.co
API key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZvbHlvd2d3b2tla3h5aHZ4enN1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUwMDU1NzQsImV4cCI6MjA2MDU4MTU3NH0.iS_akSEa2D31InMVVuPPn4Vbzuj4lUO_Ch6K4uwe064

*/
