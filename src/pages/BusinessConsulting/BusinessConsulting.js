import React from 'react';
import BusinessHeroSection from './BusinessHeroSection/BusinessHeroSection';
import ServicesSection from './ServicesSection/ServicesSection';
import StrategyAndPlanningSection from './StrategyAndPlanningSection/StrategyAndPlanningSection';
import ClientSuccessStories from './ClientSuccessStories/ClientSuccessStories';
import ContactForm from '../TechnicalConsulting/ContactForm/ContactForm';

const BusinessConsulting = () => {
  return (
    <div>
      <BusinessHeroSection />
      <ServicesSection />
      <StrategyAndPlanningSection />
      <ClientSuccessStories />
      <ContactForm />
    </div>
  );
};

export default BusinessConsulting;
