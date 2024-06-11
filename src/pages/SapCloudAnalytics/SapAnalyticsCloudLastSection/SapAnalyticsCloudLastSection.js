import React from 'react';
import './SapAnalyticsCloudLastSection.css';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import analyticsCloudImage from '../../../images/sap-cloud-analytics-last.png';

const SapAnalyticsCloudLastSection = () => {
  return (
    <section className="sap-cloud-last-sap-analytics-cloud-section">
      <SectionTitle title="SAP Analytics Cloud" dividerColor="#000" />
      <div className="sap-cloud-last-content-container">
        <div className="sap-cloud-last-text-content">
          <h3>SaaS</h3>
          <p>The paradigm for software delivery.</p>
          <h3>Unified</h3>
          <p>BI, Predictive & Planning in one service.</p>
          <h3>Connected</h3>
          <p>Live Connectivity enables SaaS for everyone.</p>
          <h3>Digital Boardroom</h3>
          <p>Enterprise-wide scenarios covering full performance cycle.</p>
        </div>
        <div className="sap-cloud-last-image-content">
          <img src={analyticsCloudImage} alt="SAP Analytics Cloud" />
        </div>
      </div>
    </section>
  );
};

export default SapAnalyticsCloudLastSection;
