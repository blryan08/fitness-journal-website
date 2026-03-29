import {SignUp } from '@clerk/nextjs'
import { auth } from '@clerk/nextjs/server'
import { db } from '@/db'


export default async function Signup() {
    return (
            <div className="flex my-10 space-x-50">

            <div className =" ml-60">
            <SignUp>
            </SignUp>
            </div>

            <div className='flex flex-col space-y-5 items-center-safe mt-50'>
                <h1 className='text-6xl font-extrabold'> Sign Up Today</h1>
                <h2 className='text-xl max-w-md align-text-middle'> And Begin your Fitness Journey. Get in Shape and Stay Sharp with our Resources and Features. </h2>
            </div>
            </div>
    )
}