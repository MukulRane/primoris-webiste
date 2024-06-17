import React, { useRef, useEffect, useState } from 'react';
import './LatestNews.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import CustomButton from '../CustomButton/CustomButton';

const LatestNews = () => {
  const [visibleItems, setVisibleItems] = useState({});
  const itemRefs = useRef([]);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleItems((prev) => ({
            ...prev,
            [entry.target.dataset.index]: true,
          }));
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      itemRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className="homepage-latest-news">
      <div className="homepage-news-title">
        <SectionTitle title="Latest News" />
        <p>Stay updated with our latest news.</p>
      </div>
      <div className="homepage-news-content">
        <div className="homepage-news-items">
          {[
            {
              number: 1,
              title: 'Infrastructure solutions group with ARTEC IT Solutions AG',
              description:
                "Primoris Systems creates Infrastructure solutions group with ARTEC IT Solutions AG to provide Artec's protective Appliance.",
            },
            {
              number: 2,
              title: 'Primoris Systems announces OrgChart Viewer',
              description:
                'Using SAPUI5 Fiori design with SAP Standard code OrgChart delivers an Organizational diagram with an interactive User Interface (UI).',
            },
            {
              number: 3,
              title: 'Key partnership with Cyber Forza, Inc. to provide their CISS',
              description:
                'We provide Cyber Intelligent Security Software (CISS) to Enterprise companies like Cyber Forza.',
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`homepage-news-item ${
                visibleItems[index] ? 'slide-from-bottom' : ''
              }`}
              data-index={index}
              ref={(el) => (itemRefs.current[index] = el)}
            >
              <div className="homepage-news-number">{item.number}</div>
              <div className="homepage-news-text">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
          <div className="homepage-news-item-button">
            <CustomButton text="Know More" />
          </div>
        </div>
        <div className="homepage-news-image">
          <img src={require('../../images/latestNews.jpg')} alt="News" />
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
