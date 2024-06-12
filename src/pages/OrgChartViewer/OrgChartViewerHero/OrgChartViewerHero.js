import React from 'react';
import './OrgChartViewerHero.css';
import ContactUsButton from '../../../components/ContactUsButton/ContactUsButton';

const OrgChartViewerHero = () => {
  return (
    <section className="org-viewer-hero-section-erp">
      <div className="org-viewer-hero-text-erp">
        <h1>OrgChart Viewer</h1>
        <ContactUsButton text="Contact Us" />
      </div>
      <div className="org-viewer-hero-image-tint"></div>
    </section>
  );
};

export default OrgChartViewerHero;