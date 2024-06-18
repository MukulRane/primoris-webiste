import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavbarMobileView.css';
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

const NavbarMobileView = () => {
  const location = useLocation();
  const isErpPage = location.pathname === '/erp-functional-consulting';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState('');
  const menuRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleDropdownToggle = (title) => {
    setOpenDropdown(openDropdown === title ? '' : title);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenDropdown('');
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      closeMenu();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const getDropdownSign = (title) => {
    return openDropdown === title ? '-' : '+';
  };

  return (
    <div ref={menuRef} className={`mobile-view-navbar-container ${isErpPage ? 'transparent' : ''}`}>
      <div className="mobile-view-navbar">
        <div className="mobile-view-logo-container">
          <Link to="/" onClick={closeMenu}><img src={logo} alt="Primoris Systems" className="mobile-view-logo" /></Link>
        </div>
        <div className="mobile-view-mobile-menu-toggle" onClick={toggleMobileMenu}>
          <i className="fa fa-bars"></i>
          <span className="mobile-view-toggle-text">{isMobileMenuOpen ? 'CLOSE' : 'MENU'}</span>
        </div>
      </div>
      {isMobileMenuOpen && (
        <nav className="mobile-view-nav-open">
          <ul>
            <li>
              <Link to="/about-us" className="mobile-view-about-us-link" onClick={closeMenu}>ABOUT US</Link>
            </li>
            <li className="mobile-view-dropdown-title" onClick={() => handleDropdownToggle('SERVICES')}>
              <span>SERVICES</span>
              <span className="dropdown-sign">{getDropdownSign('SERVICES')}</span>
            </li>
            {openDropdown === 'SERVICES' && (
              <ul className="mobile-view-dropdown-content">
                {services.map((item) => (
                  <li key={item.label}>
                    <Link to={item.link} onClick={closeMenu}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            )}
            <li className="mobile-view-dropdown-title" onClick={() => handleDropdownToggle('SAP SERVICES')}>
              <span>SAP SERVICES</span>
              <span className="dropdown-sign">{getDropdownSign('SAP SERVICES')}</span>
            </li>
            {openDropdown === 'SAP SERVICES' && (
              <ul className="mobile-view-dropdown-content">
                {sapServices.map((item) => (
                  <li key={item.label}>
                    <Link to={item.link} onClick={closeMenu}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            )}
            <li className="mobile-view-dropdown-title" onClick={() => handleDropdownToggle('SOLUTIONS')}>
              <span>SOLUTIONS</span>
              <span className="dropdown-sign">{getDropdownSign('SOLUTIONS')}</span>
            </li>
            {openDropdown === 'SOLUTIONS' && (
              <ul className="mobile-view-dropdown-content">
                {solutions.map((item) => (
                  <li key={item.label}>
                    <Link to={item.link} onClick={closeMenu}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            )}
            <li className="mobile-view-dropdown-title" onClick={() => handleDropdownToggle('RESOURCES')}>
              <span>RESOURCES</span>
              <span className="dropdown-sign">{getDropdownSign('RESOURCES')}</span>
            </li>
            {openDropdown === 'RESOURCES' && (
              <ul className="mobile-view-dropdown-content">
                {resources.map((item) => (
                  <li key={item.label}>
                    <Link to={item.link} onClick={closeMenu}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            )}
          </ul>
        </nav>
      )}
    </div>
  );
};

export default NavbarMobileView;
