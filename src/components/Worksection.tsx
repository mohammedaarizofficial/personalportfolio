import Projectcard from "./Projectcard";

function Worksection(){
    return(
        <div className="flex flex-col justify-items-center mt-[350px]">
            <div className="font-heading text-nav-title font-medium text-center">WORK</div>
            <div className="flex gap-[50px] justify-center px-[50px] pt-[100px]">
                <Projectcard image="src/assets/Thedaily.png" title="The Daily." description="Everday NewsApp" link="https://newsapp-three-zeta.vercel.app/"/>
                <Projectcard image="src/assets/FinanceTracker.png" title="FinanceTracker" description="Track Money Daily" link="https://financetracker-wine.vercel.app/"/>
                <Projectcard image="src/assets/Aperture.png" title="Aperture" description="Real-time Chat App" link="https://chattoday-theta.vercel.app/"/>
            </div>
        </div>
    )
}

export default Worksection;