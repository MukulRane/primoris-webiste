import React from 'react';
import './SapSupplyChainWhyChoosePrimorisSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBusinessTime, faIndustry, faCertificate, faAward, faGlobeAmericas, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import SectionTitle from '../../ManagementConsulting/SectionTitle/SectionTitle';
import { useSpring, animated } from 'react-spring';

const AnimatedNumber = ({ value }) => {
  const { number } = useSpring({
    from: { number: 0 },
    number: value,
    delay: 200,
    config: { duration: 1000 },
  });

  return <animated.span>{number.to(n => n.toFixed(0))}</animated.span>;
};

const SapSupplyChainWhyChoosePrimorisSection = () => {
  return (
    <div className="sap-supply-chain-wrapper">
      <div className="sap-supply-chain">
        <SectionTitle title="Why Choose Primoris?" dividerColor="#000" />
        <p>Leverage the expertise of the best ERP company with 25+ years of experience in the SAP Business One vertical, offering CMMI Level 5 capabilities.</p>
        <div className="sap-supply-chain-grid">
          <div className="sap-supply-chain-card">
            <FontAwesomeIcon icon={faBusinessTime} className="icon" />
            <h3><AnimatedNumber value={1} /></h3>
            <div className="sap-supply-chain-divider"></div>
            <p>Partnered With SAP</p>
          </div>
          <div className="sap-supply-chain-card">
            <FontAwesomeIcon icon={faIndustry} className="icon" />
            <h3><AnimatedNumber value={1000} /><span>+</span></h3>
            <div className="sap-supply-chain-divider"></div>
            <p>Efficient implementation</p>
          </div>
          <div className="sap-supply-chain-card">
            <FontAwesomeIcon icon={faCertificate} className="icon" />
            <h3><AnimatedNumber value={300} /><span>+</span></h3>
            <div className="sap-supply-chain-divider"></div>
            <p>Certified Consultants</p>
          </div>
          <div className="sap-supply-chain-card">
            <FontAwesomeIcon icon={faAward} className="icon" />
            <h3><AnimatedNumber value={75} /><span>+</span></h3>
            <div className="sap-supply-chain-divider"></div>
            <p>Trusted channel partners</p>
          </div>
          <div className="sap-supply-chain-card blank-card"></div>
          <div className="sap-supply-chain-card last-row">
            <FontAwesomeIcon icon={faGlobeAmericas} className="icon" />
            <h3><AnimatedNumber value={12} /><span>+</span></h3>
            <div className="sap-supply-chain-divider"></div>
            <p>Continents</p>
          </div>
          <div className="sap-supply-chain-card last-row">
            <FontAwesomeIcon icon={faPhoneVolume} className="icon" />
            <h3><AnimatedNumber value={24} /><span>/7</span></h3>
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
