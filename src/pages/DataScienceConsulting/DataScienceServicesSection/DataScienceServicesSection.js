import React from 'react';
import './DataScienceServicesSection.css';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const servicesData = [
  {
    title: 'Operational Intelligence',
    description: 'Enhancing process performance via the identification of deviations and undesired trends, the investigation of their underlying causes, and the forecasting and prediction of performance.'
  },
  {
    title: 'Supply-chain Management',
    description: 'Supply chain management is improved by accurate demand forecasts, suggestions for inventory optimisation, and supplier- and risk assessments.'
  },
  {
    title: 'Product Quality',
    description: 'Proactive detection of manufacturing process variances that impact product quality and interruptions.'
  },
  {
    title: 'Predictive Maintenance',
    description: 'Monitoring equipment, spotting and documenting trends that indicate pre-failure and failure stages.'
  },
  {
    title: 'Dynamic Route Planning',
    description: 'On the examination of vehicle maintenance data, real-time GPS data, route traffic data, road maintenance data, weather data, etc., machine learning algorithms are used to select the best delivery route.'
  },
  {
    title: 'Personalising the Customer Experience',
    description: 'Identifying trends in client behaviour and segmenting the customer base to create recommendation engines, provide individualised offerings, etc.'
  },
  {
    title: 'Customer Attrition',
    description: 'Identifying potential clients who could leave by creating predictions based on their behaviour.'
  },
  {
    title: 'Sales Process Improvement',
    description: 'Advanced lead and opportunity scoring, suggestions for the next stage in the sales process, alerts on unfavourable customer feedback, etc.'
  },
  {
    title: 'Financial Risk Management',
    description: 'Estimating project earnings, identifying financial risks, and determining the creditworthiness of potential clients.'
  },
  {
    title: 'Optimisation of Patient Care',
    description: 'Identifying at-risk individuals, enabling individualised medical care, foreseeing potential symptom emergence, etc.'
  },
  {
    title: 'Image Evaluation',
    description: 'Reducing human mistake through automated grading, counting, and face or emotional identification.'
  }
];

const DataScienceServicesSection = () => {
  return (
    <section className="data-science-services-section">
      <SectionTitle title="Use Cases Primoris Systems Offers Data Science Services" dividerColor="#000" />
      <div className="data-science-services-cards-container">
        {servicesData.map((service, index) => (
          <div className="data-science-services-card-wrapper" key={index}>
            <div className="data-science-service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DataScienceServicesSection;
