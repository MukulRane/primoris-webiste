import React from 'react';
import './WorkLifeDreamSection.css';

const workLifeData = [
  { icon: require('../../../images/work-life-1.png'), text: 'Skills Enhancement and Growth' },
  { icon: require('../../../images/work-life-2.png'), text: 'Conscious Self-Direction' },
  { icon: require('../../../images/work-life-3.png'), text: 'Helpful Input' },
  { icon: require('../../../images/work-life-4.png'), text: 'Welcoming and Diverse Environment' },
  { icon: require('../../../images/work-life-5.png'), text: 'Cutting-Edge Excellence' },
  { icon: require('../../../images/work-life-6.png'), text: 'Valuable Insights' },
  { icon: require('../../../images/work-life-7.png'), text: 'Empowerment through Skill Development' },
  { icon: require('../../../images/work-life-8.png'), text: 'Proactive Self-Development' },
];

const WorkLifeDreamSection = () => {
  return (
    <div className="work-life-dream-wrapper">
      <h2>Living the Work-Life Dream</h2>
      <div className="work-life-dream-grid">
        {workLifeData.map((item, index) => (
          <div key={index} className="work-life-dream-item">
            <img src={item.icon} alt={item.text} className="work-life-dream-icon" />
            <span className="work-life-dream-text">{item.text}</span>
            <div className={`work-life-dream-divider ${index === 7 || index % 3 === 2 ? 'hide-divider' : ''}`}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkLifeDreamSection;
