import React from 'react';
import './SAPAnalyticsCloudSection.css';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const SAPAnalyticsCloudSection = () => {
  return (
    <section className="sap-analytics-cloud-section">
      <p className="sap-analytics-cloud-description">
        SAP Analytics Cloud (SAC) is a Business Intelligence tool that allows you to create complex analytics and explore data from multiple sources within a unified system. Using the cloud solution in a SaaS (Software as a Service) model guarantees access to an always up-to-date and secure application, which doesn’t require additional installations.
      </p>
      <SectionTitle title="SAP Analytics Cloud" dividerColor="#000" />
      <p className="sap-analytics-cloud-subtitle">
        Integrates seamlessly with various source systems, including
      </p>
      <div className="sap-analytics-cloud-logos-container">
        <img src={require('../../../images/sap-cloud-amazon.png')} alt="AWS" />
        <img src={require('../../../images/sap-cloud-drive.png')} alt="Google Drive" />
        <img src={require('../../../images/sap-cloud-sap.jpg')} alt="SAP" />
        <img src={require('../../../images/sap-cloud-sql.png')} alt="SQL" />
        <img src={require('../../../images/sap-cloud-salesforce.jpg')} alt="Salesforce" />
      </div>
    </section>
  );
};

export default SAPAnalyticsCloudSection;
