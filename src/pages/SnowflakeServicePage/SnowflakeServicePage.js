import React from 'react';
import SnowflakeHero from './SnowflakeHero/SnowflakeHero';
import SecureDataSection from './SecureDataSection/SecureDataSection';
import OfferingsSection from './OfferingsSection/OfferingsSection.js';
import BenchmarkSection from './BenchmarkSection/BenchmarkSection.js';
import ContactForm from '../TechnicalConsulting/ContactForm/ContactForm.js';

const SnowflakeServicePage = () => {
  return (
    <div>
      <SnowflakeHero />
      <SecureDataSection />
      <OfferingsSection />
      <BenchmarkSection />
      <ContactForm />
    </div>
  );
};

export default SnowflakeServicePage;
