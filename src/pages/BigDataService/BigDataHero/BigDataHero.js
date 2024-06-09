import React from 'react';
import '../../TechnicalConsulting/components/HeroSection/HeroSection';
import ContactUsButton from '../../../components/ContactUsButton/ContactUsButton';

const BigDataHero = () => {
  return (
    <section className="hero-section-technical">
      <div className="hero-text-technical">
        <h1>Big Data Development Service</h1>
        <p className="hero-text-technical-description">The Primoris team helps international businesses manage their data governance, risk, and compliance (GRC) obligations. As opposed to traditional systems, which are stateless, we deploy an adaptive Artificial Intelligence (AI) engine for security, which uses a ‘stateful’ Firewall.</p>
        <ContactUsButton text="Contact Us" />
      </div>
      <div className="hero-image-technical">
        <img src={require('../../../images/big-data-hero.jpg')} alt="Technical Consulting" />
      </div>
    </section>
  );
};

export default BigDataHero;
