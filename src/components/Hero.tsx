function Hero(){
    return(
        <div className="flex flex-col relative pt-[150px] pl-[87px]">
            <div className="text-hero-banner font-heading font-medium">Myself,<br/>
                Mohammed Aariz
            </div>
            <div className="text-hero-sub font-heading font-medium">Full-stack developer, F1 enthusiast<br/>And Human. Not AI. Human.</div>
            <img src="src/assets/profileedited.png" alt="profile photo" className="absolute left-[1083px] top-[241px] w-[429.22px] h-[600px] hover:w-[566.22px] hover:h-[782px] hover:left-[946px] hover:top-[90px] transition-all will-change-transform duration-1000 ease-in-out" />
        </div>
    )
}

export default Hero;