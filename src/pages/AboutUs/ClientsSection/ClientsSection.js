import React from 'react';
import './ClientsSection.css';
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

const clients = [
  { src: logo1, alt: 'Client 1' },
  { src: logo2, alt: 'Client 2' },
  { src: logo3, alt: 'Client 3' },
  { src: logo4, alt: 'Client 4' },
  { src: logo5, alt: 'Client 5' },
  { src: logo6, alt: 'Client 6' },
  { src: logo7, alt: 'Client 7' },
  { src: logo8, alt: 'Client 8' },
  { src: logo9, alt: 'Client 9' },
  { src: logo10, alt: 'Client 10' },
  { src: logo11, alt: 'Client 11' },
  { src: logo12, alt: 'Client 12' },
  { src: logo13, alt: 'Client 13' },
  { src: logo14, alt: 'Client 14' },
  { src: logo15, alt: 'Client 15' },
  { src: logo16, alt: 'Client 16' },
  { src: logo17, alt: 'Client 17' },
  { src: logo18, alt: 'Client 18' },
];

const ClientsSection = () => {
  return (
    <div className="clients-section">
      <h2>Our Clients</h2>
      <div className="clients-marquee">
        <div className="clients-track">
          {clients.map((client, index) => (
            <div className="client-logo" key={index}>
              <img src={client.src} alt={client.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientsSection;
