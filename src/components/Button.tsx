import link from "../assets/square-arrow-out-up-right.png";
import resume from "../../public/MohammedAarizResumeCommon.pdf";

interface ButtonProps{
    variant:string
    content:string
}

function Button({variant,content}:ButtonProps){
    const variantType = (variant==="primary")?"text-black border-[2px] md:border-[3px] lg:border-[5px] border-black hover:text-white hover:bg-black cursor-pointer transition-all duration-200 ease-in hover:scale-105":" text-white bg-black "
    if(content==="visit"){
        return(
            <div className={`flex rounded-[54px] ${variantType} justify-content-center justify-center items-center lg:gap-1 lg:p-[10px] cursor-pointer px-3`}>
                <div className={`text-[1.25rem] font-light lg:font-medium `}>
                    {content}
                </div>
                <img src={link} alt="link" className="invert w-[12px] h-[12px] hidden lg:inline" />
            </div>
        )
    }else{
        return(
            <a href={resume} download className={`flex justify-center px-[2.5vw] rounded-[54px] cursor-pointer ${variantType} text-center items-center`}>
                <div className="text-[clamp(0.500rem,2vw,1.5rem)] font-medium">{content}</div></a>
        )
    }
}

export default Button;