import React, { useRef, useEffect, useState } from 'react';
import './NewsSection.css';
import newsImage from '../../../images/news-hero.png';

const NewsSection = () => {
  const [visible, setVisible] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <div className="news-section-wrapper">
      <div className="news-section">
        <div ref={textRef} className={`news-text ${visible ? 'come-from-left' : ''}`}>
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
