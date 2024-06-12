import React from 'react';
import '../../SapCRM/SapCRMCloudAdvantages/SapCRMCloudAdvantages.css';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons';

const searchMethodologyData = [
  'Graphic overview of company’s organizational structure',
  'Life HR system data',
  'Fresh SAP Fiori interface',
  'Contact Info',
  '',
  ''
];

const OrgChartViewerKeyFeatures = () => {
  return (
    <section className="sap-crm-advantages-search-methodology-section">
      <SectionTitle title="Key Features of OrgChart Viewer" dividerColor="#000" />
      <p>Our SAP Fiori OrgChart Viewer is much more than just an organizational diagram. Its interactive Fiori fresh user interface dedicates it to become state of the art landing page for all your employee oriented processes.</p>
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

export default OrgChartViewerKeyFeatures;
