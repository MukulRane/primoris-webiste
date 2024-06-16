import React from 'react';
import ContactForm from '../../pages/TechnicalConsulting/ContactForm/ContactForm';
import NextGenerationCommerceSection from './NextGenerationCommerceSection/NextGenerationCommerceSection';
import SapHybrisCommerceCloud from './SapHybrisCommerceCloud/SapHybrisCommerceCloud';
import SapHybrisHANAReadiness from './SapHybrisHANAReadiness/SapHybrisHANAReadiness';
import SapHybrisHero from './SapHybrisHero/SapHybrisHero';
import WhyJoinOurPartnership from './WhyJoinOurPartnership/WhyJoinOurPartnership';

const SapHybris = () => {
  return (
    <div>
      <SapHybrisHero />  
      <NextGenerationCommerceSection />
      <SapHybrisCommerceCloud />
      <SapHybrisHANAReadiness />
      <WhyJoinOurPartnership />
      <ContactForm />
    </div>
  );
};

export default SapHybris;
