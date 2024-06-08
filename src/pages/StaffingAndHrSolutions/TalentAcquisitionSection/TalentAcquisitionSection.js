import React from 'react';
import './TalentAcquisitionSection.css';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const TalentAcquisitionSection = () => {
  return (
    <section className="talent-acquisition-section">
      <SectionTitle title="Talent Acquisition" dividerColor="#000" />
      <p className="talent-description">
        Primoris’s staffing solutions extend beyond candidate expertise and match with culture. We understand that hiring managers’ time is valuable and that it is crucial to thoroughly screen candidate profiles. Healthcare, Entertainment, Manufacturing and High-Tech, Energy and Utilities, Retail, Public Sector, Banking and financial services, Communications, and Information Tech are just a few of the industries in which we have an extensive amount of experience.
      </p>
    </section>
  );
};

export default TalentAcquisitionSection;
