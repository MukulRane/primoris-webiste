import React from 'react';
import './GRCCardSection.css';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import StaffingServicesCard from '../../StaffingAndHrSolutions/StaffingServiceCard/StaffingServiceCard';

const grcData = [
  'Primoris\'s team specializes in supporting global companies with data Governance Risk and Compliance (GRC) requirements',
  'Many companies have multiple databases and master data tables, leading to complexity in meeting internal and external GRC reporting',
  'The team works at the metadata level to analyze and provide gap analysis for ERP instances, BI, Data Warehouse, CRM, Portal, and Social Media needs across different database environments',
  'By utilizing data building blocks, they identify gaps in meeting GRC requirements and highlight anomalies in data element construction',
  'The team ensures the security of databases and adheres to regulatory compliance for database auditing'
];

const GRCCardSection = () => {
  return (
    <section className="grc-card-section">
      <SectionTitle title="Streamlining GRC Compliance through Data Governance and Analysis" dividerColor="#000" />
      <div className="technical-hiring-content">
        <div className="technical-cards-container">
          {grcData.map((item, index) => (
            <div key={index} className="technical-card-wrapper">
              <StaffingServicesCard title={item} />
            </div>
          ))}
        </div>
        <div className="technical-image-container">
          <img src={require('../../../images/staffing-technical-hiring.jpg')} alt="Technical Hiring" />
        </div>
      </div>
    </section>
  );
};

export default GRCCardSection;
