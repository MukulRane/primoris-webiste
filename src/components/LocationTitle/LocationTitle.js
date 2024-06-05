import React from 'react';
import './LocationTitle.css'
import SectionTitle from '../SectionTitle/SectionTitle';

const LocationTitle = ({ title, description, bgColor }) => {
  return (
    <div className="location-title">
        <SectionTitle title="Our Locations" />
    </div>
  );
};

export default LocationTitle;
