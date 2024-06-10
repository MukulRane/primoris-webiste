import React from 'react';
import './QualityAssuranceImageSectionOne.css';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const QualityAssuranceImageSectionOne = () => {
  return (
    <section className="qa-image-quality-assurance-section">
      <SectionTitle title="Current Landscape Challenges" dividerColor="#000" />
      <div className="qa-image-circle-container">
        <img
          src={require('../../../images/qa-current-landscape-challenges.png')}
          alt="Quality Assurance Circle"
          className="qa-image-circle-image"
        />
      </div>
      <SectionTitle title="Quality Assurance" dividerColor="#000" />
      <p className="qa-image-sub-title">Where we can help</p>
      <div className="qa-image-circle-container">
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
