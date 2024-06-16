import React from 'react';
import './NewsSection.css';
import newsImage from '../../../images/news-hero.png';

const NewsSection = () => {
  return (
    <div className="news-section-wrapper">
      <div className="news-section">
        <div className="news-text">
          <h2>News</h2>
          <p>
            Keep you up-to-date with the latest happenings and developments within our company.
          </p>
          <p>
            From product launches and business expansions to community involvement and sustainability initiatives, we are committed to sharing our news with you in a timely and transparent manner.
          </p>
          <p>
            We believe that communication is key to building strong relationships with our customers, partners, and stakeholders. Through our news briefs, we hope to provide you with valuable insights into our company culture, values, and operations.
          </p>
        </div>
        <div className="news-image-wrapper">
          <img src={newsImage} alt="News" className="news-image" />
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
