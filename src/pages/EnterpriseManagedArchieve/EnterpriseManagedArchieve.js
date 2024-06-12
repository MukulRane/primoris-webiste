import React from 'react';
import ContactForm from '../../pages/TechnicalConsulting/ContactForm/ContactForm';
import EMAMainAdvantages from './EMAMainAdvantages/EMAMainAdvantages';
import SectionWithEqualHeight from './SectionWithEqualHeight/SectionWithEqualHeight';
import CenteredTextBox from './CenteredTextBox/CenteredTextBox';
import EnterpriseManagedArchieveHero from './EnterpriseManagedArchieveHero/EnterpriseManagedArchieveHero';

const EnterpriseManagedArchieve = () => {
  return (
    <div>
      <EnterpriseManagedArchieveHero />
      <CenteredTextBox />
      <SectionWithEqualHeight />
      <EMAMainAdvantages />
      <ContactForm />
    </div>
  );
};

export default EnterpriseManagedArchieve;
