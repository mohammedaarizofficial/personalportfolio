import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import profileBanner from "../assets/profileedited.png";

function Hero(){
    return(
        <div className="flex flex-col relative pt-[150px] pl-[87px]">
            <div className="text-hero-banner font-heading font-medium">Myself,<br/>
                Mohammed Aariz
            </div>
            <div className="text-hero-sub font-heading font-medium">Full-stack developer, F1 enthusiast<br/>And Human. Not AI. Human.</div>
            <Tooltip>
                <TooltipTrigger asChild>
                    <img src={profileBanner} alt="profile photo" className="absolute left-[1083px] top-[241px] w-[429.22px] h-[600px] hover:w-[566.22px] hover:h-[782px] hover:left-[946px] hover:top-[90px] transition-all will-change-transform duration-1000 ease-in-out" />
                </TooltipTrigger>
                <TooltipContent className="font-heading text-3xl bg-tooltip px-3 py-2 text-white" arrowClassName="bg-tooltip fill-tooltip">
                    <h1>Hi!</h1>
                </TooltipContent>
            </Tooltip>
        </div>
    )
}

export default Hero;