import './App.css'
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Hero from './sections/hero/hero'
import NavBar from './sections/navbar/navbar'
import About from './sections/about/about'

function App() {

  return (
    <>
      <NavBar />
      <Hero />
      <About />
    </>
  )
}

export default App
