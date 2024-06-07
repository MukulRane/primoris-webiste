import React, { useState } from 'react';
import './ServicesSection/ServicesSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const AccordionItem = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleAccordion = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`accordion-item ${isActive ? 'active' : ''}`}>
      <div className={`accordion-header ${isActive ? 'active' : ''}`} onClick={toggleAccordion}>
        <span>{title}</span>
        <FontAwesomeIcon icon={isActive ? faMinus : faPlus} />
      </div>
      <div className={`accordion-content ${isActive ? 'active' : ''}`}>
        {content}
      </div>
    </div>
  );
};

export default AccordionItem;
