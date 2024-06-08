import React from 'react';
import './OurServicesSection.css';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import ServiceCard from '../ServiceCard/ServiceCard';

const servicesData = [
  {
    title: 'Functional & Technical Services',
    items: [
      'Operations Management',
      'On-site, onshore, and offshore resources',
      'Packaged and custom applications',
      'Oracle Release 11 and 12 ERP support',
      'Microsoft SQL Server Support',
      'PL/SQL, XML Gateway, BPEL',
      'Tool support',
    ],
  },
  {
    title: 'Database Services',
    items: [
      'Proactive monitoring',
      'Tablespace, File and Space Management',
      'Performance Tuning',
      'Installation, patches, upgrades and migrations',
      'Backup and recovery',
      'High Availability',
      'Partitioning',
      'Dual Primary Methodology',
    ],
  },
  {
    title: 'DBA Services',
    items: [
      'Onsite Consulting',
      'Onsite DBA',
      'Remote DBA',
      'Certified Master DBAs on staff',
      'Certified DBAs at out support center',
    ],
  },
];

const OurServicesSection = () => {
  return (
    <section className="our-services-section">
      <SectionTitle title="Our Services" dividerColor="#000" />
      <div className="services-cards-container">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} title={service.title} items={service.items} />
        ))}
      </div>
    </section>
  );
};

export default OurServicesSection;
