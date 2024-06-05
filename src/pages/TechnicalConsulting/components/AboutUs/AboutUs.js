import React from 'react';
import './AboutUs.css';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';

const AboutUs = () => {
  return (
    <div className="about-us-wrapper">
      <section className="about-us">
        <div className="about-image">
          <img src={require('../../../../images/technical-consulting-about-us.jpg')} alt="About Us" />
        </div>
        <div className="about-text">
          <SectionTitle title="What We Offer" />
          <p>At Primoris, we specialize in providing top-notch technical consulting services to businesses across various industries. With a team of highly skilled and experienced consultants, we are committed to helping our clients leverage technology to drive innovation, streamline processes, and achieve their business objectives.</p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
