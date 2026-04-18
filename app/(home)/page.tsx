
"use client"
import Image from 'next/image';
import img1 from "@/public/img1.jpg"
import img2 from "@/public/img2.jpg"
import img3 from "@/public/img3.jpg"
import img4 from "@/public/img4.jpg"
import {Button, buttonVariants} from "@/components/shadcn/ui/button"
import Link from "next/link"
import {Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext} from "@/components/shadcn/carousel/carousel"
import { Separator } from '@/components/shadcn/ui/separator';
  



export default function Home() {
  return (
    <>
  
        <section className=" flex items-center -mt-15 ml-30 space-x-8 ">
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
        </section>

        <div className='mb-20'>
        <Separator></Separator>
        </div>

      
<section className="flex items-center justify-center mt-5>">
<Carousel>
      <CarouselContent>
          <CarouselItem>
            <div className="flex items-center justify-center gap-x-7">
              <Image
              src={img2}
              alt="image2"
              className="w-125 h-auto inline-block align-middle rounded-2xl">
               

              </Image>
              <h1 className="text-2xl max-w-md  text-white font-bold">
                   Capture Your Journey Everywhere, Anytime, with any Activity.
              </h1>
            </div>
           </CarouselItem>
           <CarouselItem>
            <div className="flex items-center justify-center gap-x-7">
              <Image
              src={img3}
              alt="image3"
              className="w-125 h-auto inline-block align-middle rounded-2xl"> 
              </Image>
              <h1 className="text-2xl max-w-md  text-white font-bold">
                   Share your Journey with the World and Connect with Fellow Fitness Enthusiasts.
              </h1>
              </div>
        </CarouselItem>
        <CarouselItem>
            <div className="flex items-center justify-center gap-x-7">
              <Image
              src={img4}
              alt="image4"
              className="w-125 h-auto inline-block align-middle rounded-2xl"> 
              </Image>
              <h1 className="text-2xl max-w-md  text-white font-bold">
                   Stay on top of your Schedule and Never miss out on a Workout. 
              </h1>
              </div>
        </CarouselItem>

           
          
      </CarouselContent>
      <div className="absolute top-1/2 left-10 flex items-center justify-center">
      <CarouselPrevious className="relative left-0 translate-x-0 " />
      </div>
      <div className="absolute top-1/2 right-10 flex items-center justify-center">
      <CarouselNext className="relative right-0 translate-x-0" />
      </div>
    </Carousel>
    </section>
    
</>
  )
}
