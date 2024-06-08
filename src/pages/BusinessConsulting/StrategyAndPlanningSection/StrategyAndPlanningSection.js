import React from 'react';
import GradientButton from '../GradientButton/GradientButton';
import './StrategyAndPlanningSection.css';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const sectionData = [
  'Process Improvement',
  'Organizational Development',
  'Seamless integration with SAP HANA',
  'Market Research and Analysis'
];

const StrategyAndPlanningSection = () => {
  return (
    <div className="strategy-planning-section-wrapper">
        <div className="strategy-planning-section">
            <SectionTitle title="Strategy and Planning" />
            <div className="strategy-planning-section-buttons-container">
                {sectionData.map((title, index) => (
                <GradientButton key={index} title={title} />
                ))}
            </div>
        </div>
    </div>
  );
};

export default StrategyAndPlanningSection;
