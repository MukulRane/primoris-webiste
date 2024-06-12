import React from 'react';
import '../../StaffingAndHrSolutions/BusinessFunctionHiringSection/BusinessFunctionHiringSection.css';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const businessFunctionData = [
  [
    'One-stop shop for B2B, B2C, and B2B2C use cases',
    'Managing partners, distributors, and suppliers through a single platform',
    'Omnichannel skills that lead the industry',
    'Skills specific to the cloud',
    'Multi-catalog management with advanced product management module',
    'Provides customers with mobile-first experiences',
    'Supports Spartacus, a SAP Hybris storefront framework that is business-ready.'
  ],
  [
    'Many websites, languages, and currencies supported',
    'Smart CX module for customer, promotion, and search result management',
    'Scalable checkout and shopping cart procedures',
    'Pre-built connections with other SAP products that are hassle-free',
    'Merchandising & guided selling enabled by AI for contextual system for managing intelligent product content (CX)',
    'Ideal environment for the creation of progressive web applications'
  ]
];

const SapHybrisCommerceCloud = () => {
  return (
    <section className="business-function-hiring-section">
      <SectionTitle title="Why Should You Choose SAP Commerce Cloud for Your Online Store?" dividerColor="#000" />
      <div className="content-container">
        {businessFunctionData.map((column, columnIndex) => (
          <div key={columnIndex} className="column">
            {column.map((item, index) => (
              <div key={index} className="item">
                <div className="bullet-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48" fill="none">
                    <path d="M8.23831 38.7526L14.9722 34.9698L14.3253 36.9867C13.909 38.2847 15.2998 39.4202 16.4883 38.7526L40.4668 25.2828C41.4872 24.7095 41.4872 23.2404 40.4668 22.6672L16.4883 9.19739C15.2999 8.52978 13.909 9.66531 14.3253 10.9633L14.9722 12.9802L8.23831 9.19739C7.04985 8.52978 5.65901 9.66531 6.07535 10.9633L10.1999 23.8223C10.2317 23.9216 10.2317 24.0284 10.1999 24.1277L6.07535 36.9867C5.65901 38.2847 7.04985 39.4202 8.23831 38.7526Z" fill="#3A8BC8" stroke="white"></path>
                  </svg>
                </div>
                <p>{item}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SapHybrisCommerceCloud;
