import React from 'react';
import './RecentProjectsSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

const projectsData = [
  {
    title: 'Execution of Electronic Database Management System',
    description: 'Execution of Electronic Database Management System and Applicant Tracking Systems...',
    date: 'June 20, 2022',
    image: require('../../../images/news-1.jpg'),
  },
  {
    title: 'Implemented End to End ERP Solutions',
    description: 'Implemented End to End ERP Solutions for premiere pharmaceutical companies...',
    date: 'April 29, 2020',
    image: require('../../../images/news-2.jpg'),
  },
  {
    title: 'Odoo ERP Live Webinar was conducted',
    description: 'Odoo ERP Live Webinar was conducted on the topic "Odoo...',
    date: 'April 29, 2020',
    image: require('../../../images/news-3.jpg'),
  },
  {
    title: 'Created Infrastructure solutions group with ARTEC',
    description: 'Created Infrastructure solutions group with ARTEC IT Solutions AG to...',
    date: 'July 22, 2018',
    image: require('../../../images/news-4.jpg'),
  },
  {
    title: 'Launched OrgChart Viewer using SAPUI5 Fiori',
    description: 'Launched OrgChart Viewer using SAPUI5 Fiori design with SAP Standard...',
    date: 'June 22, 2018',
    image: require('../../../images/news-5.jpg'),
  },
  {
    title: 'Announced key partnership with Cyber Forza',
    description: 'Announced key partnership with Cyber Forza, Inc. to provide Cyber...',
    date: 'May 22, 2018',
    image: require('../../../images/news-6.jpg'),
  },
  {
    title: 'Introduced mTechnician and mAsset',
    description: 'Introduced mTechnician and mAsset Primoris Systems, has introduced two innovative...',
    date: 'December 22, 2017',
    image: require('../../../images/news-7.jpg'),
  },
  {
    title: 'Primoris Systems and KCT Data Join',
    description: 'Primoris Systems and KCT Data Join Forces to Support European...',
    date: 'November 22, 2017',
    image: require('../../../images/news-8.png'),
  }
];

const RecentProjectsSection = () => {
  return (
    <div className="news-recent-projects-wrapper">
      <div className="news-recent-projects">
        <div className="news-projects-grid">
          {projectsData.map((project, index) => (
            <div key={index} className="news-project-card">
              <img src={project.image} alt={project.title} className="news-project-image" />
              <div className="news-project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href="#">Read More</a>
                <div className="news-project-date">
                  <FontAwesomeIcon icon={faClock} className="news-clock-icon" />
                  <span>{project.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentProjectsSection;
