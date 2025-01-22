import React, { useState } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Dashboard from "./components/Dashboard/Dashboard" 
import User from "./components/User/User"

import "./App.css"



function App() {
  // State to manage the current theme
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  // Function to toggle the theme
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme)
  }

  return (
    // Apply the current theme to the app container
    <div className={`App ${isDarkTheme ? "dark-theme" : "light-theme"}`}>
      <Router>
        <Navbar toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/user/:id" element={<User />} />
        </Routes>
      </Router>
    </div>
  )
}

// Simple components for other routes
const Home = () => (
  <div id="home" className="section">
    <h1>Home</h1>
  </div>
)

const About = () => (
  <div id="about" className="section">
    <h1>About Us</h1>
  </div>
)


const Contact = () => (
  <div id="contact" className="section">
    <h1>Contact</h1>
  </div>
)

export default App

