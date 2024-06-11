import React from 'react';
import './TypesOfConnectionCard.css';

const TypesOfConnectionCard = ({ image, title, description }) => {
  return (
    <div className="types-of-connection-card">
      <img src={image} alt={title} className="types-of-connection-card-image" />
      <div
        className="types-of-connection-card-description"
        dangerouslySetInnerHTML={{ __html: description }}
      ></div>
    </div>
  );
};

export default TypesOfConnectionCard;
