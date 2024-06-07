import React from 'react';
import './SnowflakeHero.css';
import ContactUsButton from '../../../components/ContactUsButton/ContactUsButton';

const SnowflakeHero = () => {
  return (
    <section className="snowflake-hero-section-erp">
      <div className="snowflake-hero-text-erp">
        <h1>Snowflake Service</h1>
        <p className="snowflake-hero-text-p1">We are specially qualified to deploy organized and unstructured data to support your business objectives as a Snowflake Elite Consulting Partner.</p>
        <p className="snowflake-hero-text-p2">We are always coming up with new ideas to make your cloud data conversion journey easier. You can get the most out of your Snowflake investment and performance with our selection of accelerators and Apps for the Snowflake Marketplace.</p>
        <ContactUsButton text="Contact Us" />
      </div>
      <div className="snowflake-hero-image-tint"></div>
    </section>
  );
};

export default SnowflakeHero;
