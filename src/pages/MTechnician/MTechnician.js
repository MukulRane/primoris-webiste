import React from 'react';
import ContactForm from '../TechnicalConsulting/ContactForm/ContactForm';
import MTechnicianKeyFeatues from './MTechnicialKeyFeatures/MTechnicialKeyFeatures';
import EnterpriseWorkforceManagementSection from './EnterpriseWorkforceManagementSection/EnterpriseWorkforceManagementSection';
import MTechnicianHero from './MTechnicianHero/MTechnicianHero';

const MTechnician = () => {
  return (
    <div>
        <MTechnicianHero />
        <MTechnicianKeyFeatues />
        <EnterpriseWorkforceManagementSection />
        <ContactForm />
    </div>
  );
};

export default MTechnician;
