import React from "react";
import "./thirdComponent.css";
import { FaStar, FaUsers, FaQuestionCircle, FaCommentDots, FaDollarSign } from "react-icons/fa";
import thirdcompImage from '../../Asset/images/Picture5.png'

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

  return (
    <section className="thirdcomp">
      {/* Left Section */}
      <div className="thirdcomp-right">
        <img src={thirdcompImage} alt="thirdcomp" className="thirdcomp-image" />
      </div>

      {/* Right Section */}
      <div className="thirdcomp-right">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
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
  );
};

export default ThirdCompSection;
