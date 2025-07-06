// src/components/Header.jsx
import React, { useState } from "react";
import "./Header.css"; // سنتحدث عن هذا الملف لاحقًا

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="glass-header">
      <div className="logo-container">
        <span className="logo-icon">★</span>
        <div className="logo-brand">
          <span className="logo-part1">AM</span>
          <span className="logo-part2">EL Dev</span>
        </div>
      </div>

      <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
        <a href="#home" className="nav-link" onClick={closeMenu}>Home</a>
        <a href="#about" className="nav-link" onClick={closeMenu}>About</a>
        <a href="#projects" className="nav-link" onClick={closeMenu}>Projects</a>
        <a href="#skills" className="nav-link" onClick={closeMenu}>Skills</a>
        <a href="#contact" className="nav-link" onClick={closeMenu}>Contact</a>
      </nav>

      <div className="hamburger" onClick={toggleMenu}>☰</div>
    </header>
  );
};

export default Header;
