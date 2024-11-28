import React, { useEffect, useState } from "react";
import "./hero.css";
import HeroImage from "../../Asset/images/banner-img-2.png"; // Replace with your image path
import { FaApple,FaGooglePlay,FaAndroid } from "react-icons/fa";

const HeroSection = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (counter < 1000) {
      const interval = setInterval(() => {
        setCounter((prevCounter) => prevCounter + 1);
      }, counter/100); // Increment every 10ms for faster counting

      return () => clearInterval(interval); // Cleanup on unmount
    }
  }, [counter]);
  return (
    <section className="hero">
      <div className="hero-left">
        <h1 className="hero-heading">NaariU is India's First Live Entertainment Platform for Fresh Talent Creator's</h1>
        <p className="hero-text">
        NaariU helps any user with a talent to monetize their creativity and increase their fanbase in the shortest time unlike YT, IG & FB Made in India, Made by Indians and Made for Everyone
        </p>
        <div className="hero-buttons">
          <div className="button-Counter">
              <small>Number of Available</small>
              <strong>{counter}</strong>
          </div>
          <button className="hero-button">
            <FaApple size={24} />
            <div className="button-text">
              <small>Download on the</small>
              <strong>App Store</strong>
            </div>
          </button>
          <button className="hero-button">
            <FaAndroid size={24} />
            <div className="button-text">
              <small>Get it on</small>
              <strong>Google Play</strong>
            </div>
          </button>
        </div>
      </div>
      <div className="hero-right">
        <img src={HeroImage} alt="Hero" className="hero-image" />
      </div>
    </section>
  );
};

export default HeroSection;
