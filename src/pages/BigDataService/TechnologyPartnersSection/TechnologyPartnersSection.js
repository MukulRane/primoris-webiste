import React from 'react';
import './TechnologyPartnersSection.css';
import SectionTitle from '../../ManagementConsulting/SectionTitle/SectionTitle';

const partnersData = [
  {
    logo: require('../../../images/big-data-partners-1.png'), // Replace with your image path
    name: 'Amazon Web Services',
    description: 'Amazon Web Services (AWS) is a collection of remote computing services, also called web services, that make up a cloud computing platform offered by Amazon.com. The most central and well-known of these services are Amazon EC2 and Amazon S3.'
  },
  {
    logo: require('../../../images/big-data-partners-2.png'), // Replace with your image path
    name: 'Google Cloud Platform',
    description: 'Google Cloud Platform is a cloud computing platform by Google that offers hosting on the same supporting infrastructure that Google uses internally for end-user products like Google Search and YouTube.'
  },
  {
    logo: require('../../../images/big-data-partners-3.png'), // Replace with your image path
    name: 'Microsoft Azure',
    description: 'Azure is Microsoft’s cloud platform: a growing collection of integrated services—compute, storage, data, networking, and app—that help you move faster, do more, and save money.'
  }
];

const TechnologyPartnersSection = () => {
  return (
    <section className="technology-partners-section">
    <SectionTitle title="Our Technology Partners" />
      <div className="partners-container">
        {partnersData.map((partner, index) => (
          <div className="partner" key={index}>
            <img src={partner.logo} alt={partner.name} />
            <p>{partner.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologyPartnersSection;
