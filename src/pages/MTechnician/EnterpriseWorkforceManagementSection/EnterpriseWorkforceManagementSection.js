import React from 'react';
import './EnterpriseWorkforceManagementSection.css';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const EnterpriseWorkforceManagementSection = () => {
  return (
    <div className="enterprise-workforce-management-wrapper">
      <SectionTitle title="Enterprise Workforce Management pack" dividerColor="#000" />
      <div className="enterprise-workforce-management-content">
        <p>
          Coherent mobile workforce-management app. With numerous successful implementations, and thousands of users, mTechnician is one of the key parts of our portfolio.
        </p>
        <p>
          In the late 2014, we started working on changing the way enterprise logistic apps were being widely presented- as pragmatic table-based screens with plain text fields. In order to make enterprise apps more human-friendly, we've re-designed the user interfaces, consulting with experienced UX developers, we came up with an entirely new layout of our application portfolio.
        </p>
        <p>
          Intuitive touch controls along with interactive features merge into a powerful management tool with built-in team scenarios, process overviews, 'role'-based workflows, and that also draws the most out of nowadays common mobile-devices features. Thanks to obeying the SAP standards all through the development, the app can be easily integrated with any SAP module, or with any other application on the Mobile Device.
        </p>
      </div>
    </div>
  );
};

export default EnterpriseWorkforceManagementSection;
