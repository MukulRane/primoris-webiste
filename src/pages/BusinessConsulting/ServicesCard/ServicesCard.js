import React from 'react';
import './ServicesCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons';

const ServicesCard = ({ title }) => {
  return (
    <div className="simple-card">
      <div className="simple-card-left">
        <FontAwesomeIcon icon={faCheckDouble} className="service-card-icon" />
      </div>
      <div className="simple-card-right">
        <p>{title}</p>
      </div>
    </div>
  );
};

export default ServicesCard;
