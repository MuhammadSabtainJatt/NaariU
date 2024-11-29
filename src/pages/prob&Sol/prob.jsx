import React, { useState, useEffect } from 'react';
import './prob.css'; // Import the CSS file

function App() {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsAnimated(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="container">   

      <div className="left-section">   

        <div className={`animated-div ${isAnimated ? 'show' : ''}`}>
          A Platform to showcase talent and get appreciation
        </div>
        <div className={`animated-div ${isAnimated ? 'show' : ''}`}>
          Social connectivity to remove boredom and get entertainment on the go
        </div>
        <div className={`animated-div ${isAnimated ? 'show' : ''}`}>
          Additional source of income from your talents
        </div>
      </div>
      <div className="right-section">
        {/* Right-side content, e.g., the illustration and text */}
      </div>
    </div>
  );
}

export default App;