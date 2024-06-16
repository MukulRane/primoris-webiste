import React from 'react';
import './WhyChooseUs.css';

import icon1 from '../../../images/why-choose-1.png';
import icon2 from '../../../images/why-choose-2.png';
import icon3 from '../../../images/why-choose-3.png';
import icon4 from '../../../images/why-choose-4.png';
import icon5 from '../../../images/why-choose-5.png';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const cardData = [
  {
    icon: icon1,
    title: 'Industry Expertise',
    content: 'Our consultants possess deep industry knowledge and understand the specific challenges and opportunities that businesses in your sector face. We leverage this expertise to deliver tailored solutions that address your unique requirements.',
  },
  {
    icon: icon2,
    title: 'Proven Track Record',
    content: 'We have a strong track record of successfully delivering technical consulting projects for clients of all sizes. Our satisfied clients testify to our ability to drive tangible results, improve operational efficiency, and enhance overall business performance.',
  },
  {
    icon: icon3,
    title: 'Customized Solutions',
    content: 'We understand that each business is unique. That\'s why we customize our consulting services to align with your specific goals, challenges, and budgetary considerations. We provide tailored recommendations and solutions that best fit your organization.',
  },
  {
    icon: icon4,
    title: 'Commitment to Excellence',
    content: 'We are committed to delivering exceptional service and exceeding client expectations. Our team is dedicated to staying up-to-date with the latest technologies and industry trends, ensuring that our recommendations are always at the forefront of innovation.',
  },
  {
    icon: icon5,
    title: 'Collaborative Approach',
    content: 'We believe in building strong partnerships with our clients. Our consultants work closely with your team, actively listening to your needs, and collaborating to develop innovative solutions that meet your business objectives.',
  }
];

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us-section-wrapper">
      <div>
        <SectionTitle title="Why Choose Us" />
      </div>
        <p className="why-choose-us-para">
          We offer a wide range of technical consulting services tailored to meet the unique needs of our clients. Our areas of expertise include
        </p>
      <div className="why-choose-us-section-grid">
        {cardData.map((card, index) => (
          <div className="why-choose-us-section-card" key={index}>
            <div className="why-choose-us-section-card-icon">
              <div className="why-choose-us-icon-circle">
                <img src={card.icon} alt={card.title} />
              </div>
            </div>
            <div className="why-choose-us-section-card-content">
              <h3>{card.title}</h3>
              <p>{card.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
