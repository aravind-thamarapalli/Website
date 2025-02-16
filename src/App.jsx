import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Team from './components/Team'
import Event from './components/Event'
import Verticles from './components/Verticles'
import Verticle from './components/Verticle'
import Upcoming from './components/Upcoming'
import Contact from './components/Contact'
import './App.css'
import About from './components/About'
import EventDetails from './components/EventDetails'

function App() {

  return (
    <>
      <Home />
      <About />
      <Event />
      <Team />
      <Verticles />
      <Contact/>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/team' element={<Team />} />
        <Route path='/verticles' element={<Verticles />} />
        <Route path='/aboutus' element={<About/>}/>
        <Route path='/event' element={<Event />} />
        <Route path='/upcoming' element={<Upcoming/>}/> 
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/verticle' element={<Verticle />} />
        <Route path='/eventdetails' element={<EventDetails />} />
      </Routes>
    </>
  )
}

export default App
