import React from 'react';
import '../../SapCRM/SapCRMCloudAdvantages/SapCRMCloudAdvantages.css';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons';

const searchMethodologyData = [
  'Judicial investigations and court hearings',
  'Tax and financial audits',
  'Internal investigations, inspections, and audits',
];

const GCMOurSolution = () => {
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

export default GCMOurSolution;
