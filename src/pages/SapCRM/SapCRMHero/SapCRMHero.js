import React from 'react';
import './SapCRMHero.css';
import ContactUsButton from '../../../components/ContactUsButton/ContactUsButton';

const SapCRMHero = () => {
  return (
    <section className="sap-crm-hero-section-erp">
      <div className="sap-crm-hero-text-erp">
        <h1>SAP For Customer Relationship Management</h1>
        <p>Sales, marketing, and customer service all gather data on their respective clientele. The needs for a CRM system vary depending on the department. Thus, the departments frequently employ various tools. All client data are available in consolidated form with an integrated CRM system that satisfies Sales, Marketing, and Service needs.</p>
        <ContactUsButton text="Contact Us" />
      </div>
      <div className="sap-crm-hero-image-tint"></div>
    </section>
  );
};

export default SapCRMHero;
