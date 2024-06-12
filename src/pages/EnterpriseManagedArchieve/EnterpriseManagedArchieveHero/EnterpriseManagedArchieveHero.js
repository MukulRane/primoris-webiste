import React from 'react';
import './EnterpriseManagedArchieveHero.css';
import ContactUsButton from '../../../components/ContactUsButton/ContactUsButton';

const EnterpriseManagedArchieveHero = () => {
  return (
    <section className="enterprise-managed-archieve-hero-section-erp">
      <div className="enterprise-managed-archieve-hero-text-erp">
        <h1>Enterprise Managed Archive</h1>
        <p>One Appliance – Many possibilities</p>
        <ContactUsButton text="Contact Us" />
      </div>
      <div className="enterprise-managed-archieve-hero-image-tint"></div>
    </section>
  );
};

export default EnterpriseManagedArchieveHero;
