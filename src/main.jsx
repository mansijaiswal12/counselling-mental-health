import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './components/Navbar.jsx'
import ContactForm from './components/ContactForm.jsx'
import Submit from './components/Submit.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    
    {/* <Submit/> */}
  </React.StrictMode>,
)
