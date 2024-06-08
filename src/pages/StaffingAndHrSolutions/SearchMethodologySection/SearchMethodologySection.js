import React from 'react';
import './SearchMethodologySection.css';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons';

const searchMethodologyData = [
  'Rigorous Approaches',
  'Confidentiality Assurance',
  'Clear Procedures',
  'Firm Timeframes',
  'Strong Reporting Framework',
  'Feedback Mechanisms'
];

const SearchMethodologySection = () => {
  return (
    <section className="search-methodology-section">
      <SectionTitle title="Our search assignment methodology revolves around the following approach" dividerColor="#000" />
      <div className="search-methodology-content-container">
        {searchMethodologyData.map((item, index) => (
          <div key={index} className="search-methodology-methodology-item">
            <FontAwesomeIcon icon={faCheckDouble} className="search-methodology-icon" />
            <p>{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SearchMethodologySection;
