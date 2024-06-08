import React from 'react';
import './TechnicalHiringSection.css';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import StaffingServicesCard from '../StaffingServiceCard/StaffingServiceCard';

const technicalHiringData = [
  'Application Development and Management services for .NET, Java, and PHP, with skilled Developers, Architects, and Managers to meet diverse business needs.',
  'Enterprise Application Services for SAP, Oracle, Siebel, MS DAX, Peoplesoft, and JD Edwards, providing technical and functional expertise.',
  'For Data Warehousing needs, services with expertise in Informatica, Cognos, and Microstrategy, delivering end-to-end solutions.',
  'For Manual, automation, Regression Testing, Load- Test analysts, Leads and Project Managers.'
];

const TechnicalHiringSection = () => {
  return (
    <section className="technical-hiring-section">
      <SectionTitle title="Technical Hiring" dividerColor="#000" />
      <div className="technical-hiring-content">
        <div className="technical-cards-container">
          {technicalHiringData.map((item, index) => (
            <div key={index} className="technical-card-wrapper">
              <StaffingServicesCard title={item} />
            </div>
          ))}
        </div>
        <div className="technical-image-container">
          <img src={require('../../../images/staffing-technical-hiring.jpg')} alt="Technical Hiring" />
        </div>
      </div>
    </section>
  );
};

export default TechnicalHiringSection;
