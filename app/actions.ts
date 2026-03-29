// 'use server'

// import { auth } from '@clerk/nextjs/server'
// import { UserMessages } from '../../db/schema'
// import { db } from '../../db'
// import { eq } from 'drizzle-orm'

// export async function createUserMessage(formData: FormData) {
//   const { isAuthenticated, userId } = await auth()
//   if (!isAuthenticated) throw new Error('User not found')

//   const message = formData.get('message') as string
//   await db.insert(UserMessages).values({
//     user_id: userId,
//     message,
//   })
// }

// export async function deleteUserMessage() {
//   const { isAuthenticated, userId } = await auth()
//   if (!isAuthenticated) throw new Error('User not found')

//   await db.delete(UserMessages).where(eq(UserMessages.user_id, userId))
// }
"use server"

import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
 
export async function createPost(id: string) {
  try {
    // Call database
  } catch (error) {
    // Handle errors
  }
 
  revalidatePath('/Users') // Update cached posts
  redirect(`/Users/${id}`) // Navigate to the new post page
}