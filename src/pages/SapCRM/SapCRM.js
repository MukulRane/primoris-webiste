import React from 'react';
import SAPCRMSection from './SapCRMSection/SAPCRMSection';
import CloudOrOnPremiseSection from './CloudOrOnPremiseSection/CloudOrOnPremiseSection';
import CapCRMCloudAdvantages from './SapCRMCloudAdvantages/SapCRMCloudAdvantages';
import SAPCRMWhyChooseUs from './SAPCRMWhyChooseUs/SAPCRMWhyChooseUs';
import SAPCRMSystemBenefits from './SAPCRMSystemBenefits/SAPCRMSystemBenefits';
import ContactForm from '../TechnicalConsulting/ContactForm/ContactForm';
import SapCRMHero from './SapCRMHero/SapCRMHero';

const SapCRM = () => {
  return (
    <div>
        <SapCRMHero />
        <SAPCRMSection />
        <CloudOrOnPremiseSection />
        <CapCRMCloudAdvantages />
        <SAPCRMWhyChooseUs />
        <SAPCRMSystemBenefits />
        <ContactForm />
    </div>
  );
};

export default SapCRM;
