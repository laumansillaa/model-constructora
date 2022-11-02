import './App.css'
import {Routes, Route} from 'react-router-dom'
import About from './components/about/About'
import Footer from './components/footer/Footer'
import Home from './components/home/home'
import Navv from './components/nav/Nav'
import Service from './components/Service/Service'
import Contact from './components/contact/Contact'

function App() {

  return (
    <div className="App">
      <Navv/>
      <Routes>
        <Route exact path='/' element={<Home/>}/> 
        <Route exact path='/service' element={<Service/>}/>
        <Route exaxt path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
