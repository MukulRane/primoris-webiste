import React from 'react';
import './SolutionsForIndustriesSection.css';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const solutionsData = [
  {
    image: require('../../../images/sap-cloud-finance.jpg'),
    title: 'Finances',
  },
  {
    image: require('../../../images/sap-cloud-sales.jpg'),
    title: 'Sales and Marketing',
  },
  {
    image: require('../../../images/sap-cloud-operations.jpg'),
    title: 'Operations',
  },
  {
    image: require('../../../images/sap-cloud-hr.jpg'),
    title: 'Human Resources',
  },
];

const SolutionsForIndustriesSection = () => {
  return (
    <section className="solutions-for-industries-section">
      <SectionTitle title="Discover Examples Of Solutions Adjusted To Specific Industries" dividerColor="#000" />
      <div className="solutions-for-industries-cards-container">
        {solutionsData.map((solution, index) => (
          <div className="solutions-for-industries-solution-card" key={index}>
            <img src={solution.image} alt={solution.title} />
            <div className="tint"></div>
            <h3>{solution.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SolutionsForIndustriesSection;
