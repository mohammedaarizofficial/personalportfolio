import './App.css'
import closeBtn from "../src/assets/circle-close.png";
import { useSidebar } from './context/SidebarContext';
import {lazy, Suspense} from "react";
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const Worksection = lazy(() => import("./components/Worksection"));
// const Aboutmesection = lazy(()=>import("./components/Aboutmesection"));
// const Footer = lazy(()=>import('./components/Footer'));


function App() {
  
  const { sidebarToggle, setSidebarToggle} = useSidebar();


  return (
    <div className="flex flex-col relative w-full" >
        <Navbar />
        <div className={`
          fixed inset-0
          bg-black/20 backdrop-blur-sm transition-opacity duration-300 z-[5]
          ${sidebarToggle?'opacity-100':'opacity-0 pointer-events-none'}`}/>
        <div className={`grid grid-cols-[auto_1fr] z-10 bg-white w-auto gap-3 fixed top-[0px] right-[0px] p-4 h-dvh
            ${sidebarToggle?'translate-x-0':'translate-x-full'} transition-transform duration-1000 ease-in-out
            md:flex
            lg:flex`}>
              <div className="flex flex-col mt-9 gap-4">
                <a href="#home" className="text-sm-nav-item lg:text-nav-item font-heading font-medium cursor-pointer ">home</a>
                <a href="#work" className="text-sm-nav-item lg:text-nav-item font-heading font-medium cursor-pointer ">work</a>
                <a href="#aboutme" className="text-sm-nav-item lg:text-nav-item font-heading font-medium cursor-pointer ">about me</a>
                <a href="#contact" className="text-sm-nav-item lg:text-nav-item font-heading font-medium cursor-pointer ">contact</a>
              </div> 
              <div className="justify-start content-start">
                <img src={closeBtn} alt="close" width="20px" height="20px" onClick={()=>setSidebarToggle(false)} className="cursor-pointer"/>
              </div>
        </div>
        <Hero />
      <Suspense>
        <Worksection />
      </Suspense>
      {/* <Suspense>
        <Aboutmesection />
      </Suspense>
      <Suspense>
        <Footer />
      </Suspense> */}
    </div>
  )
}

export default App
