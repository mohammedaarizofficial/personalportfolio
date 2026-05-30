import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import profileBanner from "../assets/profileedited.png";

function Hero(){
    return(
        <div className="grid grid-cols-[auto_1fr] my-[clamp(10px,5.9vw,8rem)] pl-[clamp(1rem,2.25vw,4rem)] gap-9">
            <div className="font-heading font-medium text-[clamp(1.25rem,4.5vw,10rem)] mt-9">Myself,<br/>
                Mohammed Aariz
                <div className="font-heading font-normal text-[clamp(0.625rem,3vw,6rem)]">Full-stack developer, F1 enthusiast<br/>And Human. Not AI. Human.</div>
            </div>
            <Tooltip>
                <TooltipTrigger asChild>
                    <img src={profileBanner} alt="profile photo" className="md:hover:scale-105 transition duration-500 ease-in-out"/>
                </TooltipTrigger>
                <TooltipContent className="font-heading lg:text-3xl lg:bg-tooltip lg:px-3 lg:py-2 lg:text-white" arrowClassName="lg:bg-tooltip lg:fill-tooltip">
                    <h1>Hi!</h1>
                </TooltipContent>
            </Tooltip>
        </div>
    )
}

export default Hero;