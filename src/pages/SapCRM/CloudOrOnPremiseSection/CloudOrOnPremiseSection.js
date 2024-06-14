import React from 'react';
import './CloudOrOnPremiseSection.css';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const cloudOrOnPremiseData = [
  {
    title: 'On-premise SAP CRM',
    description: 'Whether compact or comprehensive, the on-premise solution meets your needs and provides you with the security of a fixed system. Your ERP system\'s tight connection helps your business operations and unifies all customer data from the sales, marketing, and service divisions.',
    icon: require('../../../images/sap-crm-onpremise.png'),
  },
  {
    title: 'Mobility',
    description: 'There are now mobile applications accessible for on-premises solutions thanks to the SAP Fiori apps. Fiori apps are incredibly user-friendly and simple to use due to their straightforward layout and streamlined process phases. Numerous procedures may be supported by SAP Fiori applications, which are currently included with SAP CRM.',
    icon: require('../../../images/sap-crm-mobility.png'),
  },
  {
    title: 'SAP Cloud for Customers',
    description: 'The platform-independent solution combines your sales, marketing, and service activities and is tightly linked with your ERP system. No matter where you are, you always have access to the most recent information.',
    icon: require('../../../images/sap-crm-sapcloud.png'),
  }
];

const CloudOrOnPremiseSection = () => {
  return (
    <div className="cloud-or-on-premise-wrapper">
      <section className="cloud-or-on-premise">
        <div>
          <SectionTitle title="Cloud or on-premise?" dividerColor="#000" />
        </div>
        <p>
          Customer relationship management systems from SAP, whether SAP CRM or SAP Cloud for Customers, keep all information in one system and enhance collaboration between Sales and other departments.
        </p>
        <div className="cloud-or-on-premise-cards">
          {cloudOrOnPremiseData.map((item, index) => (
            <div className="cloud-or-on-premise-card" key={index}>
              <img src={item.icon} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CloudOrOnPremiseSection;
