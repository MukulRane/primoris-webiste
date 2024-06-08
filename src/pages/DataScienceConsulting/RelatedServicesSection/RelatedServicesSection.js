import React, { useState } from 'react';
import './RelatedServicesSection.css';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const serviceDescriptions = {
  "Machine Learning Consulting": "ML-powered solutions are advised and developed to assist businesses in locating hidden patterns in vast amounts of data to allow accurate forecasting, root-cause analysis, automated visual inspection, etc.",
  "Big Data Services": "Big Data Services help organizations analyze vast amounts of data to uncover hidden patterns, correlations, and insights.",
  "Data Mining Services": "Data Mining Services focus on extracting valuable information from large datasets to support decision-making and strategic planning.",
  "Image Analysis Solutions": "Image Analysis Solutions provide automated visual inspection, grading, and counting through advanced image recognition technologies."
};

const RelatedServicesSection = () => {
  const [description, setDescription] = useState(serviceDescriptions["Machine Learning Consulting"]);

  const handleMouseEnter = (service) => {
    setDescription(serviceDescriptions[service]);
  };

  return (
    <section className="related-services-section">
      <SectionTitle title="We Provide Related Data Science Services" dividerColor="#000" />
      <div className="related-services-container">
        <div className="main-ring">
          <div className="service-description">
            {description}
          </div>
        </div>
        <div 
          className="service-circle circle-1" 
          onMouseEnter={() => handleMouseEnter("Machine Learning Consulting")}
          style={{ animation: 'eael-1-anim-3-circle-animation 2s ease 0s 1 normal forwards' }}
        >
          Machine Learning Consulting
        </div>
        <div 
          className="service-circle circle-2" 
          onMouseEnter={() => handleMouseEnter("Big Data Services")}
          style={{ animation: 'eael-1-anim-3-circle-animation 2s ease 0s 1 normal forwards' }}
        >
          Big Data Services
        </div>
        <div 
          className="service-circle circle-3" 
          onMouseEnter={() => handleMouseEnter("Data Mining Services")}
          style={{ animation: 'eael-1-anim-3-circle-animation 2s ease 0s 1 normal forwards' }}
        >
          Data Mining Services
        </div>
        <div 
          className="service-circle circle-4" 
          onMouseEnter={() => handleMouseEnter("Image Analysis Solutions")}
          style={{ animation: 'eael-1-anim-3-circle-animation 2s ease 0s 1 normal forwards' }}
        >
          Image Analysis Solutions
        </div>
      </div>
    </section>
  );
};

export default RelatedServicesSection;
