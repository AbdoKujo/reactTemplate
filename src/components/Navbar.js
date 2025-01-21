import React, { useState } from "react"
import "./Navbar.css"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="nav-brand">Boufanzi</div>
      <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
        <span className="hamburger">☰</span>
      </button>
      <div className={`nav-links ${isOpen ? "active" : ""}`}>
        <a href="#home" onClick={() => setIsOpen(false)}>
          Home
        </a>
        <a href="#about" onClick={() => setIsOpen(false)}>
          About Us
        </a>
        <a href="#contact" onClick={() => setIsOpen(false)}>
          Contact
        </a>
      </div>
    </nav>
  )
}

export default Navbar

