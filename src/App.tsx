import './App.css'
import {lazy, Suspense} from "react";
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const Worksection = lazy(() => import("./components/Worksection"));
const Aboutmesection = lazy(()=>import("./components/Aboutmesection"));
const Footer = lazy(()=>import('./components/Footer'));


function App() {
  return (
    <div className="min-h-screen flex flex-col">
        <Navbar />
        <Hero />
      <Suspense fallback={<div>Loading...</div>}>
        <Worksection />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Aboutmesection />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
    </div>
  )
}

export default App
