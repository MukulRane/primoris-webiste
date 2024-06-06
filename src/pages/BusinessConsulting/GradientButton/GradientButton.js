import React from 'react';
import './GradientButton.css';

const GradientButton = ({ title }) => {
  return (
    <a href="#" className="gradient-button">
        {title}
    </a>
  );
};

export default GradientButton;
