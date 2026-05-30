import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import insta from "../assets/instagram-fill.png";
import linkedin from "../assets/linkedin-fill.png";
import github from "../assets/github.png";
import mail from "../assets/mail.png";

function Footer(){
    return(
        <div className="grid grid-cols-2 items-center shadow-footer justify-around py-2 mt-9" id="contact">
            <div className="font-heading text-[clamp(1rem,4.5vw,10rem)] lg:text-hero-sub font-medium justify-self-start pl-[3vw]">CONTACT ME@</div>
            <div className="flex justify-self-end items-center pr-[3vw] gap-[3vw] justify-center content-center">
                <Tooltip>
                    <TooltipTrigger asChild>
                        <a href="https://www.instagram.com/mohd.aarizzz/?hl=en" target="_blank" className="cursor-pointer">
                            <img src={insta} alt="instagram" loading="lazy" className="w-[clamp(1rem,2vw,3rem)] h-[clamp(1rem,2vw,3rem)]"/>
                        </a>
                    </TooltipTrigger>
                    <TooltipContent className="fill-primary bg-primary text-white" arrowClassName="bg-primary fill-primary">
                        Instagram
                    </TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger asChild>
                        <a href="mailto:mohd.aariz.official@gmail.com" target="_blank" className="cursor-pointer">
                            <img src={mail} alt="mail to Mohammed Aariz" loading="lazy" className="w-[clamp(1rem,2vw,3rem)] h-[clamp(1rem,2vw,3rem)]"/>
                        </a>
                    </TooltipTrigger>
                    <TooltipContent className="fill-primary bg-primary text-white" arrowClassName="bg-primary fill-primary">
                        LinkedIn
                    </TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger asChild>
                        <a href="https://www.linkedin.com/in/mohammedaariz/" target="_blank" className="cursor-pointer">
                            <img src={linkedin} alt="LinkedIn" className="w-[clamp(1rem,2vw,3rem)] h-[clamp(1rem,2vw,3rem)]" loading="lazy"/>
                        </a>
                    </TooltipTrigger>
                    <TooltipContent className="fill-primary bg-primary text-white" arrowClassName="bg-primary fill-primary">
                        Mail
                    </TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger asChild>
                        <a href="https://github.com/mohammedaarizofficial" target="_blank" className="cursor-pointer w-[clamp(1rem,2vw,3rem)] h-[clamp(1rem,2vw,3rem)]">
                            <img src={github} alt="Github" className="w-[clamp(1rem,2vw,3rem)] h-[clamp(1rem,2vw,3rem)]"loading="lazy"/>
                        </a>
                    </TooltipTrigger>
                    <TooltipContent className="fill-primary bg-primary text-white" arrowClassName="bg-primary fill-primary">
                        Github
                    </TooltipContent>
                </Tooltip>
            </div>
        </div>
    )
}

export default Footer;