import React from 'react';
import './SapFioriHero.css';
import ContactUsButton from '../../../components/ContactUsButton/ContactUsButton';

const SapFioriHero = () => {
  return (
    <section className="sap-cloud-analytics-hero-section-erp">
      <div className="sap-cloud-analytics-hero-text-erp">
        <h1>Create a Mobile SAP Fiori user experience</h1>
        <ContactUsButton text="Contact Us" />
      </div>
      <div className="sap-cloud-analytics-hero-image-tint"></div>
    </section>
  );
};

export default SapFioriHero;