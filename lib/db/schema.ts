
import { pgSchema,pgTable, text, timestamp } from "drizzle-orm/pg-core";


export const users = pgTable("users", {
  id: text("id").primaryKey(), // Clerk ID
  email: text("email").notNull(),
  firstName: text("first_name"),
  lastName: text("last_name"),
  imageUrl: text("image_url"),
  createdAt: timestamp("created_at").defaultNow(),

});

export const userSetup = pgTable("user",{
  id: text("id").primaryKey(), // Clerk ID
  whyMessaage: text("why_message"),
  currentStatus: text("current_status"),
  goals: text("goals"),
  createdAt: timestamp("created_at").defaultNow(),
})