import React from 'react';
import './SapFioriBanner.css';
import ContactUsButton from '../../../components/ContactUsButton/ContactUsButton';

const SapFioriBanner = () => {
  return (
    <section className="sap-fiori-join-us-section">
      <div className="sap-fiori-join-us-content">
        <div className="sap-fiori-join-us-text">
          <h2>Learn about every feature that is accessible for your Fiori app development.</h2>
        </div>
        <ContactUsButton text="Contact Us" />
      </div>
    </section>
  );
};

export default SapFioriBanner;
