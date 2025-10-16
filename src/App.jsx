import { Routes, Route } from 'react-router-dom'
import { Home, About, Team, Event, EventDetails, Verticle, Verticles, Contact, Upcoming } from './components/pages'
import { PillNav } from './components/layout'
import logo from './assets/logo.png'
import './App.css'
import { useLocation } from 'react-router-dom'

function App() {
  const location = useLocation();

  const menuItems = [
    { label: 'Home', href: '/', ariaLabel: 'Navigate to Home' },
    { label: 'About', href: '/aboutus', ariaLabel: 'Navigate to About Us' },
    { label: 'Events', href: '/event', ariaLabel: 'Navigate to Events' },
    { label: 'Team', href: '/team', ariaLabel: 'Navigate to Team' },
    { label: 'Verticles', href: '/verticles', ariaLabel: 'Navigate to Verticles' },
    { label: 'Contact', href: '/contact', ariaLabel: 'Navigate to Contact' }
  ];

  return (
    <>
      <PillNav
        logo={logo}
        logoAlt="AsCI Logo"
        items={menuItems}
        activeHref={location.pathname}
        className="custom-nav"
        ease="power2.easeOut"
        baseColor="rgba(0, 32, 50, 0.5)"
        pillColor="#ffffff"
        hoveredPillTextColor="#ffffff"
        pillTextColor="#002032"
        initialLoadAnimation={true}
      />
      {/* <PillNav
        logo={logo}
        logoAlt="Company Logo"
        items={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
          { label: 'Services', href: '/services' },
          { label: 'Contact', href: '/contact' }
        ]}
        activeHref="/"
        className="custom-nav"
        ease="power2.easeOut"
        baseColor="#000000"
        pillColor="#ffffff"
        hoveredPillTextColor="#ffffff"
        pillTextColor="#000000"
      /> */}
      <Routes>
        <Route path='/' element={<div><Home />
      <About />
      <Event />
      <Team />
      <Verticles />
      <Contact/></div> } />
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
