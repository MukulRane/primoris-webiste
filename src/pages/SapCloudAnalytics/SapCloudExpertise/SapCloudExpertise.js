import React from 'react';
import '../../SapDevelopment/OurExpertiseSection/OurExpertiseSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faCloud, faCog } from '@fortawesome/free-solid-svg-icons';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { useRef, useEffect, useState } from 'react';

const expertiseData = [
  {
    icon: faCheckSquare,
    title: 'Optimal Business Decision-Making',
    description: 'Informed business decisions based on real-time analysis of data from multiple sources.'
  },
  {
    icon: faCloud,
    title: 'Collaboration Among Specialists',
    description: 'Facilitated through diverse collaboration methods, such as report discussions, dashboard element commenting, and selective sharing with specific users.'
  },
  {
    icon: faCog,
    title: 'Cutting-edge Technology',
    description: 'Automates data exploration using the Smart Discovery feature and provides Smart Insights & Smart Transformations.'
  },
  {
    icon: faCheckSquare,
    title: 'Mobile-enabled Solution',
    description: 'Cross-platform compatibility for desktop computers and modern mobile devices.'
  },
  {
    icon: faCloud,
    title: 'Strength and weakness identification',
    description: 'Leveraging advanced analytics, artificial intelligence, and machine learning, Smart Assist enables the identification of company strengths and weaknesses.'
  },
  {
    icon: faCog,
    title: 'Enhanced Flexibility',
    description: 'End-users can effortlessly create user-friendly reports using the Stories feature, and build advanced dashboards with Analytic Applications.'
  }
];

const OurExpertiseSection = () => {

  const [isPartners, setIsPartners] = useState(false);
  const isPartnersRef = useRef(null);

  useEffect(() => {
    const isPartnersObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !isPartners) {
          setIsPartners(true);
        }
      },
      {
        threshold: 0.5
      }
    );

    if (isPartnersRef.current) {
      isPartnersObserver.observe(isPartnersRef.current);
    }


    return () => {
      if (isPartnersRef.current) {
        isPartnersObserver.unobserve(isPartnersRef.current);
      }
    };
  }, [isPartners]);


  return (
    <section className="our-expertise-section">
      <SectionTitle title="Our Expertise" dividerColor="#000" />
      <div ref={isPartnersRef} 
        className={`our-expertise-cards-container ${isPartners ? 'appear' : ''}`}>
        {expertiseData.map((expertise, index) => (
          <div className="our-expertise-item" key={index}>
            <div className="icon-container">
              <FontAwesomeIcon icon={expertise.icon} className="icon" />
            </div>
            <h3>{expertise.title}</h3>
            <p>{expertise.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurExpertiseSection;
