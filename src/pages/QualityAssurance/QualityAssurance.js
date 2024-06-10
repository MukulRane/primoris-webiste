import React from 'react';
import QualityAssuranceHero from './QualityAssuanceHero/QualityAssuanceHero';
import ContactForm from '../TechnicalConsulting/ContactForm/ContactForm';
import QualityAssuranceSection from './QualityAssuranceSection/QualityAssuranceSection';
import QualityAssuranceImageSectionOne from './QualityAssuranceImageSectionOne/QualityAssuranceImageSectionOne';
import QualityAssuranceImageSectionTwo from './QualityAssuranceImageSectionTwo/QualityAssuranceImageSectionTwo';

const QualityAssurance = () => {
  return (
    <div>
      <QualityAssuranceHero />
      <QualityAssuranceImageSectionOne />
      <QualityAssuranceSection />
      <QualityAssuranceImageSectionTwo />
      <ContactForm />
    </div>
  );
};

export default QualityAssurance;
