import React from 'react';
import '../../TechnicalConsulting/components/HeroSection/HeroSection';
import ContactUsButton from '../../../components/ContactUsButton/ContactUsButton';

const ManagementHeroSection = () => {
  return (
    <section className="hero-section-technical">
      <div className="hero-text-technical">
        <h1>Management Consulting Services</h1>
        <p className="hero-text-technical-heading">Make no bad choices, choose us.</p>
        <p className="hero-text-technical-description">The primary goal of Primoris Systems Management Consulting is to assist your company in selecting and carrying out strategic initiatives to increase business efficiency and effectiveness. Together with your team, our experts provide thorough business answers to your company’s most pressing problems</p>
        <ContactUsButton text="Contact Us" />
      </div>
      <div className="hero-image-technical">
        <img src={require('../../../images/management-consulting-hero.jpg')} alt="Technical Consulting" />
      </div>
    </section>
  );
};

export default ManagementHeroSection;
