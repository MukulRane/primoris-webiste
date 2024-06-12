import React from 'react';
import './GCMHero.css';
import ContactUsButton from '../../../components/ContactUsButton/ContactUsButton';

const GCMHero = () => {
  return (
    <section className="gcm-hero-section-erp">
      <div className="gcm-hero-text-erp">
        <h1>Global Case Management eDiscovery</h1>
        <p>Structured Information Management which makes it easy to Organize Information</p>
        <ContactUsButton text="Contact Us" />
      </div>
      <div className="gcm-hero-image-tint"></div>
    </section>
  );
};

export default GCMHero;
