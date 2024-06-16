import React from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import Offerings from '../../components/Offerings/Offerings';
import Partners from '../../components/Partners/Partners';
import LatestNews from '../../components/LatestNews/LatestNews';
import WorkWithUs from '../../components/WorkWithUs/WorkWithUs';
import LocationTitle from '../../components/LocationTitle/LocationTitle';
import LocationDetails from '../../components/LocationDetails/LocationDetails';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      {/* <ImageSection /> */}
      <Offerings />
      <Partners />
      <LatestNews />
      <WorkWithUs />
      <LocationTitle />
      <LocationDetails />
    </>
  );
};

export default HomePage;
