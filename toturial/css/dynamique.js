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
        
      </div>
    )
  }