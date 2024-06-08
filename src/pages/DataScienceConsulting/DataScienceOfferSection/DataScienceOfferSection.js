import React from 'react';
import './DataScienceOfferSection.css';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const offerData = [
  {
    title: '1. Business needs evaluation',
    points: [
      'Defining the business goals that data science will help to achieve',
      'Identifying drawbacks of the current data science solution',
      'Deciding on the deliverables for data science'
    ]
  },
  {
    title: '2. Data preparation',
    points: [
      'Data science source determination',
      'Gathering, transforming, and cleaning data'
    ]
  },
  {
    title: '3. ML model evaluation and tuning',
    points: []
  },
  {
    title: '4. Design and development of machine learning (ML) models',
    points: [
      'Data science insights in the form of reports and dashboards are ready for commercial usage.',
      'Self-service app powered by custom ML (optional).',
      'Integration of ML models into other applications is optional.'
    ]
  },
  {
    title: '5. Data science support consultations, user and administrator training',
    points: []
  }
];

const DataScienceOfferSection = () => {
  return (
    <section className="data-science-offer-section">
      <SectionTitle title="What We Offer in Data Science Services" dividerColor="#000" />
      <div className="data-science-offer-content">
        <div className="offer-cards-container">
          {offerData.map((offer, index) => (
            <div key={index} className="offer-card">
              <div className="offer-title">{offer.title}</div>
              <div className="offer-points">
                <ul>
                  {offer.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="offer-image-container">
          <img src={require('../../../images/data-science-offer.jpg')} alt="Data Science Offer" />
        </div>
      </div>
    </section>
  );
};

export default DataScienceOfferSection;
