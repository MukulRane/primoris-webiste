import React from 'react';
import './JobArchiveSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faMapMarkerAlt, faCalendarAlt, faSearch } from '@fortawesome/free-solid-svg-icons';

const JobArchiveSection = () => {
  return (
    <div className="job-archive-wrapper">
      <div className="job-archive-header">
        <h2>Job Archives</h2>
      </div>
      <div className="job-archive-search-wrapper">
        <div className="job-archive-search">
          <input type="text" placeholder="Keywords" />
          <div className="row">
            <select>
              <option value="">Category</option>
              <option value="software">Software</option>
              <option value="management">Management</option>
              <option value="sales">Sales</option>
            </select>
            <select>
              <option value="">Job Type</option>
              <option value="fulltime">Full Time</option>
              <option value="parttime">Part Time</option>
              <option value="contract">Contract</option>
            </select>
            <select>
              <option value="">Location</option>
              <option value="sugarland">Sugarland, TX</option>
              <option value="newyork">New York, NY</option>
              <option value="sanfrancisco">San Francisco, CA</option>
            </select>
            <button type="submit">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </div>
      </div>
      <div className="job-archive-list">
        <div className="job-archive-item">
          <div className="job-archive-item-row">
            <div className="job-archive-item-image">
              <img src={require('../../../images/careers-house.png')} alt="Company Logo" />
            </div>
            <div className="job-archive-item-header">
              <h3>
                <a href="#">
                  <span className="blue-text">Software Engineer</span> | <span className="black-text">Primoris Systems LLC</span>
                </a>
              </h3>
              <div className="job-archive-item-meta">
                <span><FontAwesomeIcon icon={faBriefcase} /> <span>Full time</span></span>
                <span><FontAwesomeIcon icon={faMapMarkerAlt} /> <span>Sugarland, TX</span></span>
                <span><FontAwesomeIcon icon={faCalendarAlt} /> <span>Posted 12 months ago</span></span>
              </div>
            </div>
          </div>
          <div className="job-archive-item-body">
            <p>Date: MARCH 12, 2021 Position: SOFTWARE ENGINEER Location: Sugarland, TX area Job duties: Work collaboratively with cross functional teams to understand project objectives, gather automation requirements, and deliver robust solutions...</p>
          </div>
          <div className="job-archive-item-footer">
            <button className="quick-apply">Quick Apply</button>
            <button className="read-more">Read More</button>
          </div>
        </div>
        <div className="job-archive-item">
          <div className="job-archive-item-row">
            <div className="job-archive-item-image">
              <img src={require('../../../images/careers-house.png')} alt="Company Logo" />
            </div>
            <div className="job-archive-item-header">
              <h3>
                <a href="#">
                  <span className="blue-text">Software Engineer</span> | <span className="black-text">Primoris Systems LLC</span>
                </a>
              </h3>
              <div className="job-archive-item-meta">
                <span><FontAwesomeIcon icon={faBriefcase} /> <span>Full time</span></span>
                <span><FontAwesomeIcon icon={faMapMarkerAlt} /> <span>Sugarland, TX</span></span>
                <span><FontAwesomeIcon icon={faCalendarAlt} /> <span>Posted 12 months ago</span></span>
              </div>
            </div>
          </div>
          <div className="job-archive-item-body">
            <p>Date: AUGUST 19, 2021 Position: SOFTWARE ENGINEER Location: Sugarland, TX area Job duties: Work collaboratively with cross functional teams to understand project objectives, gather automation requirements, and deliver robust solutions...</p>
          </div>
          <div className="job-archive-item-footer">
            <button className="quick-apply">Quick Apply</button>
            <button className="read-more">Read More</button>
          </div>
        </div>
        <div className="job-archive-item">
          <div className="job-archive-item-row">
            <div className="job-archive-item-image">
              <img src={require('../../../images/careers-house.png')} alt="Company Logo" />
            </div>
            <div className="job-archive-item-header">
              <h3>
                <a href="#">
                  <span className="blue-text">Software Developer</span> | <span className="black-text">Primoris Systems LLC</span>
                </a>
              </h3>
              <div className="job-archive-item-meta">
                <span><FontAwesomeIcon icon={faBriefcase} /> <span>Full time</span></span>
                <span><FontAwesomeIcon icon={faMapMarkerAlt} /> <span>Sugarland, TX</span></span>
                <span><FontAwesomeIcon icon={faCalendarAlt} /> <span>Posted 12 months ago</span></span>
              </div>
            </div>
          </div>
          <div className="job-archive-item-body">
            <p>Date:  AUGUST 19, 2022  Position: SOFTWARE DEVELOPER Location: Sugarland, TX area Job duties: Manage AWS infrastructure and automation with CLI and API. Working on I...</p>
          </div>
          <div className="job-archive-item-footer">
            <button className="quick-apply">Quick Apply</button>
            <button className="read-more">Read More</button>
          </div>
        </div>
        <div className="job-archive-item">
          <div className="job-archive-item-row">
            <div className="job-archive-item-image">
              <img src={require('../../../images/careers-house.png')} alt="Company Logo" />
            </div>
            <div className="job-archive-item-header">
              <h3>
                <a href="#">
                  <span className="blue-text">Business Systems Analyst</span> | <span className="black-text">Primoris Systems LLC</span>
                </a>
              </h3>
              <div className="job-archive-item-meta">
                <span><FontAwesomeIcon icon={faBriefcase} /> <span>Full time</span></span>
                <span><FontAwesomeIcon icon={faMapMarkerAlt} /> <span>Sugarland, TX</span></span>
                <span><FontAwesomeIcon icon={faCalendarAlt} /> <span>Posted 1 year ago</span></span>
              </div>
            </div>
          </div>
          <div className="job-archive-item-body">
            <p>Date:  AUGUST 19, 2022  Position: Business Systems Analyst Location: Sugarland, TX area Job duties: Serve as a liaison between Technical teams with Developers and Business team to ...</p>
          </div>
          <div className="job-archive-item-footer">
            <button className="quick-apply">Quick Apply</button>
            <button className="read-more">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobArchiveSection;
