import React from 'react';
import '../../TechnicalConsulting/components/HeroSection/HeroSection';
import ContactUsButton from '../../../components/ContactUsButton/ContactUsButton';

const StaffingAndHrSolutionsHero = () => {
  return (
    <section className="hero-section-technical">
      <div className="hero-text-technical">
        <h1>Staffing & HR Solutions</h1>
        <p className="hero-text-technical-description">Primoris Systems specializes in providing comprehensive talent acquisition, managed talent services, and organizational development strategies to support businesses in building a strong workforce, optimizing talent management processes, and fostering organizational growth.</p>
        <ContactUsButton text="Contact Us" />
      </div>
      <div className="hero-image-technical">
        <img src={require('../../../images/management-consulting-hero.jpg')} alt="Technical Consulting" />
      </div>
    </section>
  );
};

export default StaffingAndHrSolutionsHero;
