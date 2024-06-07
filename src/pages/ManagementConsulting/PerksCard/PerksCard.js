import React from 'react';
import './PerksCard.css';

const PerksCard = ({ title, description }) => {
  return (
    <div className="perks-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default PerksCard;
