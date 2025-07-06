import React from "react";
import { Typewriter } from 'react-simple-typewriter';
import "../App.css";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-section d-flex justify-content-center align-items-center">
      <div className="hero-card text-center text-light">
        <h1 className="typewriter-text">
          <Typewriter
            words={[
              "Hi, I'm Amel Yagoub",
              "I’m a Web Developer",
              "I create beautiful websites",
              "Let's build something great"
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1200}
          />
        </h1>
        <p className="hero-subtitle mt-4">
          Turning ideas into elegant, interactive web experiences using <strong>React</strong>, <strong>Bootstrap</strong> and passion.
        </p>
        <a href="#contact" className="neon-button mt-4">Let’s Work Together</a>
      </div>
    </div>
  );
};

export default HeroSection;
