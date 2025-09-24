import Navbar from './Components/Navbar'
import './App.css'
import HeroSlider from './Components/HeroSlider'
import CompanySlider from './Components/CompanySlider'

function App() {

  return (
    <>
      <Navbar/>
      <HeroSlider/>
      <h1 style={{display:'flex', justifyContent:'center', fontSize:"4rem", color:"white"}}>Our Services</h1>
      {/* <CompanySlider/> */}
    </>
  )
}

export default App
