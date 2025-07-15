from supabase import create_client, Client

# ⛳ Replace these with your actual Supabase credentials
SUPABASE_URL = "https://volyowgwokekxyhvxzsu.supabase.co"
SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZvbHlvd2d3b2tla3h5aHZ4enN1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUwMDU1NzQsImV4cCI6MjA2MDU4MTU3NH0.iS_akSEa2D31InMVVuPPn4Vbzuj4lUO_Ch6K4uwe064"

supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)



