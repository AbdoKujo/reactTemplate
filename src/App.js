import React from "react"
import Navbar from "./components/Navbar"
import "./App.css"

function App() {
  return (
    <div className="App">
      <Navbar />
      <div id="home" className="section">
        <h1>Home </h1>
      </div>
      <div id="about" className="section">
        <h1>About Us </h1>
      </div>
      <div id="contact" className="section">
        <h1>Contact </h1>
      </div>
    </div>
  )
}

export default App

