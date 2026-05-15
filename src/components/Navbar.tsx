import Button from "./Button";

function Navbar(){
    return(
        <div className="flex flex-row shadow-navbar pl-6.25 py-[10px] gap-[1px] w-full justify-center" style={{maxHeight:"121px"}}>
            <div className="flex flex-row gap-[30px] justify-center cursor-pointer" style={{width:"345.64px"}}>
                <img src="src/assets/logo.png" alt="Logo" width="71px" style={{height:"119.64px"}} className="logo pl-[5px]"/>
                <div className="text-nav-title font-nav-title text-center font-semibold" style={{width:"196px", height:"91px"}}>AARIZ</div>
            </div>
            <div className="flex flex-row flex-1 justify-end gap-[53px] items-center py-[10px] pe-[36px]">
                <div className="text-nav-item font-heading font-medium cursor-pointer">home</div>
                <div className="text-nav-item font-heading font-medium cursor-pointer">work</div>
                <div className="text-nav-item font-heading font-medium cursor-pointer">about me</div>
                <div className="text-nav-item font-heading font-medium cursor-pointer">contact</div>
                <Button 
                    variant="primary"
                    content="Resume"
                />
            </div>
        </div>
    )
}

export default Navbar;