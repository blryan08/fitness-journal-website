
import BubbleBackgroundDemo from "@/components/ui/bubble"

export default function Home() {
  return (
<div className="content-around ml-30 mt-20 relative ">
  <div className="absolute inset-0 z-[-1]">
  <BubbleBackgroundDemo/>
  </div>
  <h1 className="text-5xl mr-25 font-serif bg-linear-to-r from-teal-500 via-blue-500 to-pink-500 bg-clip-text text-transparent"> TRAIN . TRACK . TRANSFORM </h1>
  <h2 className = "text-5xl max-w-md ml-10  "> Your Desitnation to Building a Better Fitness Journey</h2>
  </div>


);
}
