import React from 'react'
import './App.css'
import Header from './components/header/header.jsx'
import Home from './components/home/home.jsx'
import About from './components/home/about.jsx'
import Skills from './components/skills/skills.jsx'

function App() {
  return (
    <>
      <Header/>
      <div className="main">
        <Home/>
        <About/>
        <Skills/>
      </div>
    </>
  )
}

export default App
