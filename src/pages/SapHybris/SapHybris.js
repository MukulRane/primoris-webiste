import React from 'react';
import ContactForm from '../../pages/TechnicalConsulting/ContactForm/ContactForm';
import NextGenerationCommerceSection from './NextGenerationCommerceSection/NextGenerationCommerceSection';
import SapHybrisCommerceCloud from './SapHybrisCommerceCloud/SapHybrisCommerceCloud';
import SapHybrisHANAReadiness from './SapHybrisHANAReadiness/SapHybrisHANAReadiness';
import SapHybrisHero from './SapHybrisHero/SapHybrisHero';

const SapHybris = () => {
  return (
    <div>
      <SapHybrisHero />  
      <NextGenerationCommerceSection />
      <SapHybrisCommerceCloud />
      <SapHybrisHANAReadiness />
      <ContactForm />
    </div>
  );
};

export default SapHybris;
