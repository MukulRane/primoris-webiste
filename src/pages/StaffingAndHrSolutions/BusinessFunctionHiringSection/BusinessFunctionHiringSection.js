import React from 'react';
import './BusinessFunctionHiringSection.css';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const businessFunctionData = [
  [
    'Sales and Marketing: Our expertise lies in recruiting professionals for roles in new business development, inside sales, marketing, digital marketing, product management, SEO, and brand management.',
    'Human Resources: Our focus is on identifying and recruiting HR professionals who excel in roles such as HR policy makers, HR managers, and Payroll professionals.',
    'We have expertise in recruiting professionals across various domains of business operations.'
  ],
  [
    'Finance and Accounting: We specialize in sourcing professionals for positions such as Chartered Accountants (CAs), Finance Managers, Chief Executive Officers (CEOs), and Corporate Tax Professionals.',
    'Process Consultants: We specialize in sourcing high-end professionals with a strong background in business processes for roles in process consulting.'
  ]
];

const BusinessFunctionHiringSection = () => {
  return (
    <section className="business-function-hiring-section">
      <SectionTitle title="Business Function Hiring" dividerColor="#000" />
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

export default BusinessFunctionHiringSection;
