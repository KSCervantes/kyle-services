import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jxqvhtlmqwuqlknmcqno.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp4cXZodGxtcXd1cWxrbm1jcW5vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU0NDYzNDksImV4cCI6MjA2MTAyMjM0OX0.mTrNURgjoGGmf0rT7Lea_l6DhjlhRizP0X5FRtRee9I'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
