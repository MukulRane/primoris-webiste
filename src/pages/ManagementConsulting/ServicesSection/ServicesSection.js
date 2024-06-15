import React, { useState } from 'react';
import './ServicesSection.css';
import AccordionItem from '../AccordionItem';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import image1 from '../../../images/management-our-service-background.png';
import image2 from '../../../images/management-our-service.png';

const accordionData = [
  {
    title: 'Strategic Planning',
    content: 'The field of strategic planning is devoted to creating a road map to direct an organization’s strategic ambitions. It frequently focuses on business requirements and how well IT solutions may satisfy those requirements. In the end, strategic planning produces procedures that notably increase operational effectiveness, market responsiveness, and customer value.'
  },
  {
    title: 'Planning for Succession',
    content: 'The process of succession planning, which is continual and future-oriented, is used in organizational development to create a detailed plan for how the organization will employ its staff to accomplish its ambitions, goals, and mission. To maintain continuity of leadership in mission-critical roles, the progression includes analyzing future people’s needs, establishing necessary competencies, and assessing, developing, and keeping a team of skilled individuals.'
  },
  {
    title: 'Organisational Growth',
    content: 'The process of developing internal resources (staff, employees) and internal procedures (strategies, business processes) to support an organization’s mission and goals is known as organizational development.'
  },
  {
    title: 'Facilitation',
    content: 'In business, organisational development, and consensual decision-making, the process of planning and leading a productive meeting is referred to as facilitation. Any group that is gathering for a shared objective, such as reaching a decision, resolving an issue, or just exchanging ideas and information, benefits from facilitation.'
  },
];

const ServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Set the first accordion to be open by default

  const handleToggle = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <div className="services-section">
      <div className="accordion-container">
        <div className="section-title-container">
          <SectionTitle title="Our Services" dividerColor="#000" dividerWidth="70%" dividerAlign="center" />
        </div>
        {accordionData.map((item, index) => (
          <AccordionItem
            key={index}
            index={index}
            title={item.title}
            content={item.content}
            isActive={index === activeIndex}
            onToggle={handleToggle}
          />
        ))}
      </div>
      <div className="image-container">
        <img src={image1} alt="Strategic Planning" className="bottom-image" />
        <img src={image2} alt="Floating" className="top-image" />
      </div>
    </div>
  );
};

export default ServicesSection;
