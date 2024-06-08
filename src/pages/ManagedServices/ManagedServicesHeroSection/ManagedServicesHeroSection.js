import React from 'react';
import '../../TechnicalConsulting/components/HeroSection/HeroSection';
import ContactUsButton from '../../../components/ContactUsButton/ContactUsButton';

const ManagedServicesHeroSection = () => {
  return (
    <section className="hero-section-technical">
      <div className="hero-text-technical">
        <h1>Managed Services</h1>
        <p className="hero-text-technical-description">We help you optimize current business practices and address future challenges to achieve your business goals. Whether this means providing 24×7 remote technical services, placing consultants onsite or serving as your IT Operations management team, we tailor solutions to your unique business challenges. At Primoris Systems, we enjoy what we do! We’re always glad to connect with talented individuals who possess a variety of skills and accomplishments.</p>
        <ContactUsButton text="Contact Us" />
      </div>
      <div className="hero-image-technical">
        <img src={require('../../../images/managed-services-hero.jpg')} alt="Technical Consulting" />
      </div>
    </section>
  );
};

export default ManagedServicesHeroSection;
