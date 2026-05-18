import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Worksection from './components/Worksection'
import Aboutmesection from './components/Aboutmesection'
import Footer from './components/Footer'

function App() {

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Worksection />
      <Aboutmesection />
      <Footer />
    </div>
  )
}

export default App
