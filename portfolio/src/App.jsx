import React from 'react'
import './App.css'
import Header from './components/header/header.jsx'
import Home from './components/home/home.jsx'
import About from './components/home/about.jsx'
function App() {
  return (
    <>
      <Header/>
      <div className="main">
        <Home/>
        <About/>
      </div>
    </>
  )
}

export default App
