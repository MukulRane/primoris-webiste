import React from 'react';
import DataScienceHeroSection from './DataScienceHero/DataScienceHero';
import DataScienceServicesSection from './DataScienceServicesSection/DataScienceServicesSection';
import DataScienceOfferSection from './DataScienceOfferSection/DataScienceOfferSection';
import ModelsOfCollaborationSection from './ModelsOfCollaborationSection/ModelsOfCollaborationSection';
import TechnologiesMethodsSection from './TechnologiesMethodsSection/TechnologiesMethodsSection';
import RelatedServicesSection from './RelatedServicesSection/RelatedServicesSection';
import ContactForm from '../TechnicalConsulting/ContactForm/ContactForm';

const DataScienceConsulting = () => {
  return (
    <div>
      <DataScienceHeroSection />
      <DataScienceServicesSection />
      <DataScienceOfferSection />
      <ModelsOfCollaborationSection />
      <TechnologiesMethodsSection />
      {/* <RelatedServicesSection /> */}
      <ContactForm />
    </div>
  );
};

export default DataScienceConsulting;
