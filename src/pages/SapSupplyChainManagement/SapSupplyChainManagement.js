import React from 'react';
import ContactForm from '../../pages/TechnicalConsulting/ContactForm/ContactForm';
import SapSupplyChainManagementHero from './SapSupplyChainManagementHero/SapSupplyChainManagementHero';
import SapSupplyChainWhyChoosePrimorisSection from './SapSupplyChainWhyChoosePrimorisSection/SapSupplyChainWhyChoosePrimorisSection';
import SupplyChainERPSolution from './SupplyChainERPSolution/SupplyChainERPSolution';
import SupplyChainComprehensiveProtectionSection from './SupplyChainComprehensiveProtectionSection/SupplyChainComprehensiveProtectionSection';
import SupplyChainQualityAssuranceSection from './SupplyChainQualityAssuranceSection/SupplyChainQualityAssuranceSection';
import SupplyChainIndustrySolutionsSection from './SupplyChainIndustrySolutionsSection/SupplyChainIndustrySolutionsSection';
import FullWidthImageSection from './FullWidthImageSection/FullWidthImageSection';
import WinningWithUsSection from './WinningWithUsSection/WinningWithUsSection';

const SapSupplyChainManagement = () => {
  return (
    <div>
      <SapSupplyChainManagementHero />
      <SapSupplyChainWhyChoosePrimorisSection />
      <SupplyChainERPSolution />
      <SupplyChainComprehensiveProtectionSection />
      <SupplyChainIndustrySolutionsSection />
      <FullWidthImageSection />
      <SupplyChainQualityAssuranceSection />
      <WinningWithUsSection />
      <ContactForm />
    </div>
  );
};

export default SapSupplyChainManagement;
