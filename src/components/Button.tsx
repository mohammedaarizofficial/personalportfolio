interface ButtonProps{
    variant:string
    content:string
}

function Button({variant,content}:ButtonProps){
    const variantType = (variant==="primary")?"text-gray-950 border-[5px] border-gray-950 hover:text-white hover:bg-gray-950 cursor-pointer transition-all duration-200 ease-in hover:scale-105":" text-white bg-gray-950 "
    if(content==="VISIT"){
        return(
            <div className={`flex rounded-[54px] ${variantType} justify-content-center items-center gap-1 p-[10px] cursor-pointer`}>
                <div className={`text-[15px] font-medium`}>
                    {content}
                </div>
                <img src="src/assets/square-arrow-out-up-right.png" alt="link" className="invert" style={{width:"12px", height:"12px"}} />
            </div>
        )
    }else{
        return(
            <a href="public/MohammedAarizResume.pdf" download className={`text-[24px] font-medium px-[30px] rounded-[54px] cursor-pointer ${variantType}`}>{content}</a>
        )
    }
}

export default Button;