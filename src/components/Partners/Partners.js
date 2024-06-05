import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import './Partners.css';

const Partners = () => {
  return (
    <div className="partners-wrapper">
        <section className="partners">
            <SectionTitle title="Our Partners" />
            <div className="partners-logos">
                <img src={require('../../images/odoo.png')} alt="Odoo" className="partner-logo" />
                <img src={require('../../images/kctdata.png')} alt="KCT Data" className="partner-logo" />
                <img src={require('../../images/nintex.png')} alt="Nintex" className="partner-logo" />
                <img src={require('../../images/salesforce.png')} alt="Salesforce" className="partner-logo" />
            </div>
        </section>
    </div>
    
  );
};

export default Partners;
