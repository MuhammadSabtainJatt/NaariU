import React, { useEffect } from 'react';
import { FaGift } from 'react-icons/fa'; // Import gift icon
import { FaMicrophone } from "react-icons/fa";
import { MdMicNone } from 'react-icons/md'; // Import mic icon
import './revenue.css';

const App = () => {
  useEffect(() => {
    const cards = document.querySelectorAll('.card');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-zoomIn');
            observer.unobserve(entry.target); // To run animation only once
          }
        });
      },
      { threshold: 0.1 } // Trigger animation when 10% of the card is visible
    );

    cards.forEach((card) => observer.observe(card));
  }, []);

  return (
    <div className="App">
      <section id="animated-section" className="section">
        <h1 className="section-heading">How to generate revenue ?</h1>
        <div className="cards-container">
          {/* Card 1 */}
          <div className="card">
            <div className="card-header">
              <div className="icon-container">
                <FaGift />
              </div>
              <h2 className="card-title">
              Send Virtual Gifts (virtual coins)</h2>
            </div>
            <p className="card-text">
            Users can send and receive virtual gifts in the form of virtual coins to the speaker, moderator and admin of the room/club upon the appreciation, and this virtual coins can be converted in the form of Cash rewards directly to the bank account upon request raised through their wallet.
            </p>
          </div>
          {/* Card 2 */}
          <div className="card">
            <div className="card-header">
              <div className="icon-container">
                <FaMicrophone />
              </div>
              <h2 className="card-title">Paid Events & Seminars</h2>
            </div>
            <p className="card-text">
            There is an option in which the followers or the invitees can join the particular events upon paying some amount of virtual coins. There is an option in which the followers or the invitees can join the particular events upon paying some amount of virtual coins.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
