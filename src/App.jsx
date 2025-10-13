import { Routes, Route } from 'react-router-dom'
import { Home, About, Team, Event, EventDetails, Verticle, Verticles, Contact, Upcoming } from './components/pages'
import { StaggeredMenu } from './components/layout'
import logo from './assets/logo.png'
import './App.css'

function App() {
  const menuItems = [
    { label: 'Home', link: '/', ariaLabel: 'Navigate to Home' },
    { label: 'About', link: '/aboutus', ariaLabel: 'Navigate to About Us' },
    { label: 'Events', link: '/event', ariaLabel: 'Navigate to Events' },
    { label: 'Team', link: '/team', ariaLabel: 'Navigate to Team' },
    { label: 'Verticles', link: '/verticles', ariaLabel: 'Navigate to Verticles' },
    { label: 'Contact', link: '/contact', ariaLabel: 'Navigate to Contact' },
    { label: 'piCSEl', link: '#', ariaLabel: 'Navigate to Upcoming Events' }
  ];

  const socialLinks = [
    { label: 'Instagram', link: 'https://www.instagram.com/asci.gvpce/' },
    { label: 'LinkedIn', link: 'https://www.linkedin.com/company/asci-gvpce/' },
    { label: 'GitHub', link: 'https://github.com/aravind-thamarapalli' }
  ];

  return (
    <>
      <StaggeredMenu
        position="right"
        colors={['#002032', '#003550', '#004668']}
        items={menuItems}
        socialItems={socialLinks}
        displaySocials={true}
        displayItemNumbering={true}
        logoUrl={logo}
        menuButtonColor="#000"
        openMenuButtonColor="#000"
        accentColor="#64b8e6"
        changeMenuColorOnOpen={false}
        isFixed={true}
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
