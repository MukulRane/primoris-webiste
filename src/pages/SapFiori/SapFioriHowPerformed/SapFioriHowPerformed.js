import React from 'react';
import '../../ERPFunctionalConsulting/BuildBusinessSection/BuildBusinessSection.css';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import TextCard from '../../ERPFunctionalConsulting/TextCard/TextCard';

const businessData = [
  {
    title: 'Exceptional User Experience',
    description: 'Create beautiful, tested app interfaces that are required at every stage of your business with ease',
  },
  {
    title: 'Everyone can design apps with low code',
    description: 'Create future-proof apps quickly that your clients, developers, and end users will adore',
  },
  {
    title: 'Mobile offline capabilities',
    description: 'Create hybrid applications that can be used on any device and anywhere',
  },
  {
    title: 'Accelerating systems',
    description: 'Any data from SAP or other sources, including Salesforce and Microsoft, should be sourced for odata integration',
  },
  {
    title: 'Simplicity of scaling and security',
    description: 'Deliver Fiori apps with confidence, securing scaling to millions of users and devices',
  },
  {
    title: 'Flexibility in development',
    description: 'A large design system make up SAP Fiori, a framework based on HTML5 technology',
  },
];

const SapFioriHowPerformed = () => {
  return (
    <div className="business-wrapper">
      <section className="business-section">
      <SectionTitle title="How is &quot;Fiori&quot; performed by Primoris Systems?" />
        <div className="business-content">
          <div className="business-cards left">
            {businessData.slice(0, 3).map((item, index) => (
              <TextCard
                key={index}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
          <div className="erp-image-container">
            <img src={require('../../../images/sap-fiori-how-performed.jpg')} alt="ERP" className="erp-image" />
          </div>
          <div className="business-cards right">
            {businessData.slice(3).map((item, index) => (
              <TextCard
                key={index}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SapFioriHowPerformed;
