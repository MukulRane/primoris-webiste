import React from 'react';
import './Expertise.css';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const expertiseData = [
  {
    title: 'IT Strategy and Planning Services',
    description: 'We assist businesses in developing comprehensive IT strategies aligned with their overall business goals. Our consultants work closely with you to analyze your current technology landscape, identify areas for improvement, and design a roadmap for IT transformation.',
    icon: require('../../../images/tc-it.png'),
  },
  {
    title: 'Systems Integration',
    description: 'We specialize in integrating disparate systems and applications to ensure seamless data flow and improved operational efficiency. Our consultants have expertise in various integration technologies and platforms, enabling us to streamline your business processes and enhance collaboration across your organization.',
    icon: require('../../../images/tc-sys.png'),
  },
  {
    title: 'Software Selection and Implementation',
    description: 'With our in-depth knowledge of the latest software solutions, we help businesses choose the right software applications that align with their requirements. Our consultants manage the entire software implementation process, from system configuration and customization to data migration and user training, ensuring a successful deployment.',
    icon: require('../../../images/tc-soft.png'),
  },
  {
    title: 'Cloud Computing',
    description: 'We guide businesses in leveraging the power of cloud computing to drive scalability, flexibility, and cost savings. Our consultants help you assess the suitability of cloud solutions, develop migration strategies, and manage the implementation and integration of cloud services into your existing infrastructure.',
    icon: require('../../../images/tc-cloud.png'),
  },
  {
    title: 'Cybersecurity',
    description: 'Qrotecting your valuable assets and data is crucial in today’s digital landscape. Our cybersecurity consultants work with you to identify vulnerabilities, develop robust security measures, implement effective controls, and provide ongoing monitoring and incident response services to safeguard your business against potential threats.',
    icon: require('../../../images/tc-cyber.png'),
  },
];

const Expertise = () => {
  return (
    <div className="tech-expertise-wrapper">
      <section className="tech-expertise">
        <div>
          <SectionTitle title="Our Expertise" />
        </div>
        <p>
          We offer a wide range of technical consulting services tailored to meet the unique needs of our clients. Our areas of expertise include:
        </p>
        <div className="tech-expertise-cards">
          {expertiseData.map((item, index) => (
            <div
              className="tech-expertise-card"
              key={index}
            >
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

export default Expertise;
