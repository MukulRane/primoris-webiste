import React, { useState } from 'react';
import './SAPCRMSection.css';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const crmData = [
  {
    title: 'CRM for Sales',
    content: `
      <p>All sales-related data is collected by SAP CRM and is available at any moment with the press of a mouse. You may provide individualised customer support and anticipate and manage your pipeline with the perspective of current marketing campaigns, order status, and any complaints. All parties involved have access to centrally located important consumer knowledge.</p>
      <br>
      <p><strong><b>Processes for Supporting Sales:</b></strong></p>
      <ul>
        <li>Possibility management</li>
        <li>Strategy for sales and managing territories</li>
        <li>Management of quotations and orders</li>
        <li>Procedures in sales</li>
        <li>Information about reporting and analysing competition, etc.</li>
      </ul>
    `
  },
  {
    title: 'CRM for Marketing',
    content: `
      <p>The foundation of targeted campaigns is the segmentation of your clients into pertinent target groups. By providing clients with the specific goods and services they require, you can personalise your discussions with them. The effectiveness of your resource utilisation will be enhanced by the direct flow of customer responses to your campaigns into Sales and other marketing initiatives. SAP CRM aids in managing and organising a campaign’s execution. As a consequence, it is possible to maximise campaign outcomes and lessen coverage waste brought on by broad-based selective marketing. The distribution of duties and resources in marketing can also be improved.</p>
      <br>
      <p><strong>Processes Supported by Marketing:</strong></p>
      <ul>
        <li>Target Group Formation and Segmentation</li>
        <li>Planning and Managing A Campaign</li>
        <li>Implementation of A Campaign</li>
        <li>Management of Leads, Opportunities, Etc.</li>
      </ul>
    `
  },
  {
    title: 'Service-oriented CRM',
    content: `
      <p>Excellent customer service unquestionably increases client loyalty, especially in today’s competitive marketplace. Long-term success is ensured by the capacity to recognise client problems early and develop an acceptable solution. Optimising worker productivity and service operations is required to achieve this, and SAP CRM provides significant help in this regard. Combining customer and object technical data makes it easier to coordinate service calls and gives you the tools for proactive planning and forecasting, which are backed by predetermined service processes.</p>
      <br>
      <p><strong>Supported Service Methodologies:</strong></p>
      <ul>
        <li>Service Inquiries</li>
        <li>Finding Solutions</li>
        <li>Resource Allocation</li>
        <li>Management of Email</li>
      </ul>
    `
  }
];

const SAPCRMSection = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Default to the first item being open

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section className="sap-crm-section">
      <SectionTitle title="Utilising SAP for customer relationship management" dividerColor="#000" />
      <div className="sap-crm-accordion">
        {crmData.map((item, index) => (
          <div key={index} className="sap-crm-accordion-item">
            <div
              className={`sap-crm-accordion-title ${activeIndex === index ? 'active' : ''}`}
              onClick={() => handleToggle(index)}
            >
              {item.title}
              <span className={`sap-crm-arrow ${activeIndex === index ? 'sap-crm-down' : 'sap-crm-right'}`}></span>
            </div>
            <div
              className={`sap-crm-accordion-content ${activeIndex === index ? 'open' : ''}`}
              dangerouslySetInnerHTML={{ __html: item.content }}
            ></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SAPCRMSection;
