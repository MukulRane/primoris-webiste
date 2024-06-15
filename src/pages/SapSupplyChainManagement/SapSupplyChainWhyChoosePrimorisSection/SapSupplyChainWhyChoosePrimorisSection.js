import React from 'react';
import './SapSupplyChainWhyChoosePrimorisSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBusinessTime, faIndustry, faCertificate, faAward, faGlobeAmericas, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import SectionTitle from '../../ManagementConsulting/SectionTitle/SectionTitle';

const SapSupplyChainWhyChoosePrimorisSection = () => {
  return (
    <div className="sap-supply-chain-wrapper">
      <div className="sap-supply-chain">
        <SectionTitle title="Why Choose Primoris?" dividerColor="#000" />
        <p>Leverage the expertise of the best ERP company with 25+ years of experience in the SAP Business One vertical, offering CMMI Level 5 capabilities.</p>
        <div className="sap-supply-chain-grid">
          <div className="sap-supply-chain-card">
            <FontAwesomeIcon icon={faBusinessTime} className="icon" />
            <h3>1</h3>
            <div className="sap-supply-chain-divider"></div>
            <p>Partnered With SAP</p>
          </div>
          <div className="sap-supply-chain-card">
            <FontAwesomeIcon icon={faIndustry} className="icon" />
            <h3>1000+</h3>
            <div className="sap-supply-chain-divider"></div>
            <p>Efficient implementation</p>
          </div>
          <div className="sap-supply-chain-card">
            <FontAwesomeIcon icon={faCertificate} className="icon" />
            <h3>300+</h3>
            <div className="sap-supply-chain-divider"></div>
            <p>Certified Consultants</p>
          </div>
          <div className="sap-supply-chain-card">
            <FontAwesomeIcon icon={faAward} className="icon" />
            <h3>75+</h3>
            <div className="sap-supply-chain-divider"></div>
            <p>Trusted channel partners</p>
          </div>
          <div className="sap-supply-chain-card blank-card"></div>
          <div className="sap-supply-chain-card last-row">
            <FontAwesomeIcon icon={faGlobeAmericas} className="icon" />
            <h3>12+</h3>
            <div className="sap-supply-chain-divider"></div>
            <p>Continents</p>
          </div>
          <div className="sap-supply-chain-card last-row">
            <FontAwesomeIcon icon={faPhoneVolume} className="icon" />
            <h3>24/7</h3>
            <div className="sap-supply-chain-divider"></div>
            <p>Comprehensive support</p>
          </div>
          <div className="sap-supply-chain-card blank-card"></div>
        </div>
      </div>
    </div>
  );
};

export default SapSupplyChainWhyChoosePrimorisSection;
