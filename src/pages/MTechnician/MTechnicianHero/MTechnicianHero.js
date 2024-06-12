import React from 'react';
import './MTechnicianHero.css';
import ContactUsButton from '../../../components/ContactUsButton/ContactUsButton';

const MTechnicianHero = () => {
  return (
    <section className="mtechnician-hero-section-erp">
      <div className="mtechnician-hero-text-erp">
        <h1>mTechnician</h1>
        <p>mTechnician is not only a strong workflow optimalization tool, but also a product, that is convenient and easy to-work with.</p>
        <ContactUsButton text="Contact Us" />
      </div>
      <div className="mtechnician-hero-image-tint"></div>
    </section>
  );
};

export default MTechnicianHero;
