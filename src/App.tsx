import './App.css'
import {lazy, Suspense} from "react";
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const Worksection = lazy(() => import("./components/Worksection"));
const Aboutmesection = lazy(()=>import("./components/Aboutmesection"));
const Footer = lazy(()=>import('./components/Footer'));


function App() {
  return (
    <div className="min-h-screen flex flex-col" style={{minWidth:'370px'}}>
        <Navbar />
        <Hero />
      <Suspense>
        <Worksection />
      </Suspense>
      <Suspense>
        <Aboutmesection />
      </Suspense>
      <Suspense>
        <Footer />
      </Suspense>
    </div>
  )
}

export default App
