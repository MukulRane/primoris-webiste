import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-logo-social">
            <img src={require('../../images/primoris-logo.png')} alt="Primoris Systems" className="footer-logo" />
            <div className="footer-social">
              <a href="#"><img src={require('../../images/facebook.png')} alt="Facebook" className="social-icon" /></a>
              <a href="#"><img src={require('../../images/twitter.png')} alt="Twitter" className="social-icon" /></a>
              <a href="#"><img src={require('../../images/youtube.png')} alt="YouTube" className="social-icon" /></a>
              <a href="#"><img src={require('../../images/linkedin.png')} alt="LinkedIn" className="social-icon" /></a>
              <a href="#"><img src={require('../../images/medium.png')} alt="Medium" className="social-icon" /></a>
            </div>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4>SERVICES</h4>
              <Link to="/business-consulting">BUSINESS</Link>
              <Link to="/management-consulting">MANAGEMENT CONSULTING</Link>
              <Link to="/technical-consulting">TECHNICAL CONSULTING</Link>
              <Link to="/risk-management">RISK MANAGEMENT</Link>
              <Link to="/sap-consulting">ANALYTICS TOOLKIT</Link>
              <Link to="/data-science-consulting">DATA SCIENCE</Link>
              <Link to="/quality-assurance">QUALITY ASSURANCE</Link>
            </div>
            <div className="footer-column">
              <h4>SAP CORE COMPETENCIES</h4>
              <Link to="/sap-s4-hana-service">S/4 HANA</Link>
              <Link to="/sap-cloud-analytics">CLOUD ANALYTICS</Link>
              <Link to="/sap-fiori">FIORI</Link>
              <Link to="/sap-crm">CRM</Link>
              <Link to="/sap-hybris">HIBRIS</Link>
              <Link to="/sap-supply-chain-management">SUPPLY CHAIN MANAGEMENT</Link>
            </div>
            <div className="footer-column">
              <h4>SOLUTIONS</h4>
              <Link to="/enterprise-managed-archive">ENTERPRISE MANAGED ARCHIVES</Link>
              <Link to="/enterprise-managed-archive-sap">GLOBAL CASE MANAGEMENT</Link>
              <Link to="/global-case-management-ediscovery">DB LUMINOUS</Link>
              <Link to="/mtechnician">MTECHNICIAN</Link>
              <Link to="/orgchart-viewer">ORGCHART VIEWER</Link>
              <Link to="/asset-management">MASSET MANAGEMENT</Link>
            </div>
            <div className="footer-column">
              <h4>QUICK LINKS</h4>
              <Link to="/about-us">ABOUT US</Link>
              <Link to="/blogs">BLOGS</Link>
              <Link to="/news">NEWS</Link>
              <Link to="/careers">CAREERS</Link>
              <Link to="/contact-us">CONTACT</Link>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>COPYRIGHT 2023 © PRIMORIS SYSTEMS LLC</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
