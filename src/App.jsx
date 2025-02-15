import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Team from './components/Team'
import Verticles from './components/Verticles'
import Upcoming from './components/Upcoming'
import './App.css'
import About from './components/About'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/team' element={<Team />} />
        <Route path='/verticles' element={<Verticles />} />
        <Route path='/aboutus' element={<About/>}/>
        <Route path='/upcoming' element={<Upcoming/>}/> 
      </Routes>
    </>
  )
}

export default App
