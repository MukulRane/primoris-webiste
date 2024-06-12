import React from 'react';
import './CaseManagementSystem.css';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const CaseManagementSystem = () => {
  return (
    <div className="case-management-wrapper">
      <div className="case-management">
        <SectionTitle title="Case Management System" dividerColor="#000" />
        <p className="case-management-description">
          When you face a legal dispute, regulatory inquiries, or an internal corporate investigation, handling your electronic data and the information it contains is vital for the proceedings to go smoothly. Legal requirements constantly change and the amounts of data that need to be processed continue to grow. This makes collecting evidence more difficult and more costly than ever before. Processing data correctly and keeping it organized increases the overall efficiency of the process and is the best way to lower the costs that come with evidence preservation.
        </p>
        <div className="case-management-image-container">
          <img src={require('../../../images/case-management-system.jpg')} alt="Case Management System" className="case-management-image" />
        </div>
        <p className="case-management-footer">
          Our case management system makes it easy for users to organize data, perform early case analyses, and make use of technologically enhanced research tools. A dedicated permission management system ensures that users only receive access to relevant information.
        </p>
      </div>
    </div>
  );
};

export default CaseManagementSystem;
