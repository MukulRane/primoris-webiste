import React from 'react';
import './SapHero.css';
import ContactUsButton from '../../../components/ContactUsButton/ContactUsButton';

const SapHero = () => {
  return (
    <section className="sap-hero-section-erp">
      <div className="sap-hero-text-erp">
        <h1>SAP DEVELOPMENT</h1>
        <p>Invest in SAP to drive your digital agenda and reinvent for today’s reality and inventive capabilities.</p>
        <ContactUsButton text="Contact Us" />
      </div>
      <div className="sap-hero-image-tint"></div>
    </section>
  );
};

export default SapHero;
