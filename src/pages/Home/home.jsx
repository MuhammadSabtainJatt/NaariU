import React, { useState, useEffect, useRef } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import Logo from '../../Asset/images/NaariU Logo.png';
import './home.css';
import Home from './hero';
import Third from './thirdComponent';
import Card from './card'
const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // References to target components
  const homeRef = useRef(null);
  const thirdRef = useRef(null);
  const CardRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.style.backgroundColor = darkMode ? '#ffffff' : '#121212';
    document.body.style.color = darkMode ? '#000000' : '#ffffff';
  };

  // Function to scroll to specific sections
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <nav className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <input type="checkbox" id="nav-toggle" />
        <div className="logo">
          <img src={Logo} width={80} alt="Logo" />
        </div>
        <ul className="links">
          <li>
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(homeRef);
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(thirdRef);
              }}
            >
              About
            </a>
          </li>
          <li><a href="#services" onClick={(e)=>{
            e.preventDefault()
            scrollToSection(Card)
          }}>Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#team">Team</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#contact">Contact</a></li>
          <button className="start-btn">
            Get Started
          </button>
          <div className="theme-toggle" onClick={toggleTheme}>
            {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </div>
        </ul>
        <label htmlFor="nav-toggle" className="icon-burger">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </label>
      </nav>

      <div ref={homeRef}>
        <Home id="hero" />
      </div>
      <div ref={thirdRef}>
        <Third id="third" />
      </div>
      <div ref={CardRef}>
        <Card id="services" />
      </div>
    </>
  );
};

export default Header;
