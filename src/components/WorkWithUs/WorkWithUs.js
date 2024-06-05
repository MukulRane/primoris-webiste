import React from 'react';
import './WorkWithUs.css';
import FormField from '../FormField/FormField';
import CustomButton from '../CustomButton/CustomButton';

const WorkWithUs = () => {
  return (
    <div className='work-with-us-wrapper'>
        <section className="work-with-us">
      <div className="left-column">
        <h2>Want to work with us?</h2>
        <p>Our goal is to deliver high value programs within a budget cost and time. Our strategic Advisory services are focused on improving the return on technology investment that also leads to a reduced Total Cost of Ownership (TCO).</p>
        <img src={require('../../images/workwithus.jpg')} alt="Work with us" />
      </div>
      <div className="right-column">
        <FormField label="Name*" />
        <FormField label="Email*" type="email" />
        <FormField label="Phone Number*" type="tel" />
        <FormField label="Comment or Message" rows="7" />
        <CustomButton text="Submit" />
      </div>
    </section>
    </div>
  );
};

export default WorkWithUs;
