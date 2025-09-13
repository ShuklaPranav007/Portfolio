import React from "react";
import "./App.css";
import Header from "./components/header/header.jsx";
import Home from "./components/home/home.jsx";
import About from "./components/home/about.jsx";
import Skills from "./components/skills/skills.jsx";
// import Services from "./components/services/services.jsx";
import Qualification from "./components/Qualification/Qualification.jsx";
// import Test from "./components/testimonial/test.jsx";
import Projects from "./components/Projects/projects.jsx";
import Contact from "./components/Contact/contact.jsx";
import Footer from "./components/Footer/Footer.jsx";
import ScrollUp from "./components/ScrollUp/ScrollUp.jsx";
import Certificate from "./components/certificates/certificate.jsx";

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
