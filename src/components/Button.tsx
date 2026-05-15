interface ButtonProps{
    variant:string
    content:string
}

function Button({variant,content}:ButtonProps){
    const variantType = (variant==="primary")?"text-gray-950 border-[5px] border-gray-950 hover:text-white hover:bg-gray-950 cursor-pointer":" text-white bg-gray-950 hover:border-[5px] hover:text-gray-950 hover:border-gray-950 hover:bg-gray-50"
    return(
        <div className={`text-[24px] font-medium px-[30px] rounded-[54px] ${variantType}`}>{content}</div>
    )
}

export default Button;