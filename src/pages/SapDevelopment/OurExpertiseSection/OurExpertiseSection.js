import React from 'react';
import './OurExpertiseSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faCloud, faCog } from '@fortawesome/free-solid-svg-icons';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const expertiseData = [
  {
    icon: faCheckSquare,
    title: 'Complete Solutions',
    description: 'With a growing SAP offering that includes ongoing SAP lifecycle services, automated testing, system landscape optimization, and more, you can increase your business potential.'
  },
  {
    icon: faCloud,
    title: 'SAP Cloud Services',
    description: 'Utilise SAP cloud solutions to convert businesses into enterprises and take advantage of newer and more profitable market possibilities.'
  },
  {
    icon: faCog,
    title: 'Integration Solutions',
    description: 'Build a solid corporate architecture by integrating non-SAP processes with S/4 HANA and other SAP modules via third-party applications, online interfaces, and mobile devices.'
  }
];

const OurExpertiseSection = () => {
  return (
    <section className="our-expertise-section">
      <SectionTitle title="Our Expertise" dividerColor="#000" />
      <div className="our-expertise-cards-container">
        {expertiseData.map((expertise, index) => (
          <div className="our-expertise-item" key={index}>
            <div className="icon-container">
              <FontAwesomeIcon icon={expertise.icon} className="icon" />
            </div>
            <h3>{expertise.title}</h3>
            <p>{expertise.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurExpertiseSection;
