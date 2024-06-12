import React from 'react';
import ContactForm from '../TechnicalConsulting/ContactForm/ContactForm';
import AdvantagesOfEMA from './AdvantagesOfEMA/AdvantagesOfEMA';
import AdvantagesofCompetition from './AdvantagesofCompetition/AdvantagesofCompetition';
import MigrationOfExistingArchives from './MigrationOfExistingArchives/MigrationOfExistingArchives';
import EMAForSAPHero from './EMAForSAPHero/EMAForSAPHero';

const EMAForSAP = () => {
  return (
    <div>
        <EMAForSAPHero />
        <AdvantagesOfEMA />
        <AdvantagesofCompetition />
        <MigrationOfExistingArchives />
        <ContactForm />
    </div>
  );
};

export default EMAForSAP;
