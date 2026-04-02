import { users } from '@/lib/db/schema';
import {db} from "@/lib/db"
import {Webhook} from "svix"
import { headers } from 'next/headers';
import { NextRequest } from 'next/server';
import { eq } from 'drizzle-orm';

export async function POST(req: NextRequest) {
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SIGNING_SECRET;
  if (!WEBHOOK_SECRET) throw new Error('Missing CLERK_WEBHOOK_SECRET');

  const headerPayload = await headers();
  const svix_id = headerPayload.get('svix-id');
  const svix_timestamp = headerPayload.get('svix-timestamp');
  const svix_signature = headerPayload.get('svix-signature');

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Missing svix headers', { status: 400 });
  }

  const payload = await req.json();
  const body = JSON.stringify(payload);

  const wh = new Webhook(WEBHOOK_SECRET);
  let evt: any;

  try {
    evt = wh.verify(body, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    });
  } catch (err) {
    return new Response('Invalid signature', { status: 400 });
  }
    // Do something with payload
    // For this guide, log payload to console
    const eventType = evt.type
    if (eventType === "user.created" || eventType === "user.updated") {
      const { id, email_addresses, first_name, last_name, image_url } = evt.data;
      const email = email_addresses[0].email_address ?? null;
  
      if (!email) {
        return new Response('No email, skipping', { status: 200 });
      }

      await db.insert(users)
        .values({
          id: id,
          email: email,
          firstName: first_name,
          lastName: last_name,
          imageUrl: image_url,
        })
        .onConflictDoUpdate({
          target: users.id,
          set: {
            email: email,
            firstName: first_name,
            lastName: last_name,
            imageUrl: image_url,
          },
        });
    }


    if (eventType === "user.deleted"){
      const { id } = evt.data;

  if (!id) {
    return new Response('No user id, skipping', { status: 200 });
  }

  await db.delete(users).where(eq(users.id, id));
    }
  



    return new Response('OK', { status: 200 });
  }