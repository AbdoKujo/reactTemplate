import React, { useState, useEffect } from "react"
import "./Dashboard.css" 
import { Link } from "react-router-dom"

function Dashboard() {
  // State for managing Users
  const [Users, setUsers] = useState([])
  // State for the new User input
  const [newUser, setNewUser] = useState("")

  // Effect to load Users from localStorage on component mount
  useEffect(() => {
    const storedUsers = localStorage.getItem("Users")
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers))
    }
  }, [])

  // Effect to save Users to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("Users", JSON.stringify(Users))
  }, [Users])

  // Function to add a new User
  const addUser = (e) => {
    e.preventDefault()
    if (newUser.trim() !== "") {
      setUsers([...Users, { id: Date.now(), text: newUser, completed: false }])
      setNewUser("")
    }
  }

  // Function to toggle a User's completed status
  const toggleUser = (id) => {
    setUsers(Users.map((User) => (User.id === id ? { ...User, completed: !User.completed } : User)))
  }

  // Function to remove a User
  const removeUser = (id) => {
    setUsers(Users.filter((User) => User.id !== id))
  }

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="User-app">
        <h2>users</h2>
        <form onSubmit={addUser}>
          <input
            type="text"
            value={newUser}
            onChange={(e) => setNewUser(e.target.value)}
            placeholder="Add a new user"
          />
          <button type="submit">Add</button>
        </form>
        <ul>
          {Users.map((User) => (
            <li key={User.id} className={User.completed ? "completed" : ""}>
              <span onClick={() => toggleUser(User.id)}>{User.text}</span>
              <button onClick={() => removeUser(User.id)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Dashboard