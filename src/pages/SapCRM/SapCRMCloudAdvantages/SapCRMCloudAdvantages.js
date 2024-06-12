import React from 'react';
import './SapCRMCloudAdvantages.css';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons';

const searchMethodologyData = [
  'Increased sales',
  'Improved productivity',
  'Decreased customer acquisition expenses',
  'Data protection',
  'Updated and improved consumer data',
  ''  // Added a placeholder for the 6th point
];

const SapCRMCloudAdvantages = () => {
  return (
    <section className="sap-crm-advantages-search-methodology-section">
      <SectionTitle title="Your Advantages in Competition" dividerColor="#000" />
      <div className="sap-crm-advantages-search-methodology-content-container">
        {searchMethodologyData.map((item, index) => (
          <div key={index} className={`sap-crm-advantages-search-methodology-methodology-item ${item === '' ? 'placeholder' : ''}`}>
            {item !== '' && <FontAwesomeIcon icon={faCheckDouble} className="sap-crm-advantages-search-methodology-icon" />}
            <p>{item !== '' ? item : ''}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SapCRMCloudAdvantages;
