import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {

  return (
    <div className="min-h-screen min-w-screen flex flex-col static">
      <Navbar />
      <Hero />
      {/* <div className="rounded-full bg-black absolute left-[1023px] top-[370px]" style={{width:'614px', height:'608px'}}></div>
      <div className="exlude rounded-full bg-white absolute left-[1045px] top-[391px]" style={{width:'569px', height:'566px'}}></div> */}
      <img src="src/assets/profileedited.png" alt="profile photo" className="absolute left-[1083px] top-[362px]" style={{width:"429.22px", height:"600px"}} />
    </div>
  )
}

export default App
