import { Card, CardContent, CardHeader, CardTitle} from "@/components/shadcn/ui/card"
import { Button } from "@/components/shadcn/ui/button"
import { SETUPCarousel, SETUPCarouselContent, SETUPCarouselItem, SETUPCarouselNext, SETUPCarouselPrevious } from "@/components/shadcn/carousel/SetupCarousel"


const dataset = [
    {
    id: 1,
    question: "Why Did you want to Start This Journey?",
    options:[
      "Transforming your physique",
      "To Build Strength and Muscle",
      "To Build Discipline and Consistency",
      "To Improve Mental Health and Well-being",
      "To Make Friends and Join a Community",
    ]
  },
 {
  id: 2,
  question: "What would you say is your level of Fitness Experience?",
  options:[
    "Beginner (Just starting out)",  
    "Intermediate (Excerise occasionally)" ,
    "Advanced (Athlete-esque, exercise regularly)"

  ]
  },
  {
    id: 3,
    question: "What are your Primary goals by using our App?",
    options:[
      "Document the Journey and Track Daily Progress",
      "Muscle and Strength Gain", 
    ]
  },

]



export default function page() {
 

  return (
    <>
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl my-20"> Let's get Started with a few questions to Personalize your Experience</h1>
      <div>
      <SETUPCarousel>
        <SETUPCarouselContent>
          {dataset.map((item) =>(
        <SETUPCarouselItem key={item.id}>
            <Card>
            <CardHeader>
                <CardTitle> {item.question} </CardTitle>
            </CardHeader>
               {item.options.map((option, index) =>(
                <CardContent key = {index}>
                <div className="flex flex-row gap-y-5">
                <Button className="item-center hover:text-bold bg-blue-900"> {option} </Button>
                </div>
                </CardContent>
                  ))}

        </Card>
          
        </SETUPCarouselItem>
         ))}
        </SETUPCarouselContent>
        <SETUPCarouselNext></SETUPCarouselNext>
        <SETUPCarouselPrevious ></SETUPCarouselPrevious>
        </SETUPCarousel>
        </div>
    </div>
    <div className=" mt-20">
<form >
  And for the final question, we want to hear from you in your own words. What is your personal motivation and reminder for starting this fitness journey? This is your chance to express yourself and set a powerful intention for your transformation. Please share your thoughts and feelings in one sentence, and let it be a guiding light throughout your fitness adventure.
  <input type="text" className="w-full mt-4 p-2 border rounded-md" placeholder="Your personal motivation and reminder..." />
</form>
    </div>
    </>
  )
}

