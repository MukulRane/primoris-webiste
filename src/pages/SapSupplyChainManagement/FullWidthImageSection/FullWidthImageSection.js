import React from 'react';
import './FullWidthImageSection.css';

const FullWidthImageSection = () => {
  return (
    <div className="full-width-image-section">
      <div className="content">
        <div className="image-container">
          <img src={require('../../../images/supply-chain-trophy.png')} alt="Trophy" />
        </div>
        <div className="text-container">
          <h2>Primoris is a trusted partner for SAP Business One, earning trust through expertise and commitment</h2>
          <p>We take pride in being recognized by SAP as the top SAP Business One Partner in India, an esteemed honor that underscores our dedication and excellence in delivering SAP solutions.</p>
        </div>
      </div>
    </div>
  );
};

export default FullWidthImageSection;
