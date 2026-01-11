'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'

export async function approvePost(postId: string) {
  const supabase = await createClient()
  
  // Check admin
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return { error: 'Unauthorized' }
  
  const { data: profile } = await supabase.from('profiles').select('role').eq('id', user.id).single()
  if (profile?.role !== 'admin') return { error: 'Forbidden' }

  const { error } = await supabase.from('posts').update({ status: 'published' }).eq('id', postId)
  
  if (error) return { error: error.message }
  
  revalidatePath('/admin')
  return { success: true }
}

export async function deletePost(postId: string) {
  const supabase = await createClient()

  // Check admin
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return { error: 'Unauthorized' }
  
  const { data: profile } = await supabase.from('profiles').select('role').eq('id', user.id).single()
  if (profile?.role !== 'admin') return { error: 'Forbidden' }

  const { error } = await supabase.from('posts').delete().eq('id', postId)
  
  if (error) return { error: error.message }
  
  revalidatePath('/admin')
  return { success: true }
}
