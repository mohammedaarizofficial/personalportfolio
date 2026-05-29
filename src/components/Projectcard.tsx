import Button from "./Button";

interface ProjectcardProps{
    image:string,
    title:string,
    description:string
    link:string
}

function Projectcard({image,title,description,link}:ProjectcardProps){
    const FinanceTrackerTitle = title==="FinanceTracker"?"text-[1.5rem] font-medium":"text-[2rem] font-medium";
    const FinanceTrackerPadding = title==="FinanceTracker"?"lg:px-[10px] lg:pt-[8px]":"lg:px-[9px]";
    return(
        <div className="rounded-[20px] border-2 w-fit my-3  p-[clamp(1.5rem,2vw,4rem)]  gap-2 lg:mb-[50px] sm:border-[3px] sm:rounded-card flex flex-col shadow-card sm:border-primary
        sm:hover:scale-105 sm:hover:-translate-y-2 sm:transition sm:duration-300 sm:ease-in-out sm:hover:shadow-hover">
            <img src={image} loading="lazy" className="md:w-[383.5px] md:h-[216.53px]"/>
            <div className={`grid lg:grid-cols-2 grid-cols-[1fr_auto]  ${FinanceTrackerPadding}`}>
                <div className="flex flex-col font-heading lg:text-[32px] lg:justify-self-start">
                    <div className={`font-heading ${FinanceTrackerTitle}`}>{title}</div>
                    <div className="font-body text-[1.25rem] font-extralight lg:font-normal">{description}</div>
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