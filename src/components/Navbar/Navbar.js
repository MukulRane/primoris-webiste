import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Dropdown from '../Dropdown/Dropdown';
import './Navbar.css';
import logo from '../../images/primoris-logo-navbar.png';

const services = [
  { label: 'Business Consulting Services', link: '/business-consulting' },
  { label: 'Management Consulting', link: '/management-consulting' },
  { label: 'Technical Consulting', link: '/technical-consulting' },
  { label: 'ERP Functional Consulting', link: '/erp-functional-consulting' },
  { label: 'SAP Consulting Services', link: '/sap-consulting' },
  { label: 'Risk Management & Security Consulting', link: '/risk-management' },
  { label: 'Big Data Consulting', link: '/big-data-consulting' },
  { label: 'Data Science Consulting Services', link: '/data-science-consulting' },
  { label: 'Quality Assurance', link: '/quality-assurance' },
  { label: 'Managed Services', link: '/managed-services' },
  { label: 'Staffing And HR Solutions', link: '/staffing-hr-solutions' },
  { label: 'Snowflake Service', link: '/snowflake-service' }
];

const sapServices = [
  { label: 'SAP S/4 Hana Service', link: '/sap-s4-hana-service' },
  { label: 'SAP Cloud Analytics', link: '/sap-cloud-analytics' },
  { label: 'SAP Fiori', link: '/sap-fiori' },
  { label: 'SAP CRM', link: '/sap-crm' },
  { label: 'SAP Hybris', link: '/sap-hybris' },
  { label: 'SAP Supply Chain Management', link: '/sap-supply-chain-management' }
];

const solutions = [
  { label: 'Enterprise Managed Archive', link: '/enterprise-managed-archive' },
  { label: 'Enterprise Managed Archive For SAP', link: '/enterprise-managed-archive-sap' },
  { label: 'Global Case Management EDiscovery', link: '/global-case-management-ediscovery' },
  { label: 'MTechnician', link: '/mtechnician' },
  { label: 'OrgChart Viewer', link: '/orgchart-viewer' },
  { label: 'Asset Management', link: '/asset-management' }
];

const resources = [
  { label: 'News', link: '/news' },
  { label: 'Blogs', link: '/blogs' },
  { label: 'Careers', link: '/careers' },
  { label: 'Contact Us', link: '/contact-us' }
];

const Navbar = () => {
  const location = useLocation();
  const isErpPage = location.pathname === '/erp-functional-consulting';

  return (
    <div className={`navbar-container ${isErpPage ? 'transparent' : ''}`}>
      <div className="navbar">
        <div className="logo-container">
          <img src={logo} alt="Primoris Systems" className="logo" />
        </div>
        <nav>
          <ul>
            <li><Link to="/" className="about-us-link">ABOUT US</Link></li>
            <li>
              <Dropdown title="SERVICES" items={services} />
            </li>
            <li>
              <Dropdown title="SAP SERVICES" items={sapServices} />
            </li>
            <li>
              <Dropdown title="SOLUTIONS" items={solutions} />
            </li>
            <li>
              <Dropdown title="RESOURCES" items={resources} />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
