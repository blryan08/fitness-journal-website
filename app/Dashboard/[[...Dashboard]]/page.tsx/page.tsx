import { SignedIn } from "@clerk/nextjs";

export default function Dashboard(){
    return (
        <SignedIn>
        <h1> Test </h1>
        </SignedIn>
    )
}