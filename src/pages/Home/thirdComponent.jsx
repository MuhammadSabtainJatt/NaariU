import React, { useEffect, useRef, useState } from "react";
import "./thirdComponent.css";
import { FaStar, FaUsers, FaQuestionCircle, FaCommentDots, FaDollarSign } from "react-icons/fa";
import thirdcompImage from "../../Asset/images/Picture5.png";
import Revenue from './revenue'
import Forth from './forth'

const ThirdCompSection = () => {
  const features = [
    {
      icon: <FaStar />,
      title: "Explore Live Sessions / Events",
      description: "Join interactive live sessions and events to learn and have fun.",
      bgColor: "#280a47",
    },
    {
      icon: <FaUsers />,
      title: "Create New Friends",
      description: "Connect with people sharing your interests.",
      bgColor: "#280a47",
    },
    {
      icon: <FaQuestionCircle />,
      title: "What is NaariU?",
      description: "Discover how ZeboLive empowers creativity and connections.",
      bgColor: "#280a47",
    },
    {
      icon: <FaCommentDots />,
      title: "Why NaariU?",
      description: "Learn what makes ZeboLive unique in its approach.",
      bgColor: "#280a47",
    },
    {
      icon: <FaDollarSign />,
      title: "How You Can Earn?",
      description: "Unlock earning opportunities with your creativity.",
      bgColor: "#280a47",
    },
  ];

  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Start the animation
        }
      },
      { threshold: 0.3 } // Trigger animation when 30% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <>
    <section className="thirdcomp" ref={sectionRef}>
      {/* Left Section */}
      <div className="thirdcomp-left">
        <img src={thirdcompImage} alt="thirdcomp" className="thirdcomp-image" />
      </div>

      {/* Right Section */}
      <div className="thirdcomp-right">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`feature-card ${isVisible ? "animate" : ""}`}
            style={{ animationDelay: `${index * 0.5}s` }} // Delay each card by 0.5s
          >
            <div className="feature-icon" style={{ backgroundColor: feature.bgColor }}>
              {feature.icon}
            </div>
            <div className="feature-content">
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    <Revenue />
    <Forth />
    
    </>
  );
};

export default ThirdCompSection;
