import React from 'react';
import './SapCloudAnalyticsHero.css';
import ContactUsButton from '../../../components/ContactUsButton/ContactUsButton';

const SapCloudAnalyticsHero = () => {
  return (
    <section className="sap-cloud-analytics-hero-section-erp">
      <div className="sap-cloud-analytics-hero-text-erp">
        <h1>SAP Cloud Analytics</h1>
        <p>In-Depth Real-Time Analytics: Primoris offers comprehensive analytics solutions that enable organizations to gain</p>
        <ContactUsButton text="Contact Us" />
      </div>
      <div className="sap-cloud-analytics-hero-image-tint"></div>
    </section>
  );
};

export default SapCloudAnalyticsHero;