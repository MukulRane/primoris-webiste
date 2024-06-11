import React from 'react';
import ContactForm from '../../pages/TechnicalConsulting/ContactForm/ContactForm';
import SapFioriHowPerformed from './SapFioriHowPerformed/SapFioriHowPerformed';
import SapFioriBanner from './SapFioriBanner/SapFioriBanner';
import SapFioriLeftRightSection from './SapFioriLeftRightSection/SapFioriLeftRightSection';
import SapFioriUserExperienceSection from './SapFioriUserExperienceSection/SapFioriUserExperienceSection';
import SapFioriHero from './SapFioriHero/SapFioriHero';

const SapFiori = () => {
  return (
    <div>
      <SapFioriHero />
      <SapFioriUserExperienceSection />
      <SapFioriHowPerformed />
      <SapFioriBanner />
      <SapFioriLeftRightSection />
      <ContactForm />
    </div>
  );
};

export default SapFiori;
