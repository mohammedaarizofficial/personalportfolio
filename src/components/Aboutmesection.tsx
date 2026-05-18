import adnoc from "../assets/Adnocinternship.png";
import sharjah from "../assets/MHREinternship.png";
import reactBasics from "../assets/reactbasicscert.png";
import intro from "../assets/Introtofrontendcert.png";
import programming from "../assets/programmingwithjscert.png";

function Aboutmesection(){
    return(
        <div className="flex flex-col gap-[10px] items-center py-[108px] mb-[100px] mt-[100px]" id="aboutme">
            <div className="font-heading text-nav-title">
                ABOUT ME
            </div>
            <div className="grid grid-cols-2 px-[43px] py-[10px]">
                <div className="relative">
                    <img src={adnoc} alt="Adnoc internship" width="263.33" height="344.24" className="absolute top-[240px] left-[70px] logo border border-primary z-10 hover:z-50 hover:scale-180 transition-all duration-300 ease-in-out will-change-transform hover:translate-x-[160px] hover:-translate-y-[100px] cursor-pointer"/>

                    <img src={intro} alt="Introduction to front-end Certificate" width="252" height="196"
                    className="absolute top-[55px] left-[96px] border z-0 border-primary hover:z-50 hover:scale-250 hover:translate-x-[140px] hover:translate-y-[200px] transition-all duration-300 ease-in-out will-change-transform cursor-pointer"/>

                    <img src={sharjah} alt="Ministry of Human Resources and Emiratisation internship" width="297" height="420"
                    className="absolute top-[55px] left-[406px] border z-10 border-primary hover:z-50 hover:scale-150 hover:-translate-x-[160px] hover:translate-y-[70px]
                    transition-all duration-300 ease-in will-change-transform cursor-pointer"/>

                    <img src={programming} alt="Programming with JavaScript Certificate" width="209" height="162"
                    className="absolute top-[200px] left-[303px] border border-primary hover:z-50 hover:scale-300 transition-all duration-300 ease-in-out will-change-transform hover:-translate-x-[50px] hover:translate-y-[50px] cursor-pointer"/>

                    <img src={reactBasics} alt="React Basics Certificate" width="347" height="267"
                    className="absolute top-[430px] left-[250px] border z-0 border-primary hover:z-50 hover:scale-180 hover:-translate-x-[50px] hover:-translate-y-[240px] transition-all duration-300 ease-in-out will-change-transform cursor-pointer"/>
                </div>
                <div className="font-heading text-[24px] font-regular leading-[48px] text-center">I’m a Full-Stack Developer focused on building modern, interactive, and performance-driven digital experiences.<br/><br/>

From real-time chat platforms to finance trackers and news applications, I enjoy creating products that combine clean design with practical functionality.<br/><br/>

My experience includes developing internal software solutions and RESTful APIs during internships at ADNOC and the Ministry of Human Resources and Emiratisation in the UAE.<br/><br/>

Outside development, I’m deeply inspired by Formula 1, fast-paced innovation, and futuristic interface design.</div>
            </div>
        </div>
    )
}

export default Aboutmesection;