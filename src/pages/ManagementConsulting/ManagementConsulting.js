import React from 'react';
import ManagementHeroSection from './ManagementHeroSection/ManagementHeroSection';
import ServicesSection from './ServicesSection/ServicesSection';
import ManagingOrganisationalChangeSection from './ManagingOrganisationalChangeSection/ManagingOrganisationalChangeSection';
import PerksSection from './PerksSection/PerksSection';
import ImprovedSatisfactionSection from './ImprovedSatisfactionSection/ImprovedSatisfactionSection';
import ContactForm from '../TechnicalConsulting/ContactForm/ContactForm';

const ManagementConsulting = () => {
  return (
    <div>
      <ManagementHeroSection />
      <ServicesSection />
      <ManagingOrganisationalChangeSection />
      <PerksSection />
      <ImprovedSatisfactionSection />
      <ContactForm />
    </div>
  );
};

export default ManagementConsulting;
