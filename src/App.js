import React, { useState } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Dashboard from "./components/Dashboard/Dashboard" 
import User from "./components/User/User"
import "./App.css"
import Home from "./components/Home/home"
import ArticlePage from "./components/Article/ArticlePage"



function App() {
  const [articles] = useState([
    { title: "Article 1", description: "Description of Article 1" },
    { title: "Article 2", description: "Description of Article 2" },
    { title: "Article 3", description: "Description of Article 3" },
  ]);
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
          <Route path="/Home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="/" exact component={Home} />
          <Route
            path="/articles/:id"
            element={<ArticlePage articles={articles} />}          />
        </Routes>
      </Router>
    </div>
  )
}

// Simple components for other routes


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

