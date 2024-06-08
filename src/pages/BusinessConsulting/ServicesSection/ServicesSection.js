import React from 'react';
import './ServicesSection.css';
import ServicesCard from '../ServicesCard/ServicesCard';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const servicesData = [
  'Solution Evaluation',
  'Creating Business cases',
  'Risk Assessment of the Current Environment',
  'Make or Buy Development analysis',
  'ROI Analysis of Technology',
  'Conduct feasibility studies',
  'Requirements Elicitation and Management',
  'Understand current Enterprise Architecture',
  'Prepare Use Case',
  'Create Wireframe',
  'Companywide Enterprise Analysis',
  'Create Requirements Traceability Matrix'
];

const ServicesSection = () => {
  return (
    <div className="business-services-section-wrapper">
        <div className="business-services-section">
            <div>
                <SectionTitle title="Our Services" />
            </div>
            <p className='business-services-section-p'>
                To meet the diverse needs of our clients, we provide a wide range of business consulting services. We have the expertise and knowledge to help you, whether you are a start-up looking for market entry strategies or an established company looking to optimize your operations. Our primary service offerings are as follows:
            </p>
            <div className="business-services-cards-container">
                {servicesData.map((service, index) => (
                <div className="business-services-card-wrapper" key={index}>
                    <ServicesCard title={service} />
                </div>
                ))}
            </div>
            <div className="business-services-cards-container-approach">
                <div className="business-services-cards-container">
                    <SectionTitle title="Our Approach" />
                </div>
                <p className='business-services-cards-container-approach-p'>
                    We believe that every business is unique, and there is no one-size-fits-all solution. That’s why we take a customized approach to our consulting services. We take the time to understand your specific goals, challenges, and opportunities, allowing us to develop tailored strategies and solutions that will propel your business forward.
                </p>
            </div>
        </div>
    </div>
  );
};

export default ServicesSection;
