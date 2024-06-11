import React from 'react';
import ContactForm from '../../pages/TechnicalConsulting/ContactForm/ContactForm';
import SapHanaHero from './SapHanaHero/SapHanaHero';
import NextGenCommerceSection from './NextGenCommerceSection/NextGenCommerceSection';
import HANAReadinessEvaluationSection from './HANAReadinessEvaluationSection/HANAReadinessEvaluationSection';
import TechnicalMigrationSection from './TechnicalMigrationSection/TechnicalMigrationSection';

const SapHana = () => {
  return (
    <div>
      <SapHanaHero />
      <NextGenCommerceSection />
      <HANAReadinessEvaluationSection />
      <TechnicalMigrationSection />
      <ContactForm />
    </div>
  );
};

export default SapHana;
