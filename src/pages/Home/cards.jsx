import React, { useState, useEffect } from "react";
import "./cards.css";

const AnimatedCards = () => {
  const cards = [
    { id: 1, content: "Card 1" },
    { id: 2, content: "Card 2" },
    { id: 3, content: "Card 3" },
    { id: 4, content: "Card 4" },
  ];

  const [visibleCards, setVisibleCards] = useState([0, 1, 2, 3]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
      setVisibleCards((prevCards) => {
        const nextCards = [...prevCards];
        nextCards.shift(); // Remove the first card
        nextCards.push((currentIndex + 1) % cards.length); // Add the next card
        return nextCards;
      });
    }, 3000); // Change card every second
    return () => clearInterval(interval);
  }, [currentIndex, cards.length]);

  return (
    <section className="animated-cards-section">
      <h1 className="section-heading">Our Animated Cards</h1>
      <div className="cards-container">
        {visibleCards.map((index) => (
          <div key={cards[index].id} className="card">
            {cards[index].content}
          </div>
        ))}
      </div>
    </section>
  );
};

export default AnimatedCards;
