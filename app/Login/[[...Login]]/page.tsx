"use client";
//import {Button} from "@/components/ui/Button"
import Link from "next/link"
import { useState } from "react";
import { ClerkProvider, SignIn } from '@clerk/nextjs'

export default function Login() {
    return (
        <ClerkProvider>
        <div className="flex justify-center-safe mt-10">
        <SignIn />
        </div>
        </ClerkProvider>
    /*<main className= "flex flex-col items-center justify-center flex-1 w-full px-25 mt-15">
        <div className="mb-20">
            <h1 className="text-3xl"> Login To Your Account </h1>
        </div>
        <div className="bg-white rounded-sm shadow-2xl flex w-2/3 max-w-4xl text-black gap-0.5">
            <div className="w-3/5 p-5" > 
                <p className="text-center text-2xl text-teal-500 font-extrabold mt-5"> Log In </p> 
                <div className = "flex mt-10 ml-5 w-4/5 h-15 border-3 border-gray-500 items-center-safe">
                 <form className =""> 
                    <input type="email" placeholder="Enter your email" className= "p-3 focus:outline-none" onChange={(e) => setValue({...value, email: e.target.value})}></input>
                 </form>
                </div>
                 
                <div className = "flex mt-10 ml-5 w-4/5 h-15 border-3 border-gray-500 items-center-safe">
                 <form className =""> 
                    <input type="password" placeholder="Enter your password" className= "p-3 focus:outline-none" onChange={(e) => setValue({...value, password: e.target.value})}></input>
                 </form>
                </div>               

                <div className=" flex justify-center items-center">
                    <button className=" mt-7 ml-5 w-4/5 h-10 bg-teal-500 text-white rounded-2xl hover:bg-teal-600" onClick={handleCLick}> Log In </button>
                </div>

             </div>
             <div className="w-2/5 bg-teal-100 rounded-tr-2xl rounded-br-2xl py-36 px-12">
                <p className="text-2xl mb-5"> New To Our Wesbsite? </p>
                <p> Sign Up <Link href="/SignUp" className="font-extrabold"> Here</Link> </p>
             </div>

        </div>
        </main>
        */
    );
}