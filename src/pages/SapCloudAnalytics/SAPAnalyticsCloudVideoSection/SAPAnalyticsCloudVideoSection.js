import React from 'react';
import './SAPAnalyticsCloudVideoSection.css';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const SAPAnalyticsCloudVideoSection = () => {
  return (
    <section className="sap-analytics-cloud-video-section">
      <SectionTitle title="Key Features of SAP Analytics Cloud" dividerColor="#000" />
      <div className="sap-analytics-cloud-video-container">
        <iframe
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/acTruobWUUg"
          title="SAP Analytics Cloud Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default SAPAnalyticsCloudVideoSection;
