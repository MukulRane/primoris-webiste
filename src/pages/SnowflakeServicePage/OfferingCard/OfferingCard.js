import React from 'react';
import './OfferingCard.css';

const OfferingCard = ({ title, description }) => {
  return (
    <div className="offering-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default OfferingCard;
