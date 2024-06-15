import React from 'react';
import './SapSupplyChainManagementHero.css';
import ContactUsButton from '../../../components/ContactUsButton/ContactUsButton';

const SapSupplyChainManagementHero = () => {
  return (
    <section className="sap-supply-chain-hero-section-erp">
      <div className="sap-supply-chain-hero-text-erp">
        <h1>SAP Supply Chain Management</h1>
        <p>Grow your business with the trusted, secure, and comprehensive ERP software. Drive profitable growth through real-time data-driven decision-making.</p>
        <ContactUsButton text="Contact Us" />
      </div>
      <div className="sap-supply-chain-hero-image-tint"></div>
    </section>
  );
};

export default SapSupplyChainManagementHero;