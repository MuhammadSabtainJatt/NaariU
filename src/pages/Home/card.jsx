// import React, { useEffect, useRef } from "react";
// import "./card.css";

// const AnimatedSection = () => {




import React, { useEffect, useRef } from 'react';
import './card.css'; // Import the CSS file

import I1 from '../../Asset/images/b1.png'
import I2 from '../../Asset/images/b2.png'
import I3 from '../../Asset/images/b3.png'
import I4 from '../../Asset/images/b4.png'
import B1 from '../../Asset/images/1.png'
import B2 from '../../Asset/images/2.png'
import B3 from '../../Asset/images/3.png'
import B4 from '../../Asset/images/4.png'
import Banner from '../../Asset/images/Banner.jpg'

const Tumile = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show-animation");
          } else {
            entry.target.classList.remove("show-animation");
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);
  return (<>

    <h1 className='heading' style={{textAlign:'center',margin:'50px 0', marginTop:"150px"}}>Our Services</h1>
    <div className="tumile-container">
      {/* Left Side Content */}
      <div className="left-content">
        <h1>Stay Connected with Friends on NaariU</h1>
        <p>
          NaariU app makes staying in touch with friends easier and more fun than ever. Whether you're catching up with old friends or making new ones, our intuitive chat feature lets you send messages instantly, share photos, videos, and even voice notes. Create group chats to plan outings or just to keep everyone updated on the latest news. With NaariU, your social life is always at your fingertips, making every conversation meaningful and engaging. Stay connected, stay social, with NaariU.
        </p>
        <div className="animated-images">
          <img src={I1} alt="Image 1" />
          <img src={I2} alt="Image 2" />
          <img src={I3} alt="Image 3" />
          <img src={I4} alt="Image 4" />
        </div>
      </div>

      {/* Image container */}
      <div className="image-container">
        <img className="center-image" src={B2} alt="Center" />
        <div className="small-div top-right">
          <p>Video Calls</p>
        </div>
        <div className="small-div top-left">
          <p>Messages 📧s</p>
        </div>
        <div className="small-div bottom-left">
          <p>Find Friends </p>
        </div>
        <div className="small-div bottom-right">
          <p>Love Stories</p>
        </div>
      </div>
    </div>
    <div className="animated-section" ref={sectionRef}>
      <div className="text-content">
        <h2>
          Connect with Random Video Calling!</h2>
        <p>
          NaariU App brings a new way to meet and interact with people from around the world through random video calling. This innovative feature allows users to connect instantly with others, breaking the barriers of distance and time.
        </p>
      </div>
      <div className="image-wrapper">
        <div className="circle top-right"></div>
        <img src={B1} width={300} height={100} alt="Example" className="main-image" />
        <div className="circle bottom-left"></div>
      </div>
    </div>

    <div className="tumile-container">
      {/* Left Side Content */}
      <div className="left-content">
        <h1>Explore Your NaariU App User Profile</h1>
        <p>
          In your NaariU app user profile, you have easy access to key features to enhance your experience. View your Coins Balance to keep track of your in-app currency. Access Account Info to update your personal details and manage your preferences. Enjoy a streamlined way to control and personalize your NaariU app experience! </p>

      </div>

      {/* Image container */}
      <div className="image-container">
        <img className="center-image" src={B3} alt="Center" />

      </div>
    </div>

  </>

  )
}
export default Tumile;