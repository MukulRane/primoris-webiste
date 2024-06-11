import React from 'react';
import './NextGenCommerceSection.css';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const NextGenCommerceSection = () => {
  return (
    <section className="next-gen-commerce-section">
      <SectionTitle title="Solution for Next-Generation Commerce in The Age of Digital Empowerment" dividerColor="#000" />
      <div className="next-gen-card">
        <div className="next-gen-content">
          <div className="next-gen-text">
            <p>
              By switching to SAP S/4 HANA, your business can take advantage of the digital economy. The migration to SAP S/4 HANA, however, differs from past, more conventional SAP migration operations. It necessitates an entirely different style of thinking and must be tailored to address the particular difficulties each firm faces. Many current SAP clients are currently unaware of the changes associated with the new SAP S/4 HANA environment. This makes the decision-making process and the switch to SAP S/4 HANA challenging.
            </p>
            <p>
              Our non-disruptive SAP S/4 HANA Migration methodology ensures a seamless switch from your current SAP Business Suite to SAP S/4 HANA.
            </p>
            <p>
              SAP HANA Migration services provided by Automatic include-
            </p>
          </div>
          <div className="next-gen-image">
            <img src={require('../../../images/sap-hana-next-gen.jpg')} alt="Next Generation Commerce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextGenCommerceSection;
