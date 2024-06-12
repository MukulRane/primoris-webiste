import React from 'react';
import '../../SapCRM/SapCRMCloudAdvantages/SapCRMCloudAdvantages.css';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons';

const searchMethodologyData = [
  'SAP Certiﬁed Archive',
  'Secure & legally compliant',
  'Compliant with all GDPR',
  'Easy Setup & integration',
  'Low Maintenance',
  'Online migration without downtime',
  'Effective e-Discovery solution',
  '',
  ''
];

const AdvantagesofCompetition = () => {
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

export default AdvantagesofCompetition;
