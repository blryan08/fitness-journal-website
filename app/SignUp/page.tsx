export default function SignUp() {
    return (
        <main>
            <div className = "text-center mt-15">
                <h1 className = "text-4xl font-serif"> Get's Started with YourFitJournal</h1>
                <h2 className ="mt-3"> Or if you already have an account, <a href="/Login" className="hover:text-blue-400">Sign In</a></h2>
            </div>
            <div className="flex justify-center mt-10">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Sign Up
                </button>
            </div>
        </main>
    );
}