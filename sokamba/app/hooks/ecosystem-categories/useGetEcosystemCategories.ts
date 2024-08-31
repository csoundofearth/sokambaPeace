import { useQuery } from '@tanstack/react-query'
import useSupabase from '@/app/hooks/useSupabase'
import { getEcosystemCategories } from '@/app/queries/get-ecosystem-categories'

export function useEcosystemCategories() {
  const supabase = useSupabase()
  return useQuery({
    queryKey: ['ecosystem-categories'],
    queryFn: async () => {
      return await getEcosystemCategories(supabase);
    },
  });
}   