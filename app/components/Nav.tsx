"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import Link from "next/link"
import Image from "next/image";
import favicon from "../../public/favicon.svg"


const Navmain = () => {
return (
<NavigationMenu>
        <div className="flex items-center">
           <Image
                className="scale-40"
                src={favicon}
                alt="YourFitJournallogo"
              />
              <Link href={"/"}> <h1 className="text-xl mr-10">YourFitJournal</h1> </Link>
        </div>
        <div className="flex ml-50 ">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger> Introduction</NavigationMenuTrigger>
            <NavigationMenuContent>
             
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger> Pricing </NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>

              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger> About </NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>

              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          </NavigationMenuList>
       </div>
      

        <div className="flex gap-6 justify-end-safe items-center ml-120">
              <Link href={"/Login"} className="flex"> <SignInButton ></SignInButton> </Link>
              <Link href={"/SignUp"} className="flex"> <SignUpButton></SignUpButton> </Link>
        </div>
        
        
      </NavigationMenu>
)
}
export default Navmain;