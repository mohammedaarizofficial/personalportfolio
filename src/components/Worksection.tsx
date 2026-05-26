
import theDaily from "../assets/Thedaily.webp";
import financeTracker from "../assets/FinanceTracker.png";
import aperture from "../assets/Aperture.webp";
import {lazy, Suspense} from "react";

const Projectcard = lazy(()=>import("./Projectcard"));

function Worksection(){
    return(
        <div className="flex flex-col justify-items-center lg:mt-[80px] mt-[40px]" id="work">
            <div className="font-heading lg:text-nav-title font-medium text-center">WORK</div>
            <div className="grid grid-cols-2 gap-[10px] mt-[25px] lg:flex lg:gap-[50px] justify-center justify-items-center lg:px-[50px] lg:pt-[100px]">
                <Suspense fallback={<div>Loading...</div>}>
                    <Projectcard image={theDaily} title="The Daily." description="Everday NewsApp" link="https://newsapp-three-zeta.vercel.app/"/>
                </Suspense>
                <Suspense fallback={<div>Loading...</div>}>
                    <Projectcard image={financeTracker} title="FinanceTracker" description="Track Money Daily" link="https://financetracker-wine.vercel.app/"/>
                </Suspense>
                <div className="col-span-2 flex justify-center lg:flex-none lg:col-span-1">
                    <Suspense fallback={<div>Loading...</div>}>
                        <Projectcard image={aperture} title="Aperture" description="Real-time Chat App" link="https://chattoday-theta.vercel.app/"/>
                    </Suspense>    
                </div>
            </div>
            <div className="font-heading text-center text-[13px] xs:leading-[25px] px-3 my-5 lg:text-nav-item lg:px-5">
                There are many other projects done by me, But these projects focus mainly on the stack which I work on and built End-to-End by me. Head on to my GitHub profile to find more projects done by 
                <a href="https://github.com/mohammedaarizofficial" target="_blank" className="underline text-blue-600"> me.</a>
            </div>
        </div>
    )
}

export default Worksection;