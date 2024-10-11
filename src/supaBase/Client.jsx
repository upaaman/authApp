// --------------settgin up the supabase client in our project-----------------

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ebdsmapfodotkocmalno.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImViZHNtYXBmb2RvdGtvY21hbG5vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg2NTg0OTUsImV4cCI6MjA0NDIzNDQ5NX0.9JwfF-wju13fkr2Msg7sLjtqSdLM15UruQ2hsJAdPY8'
export const supabase = createClient(supabaseUrl, supabaseKey)