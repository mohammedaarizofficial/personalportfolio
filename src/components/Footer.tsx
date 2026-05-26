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
        <div className="flex flex-row items-center gap-[100px] py-[10px] lg:px-[37px] lg:py-[10px] shadow-footer justify-center lg:gap-[750px]" id="contact">
            <div className="font-heading text-[15px] lg:text-hero-sub font-medium">CONTACT ME</div>
            <div className="flex justify-center gap-[20px] lg:gap-[61px] lg:p-[10px] items-center ">
                <Tooltip>
                    <TooltipTrigger asChild>
                        <a href="https://www.instagram.com/mohd.aarizzz/?hl=en" target="_blank" className="cursor-pointer">
                            <img src={insta} alt="instagram" loading="lazy" className="w-[19px] h-[19px] lg:w-[30px] lg:h-[30px]"/>
                        </a>
                    </TooltipTrigger>
                    <TooltipContent className="fill-primary bg-primary text-white" arrowClassName="bg-primary fill-primary">
                        Instagram
                    </TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger asChild>
                        <a href="mailto:mohd.aariz.official@gmail.com" target="_blank" className="cursor-pointer">
                            <img src={mail} alt="mail to Mohammed Aariz" loading="lazy" className="w-[19px] h-[19px] lg:w-[30px] lg:h-[30px]"/>
                        </a>
                    </TooltipTrigger>
                    <TooltipContent className="fill-primary bg-primary text-white" arrowClassName="bg-primary fill-primary">
                        LinkedIn
                    </TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger asChild>
                        <a href="https://www.linkedin.com/in/mohammedaariz/" target="_blank" className="cursor-pointer">
                            <img src={linkedin} alt="LinkedIn" className="w-[19px] h-[19px] lg:w-[30px] lg:h-[30px]" loading="lazy"/>
                        </a>
                    </TooltipTrigger>
                    <TooltipContent className="fill-primary bg-primary text-white" arrowClassName="bg-primary fill-primary">
                        Mail
                    </TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger asChild>
                        <a href="https://github.com/mohammedaarizofficial" target="_blank" className="cursor-pointer w-[19px] h-[19px] lg:w-[30px] lg:h-[30px]">
                            <img src={github} alt="Github" className="w-[19px] h-[19px] lg:w-[30px] lg:h-[30px]"loading="lazy"/>
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