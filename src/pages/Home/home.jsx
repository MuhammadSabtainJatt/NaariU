import React, { useState, useEffect, useRef } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import Logo from '../../Asset/images/NaariU Logo.png';
import './home.css';
import Home from './hero';
import Third from './thirdComponent';
import Card from './card'
import { Link } from 'react-router-dom';
const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // References to target components
  const homeRef = useRef(null);
  const thirdRef = useRef(null);
  const cardRef = useRef(null);

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
            scrollToSection(cardRef)
          }}>Services</a></li>
          <li><Link to="/portfolio">Feature</Link></li>
          <li><Link to="/team">Team</Link></li>
          <li><Link href="/privacy">Privacy Policy</Link></li>
          <li><Link to="/contact">Contact</Link></li>
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
      <div ref={cardRef}>
        <Card id="services" />
      </div>
    </>
  );
};

export default Header;
