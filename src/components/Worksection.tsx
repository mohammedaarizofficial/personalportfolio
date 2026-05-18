import Projectcard from "./Projectcard";

function Worksection(){
    return(
        <div className="flex flex-col justify-items-center mt-[350px]">
            <div className="font-heading text-nav-title font-medium text-center">WORK</div>
            <div className="flex gap-[50px] justify-center px-[50px] pt-[100px]">
                <Projectcard image="src/assets/Thedaily.png" title="The Daily." description="Everday NewsApp"/>
                <Projectcard image="src/assets/FinanceTracker.png" title="FinanceTracker" description="Track Money Daily" />
                <Projectcard image="src/assets/Aperture.png" title="Aperture" description="Real-time Chat App"/>
            </div>
        </div>
    )
}

export default Worksection;