import React from 'react';
import './IndustryExpertiseSection.css';
import SectionTitle from '../../ManagementConsulting/SectionTitle/SectionTitle';

const industryData = [
  {
    image: require('../../../images/big-data-industry-1.jpg'),
    title: 'Retail',
    points: [
      'Simple storage space',
      'Enhanced risk analysis',
      'Increased degree of personalisation',
      'Better cross-selling and up-selling'
    ]
  },
  {
    image: require('../../../images/big-data-industry-2.jpg'),
    title: 'Logistics',
    points: [
      'Fleet Monitoring in Real Time',
      'Infallible Upkeep',
      'Effective Warehouse Management',
      'Systematic Inventory Management'
    ]
  },
  {
    image: require('../../../images/big-data-industry-3.jpg'),
    title: 'Insurance and Finance',
    points: [
      'Risk Analysis',
      'Intensified Forecasting',
      'Industry Information in Real Time',
      'Fraud Detection and Avoidance'
    ]
  },
  {
    image: require('../../../images/big-data-industry-4.jpg'),
    title: 'Healthcare',
    points: [
      'Digital Health Records',
      'Increased Patient Involvement',
      'Real-Time Notification',
      'Predictive Modelling'
    ]
  },
  {
    image: require('../../../images/big-data-industry-5.jpg'),
    title: 'Real Estate',
    points: [
      'Income Maximisation',
      'Precise Property Assessments',
      'Advanced Property Classification Filters'
    ]
  }
];

const IndustryExpertiseSection = () => {
  return (
    <section className="industry-expertise-section">
      <SectionTitle title="Industry Expertise" />
      <div className="industry-cards-container">
        {industryData.map((industry, index) => (
          <div className="industry-card" key={index}>
            <img src={industry.image} alt={industry.title} />
            <div className="tint"></div>
            <div className="content">
              <h3>{industry.title}</h3>
              <ul>
                {industry.points.map((point, idx) => (
                  <li key={idx}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 48 48" fill="none">
                      <path d="M8.23831 38.7526L14.9722 34.9698L14.3253 36.9867C13.909 38.2847 15.2998 39.4202 16.4883 38.7526L40.4668 25.2828C41.4872 24.7095 41.4872 23.2404 40.4668 22.6672L16.4883 9.19739C15.2999 8.52978 13.909 9.66531 14.3253 10.9633L14.9722 12.9802L8.23831 9.19739C7.04985 8.52978 5.65901 9.66531 6.07535 10.9633L10.1999 23.8223C10.2317 23.9216 10.2317 24.0284 10.1999 24.1277L6.07535 36.9867C5.65901 38.2847 7.04985 39.4202 8.23831 38.7526Z" fill="#fff" stroke="white"></path>
                    </svg>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IndustryExpertiseSection;
