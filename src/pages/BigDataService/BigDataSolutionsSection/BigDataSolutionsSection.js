import React from 'react';
import './BigDataSolutionsSection.css';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const bigDataSolutions = [
  {
    title: 'Big data app development',
    description: 'We provide big data solutions so that you may have access to robust analytics, first-rate data protection, and dependable performance.'
  },
  {
    title: 'Big data consulting',
    description: 'Do you want to know how big data might benefit your company? Let our professionals handle every part of converting your data into money.'
  },
  {
    title: 'Big data analytics',
    description: 'Our team converts massive volumes of raw data into personalised dashboards and visually appealing reports using BI skills, making analytics simple to handle.'
  },
  {
    title: 'Big data management',
    description: 'To ensure a high degree of data quality and accessibility, we’ll take care of organising your data flows into high-performance platforms.'
  }
];

const BigDataSolutionsSection = () => {
  return (
    <section className="big-data-solutions-section">
      <SectionTitle title="Big Data Solutions" dividerColor="#000" />
      <div className="big-data-solutions-cards-container">
        {bigDataSolutions.map((solution, index) => (
          <div className="big-data-card" key={index}>
            <h4>{solution.title}</h4>
            <p>{solution.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BigDataSolutionsSection;
