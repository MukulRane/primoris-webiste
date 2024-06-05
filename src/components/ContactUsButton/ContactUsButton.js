import React from 'react';
import './ContactUsButton.css';

const ContactUsButton = ({ text }) => {
  return (
    <button className="contact-us-button">
      {text}
    </button>
  );
};

export default ContactUsButton;
