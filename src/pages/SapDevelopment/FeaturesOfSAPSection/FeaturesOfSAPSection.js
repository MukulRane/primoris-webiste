import React from 'react';
import './FeaturesOfSAPSection.css';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const featuresData = [
  {
    image: require('../../../images/sap-feature-1.jpg'),
    title: 'Automotive',
  },
  {
    image: require('../../../images/sap-feature-2.jpg'),
    title: 'Food and Beverages',
  },
  {
    image: require('../../../images/sap-feature-3.jpg'),
    title: 'Electronics',
  },
  {
    image: require('../../../images/sap-feature-4.jpg'),
    title: 'Retail & E-Commerce',
  },
  {
    image: require('../../../images/sap-feature-5.jpg'),
    title: 'Finance',
  },
  {
    image: require('../../../images/sap-feature-6.jpg'),
    title: 'Pharmaceutical',
  },
];

const FeaturesOfSAPSection = () => {
  return (
    <section className="features-of-sap-section">
      <SectionTitle title="Features of SAP" dividerColor="#000" />
      <p className="features-of-sap-description">
        In order to speed your transformation journey through agile delivery and continuous deployment with a value-led approach to return on investment, we leverage our knowledge and long-standing relationship with SAP innovators.
      </p>
      <div className="features-of-sap-cards-container">
        {featuresData.map((feature, index) => (
          <div className="feature-card" key={index}>
            <img src={feature.image} alt={feature.title} />
            <div className="tint"></div>
            <h3>{feature.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesOfSAPSection;
