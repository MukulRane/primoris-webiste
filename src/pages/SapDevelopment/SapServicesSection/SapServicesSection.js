import React from 'react';
import './SapServicesSection.css';

const servicesData = [
  {
    title: 'SAP Consulting',
    description: 'SAP Business One, SAP S4/HANA, and SAP ByDesign ERP system calibration and business transformation consulting.',
    image: require('../../../images/sap-icon-1.png')
  },
  {
    title: 'SAP Implementation',
    description: 'Implementing and customising SAP ERP environments will increase time to market in accordance with company requirements.',
    image: require('../../../images/sap-icon-2.png')
  },
  {
    title: 'SAP Integration',
    description: 'SAP may be integrated with other software programmes to enhance ROI and business operations.',
    image: require('../../../images/sap-icon-3.png')
  },
  {
    title: 'Application Management using SAP',
    description: 'Using the application management, security, testing, data, and cloud capabilities offered by SAP.',
    image: require('../../../images/sap-icon-4.png')
  },
  {
    title: 'SAP Migration',
    description: 'Data migration from newly established SAP Business One or SAP S4/HANA solutions to your older ERP implementations.',
    image: require('../../../images/sap-icon-5.png')
  },
  {
    title: 'Maintenance & Support for SAP',
    description: 'Providing managed and shared support services that guarantee efficient SAP ERP operation and continual updates.',
    image: require('../../../images/sap-icon-6.png')
  }
];

const SapServicesSection = () => {
  return (
    <section className="sap-services-section">
      <p>Our complete practise supports organisations in unifying their core operations, gaining game-changing business insights, and accelerating growth with SAP Business One, SAP S4/HANA, SAP Business One HANA, and SAP ByDesign. We assist companies in utilising SAP’s potential to become agile organisations as an ERP partner.</p>
      <div className="sap-services-cards-container">
        {servicesData.map((service, index) => (
          <div className="sap-services-card" key={index}>
            <img src={service.image} alt={service.title} className="sap-services-image" />
            <div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SapServicesSection;
