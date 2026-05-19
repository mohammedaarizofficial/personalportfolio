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
        <div className="flex flex-row px-[37px] py-[10px] shadow-footer justify-center gap-[750px]" id="contact">
            <div className="font-heading text-hero-sub font-medium">CONTACT ME</div>
            <div className="flex jusitfy-center gap-[61px] p-[10px] items-center">
                <Tooltip>
                    <TooltipTrigger asChild>
                        <a href="https://www.instagram.com/mohd.aarizzz/?hl=en" target="_blank" className="cursor-pointer">
                            <img src={insta} alt="instagram" width="30" height="30" loading="lazy"/>
                        </a>
                    </TooltipTrigger>
                    <TooltipContent className="fill-primary bg-primary text-white" arrowClassName="bg-primary fill-primary">
                        Instagram
                    </TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger asChild>
                        <a href="mailto:mohd.aariz.official@gmail.com" target="_blank" className="cursor-pointer">
                            <img src={mail} alt="mail to Mohammed Aariz" width="30" height="30" loading="lazy"/>
                        </a>
                    </TooltipTrigger>
                    <TooltipContent className="fill-primary bg-primary text-white" arrowClassName="bg-primary fill-primary">
                        LinkedIn
                    </TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger asChild>
                        <a href="https://www.linkedin.com/in/mohammedaariz/" target="_blank" className="cursor-pointer">
                            <img src={linkedin} alt="LinkedIn" width="30" height="30" loading="lazy"/>
                        </a>
                    </TooltipTrigger>
                    <TooltipContent className="fill-primary bg-primary text-white" arrowClassName="bg-primary fill-primary">
                        Mail
                    </TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger asChild>
                        <a href="https://github.com/mohammedaarizofficial" target="_blank" style={{width:'30px', height:"30px"}} className="cursor-pointer">
                            <img src={github} alt="Github" width="30" height="30" loading="lazy"/>
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