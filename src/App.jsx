import './App.css'
import { About } from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Home from './components/Home'
import { MySkill } from './components/MySkill'
import NavBar from './components/NavBar'
import { Portfolio } from './components/Portfolio'

function App() {
  return (

    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <MySkill />
      <Contact />
      <Footer />
    </div>

  )
}

export default App
