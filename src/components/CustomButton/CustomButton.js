import React from 'react';
import './CustomButton.css';

const CustomButton = ({ text }) => {
  return (
    <button className="custom-button-connect">
      {text}
    </button>
  );
};

export default CustomButton;
