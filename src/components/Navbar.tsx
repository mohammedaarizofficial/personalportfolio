import Button from "./Button";
import logo from "../assets/logo.png";
import sidebarToggle from "../assets/three-line-horizontal.png";
import { useSidebar } from "@/context/SidebarContext";



function Navbar(){

    const {setSidebarToggle} = useSidebar();

    return(
        <div className="grid grid-cols-2 p-2 items-center content-center justify-center w-full shadow-navbar
        sm:grid-cols-[auto_1fr_auto] " id="home">
            <div className="flex flex-row justify-self-start items-center cursor-pointer">
                <img src={logo} alt="Logo" className="
                w-[10vw] h-[7.5vw] lg:pl-[5px]"/>
                <div className="text-nav-title font-nav-title text-center font-semibold">AARIZ</div>
            </div>
            <div className="hidden flex-row justify-center gap-[6vw]
            sm:flex ">
                <a href="#home" className="text-[clamp(0.625rem,2vw,1.5rem)] lg:text-nav-item font-heading font-medium cursor-pointer ">home</a>
                <a href="#work" className="text-[clamp(0.625rem,2vw,2.25rem)] lg:text-nav-item font-heading font-medium cursor-pointer ">work</a>
                <a href="#aboutme" className="text-[clamp(0.625rem,2vw,2.25rem)] lg:text-nav-item font-heading font-medium cursor-pointer ">about me</a>
                <a href="#contact" className="text-[clamp(0.625rem,2vw,2.25rem)] lg:text-nav-item font-heading font-medium cursor-pointer ">contact</a>
            </div>
            <div className="justify-self-end pr-2 items-center
            flex gap-2">
                <Button 
                    variant="primary"
                    content="Resume"
                />
                <img src={sidebarToggle} alt="sidebar toggle" className="sm:hidden cursor-pointer" width="20px" height="13px"
                onClick={()=>setSidebarToggle(true)}/>
            </div>
        </div>
    )
}

export default Navbar;