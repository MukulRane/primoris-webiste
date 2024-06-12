import React from 'react';
import '../../SapCRM/SapCRMCloudAdvantages/SapCRMCloudAdvantages.css';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons';

const searchMethodologyData = [
  'Intuitive assignment creation',
  'Team scenarios',
  'Integrated GPS (Google Maps)',
  'Integrated GISlet by Astec',
  'Photo-documentation',
  'Sophisticated synchronisation policy',
  'Transparent data-transfers including full-range monitoring',
  '',
  ''
];

const MTechnicianKeyFeatues = () => {
  return (
    <section className="sap-crm-advantages-search-methodology-section">
      <SectionTitle title="Key Features of mTechnician" dividerColor="#000" />
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

export default MTechnicianKeyFeatues;
