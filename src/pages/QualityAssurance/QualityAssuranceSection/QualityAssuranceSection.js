import React from 'react';
import './QualityAssuranceSection.css';
import { useRef, useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const qualityAssuranceData = [
  {
    title: 'Test Consulting',
    description: 'Strategy & Assessment – We assist clients with end to end testing assessment processes -from planning through final recommendation'
  },
  {
    title: 'Test Automation',
    description: 'We offer a robust set of tools and assets to consistently support the entire spectrum of automation-related testing activities'
  },
  {
    title: 'Test Management and ALM Services',
    description: 'True process automation and easy access to Metrics and KPI’s'
  },
  {
    title: 'Performance Testing',
    description: 'We provide a wide range of strategic and tactical performance tests and performance engineering services'
  },
  {
    title: 'Test Center of Excellence',
    description: 'Strategy & Assessment – We assist clients with end to end testing assessment processes -from planning through final recommendation'
  },
  {
    title: 'Testing Resources',
    description: 'Providing skillful resources for selected clients and partners'
  }
];

const QualityAssuranceSection = () => {
  const [visibleCards, setVisibleCards] = useState({});
  const cardRefs = useRef([]);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleCards((prev) => ({
            ...prev,
            [entry.target.dataset.index]: true,
          }));
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className="quality-assurance-section">
      <SectionTitle title="Latest News" />
      <p className="quality-assurance-sub-title">Scope of Services</p>
      <div className="qa-container">
        {qualityAssuranceData.map((item, index) => (
          <div
            ref={(el) => (cardRefs.current[index] = el)}
            className={visibleCards[index] ? "qa-row list-transition-bottom" : "qa-row"}
            key={index}
            data-index={index}
          >
            <div className={visibleCards[index] ? "qa-card list-transition-bottom" : "qa-card"}>
              <p>{item.title}</p>
            </div>
            <div className="qa-description">
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default QualityAssuranceSection;
