import theDaily from "../assets/Thedaily.webp";
import financeTracker from "../assets/FinanceTracker.png";
import aperture from "../assets/Aperture.webp";
import {lazy, Suspense} from "react";
import { useEffect } from "react";
import { initFlowbite } from "flowbite";

const Projectcard = lazy(()=>import("./Projectcard"));

function Worksection(){

    useEffect(() => {
        initFlowbite();
    }, []);

    return(
        <div className="flex flex-col justify-items-center text-[clamp(1.5rem,2vw,4rem)] mt-9" id="work">
            <div className="font-heading text-[clamp(1.25rem,4.5vw,10rem)] font-medium text-center">WORK</div>
            <div className="hidden sm:flex justify-evenly justify-items-center flex-wrap lg:pt-[100px] mx-7 sm:mx-9 md:gap-8">
                <Suspense fallback={<div>Loading...</div>}>
                    <Projectcard image={theDaily} title="The Daily." description="Everday NewsApp" link="https://newsapp-three-zeta.vercel.app/"/>
                </Suspense>
                <Suspense fallback={<div>Loading...</div>}>
                    <Projectcard image={financeTracker} title="FinanceTracker" description="Track Money Daily" link="https://financetracker-wine.vercel.app/"/>
                </Suspense>
                <div className="flex justify-center lg:flex-none">
                    <Suspense fallback={<div>Loading...</div>}>
                        <Projectcard image={aperture} title="Aperture" description="Real-time Chat App" link="https://chattoday-theta.vercel.app/"/>
                    </Suspense>    
                </div>
            </div>


            <div id="default-carousel" className="relative w-full sm:hidden px-5 mt-2" data-carousel="slide">

                <div className="relative aspect-video overflow-hidden rounded-lg shadow-card px-3">
                    {/* <!-- Item 1 --> */}
                    <div className="duration-700 ease-in-out" data-carousel-item="active">
                        <img src={theDaily} className="absolute inset-0 w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>
                    {/* <!-- Item 2 --> */}
                    <div className="duration-700 ease-in-out" data-carousel-item>
                        <img src={financeTracker} className="absolute inset-0 w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>
                    {/* <!-- Item 3 --> */}
                    <div className="duration-700 ease-in-out" data-carousel-item>
                        <img src={aperture} className="absolute inset-0 w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>
                </div>
                {/* <!-- Slider indicators --> */}
                <div className="absolute z-30 flex -translate-x-1/2 bottom-4 left-1/2 space-x-3 rtl:space-x-reverse">
                    <button type="button" className="w-3 h-3 rounded-base" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                    <button type="button" className="w-3 h-3 rounded-base" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                    <button type="button" className="w-3 h-3 rounded-base" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                </div>
                {/* <!-- Slider controls --> */}
                <button type="button" className="absolute top-0 inset-s-0 z-30 flex items-center justify-center h-full px-6 cursor-pointer group focus:outline-none" data-carousel-prev>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-base bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-5 h-5 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 19-7-7 7-7"/></svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-6 cursor-pointer group focus:outline-none" data-carousel-next>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-base bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-5 h-5 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7"/></svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>

            <div className="font-heading text-center text-[clamp(0.625rem,3vw,6rem)] xs:leading-[25px] my-5 lg:text-nav-item lg:px-7">
                There are many other projects done by me, But these projects focus mainly on the stack which I work on and built End-to-End by me. Head on to my GitHub profile to find more projects done by 
                <a href="https://github.com/mohammedaarizofficial" target="_blank" className="underline text-blue-600"> me.</a>
            </div>
        </div>
    )
}

export default Worksection;