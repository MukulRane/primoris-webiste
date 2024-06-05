import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <h1>Let's get started</h1>
      <h2>Our Solutions</h2>
      <div className="solutions">
        <div className="solution">
          <img src="path/to/icon1.png" alt="Enterprise Managed Archive" />
          <p>Enterprise Managed Archive</p>
        </div>
        <div className="solution">
          <img src="path/to/icon2.png" alt="Org Chart Viewer" />
          <p>Org Chart Viewer</p>
        </div>
        <div className="solution">
          <img src="path/to/icon3.png" alt="Global Case Management" />
          <p>Global Case Management</p>
        </div>
      </div>
      <button className="read-more">Read More</button>
    </div>
  );
};

export default HeroSection;
