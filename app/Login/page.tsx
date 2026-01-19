//import {Button} from "@/components/ui/Button"
import Link from "next/link"

export default function Login() {
    return (
    <main className= "flex flex-col items-center justify-center flex-1 w-full px-25 mt-50">
        <div className="bg-white rounded-sm shadow-2xl flex w-2/3 max-w-4xl text-black">
            <div className="w-3/5 p-5" > 
                <p className="text-center text-2xl font-extrabold"> Log In </p> 
             </div>
             <div className="w-2/5 bg-teal-100 rounded-tr-2xl rounded-br-2xl py-36 px-12">
                <p className="text-2xl mb-5"> New To Our Wesbsite? </p>
                <p> Sign Up <Link href="/SignUp" className="font-extrabold"> Here</Link> </p>
             </div>

        </div>

    </main>
    
    );
}