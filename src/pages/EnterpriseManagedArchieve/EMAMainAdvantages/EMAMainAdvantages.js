import React from 'react';
import '../../StaffingAndHrSolutions/BusinessFunctionHiringSection/BusinessFunctionHiringSection.css';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const businessFunctionData = [
  [
    'Prevents manipulation after archiving through the use of electronic signatures and data encryption.',
    'Flexible and usable regardless of an organization’s existing IT infrastructure.',
    'Scalable from small businesses to large organizations due to different hardware platforms.',
    'Extremely fast to integrate into your network due to Plug & Play setup',
    'Legally compliant archiving of e-mail messages, documents, files, and voice data that takes current guidelines, regulations, and laws into account.',
  ],
  [
    'Contains innovative features to allow internal compliance regulations to be implemented.',
    'Works in conjunction with every SAN or NAS storage system when performing backups.',
    'Reduces the amount of storage required through the use of single instancing: every document is only archived once.',
    'Restoring archived information is easy and painless.',
    'Allows you to create a central archive for all business-relevant information instead of isolated islands for different types of content.',
  ]
];

const EMAMainAdvantages = () => {
  return (
    <section className="business-function-hiring-section">
      <SectionTitle title="Main Advantages" dividerColor="#000" />
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

export default EMAMainAdvantages;
