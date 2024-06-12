import React from 'react';
import './NextGenerationCommerceSection.css';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const NextGenerationCommerceSection = () => {
  return (
    <div className="next-generation-commerce-wrapper">
      <div className="next-generation-commerce">
        <SectionTitle title="Solution for Next-Generation Commerce in The Age of Digital Empowerment" dividerColor="#000" />
        <div className="next-generation-commerce-card">
          <div className="next-generation-commerce-content">
            <p>
              The contemporary ecommerce company can provide clients with a thorough, smooth, and omnichannel experience thanks to SAP Hybris.
              The market-leading Hybris platform was renamed SAP Commerce Cloud and integrated with SAP's array of products for the best possible customer experience.
            </p>
            <p>
              SAP Hybris assists companies in providing a compelling and all-encompassing commerce experience, from sophisticated order management and product content management to customer experience management.
            </p>
            <p>
              With SAP Hybris, widely regarded as the world’s fastest-growing ecommerce platform, you can exceed your customers’ expectations and continually create new ways to satisfy and surprise them. You have the option to support all retail business models (B2B/B2C/B2B2C) from the same platform with SAP Hybris/SAP Commerce Cloud. Additionally, it enables you to combine your marketing, business, sales, and service operations for improved performance and a higher return on investment.
            </p>
            <p>
              Primoris Systems, a SAP Hybris Solution Partner, can enable your company to use the cloud-native commerce platform to interact with consumers and meet their needs.
            </p>
          </div>
          <div className="next-generation-commerce-image">
            <img src={require('../../../images/sap-hybris-shop-now.jpg')} alt="Next-Generation Commerce" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextGenerationCommerceSection;
