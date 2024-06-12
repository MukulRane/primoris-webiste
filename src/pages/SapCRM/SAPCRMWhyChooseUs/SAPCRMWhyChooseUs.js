import React from 'react';
import './SAPCRMWhyChooseUs.css';

const SAPCRMWhyChooseUs = () => {
  return (
    <div className="sap-crm-why-choose-us-wrapper">
      <div className="sap-crm-why-choose-us">
        <div className="sap-crm-why-choose-us-text">
          <h2 className="sap-crm-why-choose-us-heading">Why Choose Us to Implement SAP CRM?</h2>
          <p>
            Each business has different needs and follows its own unique sales, marketing, and service operations. As a result, we think it is improper for your business to change its operations to fit a standard software platform without first seeking our advice.
          </p>
          <p>
            Our installation process attempts to use SAP CRM to fulfil your specific objectives. We first collaborate with you to assess your needs before developing a solution that is specifically suited to them.
          </p>
        </div>
        <div className="sap-crm-why-choose-us-image">
          <img src={require('../../../images/sap-crm-implementation.jpg')} alt="Why Choose Us" />
        </div>
      </div>
    </div>
  );
};

export default SAPCRMWhyChooseUs;
