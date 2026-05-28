import Button from "./Button";
import logo from "../assets/logo.png";
import sidebarToggle from "../assets/three-line-horizontal.png";

interface NavbarProps{
    setSidebarToggle:React.Dispatch<React.SetStateAction<boolean>>;
}

function Navbar({setSidebarToggle}:NavbarProps){
    return(
        <div className="grid grid-cols-2 p-3 items-center content-center justify-center w-full shadow-navbar
        md:grid-cols-[auto_1fr_auto] md:gap-9" id="home">
            <div className="flex flex-row justify-self-start items-center cursor-pointer lg:w-[345.64px]">
                <img src={logo} alt="Logo" className="
                w-[30.03px] h-[25.61px]
                lg:w-[150px] lg:h-[100px] lg:pl-[5px]"/>
                <div className="lg:text-nav-title font-nav-title text-center font-semibold text-[16px]
                lg:w-[196px] lg:h-[91px] w-[45px] h-[21px]">AARIZ</div>
            </div>
            <div className="hidden flex-row justify-evenly gap-2
            md:flex
            mg:flex">
                <a href="#home" className="text-sm-nav-item lg:text-nav-item font-heading font-medium cursor-pointer ">home</a>
                <a href="#work" className="text-sm-nav-item lg:text-nav-item font-heading font-medium cursor-pointer ">work</a>
                <a href="#aboutme" className="text-sm-nav-item lg:text-nav-item font-heading font-medium cursor-pointer ">about me</a>
                <a href="#contact" className="text-sm-nav-item lg:text-nav-item font-heading font-medium cursor-pointer ">contact</a>
            </div>
            <div className="justify-self-end pr-2
            flex gap-2">
                <Button 
                    variant="primary"
                    content="Resume"
                />
                <img src={sidebarToggle} alt="sidebar toggle" className="md:hidden cursor-pointer" width="13px" height="13px"
                onClick={()=>setSidebarToggle(true)}/>
            </div>
        </div>
    )
}

export default Navbar;