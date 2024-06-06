import React from 'react';
import './HeroSection.css';
import ContactUsButton from '../../../components/ContactUsButton/ContactUsButton';

const HeroSection = () => {
  return (
    <section className="hero-section-erp">
      <div className="hero-text-erp">
        <h1>ERP Functional Consulting</h1>
        <p>We assist organizations in implementing, customizing, and optimizing ERP systems. They analyze processes, configure the system, provide training, and offer ongoing support to streamline operations and enhance decision-making capabilities for sustainable growth.</p>
        <ContactUsButton text="Contact Us" />
      </div>
      <div className="hero-image-tint"></div>
    </section>
  );
};

export default HeroSection;
