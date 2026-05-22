import Button from "./Button";

interface ProjectcardProps{
    image:string,
    title:string,
    description:string
    link:string
}

function Projectcard({image,title,description,link}:ProjectcardProps){
    const FinanceTrackerTitle = title==="FinanceTracker"?"lg:text-[25px] font-medium":"lg:text-[32px] font-medium";
    const FinanceTrackerPadding = title==="FinanceTracker"?"lg:px-[10px] lg:pt-[8px]":"lg:px-[9px]";
    return(
        <div className="lg:px-[15px] lg:py-[13px] lg:mb-[50px] lg:border-[3px] lg:rounded-card flex flex-col shadow-card lg:gap-[21px] lg:border-primary
        lg:hover:scale-105 lg:hover:-translate-y-2 lg:transition lg:duration-300 lg:ease-in-out lg:hover:shadow-hover">
            <img src={image} width="383.35" height="216.53" loading="lazy"/>
            <div className={`grid grid-cols-2 ${FinanceTrackerPadding}`}>
                <div className="flex flex-col font-heading lg:text-[32px] lg:justify-self-start">
                    <div className={`font-heading ${FinanceTrackerTitle}`}>{title}</div>
                    <div className="font-body lg:text-[20px]">{description}</div>
                </div>
                <div className="lg:self-center lg:justify-self-end">
                    <a href={link} target="_blank">
                        <Button 
                            variant="secondary"
                            content="VISIT"
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Projectcard;