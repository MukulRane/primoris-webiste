import React from 'react';
import './ServicesSection.css';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import ExpertiseCard from '../ExpertiseCard/ExpertiseCard';

const servicesData = [
  {
    title: 'ERP Consultancy Services',
    description: 'Our ERP consulting team enhances your project with thorough knowledge and comprehensive, top strategic solutions required for successful business needs. At Primoris, specialists who operate will assist you in developing the most effective plans for building successful ERP solutions for business operations.',
    icon: require('../../../images/erp-cs.png'),
  },
  {
    title: 'Customized ERP Services',
    description: 'For organizations of all sizes and industry sectors, we provide bespoke ERP software development solutions. We provide adaptable and comprehensive software solutions, with industry experts ensuring that people execute data through data integration across numerous platforms, including software, mobile, and on-premises.',
    icon: require('../../../images/erp-s.png'),
  },
  {
    title: 'Implementation of ERP Services',
    description: 'Even the process of ERP software use evolves as they are updated and upgraded. The whole deployment of your company resources, operations, and data management systems may be handled by our ERP installation services team while upholding data integrity.',
    icon: require('../../../images/erp-impliment.png'),
  },
  {
    title: 'Application Development for ERP',
    description: 'According to the requirements of your company, our technical professionals create bespoke business logic for ERP solutions utilizing the top programming languages and industry technologies. For online, desktop, and mobile platforms, our specialists create no-code/low-code ERP apps.',
    icon: require('../../../images/erp-app-dev.png'),
  },
  {
    title: 'Managed Services',
    description: 'Application & maintenance takes time away from activities that add value. Therefore, our ERP managed service professionals ensure that your ERP application is continuously monitored, maintained, and supported, enabling your providers and trading partners/vendors to avoid them altogether.',
    icon: require('../../../images/erp-ms.png'),
  },
  {
    title: 'Staff Augmentation',
    description: 'Create a scenario in which you choose to hire the ERP system yourself rather than outsourcing it. Next, you may engage the most skilled and seasoned ERP specialists for the required time to maintain the project’s success with the help of our ERP staff augmentation services.',
    icon: require('../../../images/erp-sa.png'),
  },
];

const ServicesSection = () => {
  return (
    <div className="services-wrapper">
      <section className="services">
        <SectionTitle title="Services for Developing Custom ERP Software in Our Pool" />
        <p className="services-description">
          The highly qualified team at Primoris Systems, which consists of ERP Developers, QA engineers, business analysts, IT consultants, and project managers, is proficient in developing the most <span className="highlight-text">advanced and dynamic ERP software</span> solutions for your company. Our array of ERP services includes:
        </p>
        <div className="services-cards">
          {servicesData.map((item, index) => (
            <ExpertiseCard
              key={index}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServicesSection;
