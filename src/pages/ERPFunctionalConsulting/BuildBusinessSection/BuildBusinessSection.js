import React from 'react';
import './BuildBusinessSection.css';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import TextCard from '../TextCard/TextCard';

const businessData = [
  {
    title: 'Unified ERP Solution',
    description: 'Seamlessly manage retail and e-commerce with a single ERP.',
  },
  {
    title: 'Intelligent POS',
    description: 'Swift billing with Smart-POS! Simplify scanning and generate bills effortlessly.',
  },
  {
    title: 'Optimized Accounting',
    description: 'Unleash your business’s financial potential with our advanced accounting capabilities.',
  },
  {
    title: 'Strong CRM',
    description: 'Manage customer data, drive sales with our reliable CRM.',
  },
  {
    title: 'Intelligent Retail Solution',
    description: 'Unify in-store and digital data for enhanced customer experiences.',
  },
  {
    title: 'Revolutionary Omni-channel',
    description: 'Streamline and coordinate multi-channel business operations with a single viewpoint.',
  },
];

const BuildBusinessSection = () => {
  return (
    <div className="business-wrapper">
      <section className="business-section">
        <SectionTitle title="Build Your Business With Innovation" />
        <p className="business-description">
          Delegate the tasks you excel at and entrust the remainder to Primoris: Empowering your store with intelligent solutions that transform it into a cutting-edge smart store.
        </p>
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
            <img src={require('../../../images/erp.jpg')} alt="ERP" className="erp-image" />
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

export default BuildBusinessSection;
