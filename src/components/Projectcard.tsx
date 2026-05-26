import Button from "./Button";

interface ProjectcardProps{
    image:string,
    title:string,
    description:string
    link:string
}

function Projectcard({image,title,description,link}:ProjectcardProps){
    const FinanceTrackerTitle = title==="FinanceTracker"?"text-[11px] lg:text-[25px] font-medium":"text-[12px] lg:text-[32px] font-medium";
    const FinanceTrackerPadding = title==="FinanceTracker"?"lg:px-[10px] lg:pt-[8px]":"lg:px-[9px]";
    return(
        <div className="rounded-[20px] px-[5px] py-[5px] border-2 w-[132px] my-3 lg:w-auto
        lg:px-[15px] lg:py-[13px] lg:mb-[50px] lg:border-[3px] lg:rounded-card flex flex-col shadow-card lg:gap-[21px] lg:border-primary
        lg:hover:scale-105 lg:hover:-translate-y-2 lg:transition lg:duration-300 lg:ease-in-out lg:hover:shadow-hover">
            <img src={image} loading="lazy" className="w-[132px] h-[74.82px] lg:w-[383.5px] lg:h-[216.53px]"/>
            <div className={`grid lg:grid-cols-2 grid-cols-[88px_1fr]  ${FinanceTrackerPadding} w-[132px] lg:w-auto`}>
                <div className="flex flex-col font-heading lg:text-[32px] lg:justify-self-start">
                    <div className={`font-heading ${FinanceTrackerTitle}`}>{title}</div>
                    <div className="font-body text-[10px] font-extralight lg:font-normal lg:text-[20px]">{description}</div>
                </div>
                <div className="self-center justify-self-end pr-[12px] lg:pr-[0px]">
                    <a href={link} target="_blank">
                        <Button 
                            variant="secondary"
                            content="visit"
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Projectcard;