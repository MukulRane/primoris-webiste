import React from 'react';
import '../ServicesSection/ServicesSection.css';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import ExpertiseCard from '../ExpertiseCard/ExpertiseCard';

const servicesData = [
  {
    title: 'Integrated ERP Solutions',
    description: 'Regardless of whether you want to create an ERP system from scratch or need to make improvements to an existing one, we meet all of your objectives without compromising business continuity.',
    icon: require('../../../images/erp-cs.png'),
  },
  {
    title: 'Accelerated Development',
    description: 'Our team typically produces the MVP version of the ERP system within 3-5 months using the agile and iterative business strategy, and publishes a new version every 4-6 weeks.',
    icon: require('../../../images/erp-s.png'),
  },
  {
    title: 'Implementation of ERP Services',
    description: 'You may feel at ease knowing that everything will be handled by Primoris Systems if you choose us as your ERP development firm, including design, development, installation, and post-deployment support.',
    icon: require('../../../images/erp-impliment.png'),
  },
  {
    title: 'Multi-Platform ERP',
    description: 'We provide access to the ERP system via desktop, online, and mobile apps. We concentrate on creating an intuitive UI/UX while developing ERP applications to improve user satisfaction.',
    icon: require('../../../images/erp-app-dev.png'),
  },
  {
    title: 'Easy Integration',
    description: 'Our staff guarantees seamless ERP system integration with well-known platforms like Magento and Salesforce, cutting-edge technologies like blockchain and IoT, and additional ERP modules.',
    icon: require('../../../images/erp-ms.png'),
  },
  {
    title: 'Greater Transparency',
    description: 'We are quite transparent about both the development process and the cost. We consistently provide the data required to make the best commercial decisions and provide reasonable pricing at every level of the project.',
    icon: require('../../../images/erp-sa.png'),
  },
];

const WhyWorkWithPrimoris = () => {
  return (
    <div className="services-wrapper">
      <section className="services">
        <SectionTitle title="Why Should You Work with Primoris Systems to Develop Your ERP Systems?" />
        <p className="services-description">
            With almost a decade of expertise in business software development, we have created a number of unique ERP systems for customers in a variety of sectors.
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

export default WhyWorkWithPrimoris;
