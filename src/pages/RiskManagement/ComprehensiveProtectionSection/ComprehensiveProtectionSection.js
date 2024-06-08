import React from 'react';
import './ComprehensiveProtectionSection.css';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const protectionData = [
  {
    image: require('../../../images/risk-management-protection-1.jpg'),
    title: 'Comprehensive Security Focus',
  },
  {
    image: require('../../../images/risk-management-protection-2.jpg'),
    title: 'Adaptive AI Engine',
  },
  {
    image: require('../../../images/risk-management-protection-3.jpg'),
    title: 'End-to-End Enterprise Approach',
  }
];

const ComprehensiveProtectionSection = () => {
  return (
    <section className="comprehensive-protection-section">
      <SectionTitle title="Comprehensive Protection" dividerColor="#000" />
      <div className="comprehensive-protection-cards-container">
        {protectionData.map((feature, index) => (
          <div className="protection-card" key={index}>
            <img src={feature.image} alt={feature.title} />
            <div className="tint"></div>
            <h3>{feature.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ComprehensiveProtectionSection;
