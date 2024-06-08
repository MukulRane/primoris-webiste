import React from 'react';
import './ModelsOfCollaborationSection.css';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const collaborationData = [
  {
    title: 'Use of data science solutions',
    points: [
      'Simple access to the knowledge or tools needed',
      'Constructing a data science solution that meets your specific company objectives and runs successfully'
    ],
    icon: require('../../../images/data-science-icon1.png')
  },
  {
    title: 'Consultancy for data science improvement',
    points: [
      'Tactical and strategic advice.',
      'Overcoming issues in a data science project (noisy or filthy data, erroneous projections, etc.)'
    ],
    icon: require('../../../images/data-science-icon2.png')
  },
  {
    title: 'Ongoing Advice and Assistance in Data Science',
    points: [
      'Support and development of your data science effort throughout time to improve the calibre of insights.',
      'Adapting the ML models to the environment’s changing needs'
    ],
    icon: require('../../../images/data-science-icon3.png')
  },
  {
    title: 'Data science as a service (DSaaS)',
    points: [
      'There is no investment in internal data science capabilities.',
      'Obtaining sophisticated data analytics insights produced by data science technology or improving the data science projects already in place'
    ],
    icon: require('../../../images/data-science-icon4.png')
  }
];

const ModelsOfCollaborationSection = () => {
  return (
    <section className="ds-models-collaboration-section">
      <SectionTitle title="Models of Collaboration We Provide" dividerColor="#000" />
      <div className="ds-models-cards-container">
        {collaborationData.map((item, index) => (
          <div className="ds-models-card-wrapper" key={index}>
            <div className="ds-models-card">
              <img src={item.icon} alt={item.title} />
              <h3>{item.title}</h3>
              <ol>
                {item.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ol>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ModelsOfCollaborationSection;
