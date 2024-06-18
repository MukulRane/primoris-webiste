import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

const Card = ({ title, description, bgColor, link }) => {
  return (
    <div className="card" style={{ backgroundColor: bgColor }}>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <Link to={link}><button className="know-more">Know More</button></Link>
    </div>
  );
};

export default Card;
