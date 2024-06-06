import React from 'react';
import './TextCard.css';

const TextCard = ({ title, description }) => {
  return (
    <div className="text-card">
      <h3>{title}</h3>
      <div className="underline"></div>
      <p>{description}</p>
    </div>
  );
};

export default TextCard;
