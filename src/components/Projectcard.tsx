import Button from "./Button";

interface ProjectcardProps{
    image:string,
    title:string,
    description:string
    link:string
}

function Projectcard({image,title,description,link}:ProjectcardProps){
    const FinanceTrackerTitle = title==="FinanceTracker"?"text-[25px] font-medium":"text-[32px] font-medium";
    const FinanceTrackerPadding = title==="FinanceTracker"?"px-[10px] pt-[8px]":"px-[9px]";
    return(
        <div className="px-[15px] py-[13px] mb-[50px] border-[3px] rounded-card flex flex-col shadow-card gap-[21px] border-primary
        hover:scale-105 hover:-translate-y-2 transition duration-300 ease-in-out hover:shadow-hover">
            <img src={image} width="383.35" height="216.53"/>
            <div className={`grid grid-cols-2 ${FinanceTrackerPadding}`}>
                <div className="flex flex-col font-heading text-[32px] justify-self-start">
                    <div className={`font-heading ${FinanceTrackerTitle}`}>{title}</div>
                    <div className="font-body text-[20px]">{description}</div>
                </div>
                <div className="self-center justify-self-end">
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