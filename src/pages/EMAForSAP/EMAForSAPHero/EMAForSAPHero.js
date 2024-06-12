import React from 'react';
import './EMAForSAPHero.css';
import ContactUsButton from '../../../components/ContactUsButton/ContactUsButton';

const EMAForSAPHero = () => {
  return (
    <section className="ema-for-sap-hero-section-erp">
      <div className="ema-for-sap-hero-text-erp">
        <h1>Enterprise Managed Archive for SAP</h1>
        <p>Supply chain management</p>
        <ContactUsButton text="Contact Us" />
      </div>
      <div className="ema-for-sap-hero-image-tint"></div>
    </section>
  );
};

export default EMAForSAPHero;
