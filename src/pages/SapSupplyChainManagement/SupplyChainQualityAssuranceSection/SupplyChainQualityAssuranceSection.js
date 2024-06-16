import React, { useRef, useEffect, useState } from 'react';
import './SupplyChainQualityAssuranceSection.css';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const qualityAssuranceData = [
  {
    title: 'Order Turn Around Time (TAT) Reduction',
    description: 'Design of the processes to meet a defined Order TAT target and align upstream and downstream processes based on this target. Reduction in order TAT will eventually improve customer relationships and satisfaction.'
  },
  {
    title: 'Digitization of Operations (Paperless)',
    description: 'Designing the entire process with a view to eliminate any paper generation to run the warehouse. Enabling electronic picking system (e.g. PTL) or mobility based solutions through Hand Held Terminals / Tablets / Smart Phones etc. to perform warehouse operations.'
  },
  {
    title: 'Minimal Touches and Higher System Guidance',
    description: 'Reducing the instances of multiple handling and number of steps required in completing flow of processes. Convert manual activities to automatic system triggered activities wherever possible to improve accuracy and speed.'
  },
  {
    title: 'Workload Planning and Balancing',
    description: 'Planning of warehouse tasks to ensure that the workloads are balanced across the entire floor and synchronized to meet the delivery objectives planned for the day and optimally utilizing the resources.'
  },
  {
    title: 'Manage by Exceptions',
    description: 'Design and automate the processes in a way that focuses on identifying and handling cases that deviate from the norm. All happy flow scenarios should be automated.'
  }
];

const SupplyChainQualityAssuranceSection = () => {
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
    <section className="supply-chain-quality-assurance-section">
      <SectionTitle title="Our Expertise" />
      <p className="supply-chain-quality-assurance-sub-title">
        Lean approach to Intralogistics can overcome these challenges and help to reduce the overall TAT, improve productivity and accuracy.
      </p>
      <div className="supply-chain-qa-container">
        {qualityAssuranceData.map((item, index) => (
          <div
            ref={(el) => (cardRefs.current[index] = el)}
            className="supply-chain-qa-row"
            key={index}
            data-index={index}
          >
            <div className={`supply-chain-qa-card ${visibleCards[index] ? 'list-transition-left' : ''}`}>
              <p>{item.title}</p>
            </div>
            <div className={`supply-chain-qa-description ${visibleCards[index] ? 'list-transition-right' : ''}`}>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SupplyChainQualityAssuranceSection;
