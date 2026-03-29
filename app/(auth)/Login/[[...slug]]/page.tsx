//import {Button} from "@/components/ui/Button"
import { SignIn, Show, RedirectToSignIn } from '@clerk/nextjs'

export default function Login() {
    return (
        <>
        <Show when="signed-in">
<RedirectToSignIn/>
        </Show>
        <div className="flex justify-center-safe mt-10">
        <SignIn />
        </div>
        </>
    )
}