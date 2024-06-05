import React from 'react';
import './Card.css';

const Card = ({ title, description, bgColor }) => {
  return (
    <div className="card" style={{ backgroundColor: bgColor }}>
      <h3>{title}</h3>
      <p>{description}</p>
      <button className="know-more">Know More</button>
    </div>
  );
};

export default Card;
