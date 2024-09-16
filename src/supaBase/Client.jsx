import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://fvlugsheuknvirwmxinx.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ2bHVnc2hldWtudmlyd214aW54Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY0NzM2MjUsImV4cCI6MjA0MjA0OTYyNX0.VsK7HssssuCnUoYkBkgDyjE1VQdLFphe1AImhQ0tpm0'
export const supabase = createClient(supabaseUrl, supabaseKey)