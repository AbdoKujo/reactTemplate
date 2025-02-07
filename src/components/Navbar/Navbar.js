import React, { useState } from "react"
import { Link } from "react-router-dom" // Import Link for routing
import "./Navbar.css"

// Define the props type for the Navbar component
function Navbar({ toggleTheme }) {
  // State to manage the mobile menu open/close
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="nav-brand">Navbar</div>
      {/* Toggle button for mobile menu */}
      <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
        <span className="hamburger">☰</span>
      </button>
      {/* Navigation links */}
      <div className={`nav-links ${isOpen ? "active" : ""}`}>
        {/* Use Link component for client-side routing */}
        <Link to="/Home" onClick={() => setIsOpen(false)}>
          Home
        </Link>
        <Link to="/about" onClick={() => setIsOpen(false)}>
          About Us
        </Link>
        <Link to="/contact" onClick={() => setIsOpen(false)}>
          Contact
        </Link>
        <Link to="/dashboard" onClick={() => setIsOpen(false)}>
          Dashboard
        </Link>
        {/* Theme toggle button */}
        <button onClick={toggleTheme} className="theme-toggle">
          Toggle Theme
        </button>
      </div>
    </nav>
  )
}

export default Navbar