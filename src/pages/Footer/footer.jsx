import React from "react";
import "./footer.css";
import Logo from '../../Asset/images/NaariU Logo.png'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaApple, FaAndroid } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* First Column */}
        <div className="footer-column">
          <img src={Logo} alt="Logo" className="footer-logo" />
          <p className="footer-text">
            Stay connected with us and explore our social channels. We value your feedback!
          </p>
          <div className="social-icons">
            <FaFacebook className="footer-icon" />
            <FaTwitter className="footer-icon" />
            <FaInstagram className="footer-icon" />
            <FaLinkedin className="footer-icon" />
          </div>
        </div>

        {/* Second Column */}
        <div className="footer-column">
          <h2 className="footer-heading">About Our App</h2>
          <p className="footer-text">
            Explore amazing features designed to make your life easier and more efficient.
          </p>
        </div>

        {/* Third Column */}
        <div className="footer-column">
        <button className="footer-btn">
            <FaApple size={24} />
            <div className="button-text">
              <small>Download on the</small>
              <strong>App Store</strong>
            </div>
          </button>
          <br />
          <button className="footer-btn">
            <FaAndroid size={24} />
            <div className="button-text">
              <small>Get it on</small>
              <strong>Google Play</strong>
            </div>
          </button>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <hr />
        <p>
          <span>© 2024 All rights reserved. </span>
          <a href="https://yourdeveloperwebsite.com" target="_blank" rel="noopener noreferrer" className="developer-link">
            YourDeveloperWebsite.com
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
