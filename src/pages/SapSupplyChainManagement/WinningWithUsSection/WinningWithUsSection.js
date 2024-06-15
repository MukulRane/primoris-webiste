import React from 'react';
import './WinningWithUsSection.css';
import SectionTitle from '../../../components/SectionTitle/SectionTitle'; // Adjust the import path as needed
import logo1 from '../../../images/supply-chain-hoag.png';
import logo2 from '../../../images/supply-chain-mauser.png';
import logo3 from '../../../images/supply-chain-capgemini.png';
import logo4 from '../../../images/supply-chain-lifeinsurance.png';
import logo5 from '../../../images/supply-chain-bosch.png'; // Replace with actual image paths
import logo6 from '../../../images/supply-chain-techmahindra.png';
import logo7 from '../../../images/supply-chain-mauser.png';
import logo8 from '../../../images/supply-chain-truspec.png';
import logo9 from '../../../images/supply-chain-sony.png';

import logo10 from '../../../images/supply-chain-brima.png';
import logo11 from '../../../images/supply-chain-happiest.png';
import logo12 from '../../../images/supply-chain-icreon.png';
import logo13 from '../../../images/supply-chain-cognizant.png';
import logo14 from '../../../images/supply-chain-sony.png';
import logo15 from '../../../images/supply-chain-capital.png';
import logo16 from '../../../images/supply-chain-plum.png';
import logo17 from '../../../images/supply-chain-virtusa.png';
import logo18 from '../../../images/supply-chain-mindtree.png';

const WinningWithUsSection = () => {
    const logosRow1 = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9];
    const logosRow2 = [logo10, logo11, logo12, logo13, logo14, logo15, logo16, logo17, logo18];
  
    return (
      <div className="winning-with-us-section">
        <SectionTitle title="Who is winning with us?" />
        <p className="winning-with-us-description">
          Streamline core business functions, including accounting, financials, purchasing, inventory, sales, customer relationships, reporting, and analytics, for efficient management.
        </p>
        <div className="winning-with-us-logo-row first-row">
          {logosRow1.concat(logosRow1).map((logo, index) => (
            <img key={`first-${index}`} src={logo} alt={`Logo ${index + 1}`} />
          ))}
        </div>
        <div className="winning-with-us-logo-row second-row">
          {logosRow2.concat(logosRow2).map((logo, index) => (
            <img key={`second-${index}`} src={logo} alt={`Logo ${index + 1}`} />
          ))}
        </div>
      </div>
    );
  };
  
  export default WinningWithUsSection;