import { ClerkProvider } from "@clerk/nextjs"
import "../globals.css"
const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY; 

export default function UserLayout({ children }: { children: React.ReactNode }) {
  return  (<ClerkProvider publishableKey={publishableKey}>
    <html lang="en">

  <body className="text-white bg-linear-to-br from-black to-gray-800 {oswald.className}" >
{children}

</body>

</html>
</ClerkProvider>
)}