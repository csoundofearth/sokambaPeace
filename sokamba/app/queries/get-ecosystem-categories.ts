import { TypedSupabaseClient } from '@/app/utils/supabase'

export async function getEcosystemCategories(supabase: TypedSupabaseClient){
  const { data, error } = await supabase
    .from('ecosystem_categories')
    .select('id, name')
    .order('name')

  if (error) {
    console.error('Error fetching ecosystem categories:', error)
    throw error
  }

  return data
}