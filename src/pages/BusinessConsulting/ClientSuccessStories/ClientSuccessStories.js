import React from 'react';
import './ClientSuccessStories.css';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const ClientSuccessStories = () => {
  return (
    <div className="client-success-wrapper">
      <div className="client-success">
        <div className="client-success-text">
          <SectionTitle title="Client Success Stories" dividerColor="#fff" />
          <p>
            We've had the privilege of working with a wide range of clients from various industries, assisting them in achieving outstanding results. Our consulting services have helped our clients overcome challenges, capitalize on opportunities, and achieve their business goals, whether they are startups experiencing rapid growth or established companies seeking transformation.
          </p>
        </div>
        <div className="client-success-image">
          <img src={require('../../../images/business-consulting-client.jpg')} alt="Client Success Stories" />
        </div>
      </div>
    </div>
  );
};

export default ClientSuccessStories;
