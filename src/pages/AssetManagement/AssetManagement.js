import React from 'react';
import ContactForm from '../TechnicalConsulting/ContactForm/ContactForm';
import AssetManagementSteps from './AssetManagementSteps/AssetManagementSteps';
import MAssetERP from './MAssetERP/MAssetERP';
import AssetMobile from './AssetMobile/AssetMobile';
import AssetManagementHero from './AssetManagementHero/AssetManagementHero';

const AssetManagement = () => {
  return (
    <div>
        <AssetManagementHero />
        <AssetMobile />
        <MAssetERP />
        <AssetManagementSteps />
        <ContactForm />
    </div>
  );
};

export default AssetManagement;