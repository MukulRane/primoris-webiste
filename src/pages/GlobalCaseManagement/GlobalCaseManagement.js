import React from 'react';
import ContactForm from '../TechnicalConsulting/ContactForm/ContactForm';
import CaseManagementSystem from './CaseManagementSystem/CaseManagementSystem';
import GCMOurSolution from './GCMOurSolution/GCMOurSolution';
import MainAdvantagesSection from './MainAdvantagesSection/MainAdvantagesSection';
import GCMHero from './GCMHero/GCMHero';

const GlobalCaseManagement = () => {
  return (
    <div>
        <GCMHero />
        <CaseManagementSystem />
        <GCMOurSolution />
        <MainAdvantagesSection />
        <ContactForm />
    </div>
  );
};

export default GlobalCaseManagement;
