import React from 'react';
import '../../TechnicalConsulting/components/HeroSection/HeroSection.css';
import ContactUsButton from '../../../components/ContactUsButton/ContactUsButton';

const RiskManagementHero = () => {
  return (
    <section className="hero-section-technical">
      <div className="hero-text-technical">
        <h1>Risk Management & Security Consulting</h1>
        <p className="hero-text-technical-description">Primoris team supports Global companies managing data Governance Risk and Compliance (GRC) requirements. We use an adaptive Artificial Intelligence (AI) engine Security that uses a ‘stateful’ Firewall vs legacy system which are stateless.</p>
        <ContactUsButton text="Contact Us" />
      </div>
      <div className="hero-image-technical">
        <img src={require('../../../images/risk-management-hero.jpg')} alt="Technical Consulting" />
      </div>
    </section>
  );
};

export default RiskManagementHero;
