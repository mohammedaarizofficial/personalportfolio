import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import profileBanner from "../assets/profileedited.png";

function Hero(){
    return(
        <div className="flex flex-col relative lg:pt-[150px] lg:pl-[87px]">
            <div className="lg:text-hero-banner font-heading font-medium">Myself,<br/>
                Mohammed Aariz
            </div>
            <div className="lg:text-hero-sub font-heading font-medium">Full-stack developer, F1 enthusiast<br/>And Human. Not AI. Human.</div>
            <Tooltip>
                <TooltipTrigger asChild>
                    <img src={profileBanner} alt="profile photo" className="absolute lg:left-[1083px] lg:top-[241px] lg:w-[429.22px] lg:h-[600px] lg:hover:w-[566.22px] lg:hover:h-[782px] lg:hover:left-[946px] lg:hover:top-[90px] lg:transition-all lg:will-change-transform lg:duration-1000 lg:ease-in-out" />
                </TooltipTrigger>
                <TooltipContent className="font-heading lg:text-3xl lg:bg-tooltip lg:px-3 lg:py-2 lg:text-white" arrowClassName="lg:bg-tooltip lg:fill-tooltip">
                    <h1>Hi!</h1>
                </TooltipContent>
            </Tooltip>
        </div>
    )
}

export default Hero;