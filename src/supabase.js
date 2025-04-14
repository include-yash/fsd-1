import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ykkupsqpbifwweewmqlo.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlra3Vwc3FwYmlmd3dlZXdtcWxvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ2MDc3NjIsImV4cCI6MjA2MDE4Mzc2Mn0.dz-4egZTTzb6ene_0NfxyzGGIau-bdCVc2spAiwpfbY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;