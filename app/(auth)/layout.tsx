import { ClerkProvider } from "@clerk/nextjs";
import { Separator } from "@/lib/components/ui/separator"
import {Footer} from "@/lib/components/footer/footer"
import "../../app/globals.css";

const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY; // Or the appropriate env var name

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <html lang="en">
         <body className="text-white bg-linear-to-br from-black to-gray-800 {oswald.className}" ><ClerkProvider publishableKey={publishableKey}>
    {children}
   <div className="mt-20">
          <Separator/>
          </div>
          <div className="mt-10">
          <Footer />
          </div>
             </ClerkProvider>
   </body>
 </html>

  )}
