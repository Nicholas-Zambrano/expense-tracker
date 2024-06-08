
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://glejggklurbfahmrofsx.supabase.co"
// const supabaseKey = process.env.SUPABASE_KEY
const supabaseKey= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdsZWpnZ2tsdXJiZmFobXJvZnN4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc3ODYyMTQsImV4cCI6MjAzMzM2MjIxNH0.CP5HrZtymlFb7KArlvP5xU4c1Npc8QiJLrBU1oT0OIs"

export const supabase = createClient(supabaseUrl,supabaseKey)

