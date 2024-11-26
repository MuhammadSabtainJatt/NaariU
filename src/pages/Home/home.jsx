import React, { useState, useEffect } from "react";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../Asset/images/NaariU Logo.png";
import "./home.css";
import Hero from './hero'
import Cards from './cards'
import ThirdComponent from './thirdComponent'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.style.backgroundColor = darkMode ? "#ffffff" : "#121212";
    document.body.style.color = darkMode ? "#000000" : "#ffffff";
  };

  return (
   <>
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      {/* Desktop Navigation */}
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">Home</li>
          <li className="nav-item">About</li>
          <li className="nav-item">Services</li>
          <li className="nav-item">Portfolio</li>
          <li className="nav-item">Team</li>
          <li className="nav-item">Blog</li>
          <li className="nav-item">Contact</li>
        </ul>
        <button className="get-started">Get Started</button>
        <div className="theme-toggle" onClick={toggleTheme}>
          {darkMode ? <FaSun size={30} /> : <FaMoon size={30} />}
        </div>
      </nav>

      {/* Burger Menu */}
      <div className="burger-menu" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        <ul className="nav-list">
          <li className="nav-item">Home</li>
          <li className="nav-item">About</li>
          <li className="nav-item">Services</li>
          <li className="nav-item">Portfolio</li>
          <li className="nav-item">Team</li>
          <li className="nav-item">Blog</li>
          <li className="nav-item">Contact</li>
        </ul>
        <button className="get-started">Get Started</button>
        <div className="theme-toggle" onClick={toggleTheme}>
          {darkMode ? <FaSun size={30} /> : <FaMoon size={30} />}
        </div>
      </div>
    </header>
    <Hero />
    {/* <Cards /> */}

    <ThirdComponent />
    </>
  );
};

export default Header;
