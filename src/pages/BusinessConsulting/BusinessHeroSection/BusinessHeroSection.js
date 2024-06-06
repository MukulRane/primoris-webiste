import React from 'react';
import '../../TechnicalConsulting/components/HeroSection/HeroSection';
import ContactUsButton from '../../../components/ContactUsButton/ContactUsButton';

const BusinessHeroSection = () => {
  return (
    <section className="hero-section-technical">
      <div className="hero-text-technical">
        <h1>Business Consulting</h1>
        <p className="hero-text-technical-heading">Your reliable strategic business consulting partner!</p>
        <p className="hero-text-technical-description">We specialize in providing comprehensive and customized business consulting solutions to organizations in a wide range of industries. Our team of experts combines industry knowledge, strategic thinking, and tried-and-true methodologies to assist businesses in thriving and overcoming challenges in today’s fast-paced marketplace.</p>
        <ContactUsButton text="Contact Us" />
      </div>
      <div className="hero-image-technical">
        <img src={require('../../../images/business-consulting-hero.jpg')} alt="Technical Consulting" />
      </div>
    </section>
  );
};

export default BusinessHeroSection;
