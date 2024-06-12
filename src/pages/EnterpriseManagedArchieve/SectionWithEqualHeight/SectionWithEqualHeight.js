import React from 'react';
import './SectionWithEqualHeight.css';

const SectionWithEqualHeight = () => {
  return (
    <div className="section-with-equal-wrapper">
      <div className="section-with-equal">
        <div className="section-with-equal-text">
          <p>
            The system was designed to fully follow and correctly implement all current legal regulations regarding the archiving of business-relevant information.
          </p>
          <p>
            EMA®’s well-matched hardware and software components provide a secure archiving system that can be up and running in your organization’s network within a very short time and with little administrative effort.
          </p>
          <p>
            The powerful full-text search and attribute system allow you to control how information is organized, keep the archive easy to maintain, and allow users to find the information they require with little effort.
          </p>
        </div>
        <div className="section-with-equal-image">
          <img src={require('../../../images/enterprise-managed-archive-body.png')} alt="Enterprise Section" />
        </div>
      </div>
    </div>
  );
};

export default SectionWithEqualHeight;
