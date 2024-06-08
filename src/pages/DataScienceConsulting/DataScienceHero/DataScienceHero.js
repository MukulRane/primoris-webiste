import React from 'react';
import '../../TechnicalConsulting/components/HeroSection/HeroSection';
import ContactUsButton from '../../../components/ContactUsButton/ContactUsButton';

const DataScienceHeroSection = () => {
  return (
    <section className="hero-section-technical">
      <div className="hero-text-technical">
        <h1>Data Science</h1>
        <p className="hero-text-technical-description">Data science services assist businesses in conducting tests on their data in quest of commercial insights. To suit our clients’ most specific analytics needs, Primoris Systems offers data science consulting services utilising machine learning, artificial intelligence, and deep learning technologies.</p>
        <ContactUsButton text="Contact Us" />
      </div>
      <div className="hero-image-technical">
        <img src={require('../../../images/data-science-hero.jpg')} alt="Technical Consulting" />
      </div>
    </section>
  );
};

export default DataScienceHeroSection;
