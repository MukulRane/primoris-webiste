import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ title, items }) => {
  return (
    <div className="service-card">
      <h3>{title}</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;
