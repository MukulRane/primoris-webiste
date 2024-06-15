import React from 'react';
import './AboutUsStatsSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBusinessTime, faGlobeAmericas, faAward, faStar } from '@fortawesome/free-solid-svg-icons';
import SectionTitle from '../../ManagementConsulting/SectionTitle/SectionTitle';

const AboutUsStatsSection = () => {
  return (
    <div className="about-us-stats-wrapper">
      <div className="about-us-stats-section">
        <div className="about-us-stats-divider">
          <div className="about-us-stats-line"></div>
          <FontAwesomeIcon icon={faStar} className="about-us-stats-star" />
          <div className="about-us-stats-line"></div>
        </div>
        <div className="about-us-stats-grid">
          <div className="about-us-stats-card">
            <FontAwesomeIcon icon={faBusinessTime} className="about-us-stats-icon" />
            <h3>8+</h3>
            <div className="about-us-stats-divider"></div>
            <p>Years Managing Global Enterprises</p>
          </div>
          <div className="about-us-stats-card">
            <FontAwesomeIcon icon={faGlobeAmericas} className="about-us-stats-icon" />
            <h3>2</h3>
            <div className="about-us-stats-divider"></div>
            <p>Continents</p>
          </div>
          <div className="about-us-stats-card">
            <FontAwesomeIcon icon={faAward} className="about-us-stats-icon" />
            <h3>100+</h3>
            <div className="about-us-stats-divider"></div>
            <p>Prefer Us Partner of Choice</p>
          </div>
        </div>
        <div className="about-us-stats-divider">
          <div className="about-us-stats-line"></div>
          <FontAwesomeIcon icon={faStar} className="about-us-stats-star" />
          <div className="about-us-stats-line"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsStatsSection;
