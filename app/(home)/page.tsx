
"use client"
import Image from 'next/image';
import img1 from "@/public/img1.jpg"
import img2 from "@/public/img2.jpg"
import {Button, buttonVariants} from "@/components/ui/button"
import Link from "next/link"




export default function Home() {
  return (
    <>
  
        <div className=" flex items-center -mt-15 ml-30 space-x-8 ">
        <div className='flex flex-col space-y-4'>
        <h1 className=" text-6xl font-oswald "> TRAIN  TRACK TRANSFORM </h1>
        <h2 className="text-xl max-w-md"> Your Desitnation to Building a Better Fitness Journey, Capture Moments throughout the Adventure, and Stay Disciplined</h2>
        <Link href="/SignUp">
        <Button className='bg-cyan-500 w-1/2 font-bold' variant='ghost'> Get's Started</Button>
        </Link>
        </div>
        <div className='flex item-center'>
        <Image 
        src = {img1}
        alt = "image1"
        className='scale-50 inline-block rounded-2xl positon:relative -z-10'
        />
        </div>
        </div>
      
     <div className="flex items-center gap-25 mt-5">
  <div className="flex items-center ml-30">
    <Image
      src={img2}
      alt="image2"
      className="w-125 h-auto inline-block align-middle rounded-2xl"
    />
  </div>
  <div className="flex flex-col space-y-4 ">
    <h1 className="text-2xl">
      Monitor Up to 50 Activities and Workout
    </h1>
    <h1 className='text-2xl'>
      Daily Reminder and Checklist
    </h1>
  </div>
</div>

    </>


  );
}
