import React from 'react';
import './WhyChooseUs.css';

const whyChooseUsData = [
  {
    title: 'Industry Expertise',
    description: 'Our consultants possess deep industry knowledge and understand the specific challenges and opportunities that businesses in your sector face. We leverage this expertise to deliver tailored solutions that address your unique requirements.',
  },
  {
    title: 'Proven Track Record',
    description: 'We have a strong track record of successfully delivering technical consulting projects for clients of all sizes. Our satisfied clients testify to our ability to drive tangible results, improve operational efficiency, and enhance overall business performance.',
  },
  {
    title: 'Collaborative Approach',
    description: 'We believe in building strong partnerships with our clients. Our consultants work closely with your team, actively listening to your needs, and collaborating to develop innovative solutions that meet your business objectives.',
  },
  {
    title: 'Customized Solutions',
    description: 'We understand that each business is unique. That’s why we customize our consulting services to align with your specific goals, challenges, and budgetary considerations. We provide tailored recommendations and solutions that best fit your organization.',
  },
  {
    title: 'Commitment to Excellence',
    description: 'We are committed to delivering exceptional service and exceeding client expectations. Our team is dedicated to staying up-to-date with the latest technologies and industry trends, ensuring that our recommendations are always at the forefront of innovation.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <h2>Why Choose Us</h2>
      <div className="why-choose-us-cards">
        {whyChooseUsData.map((item, index) => (
          <div className="why-choose-us-card" key={index}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
