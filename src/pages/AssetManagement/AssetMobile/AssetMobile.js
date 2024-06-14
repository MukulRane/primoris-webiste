import React from 'react';
import '../../GlobalCaseManagement/CaseManagementSystem/CaseManagementSystem.css';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const AssetMobile = () => {
  return (
    <div className="case-management-wrapper">
      <div className="case-management">
        <SectionTitle title="mAsset Mobile" dividerColor="#000" />
        <p className="case-management-description">
            Mobile application, by using just the standard functions of today’s smart phones, to help you with the time consuming part of the physical asset check. It is, of course, fully integrated with mAsset ERP; this means the download of the asset list and a continuous synchronization with the SAP system. The camera of the phone or tablet could used as a bar code or QR scanner and support of devices equipped with HW barcode / QR code scanners is essential.
        </p>
        <p className="case-management-description">
          The application mAsset Mobile offers much more than just an easy and effective fixed asset check. You can, for example, create photo documentation or start using GPS coordinates (for property and inventory). All of this additional data is being continuously recorded in SAP together with other results of the physical asset check.
        </p>
      </div>
    </div>
  );
};

export default AssetMobile;
