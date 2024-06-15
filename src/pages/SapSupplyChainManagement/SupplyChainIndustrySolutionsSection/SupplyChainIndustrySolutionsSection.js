import React from 'react';
import './SupplyChainIndustrySolutionsSection.css';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import ServicesCard from '../../BusinessConsulting/ServicesCard/ServicesCard';

const industrySolutionsData = [
  'Manufacturing',
  'Car Rental Agency',
  'Chemical Industry',
  'Dairy Industry',
  'Construction & Building Industry',
  'Gems & Jewelry Industry',
  'Food & Beverage Industry',
  'High Tech and Electronics Industry',
  'Mall & Facilities',
  'Packaging Industry',
  'Publication Industry',
  'Retail Industry',
  'Education Industry',
  'Sports Industry',
  'Oil & Gas Industry',
  'Warehouse Industry',
  'Manufacturing & Production Industry',
  'Pharma and Life Sciences Industry',
  'Trading and Distribution Industry'
];

const SupplyChainIndustrySolutionsSection = () => {
  return (
    <div className="supply-chain-industry-solutions-wrapper">
      <div className="supply-chain-industry-solutions-section">
        <SectionTitle title="21+ Industry Solutions" />
        <p className="supply-chain-industry-solutions-description">
          Primoris System provides industry-specific SAP Business One solutions tailored to seamlessly integrate with industry requirements, company processes, and best practices.
        </p>
        <div className="supply-chain-industry-solutions-cards-container">
          {industrySolutionsData.map((solution, index) => (
            <div className="supply-chain-industry-solutions-card-wrapper" key={index}>
              <ServicesCard title={solution} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SupplyChainIndustrySolutionsSection;
