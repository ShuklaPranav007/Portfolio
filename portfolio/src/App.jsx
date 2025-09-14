import React from "react";
import "./App.css";
import Header from "./components/header/Header.jsx";
import Home from "./components/home/Home.jsx";
import About from "./components/home/About.jsx";
import Skills from "./components/skills/Skills.jsx";
import Qualification from "./components/Qualification/Qualification.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";
import ScrollUp from "./components/ScrollUp/ScrollUp.jsx";
import Certificate from "./components/certificates/Certificate.jsx";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Projects/>
        <Qualification />
        <Certificate/>
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
