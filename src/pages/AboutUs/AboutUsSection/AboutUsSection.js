import React from 'react';
import './AboutUsSection.css';
import newsImage from '../../../images/about-us-hero-1.png';

const AboutUsSection = () => {
  return (
    <div className="about-us-section-wrapper">
      <div className="about-us-section">
        <div className="about-us-text">
          <h2>About Us</h2>
          <p>
            Primoris Systems is a dynamic and cutting-edge firm specializing in IT and ITES solutions. With a proven track record, we have successfully implemented a wide range of IT-related solutions for clients across the globe. Our team of skilled professionals is committed to delivering excellence, ensuring seamless integration, robust security, and optimal performance.
          </p>
        </div>
        <div className="about-us-image-wrapper">
          <svg width="100%" height="100%" viewBox="0 0 600 600" className="about-us-image">
            <defs>
              <clipPath id="about-us-image-clip" clipPathUnits="userSpaceOnUse">
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

export default AboutUsSection;
