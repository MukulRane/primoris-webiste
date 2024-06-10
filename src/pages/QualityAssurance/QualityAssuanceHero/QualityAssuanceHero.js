import React from 'react';
import '../../TechnicalConsulting/components/HeroSection/HeroSection';
import ContactUsButton from '../../../components/ContactUsButton/ContactUsButton';

const QualityAssuranceHero = () => {
  return (
    <section className="hero-section-technical">
      <div className="hero-text-technical">
        <h1>Quality Assurance</h1>
        <p className="hero-text-technical-description">Quality assurance is a vital discipline that ensures the delivery of cutting-edge, reliable solutions that meet customer expectations and industry standards. Primoris Systems aims at delivering reliable and high-performing software solutions to maintain a competitive edge.</p>
        <ContactUsButton text="Contact Us" />
      </div>
      <div className="hero-image-technical">
        <img src={require('../../../images/quality-assuarance-hero.jpg')} alt="Technical Consulting" />
      </div>
    </section>
  );
};

export default QualityAssuranceHero;
