"use client";
//import {Button} from "@/components/ui/Button"
import { SignIn } from '@clerk/nextjs'

export default function Login() {
    return (
        <div className="flex justify-center-safe mt-10">
        <SignIn />
        </div>
    )
}