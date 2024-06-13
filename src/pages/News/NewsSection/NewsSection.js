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
          <svg width="100%" height="100%" viewBox="0 0 600 600" className="news-image">
            <defs>
              <clipPath id="news-image-clip" clipPathUnits="userSpaceOnUse">
                <path d="M400,150 C450,250 470,350 450,450 C430,550 370,650 300,700 C230,750 150,800 100,750 C50,700 20,600 10,500 C0,400 10,300 50,200 C90,100 200,50 300,50 C400,50 350,50 400,150 Z" />
              </clipPath>
            </defs>
            <image
              xlinkHref={newsImage}
              x="0"
              y="0"
              width="600"
              height="600"
              clipPath="url(#news-image-clip)"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
