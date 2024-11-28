import React, { useState, useEffect, useRef } from 'react';
import './card.css';
import Image1 from '../../Asset/images/Frame 14256.png';
import Image2 from '../../Asset/images/Frame 14259.png';
import Image3 from '../../Asset/images/Frame 14254.png';
import Image4 from '../../Asset/images/Frame 14258.png';

const Cards = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  const cardRefs = useRef([]);

  const handleReadMore = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  // Function to truncate text to 50 words
  const truncateText = (text, wordLimit = 50) => {
    const words = text.split(' ');
    return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : text;
  };

  useEffect(() => {
    const options = {
      threshold: 0.1,
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        } else {
          entry.target.classList.remove('in-view');
        }
      });
    }, options);

    cardRefs.current.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const cards = [
    {
      id: 1,
      image: Image1,
      heading: 'Connect Globally with NaariU App',
      text: "Discover a world of new friendships with NaariU App! Whether you're looking to share experiences, explore new cultures, or simply find someone to chat with, NaariU connects you with people from around the globe. Expand your social circle, exchange ideas, and build meaningful connections with just a few taps. Embrace the joy of making friends worldwide with NaariU!",
    },
    {
      id: 2,
      image: Image2,
      heading: "Stay Connected with Friends on NaariU",
      text: "NaariU app makes staying in touch with friends easier and more fun than ever. Whether you're catching up with old friends or making new ones, our intuitive chat feature lets you send messages instantly, share photos, videos, and even voice notes. Create group chats to plan outings or just to keep everyone updated on the latest news. With NaariU, your social life is always at your fingertips, making every conversation meaningful and engaging. Stay connected, stay social, with NaariU.",
    },
    {
      id: 3,
      image: Image3,
      heading: "Connect with Random Video Calling!",
      text: "NaariU App brings a new way to meet and interact with people from around the world through random video calling. This innovative feature allows users to connect instantly with others, breaking the barriers of distance and time.",
    },
    {
      id: 4,
      image: Image4,
      heading: "Explore Your NaariU App User Profile",
      text: "In your NaariU app user profile, you have easy access to key features to enhance your experience. View your Coins Balance to keep track of your in-app currency. Access Account Info to update your personal details and manage your preferences. Enjoy a streamlined way to control and personalize your NaariU app experience!",
    },
  ];

  return (
    <>
        <h1 className='card-Heading'>Get The App For Free And Start Now</h1>
    <div className="custom-card-container">
      {cards.map((card, index) => (
        <div
          key={card.id}
          className="custom-card"
          ref={(el) => (cardRefs.current[index] = el)}
          style={{ transitionDelay: `${index * 0.2}s` }}  
        >
          <img src={card.image} alt={card.heading} className="custom-card-image" />
          <div className="custom-card-text">
            <h3>{card.heading}</h3>
            <p>
              {expandedCard === card.id
                ? card.text
                : truncateText(card.text, 50)} {/* Show 50 words by default */}
            </p>
            <button onClick={() => handleReadMore(card.id)} className="read-more-btn">
              {expandedCard === card.id ? 'Read Less' : 'Read More'}
            </button>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default Cards;
