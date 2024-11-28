import React, { useEffect, useState } from "react";
import Bannar from "../../Asset/images/design-img-1.png"; // Update path as per your project structure
import "./forth.css";

const TwoPortions = () => {
  const [isVisible, setIsVisible] = useState(false);

  const infoData = [
    {
      title: "Community Building",
      description:
        "Artists, entrepreneurs, influencers, social workers, etc. anyone can build their communities by going live or hosting events.",
    },
    {
      title: "Collaboration",
      description:
        "Celebrities & Influencers can collaborate with brands and endorse them via virtual promotional events.",
    },
    {
      title: "Hosting Events",
      description:
        "Virtual Events are everything now, driven by the situation! Users can freely attend seminars on interesting topics.",
    },
    {
      title: "A Boon for Video Creators",
      description:
        "NaariU is the best platform, that can be utilized by creators to build their community through engaging content.",
    },
    {
      title: "Networking is the Key",
      description:
        "Since networking is the foundation for everything, NaariU ensures it is done seamlessly & efficiently.",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("left-portion");
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <h1 style={{ textAlign: "center", margin: "40px" }} className="heading">
        Use Cases of NaariU
      </h1>
      <div className="two-portions-container">
        <div
          id="left-portion"
          className='left-portion'
        >
          {infoData.map((info, index) => (
            <div
              key={index}
              className={`info-div ${isVisible ? "fade-up" : ""}`}
              style={{ animationDelay: `${index * 0.3}s` }} // Stagger animation
            >
              <h2>{info.title}</h2>
              <p>{info.description}</p>
            </div>
          ))}
        </div>
        <div className="right-portion">
          <img src={Bannar} alt="Use Cases Illustration" className="image" />
        </div>
      </div>
    </>
  );
};

export default TwoPortions;
