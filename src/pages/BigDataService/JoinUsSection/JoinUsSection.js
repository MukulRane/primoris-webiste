import React from 'react';
import './JoinUsSection.css';
import ContactUsButton from '../../../components/ContactUsButton/ContactUsButton';

const JoinUsSection = () => {
  return (
    <section className="join-us-section">
      <div className="join-us-content">
        <div className="join-us-text">
          <h2>Join us in creating your big data app</h2>
        </div>
        <ContactUsButton text="Contact Us" />
      </div>
    </section>
  );
};

export default JoinUsSection;
