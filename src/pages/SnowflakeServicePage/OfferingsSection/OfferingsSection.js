import React from 'react';
import './OfferingsSection.css';
import OfferingCard from '../OfferingCard/OfferingCard';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const offeringsData = [
  {
    title: 'Benchmark Analysis of Snowflakes',
    description: 'Discover how Snowflake stacks up against competing cloud data platforms using your own dataset, preferred workloads, tools, and common usage patterns.',
  },
  {
    title: 'Data Governance & Strategy',
    description: 'To unleash the value of your data, identify use cases and investigate solutions using ideation and viability assessments.',
  },
  {
    title: 'Integration & Architecture of Data',
    description: 'With a range of tools, technologies, and methods that optimize impact speed, choose, link, migrate, consolidate, and prepare your data in Snowflake.',
  },
  {
    title: 'Snowflake Migration',
    description: 'For cloud-based, actionable analytics, reporting, BI, and other critical workloads, develop and implement a customized migration strategy and approach that includes assessment, analysis, validation, and migration engineering.',
  },
  {
    title: 'Snowflake\'s Health Check',
    description: 'Examine your present Snowflake setup to find areas for technological advancement and added financial benefit.',
  },
  {
    title: 'Operations for Snowflakes',
    description: 'Apply best practices to optimize your Snowflake instance so that it runs data operations efficiently and helps you reach your business goals.',
  },
];

const OfferingsSection = () => {
  return (
    <div className="offerings-section">
      <SectionTitle title="Our Offerings" dividerColor="#000" />
      <div className="offerings-container">
        {offeringsData.map((offering, index) => (
          <OfferingCard key={index} title={offering.title} description={offering.description} />
        ))}
      </div>
    </div>
  );
};

export default OfferingsSection;
