import Button from "./Button";
import logo from "../assets/logo.png";

function Navbar(){
    return(
        <div className="flex flex-row shadow-navbar pl-6.25 py-[10px] gap-[1px] w-full justify-center" style={{maxHeight:"121px"}} id="home">
            <div className="flex flex-row gap-[30px] justify-center cursor-pointer" style={{width:"345.64px"}}>
                <img src={logo} alt="Logo" width="150px" style={{height:"100px"}} className="pl-[5px]"/>
                <div className="text-nav-title font-nav-title text-center font-semibold" style={{width:"196px", height:"91px"}}>AARIZ</div>
            </div>
            <div className="flex flex-row flex-1 justify-end gap-[53px] items-center py-[10px] pe-[36px]">
                <a href="#home" className="text-nav-item font-heading font-medium cursor-pointer hover:border-b-3 hover:border-primary transition-all duration-75 ease-in-out">home</a>
                <a href="#work" className="text-nav-item font-heading font-medium cursor-pointer hover:border-b-3 hover:border-primary transition-all duration-75 ease-in-out">work</a>
                <a href="#aboutme" className="text-nav-item font-heading font-medium cursor-pointer hover:border-b-3 hover:border-primary transition-all duration-75 ease-in-out">about me</a>
                <a href="#contact" className="text-nav-item font-heading font-medium cursor-pointer hover:border-b-3 hover:border-primary transition-all duration-75 ease-in-out">contact</a>
                <Button 
                    variant="primary"
                    content="Resume"
                />
            </div>
        </div>
    )
}

export default Navbar;