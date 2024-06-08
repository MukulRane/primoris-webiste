import React from 'react';
import './StaffingServiceCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons';

const StaffingServicesCard = ({ title }) => {
  return (
    <div className="staffing-simple-card">
      <div className="staffing-simple-card-left">
        <FontAwesomeIcon icon={faCheckDouble} className="staffing-icon" />
      </div>
      <div className="staffing-simple-card-right">
        <p>{title}</p>
      </div>
    </div>
  );
};

export default StaffingServicesCard;
