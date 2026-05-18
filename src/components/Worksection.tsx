import Projectcard from "./Projectcard";
import theDaily from "../assets/Thedaily.png";
import financeTracker from "../assets/FinanceTracker.png";
import aperture from "../assets/Aperture.png";

function Worksection(){
    return(
        <div className="flex flex-col justify-items-center mt-[350px]">
            <div className="font-heading text-nav-title font-medium text-center">WORK</div>
            <div className="flex gap-[50px] justify-center px-[50px] pt-[100px]">
                <Projectcard image={theDaily} title="The Daily." description="Everday NewsApp" link="https://newsapp-three-zeta.vercel.app/"/>
                <Projectcard image={financeTracker} title="FinanceTracker" description="Track Money Daily" link="https://financetracker-wine.vercel.app/"/>
                <Projectcard image={aperture} title="Aperture" description="Real-time Chat App" link="https://chattoday-theta.vercel.app/"/>
            </div>
        </div>
    )
}

export default Worksection;