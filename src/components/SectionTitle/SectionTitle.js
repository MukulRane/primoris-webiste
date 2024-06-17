import React from 'react';
import './SectionTitle.css';

const SectionTitle = ({ title, dividerColor = '#000' }) => {

  return (
    <div className="section-title">
      <h2>{title}</h2>
      <div className='divider in-view' style={{ borderTopColor: dividerColor }}></div>
    </div>
  );
};

export default SectionTitle;
