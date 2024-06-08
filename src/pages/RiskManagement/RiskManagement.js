import React from 'react';
import RiskManagementHero from './RiskManagementHero/RiskManagementHero';
import GRCCardSection from './GRCCardSection/GRCCardSection';
import ComprehensiveProtectionSection from './ComprehensiveProtectionSection/ComprehensiveProtectionSection';
import SecuritySection from './SecuritySection/SecuritySection';
import ContactForm from '../TechnicalConsulting/ContactForm/ContactForm';

const RiskManagement = () => {
  return (
    <div>
      <RiskManagementHero />
      <GRCCardSection />
      <ComprehensiveProtectionSection />
      <SecuritySection />
      <ContactForm />
    </div>
  );
};

export default RiskManagement;
