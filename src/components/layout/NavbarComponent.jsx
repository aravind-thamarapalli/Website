import { useState } from "react";
import { Link } from "react-router-dom";
import "./NavbarComponent.css";
import logo from "../../assets/logo.png";

export default function NavbarComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="custom-navbar">
      {/* Left side - Brand */}
      <div className="navbar-brand" >
        <Link to="/" className="brand-logo-link">
          <img src={logo} alt="AsCI Logo" className="navbar-logo" />
          <span className="brand-text" style={{fontSize:"2rem"}}>AsCI</span>
        </Link>
      </div>

      {/* Toggle button for mobile */}
      <button
        className="navbar-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Right side - Links */}
      <div className={`navbar-links ${isOpen ? "active" : ""}`} style={{marginLeft:"40px"}}>
        <Link to="/aboutus" className="nav-link">About</Link>
        <Link to="/event" className="nav-link">Events</Link>
        <Link to="/team" className="nav-link">Team</Link>
        <Link to="/verticles" className="nav-link">Verticles</Link>
        <Link to="/contact" className="nav-link">Reach Us</Link>
      </div>
    </nav>
  );
}
