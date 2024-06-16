import React from 'react';
import './ComprehensiveProtectionSection.css';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const protectionData = [
  {
    image: require('../../../images/risk-management-protection-1.jpg'),
    title: 'Comprehensive Security Focus',
    subtitle: 'Primoris specializes in addressing security concerns across three phases: External, Internal, and Client/IOT device level. This covers a wide range of security requirements, including PCI-DSS, HIPAA, FISM, and Sox data Audit.'
  },
  {
    image: require('../../../images/risk-management-protection-2.jpg'),
    title: 'Adaptive AI Engine',
    subtitle: 'Primoris utilizes an advanced Artificial Intelligence (AI) engine for security purposes. Unlike legacy systems, their stateful Firewall analyzes network connections and tracks their operating state and characteristics, enhancing security measures.'
  },
  {
    image: require('../../../images/risk-management-protection-3.jpg'),
    title: 'End-to-End Enterprise Approach',
    subtitle: 'Primoris offers an all-encompassing enterprise approach to security. This includes the capability to consolidate multiple application areas such as Identity Access Management (IAM), Single Sign-On (SSO), and Multi-Factor Authentication (MFA) into a single, unified platform.'
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
            <div className="tint">
              <h3>{feature.title}</h3>
              <p>{feature.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ComprehensiveProtectionSection;
