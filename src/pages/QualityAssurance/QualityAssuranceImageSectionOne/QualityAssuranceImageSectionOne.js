import React from 'react';
import './QualityAssuranceImageSectionOne.css';
import { useRef, useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const QualityAssuranceImageSectionOne = () => {
  const [isLandscapeVisible, setIsLandscapeVisible] = useState(false);
  const [isQualityVisible, setIsQualityVisible] = useState(false);
  const landscapeRef = useRef(null);
  const qualityRef = useRef(null);

  useEffect(() => {
    const landscapeObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !isLandscapeVisible) {
          setIsLandscapeVisible(true);
        }
      },
      {
        threshold: 0.5
      }
    );

    const qualityObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !isQualityVisible) {
          setIsQualityVisible(true);
        }
      },
      {
        threshold: 0.5
      }
    );

    if (landscapeRef.current) {
      landscapeObserver.observe(landscapeRef.current);
    }

    if (qualityRef.current) {
      qualityObserver.observe(qualityRef.current);
    }

    return () => {
      if (landscapeRef.current) {
        landscapeObserver.unobserve(landscapeRef.current);
      }
      if (qualityRef.current) {
        qualityObserver.unobserve(qualityRef.current);
      }
    };
  }, [isLandscapeVisible, isQualityVisible]);

  return (
    <section className="qa-image-quality-assurance-section">
      <SectionTitle title="Current Landscape Challenges" dividerColor="#000" />
      <div ref={landscapeRef} 
        className={isLandscapeVisible ? "qa-image-circle-container image-transition-bottom" : "qa-image-circle-container"}>
        <img
          src={require('../../../images/qa-current-landscape-challenges.png')}
          alt="Quality Assurance Circle"
          className="qa-image-circle-image"
        />
      </div>
      <SectionTitle title="Quality Assurance" dividerColor="#000" />
      <p className="qa-image-sub-title">Where we can help</p>
      <div ref={qualityRef} 
        className={isQualityVisible ? "qa-image-circle-container image-transition-bottom" : "qa-image-circle-container"}>
        <img
          src={require('../../../images/qa-Quality-Assurance.png')}
          alt="Quality Assurance Circle"
          className="qa-image-circle-image"
        />
      </div>
    </section>
  );
};

export default QualityAssuranceImageSectionOne;
