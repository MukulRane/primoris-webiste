import React from 'react';
import HeroSection from '../ERPFunctionalConsulting/HeroSection/HeroSection';
// import ServicesSection from './components/ServicesSection/ServicesSection';
// import Expertise from './components/Expertise/Expertise';
import ContactForm from '../../pages/TechnicalConsulting/ContactForm/ContactForm';
import ServicesSection from './ServicesSection/ServicesSection';
import BuildBusinessSection from './BuildBusinessSection/BuildBusinessSection';
import WhyWorkWithPrimoris from './WhyWorkWithPrimoris/WhyWorkWithPrimoris';
import FAQSection from './FAQSection/FAQSection';

const ERPFunctionalConsulting = () => {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <BuildBusinessSection />
      <WhyWorkWithPrimoris />
      <FAQSection />
      <ContactForm />
    </div>
  );
};

export default ERPFunctionalConsulting;
