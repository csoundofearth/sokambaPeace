import { useMemo } from 'react';
import { getSupabaseBrowserClient } from '@/app/utils/supabase';
 
function useSupabase() {
  return useMemo(getSupabaseBrowserClient, []);
}
 
export default useSupabase;