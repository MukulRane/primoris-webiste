import React from 'react';
import SapHero from './SapHero/SapHero';
import SapServicesSection from './SapServicesSection/SapServicesSection';
import SapSolutionsSection from './SapSolutionsSection/SapSolutionsSection';
import OurExpertiseSection from './OurExpertiseSection/OurExpertiseSection';
import FeaturesOfSAPSection from './FeaturesOfSAPSection/FeaturesOfSAPSection';
import ContactForm from '../TechnicalConsulting/ContactForm/ContactForm';

const SapDevelopment = () => {
  return (
    <div>
      <SapHero />
      <SapServicesSection />
      <SapSolutionsSection />
      <FeaturesOfSAPSection />
      <OurExpertiseSection />
      <ContactForm />
    </div>
  );
};

export default SapDevelopment;
