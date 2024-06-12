import React from 'react';
import './SapHybrisHANAReadiness.css';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const offerData = [
  {
    title: '1. Support Consulting for SAP Hybris Solutions',
    points: [
      'Design of an Ecommerce Solution Roadmap',
      'Management of the customer journey',
      'Specifying an implementation plan'
    ]
  },
  {
    title: '2. Sustained Integration',
    points: [
      'Integration with other SAP Enterprise Systems (SAP Sales Cloud, SAP Service Cloud, SAP Marketing Cloud, and SAP Customer Data Cloud)',
      'Integration with third-party services (data storage options, payment processing, delivery services)'
    ]
  },
  {
    title: '3. Support for Migration',
    points: [
      'Transform to SAP Commerce Cloud without interruption from other e-commerce platforms'
    ]
  },
];

const SapHybrisHANAReadiness = () => {
  return (
    <section className="sap-hybris-data-science-offer-section">
      <SectionTitle title="HANA Readiness Evaluation​" dividerColor="#000" />
      <div className="sap-hybris-data-science-offer-content">
        <div className="sap-hybris-offer-cards-container">
          {offerData.map((offer, index) => (
            <div key={index} className="sap-hybris-offer-card">
              <div className="sap-hybris-offer-title">{offer.title}</div>
              <div className="sap-hybris-offer-points">
                <ul>
                  {offer.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="sap-hybris-offer-image-container">
          <img src={require('../../../images/sap-hybris-hana-readiness.jpg')} alt="Data Science Offer" />
        </div>
      </div>
    </section>
  );
};

export default SapHybrisHANAReadiness;
