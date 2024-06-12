import React from 'react';
import ContactForm from '../TechnicalConsulting/ContactForm/ContactForm';
import OrgChartViewerSection from './OrgChartViewerSection/OrgChartViewerSection';
import OrgChartViewerKeyFeatures from './OrgChartViewerKeyFeatures/OrgChartViewerKeyFeatures';
import OrgChartViewerHero from './OrgChartViewerHero/OrgChartViewerHero';

const OrgChartViewer = () => {
  return (
    <div>
        <OrgChartViewerHero />
        <OrgChartViewerSection />
        <OrgChartViewerKeyFeatures />
        <ContactForm />
    </div>
  );
};

export default OrgChartViewer;
