import React from 'react'
import './App.css'
import Header from './components/header/header.jsx'
import Home from './components/home/home.jsx'
function App() {
  return (
    <>
      <Header/>
      <div className="main">
        <Home/>
      </div>
    </>
  )
}

export default App
