import './App.css'
import About from './components/about/About'
import Footer from './components/footer/Footer'
import Home from './components/home/home'
import Nav from './components/nav/Nav'

function App() {

  return (
    <div className="App">
      <Nav/>
      <Home/>
      <About/>
      <Footer/>
    </div>
  )
}

export default App
