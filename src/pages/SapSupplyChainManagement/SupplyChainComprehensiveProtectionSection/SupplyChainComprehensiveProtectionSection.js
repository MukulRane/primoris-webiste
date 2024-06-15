import React from 'react';
import './SupplyChainComprehensiveProtectionSection.css';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const protectionData = [
  {
    image: require('../../../images/supply-chain-1.jpg'),
    title: 'Finances',
  },
  {
    image: require('../../../images/supply-chain-2.jpg'),
    title: 'Stock Control',
  },
  {
    image: require('../../../images/supply-chain-3.jpg'),
    title: 'CRM',
  },
  {
    image: require('../../../images/supply-chain-4.jpg'),
    title: 'Purchasing',
  },
  {
    image: require('../../../images/supply-chain-5.jpg'),
    title: 'Sales',
  },
  {
    image: require('../../../images/supply-chain-6.jpg'),
    title: 'Services',
  },
  {
    image: require('../../../images/supply-chain-7.jpg'),
    title: 'Reporting',
  },
  {
    image: require('../../../images/supply-chain-8.jpg'),
    title: 'Manufacturing',
  },
];

const SupplyChainComprehensiveProtectionSection = () => {
  return (
    <section className="supply-chain-comprehensive-protection-section">
      <SectionTitle title="Comprehensive Protection" dividerColor="#000" />
      <div className="supply-chain-comprehensive-protection-cards-container">
        {protectionData.map((feature, index) => (
          <div className="supply-chain-protection-card" key={index}>
            <img src={feature.image} alt={feature.title} />
            <div className="supply-chain-tint"></div>
            <h3>{feature.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SupplyChainComprehensiveProtectionSection;