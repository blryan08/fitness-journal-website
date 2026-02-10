import { ClerkProvider, SignUp } from '@clerk/nextjs'
export default function Signup() {
    return (
        <ClerkProvider>
            <div className="flex justify-center mt-5">
            <SignUp>
            </SignUp>
            </div>
        </ClerkProvider>
    )
}