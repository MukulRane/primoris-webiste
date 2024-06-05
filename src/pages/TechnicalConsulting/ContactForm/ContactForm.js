import React from 'react';
import './ContactForm.css';
import CustomButton from '../ContactForm/ContactForm';

const ContactForm = () => {
  return (
    <section className="contact-form">
      <h2>Connect With Us</h2>
      <p>Ready to take your business to new heights? Contact our team today to discuss your consulting needs and schedule a consultation. Let’s unlock the full potential of your business together.</p>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email*</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name*</label>
          <input type="text" id="name" name="name" required />
        </div>
        <CustomButton text="Submit" />
      </form>
    </section>
  );
};

export default ContactForm;
