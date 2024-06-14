import React, { useRef, useEffect, useState } from 'react';
import './ServicesSection/ServicesSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const AccordionItem = ({ index, title, content, isActive, onToggle }) => {
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [content]);

  return (
    <div className={`accordion-item ${isActive ? 'active' : ''}`}>
      <div className={`accordion-header ${isActive ? 'active' : ''}`} onClick={() => onToggle(index)}>
        <span>{title}</span>
        <FontAwesomeIcon icon={isActive ? faMinus : faPlus} />
      </div>
      <div
        ref={contentRef}
        className={`accordion-content ${isActive ? 'active' : ''}`}
        style={{ maxHeight: isActive ? `${contentHeight}px` : '0px' }}
      >
        {content}
      </div>
    </div>
  );
};

export default AccordionItem;
