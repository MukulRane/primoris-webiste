import React, { useState, useEffect } from 'react';
import './SectionTitle.css';

const SectionTitle = ({ title, dividerColor = '#000' }) => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sectionTitle = document.querySelector('.section-title');
      const rect = sectionTitle.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        setInView(true);
      } else {
        setInView(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="section-title">
      <h2>{title}</h2>
      <div className={`divider ${inView ? 'in-view' : ''}`} style={{ borderTopColor: dividerColor }}></div>
    </div>
  );
};

export default SectionTitle;
