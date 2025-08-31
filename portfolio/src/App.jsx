import React from 'react'
import './App.css'
import Header from './components/header/header.jsx'
import Home from './components/home/home.jsx'
import About from './components/home/about.jsx'
import Skills from './components/skills/skills.jsx'
import Services from './components/services/services.jsx'
import Qualification from './components/Qualification/qualification.jsx'
import Test from './components/testimonial/test.jsx'
import Contact from './components/Contact/contact.jsx'
import Footer from './components/Footer/footer.jsx'

function App() {
  return (
    <>
      <Header/>
      <div className="main">
        <Home/>
        <About/>
        <Skills/>
        <Services/>
        <Qualification/>
        <Test/>
        <Contact/>
        <Footer/>
      </div>
    </>
  )
}

export default App
