import React from 'react';
import HeroSection from '../TechnicalConsulting/components/HeroSection/HeroSection';
import AboutUs from '../TechnicalConsulting/components/AboutUs/AboutUs';
import Approach from '../TechnicalConsulting/components/Approach/Approach';
import Expertise from '../TechnicalConsulting/Expertise/Expertise';
import WhyChooseUs from '../TechnicalConsulting/WhyChooseUs/WhyChooseUs';
import ContactForm from '../TechnicalConsulting/ContactForm/ContactForm';

const TechnicalConsulting = () => {
  return (
    <div>
      <HeroSection />
      <AboutUs />
      <Approach />
      <Expertise />
      {/* <WhyChooseUs /> */}
      <ContactForm />
    </div>
  );
};

export default TechnicalConsulting;
