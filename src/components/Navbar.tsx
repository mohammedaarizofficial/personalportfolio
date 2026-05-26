import Button from "./Button";
import logo from "../assets/logo.png";

function Navbar(){
    return(
        <div className="flex flex-row shadow-navbar lg:pl-6.25 lg:py-[10px] lg:gap-[1px] w-full justify-center lg:h-[121px] h-[50px]" id="home">
            <div className="flex flex-row lg:gap-[30px] gap-[3px] justify-self-start items-center cursor-pointer lg:w-[345.64px] pl-[5px]">
                <img src={logo} alt="Logo" className="
                w-[30.03px] h-[25.61px]
                lg:w-[150px] lg:h-[100px] lg:pl-[5px]"/>
                <div className="lg:text-nav-title font-nav-title text-center font-semibold text-[16px]
                lg:w-[196px] lg:h-[91px] w-[45px] h-[21px]">AARIZ</div>
            </div>
            <div className="flex flex-row flex-1 justify-end gap-[6px] py-[10px] pr-[17px] lg:gap-[53px] items-center lg:py-[10px] lg:pe-[36px]">
                <a href="#home" className="text-sm-nav-item lg:text-nav-item font-heading font-medium cursor-pointer lg:hover:border-b-3 hover:border-primary lg:transition-all lg:duration-75 lg:ease-in-out">home</a>
                <a href="#work" className="text-sm-nav-item lg:text-nav-item font-heading font-medium cursor-pointer lg:hover:border-b-3 lg:hover:border-primary lg:transition-all lg:duration-75 lg:ease-in-out">work</a>
                <a href="#aboutme" className="text-sm-nav-item lg:text-nav-item font-heading font-medium cursor-pointer lg:hover:border-b-3 lg:hover:border-primary lg:transition-all lg:duration-75 lg:ease-in-out">about me</a>
                <a href="#contact" className="text-sm-nav-item lg:text-nav-item font-heading font-medium cursor-pointer lg:hover:border-b-3 lg:hover:border-primary lg:transition-all lg:duration-75 lg:ease-in-out">contact</a>
                <Button 
                    variant="primary"
                    content="Resume"
                />
            </div>
        </div>
    )
}

export default Navbar;