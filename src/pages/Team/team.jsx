import React, { useEffect, useState } from "react";
import "./team.css";
import ProfileImage from '../../Asset/images/profile.jpg'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const TeamSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer to detect when the section is in the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    const section = document.querySelector(".team-section");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <div className="team-section">
      <div className="heading-container">
        <small>Our Team</small>
        <h1>Meet Our Team</h1>
        <p>
          Our team is composed of talented professionals who are passionate about what they do.
        </p>
        <hr />
      </div>

      <div className='cards-container zoom-in'>
        {/* Card 1 */}
        <div className="team-card">
          <img src={ProfileImage} alt="Team Member 1" className="card-image" />
          <h3>Jane Doe</h3>
          <p>Lead Designer</p>
          <p>
            Jane is a creative mastermind with years of experience in UI/UX design and branding.
          </p>
          <div className="social-icons">
            <FaFacebook className="icon" />
            <FaTwitter className="icon" />
            <FaInstagram className="icon" />
            <FaLinkedin className="icon" />
          </div>
        </div>

        {/* Card 2 */}
        <div className="team-card">
          <img src={ProfileImage} alt="Team Member 2" className="card-image" />
          <h3>John Smith</h3>
          <p>Software Engineer</p>
          <p>
            John specializes in full-stack development and brings innovative solutions to the table.
          </p>
          <div className="social-icons">
            <FaFacebook className="icon" />
            <FaTwitter className="icon" />
            <FaInstagram className="icon" />
            <FaLinkedin className="icon" />
          </div>
        </div>

        {/* Card 3 */}
        <div className="team-card">
          <img src={ProfileImage} alt="Team Member 3" className="card-image" />
          <h3>Emily Davis</h3>
          <p>Marketing Expert</p>
          <p>
            Emily is a marketing guru who ensures our brand reaches the right audience.
          </p>
          <div className="social-icons">
            <FaFacebook className="icon" />
            <FaTwitter className="icon" />
            <FaInstagram className="icon" />
            <FaLinkedin className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
