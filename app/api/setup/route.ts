import {db} from "@/lib/db"
import { NextRequest } from "next/server"
import { userSetup } from "@/lib/db/schema"

export async function Post(req: NextRequest) {
  const { userId, whyMessage, currentStatus, goals } = await req.json()

  if (!userId || !whyMessage || !currentStatus || !goals) {
    return new Response("Missing required fields", { status: 400 })
  }

  try {
    await db.insert(userSetup).values({
      id: userId,
      whyMessaage: whyMessage,
      currentStatus: currentStatus,
      goals: goals,
    }).onConflictDoUpdate({
      target: userSetup.id,
      set: {
        whyMessaage: whyMessage,
        currentStatus: currentStatus,
        goals: goals,
      },
    })
    
    return new Response("User setup saved successfully", { status: 200 })
  } catch (error) {
    console.error("Error saving user setup:", error)
    return new Response("Internal Server Error", { status: 500 })
  }
}
