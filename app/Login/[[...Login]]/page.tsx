"use client";
//import {Button} from "@/components/ui/Button"
import { ClerkProvider, SignIn } from '@clerk/nextjs'

export default function Login() {
    return (
        <ClerkProvider>
        <div className="flex justify-center-safe mt-10">
        <SignIn />
        </div>
        </ClerkProvider>
    )
}