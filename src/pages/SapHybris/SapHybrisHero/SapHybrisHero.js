import React from 'react';
import './SapHybrisHero.css';
import ContactUsButton from '../../../components/ContactUsButton/ContactUsButton';

const SapHybrisHero = () => {
  return (
    <section className="sap-hybris-hero-section-erp">
      <div className="sap-hybris-hero-text-erp">
        <h1>Implementing SAP Hybris and SAP Commerce Cloud Migration</h1>
        <ContactUsButton text="Contact Us" />
      </div>
      <div className="sap-hybris-hero-image-tint"></div>
    </section>
  );
};

export default SapHybrisHero;