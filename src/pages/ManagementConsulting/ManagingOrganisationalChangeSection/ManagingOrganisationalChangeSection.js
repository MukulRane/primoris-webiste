import React from 'react';
import './ManagingOrganisationalChangeSection.css';
import SectionTitle from '../SectionTitle/SectionTitle';

const ManagingOrganisationalChangeSection = () => {
  return (
    <section className="org-change-section">
      <div className="org-change-text">
        <SectionTitle title="Managing Organisational Change" dividerColor="#fff" dividerWidth="70%" dividerAlign="center" />
        <div className="divider"></div>
        <p>Organizations must accept change if they want to compete. The “people side” of change is the main emphasis of organizational change management (OCM). Inefficient process management frequently results in poor acceptance, inefficiency, and, in the end, project failure.</p>
        <p>Through the development of the best solutions that match your resources and skills, these services assist your company in identifying and addressing areas that need improvement. Our solutions enable your resources to produce value that is in line with the aims and objectives of your organization.</p>
      </div>
      <div className="org-change-image-tint"></div>
    </section>
  );
};

export default ManagingOrganisationalChangeSection;
