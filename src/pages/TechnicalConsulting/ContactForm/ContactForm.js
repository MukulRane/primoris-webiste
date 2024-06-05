import React from 'react';
import '../../../components/WorkWithUs/WorkWithUs';
import './ContactForm.css';
import FormField from '../../../components/FormField/FormField';
import CustomButton from '../../../components/CustomButton/CustomButton';

const ContactForm = () => {
  return (
    <div className='work-with-us-wrapper'>
        <section className="work-with-us">
      <div className="left-column">
        <h2>Connect With Us</h2>
        <p>Ready to take your business to new heights? Contact our team today to discuss your consulting needs and schedule a consultation. Let’s unlock the full potential of your business together.</p>
      </div>
      <div className="contact-right-column">
        <FormField label="Email*" type="email" labelStyle={{ fontFamily: 'Roboto, sans-serif', fontSize: '16px', color: '#000' }} />
        <FormField label="Name*" labelStyle={{ fontFamily: 'Roboto, sans-serif', fontSize: '16px', color: '#000' }} />
        <CustomButton text="SUBMIT" />
      </div>
    </section>
    </div>
  );
};

export default ContactForm;
