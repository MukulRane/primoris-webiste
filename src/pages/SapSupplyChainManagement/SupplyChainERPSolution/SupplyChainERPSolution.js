import React from 'react';
import GradientButton from '../../BusinessConsulting/GradientButton/GradientButton';
import './SupplyChainERPSolution.css'
import '../../BusinessConsulting/StrategyAndPlanningSection/StrategyAndPlanningSection.css';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const sectionData = [
  'On premise or cloud based',
  'Seamless integration of BI capabilities',
  'Seamless integration with SAP HANA',
  'Rapid deployment capabilities'
];

const SupplyChainERPSolution = () => {
  return (
    <div className="strategy-planning-section-wrapper">
        <div className="supply-chain-strategy-planning-section">
            <SectionTitle title="ERP Solution Tailored For High-Growth Potential Companies" />
            <div className="strategy-planning-section-buttons-container">
                {sectionData.map((title, index) => (
                <GradientButton key={index} title={title} />
                ))}
            </div>
        </div>
    </div>
  );
};

export default SupplyChainERPSolution;
