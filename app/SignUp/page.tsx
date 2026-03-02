"use client";
import {SignUp } from '@clerk/nextjs'
export default function Signup() {
    return (
            <div className="flex justify-center mt-5">
            <SignUp>
            </SignUp>
            </div>
    )
}