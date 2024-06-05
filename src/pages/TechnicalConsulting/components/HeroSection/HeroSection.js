import React from 'react';
import './HeroSection.css';
import ContactUsButton from '../../../../components/ContactUsButton/ContactUsButton';

const HeroSection = () => {
  return (
    <section className="hero-section-technical">
      <div className="hero-text-technical">
        <h1>Technical Consulting</h1>
        <p className="hero-text-technical-heading">Welcome to Primoris, your trusted partner for technical consulting services!</p>
        <p className="hero-text-technical-description">At Primoris, we specialize in providing top-notch technical consulting services to businesses across various industries. With a team of highly skilled and experienced consultants, we are committed to helping our clients leverage technology to drive innovation, streamline processes, and achieve their business objectives.</p>
        <ContactUsButton text="Contact Us" />
      </div>
      <div className="hero-image-technical">
        <img src={require('../../../../images/hero-image.jpg')} alt="Technical Consulting" />
      </div>
    </section>
  );
};

export default HeroSection;
