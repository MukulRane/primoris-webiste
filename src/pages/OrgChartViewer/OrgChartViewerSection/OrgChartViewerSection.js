import React from 'react';
import './OrgChartViewerSection.css';
import orgChartImage from '../../../images/org-chart-viewer.png';

const OrgChartViewerSection = () => {
  return (
    <div className="org-chart-viewer-wrapper">
      <div className="org-chart-viewer">
        <div className="org-chart-image">
          <img src={orgChartImage} alt="Org Chart Viewer" />
        </div>
        <p>SAPUI5 / SAP Fiori Applications</p>
        <div className="org-chart-content">
          <h3>Company at your fingertips.</h3>
          <p>
            OrgChart Viewer brings you more than just an organizational diagram. It’s interactive UI allows you to quickly reach employee/colleague contact information, find out the authority and responsibility distribution or clarify hiring necessities. It also helps you assign work tasks accordingly to employee’s competence scope, or even prevent work duplication.
          </p>
          <p>
            Intuitive touch controls, along with the interactive infographics merge into a powerful educational tool, and a guarantee of a coherent and graphic educational technique. Not to forget the convenience of data post-processing in your SAP in comparison to paper-based tests.
          </p>
          <div className="schedule-demo-button">
            <button>Schedule Demo</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrgChartViewerSection;
