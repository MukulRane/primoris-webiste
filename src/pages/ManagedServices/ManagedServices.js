import React from 'react';
import ContactForm from '../TechnicalConsulting/ContactForm/ContactForm';
import ManagedServicesHeroSection from './ManagedServicesHeroSection/ManagedServicesHeroSection';
import OurServicesSection from './OurServicesSection/OurServicesSection';

const ManagedServices = () => {
  return (
    <div>
      <ManagedServicesHeroSection />
      <OurServicesSection />
      <ContactForm />
    </div>
  );
};

export default ManagedServices;