import React from 'react';
import './ExpertiseCard.css';

const ExpertiseCard = ({ title, description, icon }) => {
  return (
    <div className="expertise-card">
      <img src={icon} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ExpertiseCard;
