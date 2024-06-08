import React from 'react';
import StaffingAndHrSolutionsHero from './StaffingAndHrSolutionsHero/StaffingAndHrSolutionsHero';
import TalentAcquisitionSection from './TalentAcquisitionSection/TalentAcquisitionSection';
import TechnicalHiringSection from './TechnicalHiringSection/TechnicalHiringSection';
import BusinessFunctionHiringSection from './BusinessFunctionHiringSection/BusinessFunctionHiringSection';
import LeadershipRecruitment from './LeadershipRecruitment/LeardershipRecruitment';
import SearchMethodologySection from './SearchMethodologySection/SearchMethodologySection';
import OurProcessSection from './OurProcessSection/OurProcessSection';
import ContactForm from '../TechnicalConsulting/ContactForm/ContactForm';

const StaffingAndHrSolutions = () => {
  return (
    <div>
      <StaffingAndHrSolutionsHero />
      <TalentAcquisitionSection />
      <TechnicalHiringSection />
      <BusinessFunctionHiringSection />
      <LeadershipRecruitment />
      <SearchMethodologySection />
      <OurProcessSection />
      <ContactForm />
    </div>
  );
};

export default StaffingAndHrSolutions;
