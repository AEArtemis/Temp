// index.js
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "./index.css"

// theme
const savedTheme = localStorage.getItem("theme")
if (savedTheme === "dark") {
  document.documentElement.classList.add("dark")
} else {
  document.documentElement.classList.remove("dark")
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
