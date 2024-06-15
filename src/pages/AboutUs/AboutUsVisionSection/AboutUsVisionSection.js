import React from 'react';
import './AboutUsVisionSection.css';

const AboutUsVisionSection = () => {
  const visionData = [
    {
      number: '01',
      text: 'Be a Globally benchmarked IT consulting company',
    },
    {
      number: '02',
      text: 'Be a creative workplace for our Associates to excel and grow in their careers',
    },
    {
      number: '03',
      text: 'Be a trusted partner to our Customers through the combination of our domain industry knowledge and Technology experiences',
    },
  ];

  return (
    <div className="about-us-vision-wrapper">
      <div className="about-us-vision">
        <h2>Our Vision</h2>
        <p className="about-us-vision-description">
          With our passion for knowledge and expertise in innovation, we possess the power to develop solutions that not only cater to technology but also prioritize the well-being of the individuals it serves.
        </p>
        <div className="about-us-vision-cards">
          {visionData.map((item, index) => (
            <div className="about-us-vision-card" key={index}>
              <div className="about-us-vision-card-number">
                <span>{item.number}</span>
              </div>
              <p className="about-us-vision-card-text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUsVisionSection;
