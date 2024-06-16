import React, { useRef, useEffect, useState } from 'react';
import './MAssetERP.css';
import SectionTitle from '../../ManagementConsulting/SectionTitle/SectionTitle';

const MAssetERP = () => {
  const [isImageVisible, setIsImageVisible] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const handleIntersection = (entries) => {
      const entry = entries[0];
      if (entry.isIntersecting && !isImageVisible) {
        setIsImageVisible(true);
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, [isImageVisible]);

  return (
    <div className="mAsset-wrapper">
      <SectionTitle title="mAsset ERP" />
      <section className="masset-user-experience-section">
        <div className="masset-user-experience-content">
          <p>mAsset ERP enables you to effectively plan, organize and revise your fixed management activities and thus minimalizes the costs of this routine activity which is at the same time an essential part of the company administrative processes.</p>
          <p>The preparation and processing of the inventory check result in mAsset is being solved with the help of the SAP Document Management System (DMS) module. SAP standard tools and functionalities can be used to support the preparation and processing of the Inventory check result thanks to the unique solution of an electronic asset list with specially designed document info records (for example a connection with different authorization groups, status management, workflow, etc.,)</p>
        </div>
        <div ref={imageRef} className={`masset-user-experience-image ${isImageVisible ? 'come-from-right' : ''}`}>
          <img src={require('../../../images/mAsset-ERP.jpg')} alt="SAP Fiori User Experience" />
        </div>
      </section>
    </div>
  );
};

export default MAssetERP;
