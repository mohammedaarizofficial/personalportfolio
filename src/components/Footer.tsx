function Footer(){
    return(
        <div className="flex flex-row px-[37px] py-[10px] shadow-footer justify-center gap-[750px]">
            <div className="font-heading text-hero-sub font-medium">CONTACT ME</div>
            <div className="flex jusitfy-center gap-[61px] p-[10px] items-center">
                <a href="https://www.instagram.com/mohd.aarizzz/?hl=en" target="_blank" className="cursor-pointer">
                    <img src="src/assets/instagram-fill.png" alt="instagram" width="30" height="30"/>
                </a>
                <a href="mailto:mohd.aariz.official@gmail.com" target="_blank" className="cursor-pointer">
                    <img src="src/assets/mail.png" alt="mail to Mohammed Aariz" width="30" height="30" />
                </a>
                <a href="https://www.linkedin.com/in/mohammedaariz/" target="_blank" className="cursor-pointer">
                    <img src="src/assets/linkedin-fill.png" alt="LinkedIn" width="30" height="30" />
                </a>
                <a href="https://github.com/mohammedaarizofficial" target="_blank" style={{width:'30px', height:"30px"}} className="cursor-pointer">
                    <img src="src/assets/github.png" alt="Github" width="30" height="30" />
                </a>
            </div>
        </div>
    )
}

export default Footer;