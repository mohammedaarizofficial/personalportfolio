import adnoc from "../assets/Adnocinternship.webp";
import sharjah from "../assets/MHREinternship.png";
import reactBasics from "../assets/reactbasicscert.png";
import intro from "../assets/Introtofrontendcert.png";
import programming from "../assets/programmingwithjscert.png";

function Aboutmesection(){
    return(
        <div className="flex flex-col lg:gap-[10px] items-center mb-[30px] lg:py-[108px] lg:mb-[100px] lg:mt-[100px]" id="aboutme">
            <div className="font-heading lg:text-nav-title">
                ABOUT ME
            </div>
            <div className="grid grid-cols-2 pt-[23px] pr-[3px] lg:px-[43px] lg:py-[10px] relative">
                <div className="lg:relative">
                    <img src={adnoc} alt="Adnoc internship" loading="lazy" className="absolute border w-[58px] h-[75.82px] top-[142px] left-[12px] lg:w-[263.33px] lg:h-[344.24px] lg:top-[240px] lg:left-[70px] logo lg:border-2 lg:border-primary z-10 lg:hover:z-50 lg:hover:scale-180 lg:transition-all lg:duration-300 lg:ease-in-out lg:will-change-transform lg:hover:translate-x-[160px] lg:hover:-translate-y-[100px] cursor-pointer"/>

                    <img src={intro} alt="Introduction to front-end Certificate" width="252" height="196" loading="lazy"
                    className="absolute border w-[47px] h-[37px] top-[88px] left-[6px] lg:w-[252px] lg:h-[196px] lg:top-[55px] lg:left-[96px] lg:border-2 z-0 lg:border-primary lg:hover:z-50 lg:hover:scale-250 lg:hover:translate-x-[140px] lg:hover:translate-y-[200px] lg:transition-all lg:duration-300 lg:ease-in-out lg:will-change-transform cursor-pointer"/>

                    <img src={sharjah} alt="Ministry of Human Resources and Emiratisation internship" loading="lazy"
                    className="absolute border w-[84px] h-[118px] top-[70px] left-[91px] lg:w-[297px] lg:h-[420px] lg:top-[55px] lg:left-[406px] lg:border-2 z-10 lg:border-primary lg:hover:z-50 lg:hover:scale-150 lg:hover:-translate-x-[160px] lg:hover:translate-y-[70px]
                    lg:transition-all lg:duration-300 lg:ease-in lg:will-change-transform cursor-pointer"/>

                    <img src={programming} alt="Programming with JavaScript Certificate" loading="lazy"
                    className="absolute border w-[68px] h-[53px] top-[115px] left-[47px] lg:w-[209px] lg:h-[162px] lg:top-[200px] lg:left-[303px] lg:border-2 lg:border-primary lg:hover:z-50 lg:hover:scale-300 lg:transition-all lg:duration-300 lg:ease-in-out lg:will-change-transform lg:hover:-translate-x-[50px] lg:hover:translate-y-[50px] cursor-pointer"/>

                    <img src={reactBasics} alt="React Basics Certificate" loading="lazy"
                    className="absolute border w-[97px] h-[75px] top-[182px] left-[40px] lg:w-[347px] lg:h-[267px] lg:top-[430px] lg:left-[250px] lg:border-2 z-0 lg:border-primary lg:hover:z-50 lg:hover:scale-180 lg:hover:-translate-x-[50px] lg:hover:-translate-y-[240px] lg:transition-all lg:duration-300 lg:ease-in-out lg:will-change-transform cursor-pointer"/>
                </div>
                <div className="font-heading text-[10px] leading-[14px] lg:text-[24px] font-light lg:font-normal lg:leading-[48px] text-center">I’m a Full-Stack Developer focused on building modern, interactive, and performance-driven digital experiences.<br/><br/>

From real-time chat platforms to finance trackers and news applications, I enjoy creating products that combine clean design with practical functionality.<br/><br/>

My experience includes developing internal software solutions and RESTful APIs during internships at ADNOC and the Ministry of Human Resources and Emiratisation in the UAE.<br/><br/>

Outside development, I’m deeply inspired by Formula 1, fast-paced innovation, and futuristic interface design.</div>
            </div>
        </div>
    )
}

export default Aboutmesection;