"use client";
import {useState} from "react"
export default function SignUp() {
    const [value, setValue] = useState({
        name: '',
        email: '',
        password: '',
        cfpassword: ''
    });
    const handleClick = () => {
        console.log(value.name, value.email, value.password, value.cfpassword);
    }
    return (
        <main className="">
            <div className = "text-center mt-15">
                <h1 className = "text-4xl font-serif"> Get's Started with YourFitJournal</h1>
                <h2 className ="mt-3"> Or if you already have an account, <a href="/Login" className="hover:text-blue-400 font-bold">Sign In</a></h2>
            </div>
            <div className="flex flex-col justify-start ml-10 my-5">
                {/* Name */}
                <p className = "text-xl mt-3">Name</p>
                <div className = "flex border rounded-sm border-white-500 w-3/5 h-10 items-center-safe">
                    <form className="ml-2">
                        <input type="text"className = "focus:outline-none" placeholder="Enter your Name"onChange= {(e) => setValue({...value, name: e.target.value})}>
                        </input>   
                    </form>
                </div>

                {/* Email */}
                <p className = "text-xl mt-7">Email </p>
                <div className = "flex border rounded-sm border-white-500 w-3/5 h-10 items-center-safe">
                    <form className="ml-2">
                        <input type="email"className = "focus:outline-none" placeholder="Enter your Email"onChange= {(e) => setValue({...value, email: e.target.value})}>
                        </input>   
                    </form>
                </div>

                {/* password */}
                <p className = "text-xl mt-7">Password</p>
                <div className = "flex border rounded-sm border-white-500 w-3/5 h-10 items-center-safe">
                    <form className="ml-2">
                        <input type="password"className = "focus:outline-none" placeholder="Enter your Password"onChange= {(e) => setValue({...value, password: e.target.value})}>
                        </input>   
                    </form>
                </div>
                {/* confirm password */}
                <p className = "text-xl mt-7">Confirm your Password</p>
                <div className = "flex border rounded-sm border-white-500 w-3/5 h-10 items-center-safe">
                    <form className="ml-2">
                        <input type="password"className = "focus:outline-none" placeholder="Enter your Password"onChange= {(e) => setValue({...value, cfpassword: e.target.value})}>
                        </input>   
                    </form>
                </div>
                
            </div>
            <div className="flex justify-center mt-10">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleClick}>
                    Sign Up
                </button>
            </div>
        </main>
    );
}