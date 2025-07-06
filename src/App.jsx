import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import StarsBackground from "./pages/StarsBackground";
import Header from "./pages/Header";
import HeroSection from "./pages/HeroSection";
import "./pages/HeroSection.css";
import AboutSection from "./pages/AboutSection";
import "./pages/AboutSection.css";
import Projects from './pages/Projects';
import "./pages/Projects.css";
import Contact from "./Contact";
import './Contact.css'; 
 


 import Skills from "./pages/Skills";
 import "./pages/Skills.css";


function App() {
  return (
    <>
   
      <StarsBackground />
      <Header />
      <HeroSection />
      <AboutSection />
            <Skills />
           <Projects />
            <Contact/>

      




      
    </>
  );
}

export default App;
