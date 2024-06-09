import React from 'react';
import BigDataHero from './BigDataHero/BigDataHero';
import ContactForm from '../TechnicalConsulting/ContactForm/ContactForm';
import BigDataSolutionsSection from './BigDataSolutionsSection/BigDataSolutionsSection.js';
import JoinUsSection from './JoinUsSection/JoinUsSection.js';
import IndustryExpertiseSection from './IndustryExpertiseSection/IndustryExpertiseSection.js';
import TechnologyPartnersSection from './TechnologyPartnersSection/TechnologyPartnersSection.js';

const BigDataService = () => {
  return (
    <div>
        <BigDataHero />
        <ContactForm />
        <BigDataSolutionsSection />
        <JoinUsSection />
        <IndustryExpertiseSection />
        <TechnologyPartnersSection />
        <ContactForm />
    </div>
  );
};

export default BigDataService;
