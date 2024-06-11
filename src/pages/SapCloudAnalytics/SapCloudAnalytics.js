import React from 'react';
import ContactForm from '../../pages/TechnicalConsulting/ContactForm/ContactForm';
import SAPAnalyticsCloudSection from './SAPAnalyticsCloudSection/SAPAnalyticsCloudSection';
import SapCloudAnalyticsHero from './SapCloudAnalyticsHero/SapCloudAnalyticsHero';
import SAPAnalyticsCloudVideoSection from './SAPAnalyticsCloudVideoSection/SAPAnalyticsCloudVideoSection';
import TypesOfConnectionsSection from './TypesOfConnectionsSection/TypesOfConnectionsSection';
import SapCloudOurOffer from './SapCloudOurOffer/SapCloudOurOffer';
import SolutionsForIndustriesSection from './SolutionsForIndustriesSection/SolutionsForIndustriesSection';
import SapCloudExpertiseSection from './SapCloudExpertise/SapCloudExpertise';
import SapCloudPrimosisOffer from './SapCloudPrimosisOffer/SapCloudPrimosisOffer';
import SapAnalyticsCloudLastSection from './SapAnalyticsCloudLastSection/SapAnalyticsCloudLastSection';

const SapCloudAnalytics = () => {
  return (
    <div>
      <SapCloudAnalyticsHero />
      <SAPAnalyticsCloudSection />
      <SAPAnalyticsCloudVideoSection />
      <TypesOfConnectionsSection />
      <SapCloudOurOffer />
      <SolutionsForIndustriesSection />
      <SapCloudExpertiseSection />
      <SapCloudPrimosisOffer />
      <SapAnalyticsCloudLastSection />
      <ContactForm />
    </div>
  );
};

export default SapCloudAnalytics;
