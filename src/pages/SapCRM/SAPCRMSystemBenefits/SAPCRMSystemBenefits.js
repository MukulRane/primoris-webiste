import React from 'react';
import './SAPCRMSystemBenefits.css';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const SAPCRMSystemBenefits = () => {
  return (
    <div className="sap-crm-system-benefits-wrapper">
      <div className="sap-crm-system-benefits">
        <div className="sap-crm-system-benefits-text">
          <SectionTitle title="SAP CRM System Benefits" dividerColor="#000" />
          <div className="sap-crm-system-benefits-content">
            <h3>Management</h3>
            <ul>
              <li>To increase customer loyalty, provide personalised service that gives the consumer access to all relevant information across all departments</li>
              <li>With the press of a button, planning and forecasting values, target/actual comparisons may be made</li>
              <li>Possibility of implementing in stages to provide value more quickly</li>
              <li>Investing is safe because SAP dominates the worldwide CRM industry</li>
            </ul>
            <h3>Service/Sales Managers</h3>
            <ul>
              <li>Customer in “360° view”</li>
              <li>Process improvement in collaboration with other employees and departments</li>
              <li>Training time and costs are reduced by the intuitive interface</li>
              <li>Fully integrating with other SAP systems as well as non-SAP systems</li>
            </ul>
            <h3>Field and office staff</h3>
            <ul>
              <li>Customer in “360° view”</li>
              <li>Process improvement in collaboration with other employees and departments</li>
              <li>Training time and costs are reduced by the intuitive interface</li>
              <li>Fully integrating with other SAP systems as well as non-SAP systems</li>
            </ul>
          </div>
        </div>
        <div className="sap-crm-system-benefits-image">
          <img src={require('../../../images/sap-crm-system-benefits.jpg')} alt="SAP CRM System Benefits" />
        </div>
      </div>
    </div>
  );
};

export default SAPCRMSystemBenefits;
