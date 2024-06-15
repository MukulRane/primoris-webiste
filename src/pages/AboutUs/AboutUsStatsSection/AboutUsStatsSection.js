import React from 'react';
import './AboutUsStatsSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBusinessTime, faGlobeAmericas, faAward, faStar } from '@fortawesome/free-solid-svg-icons';
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
            <h3><AnimatedNumber value={8} /><span>+</span></h3>
            <div className="about-us-stats-divider-inner"></div>
            <p>Years Managing Global Enterprises</p>
          </div>
          <div className="about-us-stats-card">
            <FontAwesomeIcon icon={faGlobeAmericas} className="about-us-stats-icon" />
            <h3><AnimatedNumber value={2} /></h3>
            <div className="about-us-stats-divider-inner"></div>
            <p>Continents</p>
          </div>
          <div className="about-us-stats-card">
            <FontAwesomeIcon icon={faAward} className="about-us-stats-icon" />
            <h3><AnimatedNumber value={100} /><span>+</span></h3>
            <div className="about-us-stats-divider-inner"></div>
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
