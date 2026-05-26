import link from "../assets/square-arrow-out-up-right.png";
import resume from "../../public/MohammedAarizResumeCommon.pdf";

interface ButtonProps{
    variant:string
    content:string
}

function Button({variant,content}:ButtonProps){
    const variantType = (variant==="primary")?"text-black border-[2px] lg:border-[5px] border-black hover:text-white hover:bg-black cursor-pointer transition-all duration-200 ease-in hover:scale-105":" text-white bg-black "
    if(content==="visit"){
        return(
            <div className={`flex rounded-[54px] ${variantType} justify-content-center justify-center items-center lg:gap-1 lg:p-[10px] cursor-pointer w-[34px] h-[12px] lg:w-[70.88px] lg:h-[42.5px]`}>
                <div className={`text-[10px] font-light lg:text-[17px] lg:font-medium `}>
                    {content}
                </div>
                <img src={link} alt="link" className="invert w-[12px] h-[12px] hidden lg:inline" />
            </div>
        )
    }else{
        return(
            <a href={resume} download className={`flex justify-center text-[10px] lg:text-[24px] font-medium lg:px-[30px] rounded-[54px] cursor-pointer ${variantType} w-[58px] h-[15px] text-center items-center lg:w-[185px] lg:h-[49px]`}>{content}</a>
        )
    }
}

export default Button;