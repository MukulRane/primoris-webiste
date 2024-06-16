import React from 'react';
import ContactUsForm from './ContactUsForm/ContactUsForm.js';
import LocationTitle from '../../components/LocationTitle/LocationTitle.js';
import LocationDetails from '../../components/LocationDetails/LocationDetails.js';

const ContactUs = () => {
  return (
    <div>
        <ContactUsForm />
        <LocationTitle />
        <LocationDetails />
    </div>
  );
};

export default ContactUs;
