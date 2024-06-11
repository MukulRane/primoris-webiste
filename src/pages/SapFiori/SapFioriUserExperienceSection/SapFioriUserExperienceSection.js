import React from 'react';
import './SapFioriUserExperienceSection.css';

const SapFioriUserExperienceSection = () => {
  return (
    <section className="sap-fiori-user-experience-section">
      <div className="sap-fiori-user-experience-content">
        <h2>Why work with us on a sap fiori user experience plan?</h2>
        <p>Poor User Experience (UX) has the potential to cost businesses trillions of dollars in revenue, and 89% of businesses will compete primarily on the basis of customer experience, according to Gartner.</p>
        <p>Primoris Systems is aware of how difficult it is for businesses to replace inflexible, fragmented systems that do not put the user or customer first. Resources and development budgets might be constrained, and it takes significant efforts to build the best mobile experiences. Because of this, we have a lot riding on the readily customizable Fiori User Experience approach.</p>
      </div>
      <div className="sap-fiori-user-experience-image">
        <img src={require('../../../images/sap-fiori-why-work.jpg')} alt="SAP Fiori User Experience" />
      </div>
    </section>
  );
};

export default SapFioriUserExperienceSection;
