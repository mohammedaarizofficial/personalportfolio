
import theDaily from "../assets/Thedaily.webp";
import financeTracker from "../assets/FinanceTracker.png";
import aperture from "../assets/Aperture.webp";
import {lazy, Suspense} from "react";

const Projectcard = lazy(()=>import("./Projectcard"));

function Worksection(){
    return(
        <div className="flex flex-col justify-items-center mt-[350px]" id="work">
            <div className="font-heading text-nav-title font-medium text-center">WORK</div>
            <div className="flex gap-[50px] justify-center px-[50px] pt-[100px]">
                <Suspense fallback={<div>Loading...</div>}>
                    <Projectcard image={theDaily} title="The Daily." description="Everday NewsApp" link="https://newsapp-three-zeta.vercel.app/"/>
                </Suspense>
                <Suspense fallback={<div>Loading...</div>}>
                    <Projectcard image={financeTracker} title="FinanceTracker" description="Track Money Daily" link="https://financetracker-wine.vercel.app/"/>
                </Suspense>
                <Suspense fallback={<div>Loading...</div>}>
                    <Projectcard image={aperture} title="Aperture" description="Real-time Chat App" link="https://chattoday-theta.vercel.app/"/>
                </Suspense>    
            </div>
            <div className="font-heading text-center text-nav-item px-5">
                There are many other projects done by me, But these projects focus mainly on the stack which I work on and built End-to-End by me. Head on to my GitHub profile to find more projects done by 
                <a href="https://github.com/mohammedaarizofficial" target="_blank" className="underline text-blue-600"> me.</a>
            </div>
        </div>
    )
}

export default Worksection;