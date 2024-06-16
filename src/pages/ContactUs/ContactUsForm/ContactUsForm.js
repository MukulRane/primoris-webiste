import React from 'react';
import '../../../components/WorkWithUs/WorkWithUs.css';
import '../ContactUs.css'
import FormField from '../../../components/FormField/FormField';
import CustomButton from '../../../components/CustomButton/CustomButton';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const ContactUsForm = () => {
  return (
    <div className='contact-us-wrapper'>
      <SectionTitle title="Contact Us" />
      <div className="contact-us-column">
        <FormField label="Name*" labelStyle={{ fontFamily: 'Dosis, sans-serif', fontSize: '15px', color: '#000' }} />
        <FormField label="Email*" type="email" labelStyle={{ fontFamily: 'Dosis, sans-serif', fontSize: '15px', color: '#000' }} />
        <FormField label="Phone Number*" type="tel" labelStyle={{ fontFamily: 'Dosis, sans-serif', fontSize: '15px', color: '#000' }} />
        <FormField label="Comment or Message" rows="7" labelStyle={{ fontFamily: 'Dosis, sans-serif', fontSize: '15px', color: '#000' }} />
        <CustomButton text="Submit" />
      </div>
    </div>
  );
};

export default ContactUsForm;
