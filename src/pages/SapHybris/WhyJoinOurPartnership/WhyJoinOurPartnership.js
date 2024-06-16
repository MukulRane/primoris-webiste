import React from 'react';
import '../../TechnicalConsulting/WhyChooseUs/WhyChooseUs.css';

import icon1 from '../../../images/why-choose-1.png';
import icon2 from '../../../images/why-choose-2.png';
import icon3 from '../../../images/why-choose-3.png';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const cardData = [
  {
    icon: icon1,
    title: 'Partner Recognised by Industry',
    content: 'Primoris Systems is a well-known SAP Open Ecosystem Partner in the marketplace.',
  },
  {
    icon: icon3,
    title: '14+ years of experience in the industry',
    content: 'Having developed cutting-edge e-commerce solutions for multi-industry and retail business use cases, including B2B, B2C, and B2B2C marketplaces, for more than 14 years.',
  },
  {
    icon: icon2,
    title: 'A Group of Experts',
    content: 'a multidisciplinary group of QA specialists, solution architects, and Hybris experts',
  }
];

const WhyJoinOurPartnership = () => {
  return (
    <section className="why-choose-us-section-wrapper">
      <div>
        <SectionTitle title="Why Choose Us" />
      </div>
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

export default WhyJoinOurPartnership;
