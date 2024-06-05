import React from 'react';
import './LocationDetails.css';

const LocationDetails = () => {
  return (
    <div className='location-details-wrapper'>
        <section className="location-details">
            <div className="location">
                <img src={require('../../images/USA.png')} alt="USA - Texas" />
                <h2>USA – Texas</h2>
                <p>25145 Star Lane,<br />
                Unit 405, Katy,<br />
                TX – 77494
                </p>
            </div>
            <div className="location">
                <img src={require('../../images/India.png')} alt="India - Coimbatore" />
                <h2>India – Coimbatore</h2>
                <p>Tower 1A, 3rd Floor, India Land Tech Park,<br />
                Chil-Sez Area Keeranatham Village,<br />
                Saravanampatti, Coimbatore- 641035
                </p>
            </div>
        </section>
    </div>
  );
};

export default LocationDetails;
