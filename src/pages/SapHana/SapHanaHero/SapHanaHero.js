import React from 'react';
import './SapHero.css';
import ContactUsButton from '../../../components/ContactUsButton/ContactUsButton';

const SapHanaHero = () => {
  return (
    <section className="sap-hana-hero-section-erp">
      <div className="sap-hana-hero-text-erp">
        <h1>SAP S/4 HANA</h1>
        <p>SAP S/4HANA is a next-generation enterprise resource planning (ERP) software that integrates advanced technologies like in-memory computing, artificial intelligence, and real-time analytics to provide organizations with enhanced speed, agility, and insights for their business processes.</p>
        <ContactUsButton text="Contact Us" />
      </div>
      <div className="sap-hana-hero-image-tint"></div>
    </section>
  );
};

export default SapHanaHero;
