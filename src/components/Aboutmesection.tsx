function Aboutmesection(){
    return(
        <div className="flex flex-col gap-[10px] items-center py-[108px] mb-[100px] mt-[50px]">
            <div className="font-heading text-nav-title">
                ABOUT ME
            </div>
            <div className="grid grid-cols-2 px-[43px] py-[10px]">
                <div className="relative">
                    <img src="src/assets/Adnocinternship.png" alt="Adnoc internship" width="263.33" height="344.24" className="absolute top-[240px] left-[70px] logo border z-10"/>
                    <img src="src/assets/Introtofrontendcert.png" alt="Introduction to front-end Certificate" width="252" height="196"
                    className="absolute top-[55px] left-[96px] border z-0"/>
                    <img src="src/assets/MHREinternship.png" alt="Ministry of Human Resources and Emiratisation internship" width="297" height="420"
                    className="absolute top-[55px] left-[406px] border z-10"/>
                    <img src="src/assets/programmingwithjscert.png" alt="Programming with JavaScript Certificate" width="209" height="162"
                    className="absolute top-[200px] left-[303px] border"/>
                    <img src="src/assets/reactbasicscert.png" alt="React Basics Certificate" width="347" height="267"
                    className="absolute top-[430px] left-[250px] border z-0"/>
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