import React from 'react';
import './AssetManagementHero.css';
import ContactUsButton from '../../../components/ContactUsButton/ContactUsButton';

const AssetManagementHero = () => {
  return (
    <section className="asset-managed-archieve-hero-section-erp">
      <div className="asset-managed-archieve-hero-text-erp">
        <h1>mAsset Management</h1>
        <p>Efficiently manage your expanding IT infrastructure with smart and intuitive asset management solutions designed to meet the demands of your evolving business environment.</p>
        <ContactUsButton text="Contact Us" />
      </div>
      <div className="asset-managed-archieve-hero-image-tint"></div>
    </section>
  );
};

export default AssetManagementHero;
