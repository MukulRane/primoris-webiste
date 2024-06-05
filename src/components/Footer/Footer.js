import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
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
            <a href="#">BUSINESS CONSULTING</a>
            <a href="#">MANAGEMENT CONSULTING</a>
            <a href="#">TECHNICAL CONSULTING</a>
            <a href="#">RISK MANAGEMENT</a>
            <a href="#">ANALYTICS TOOLKIT</a>
            <a href="#">DATA SCIENCE</a>
            <a href="#">QUALITY ASSURANCE</a>
          </div>
          <div className="footer-column">
            <h4>SAP CORE COMPETENCIES</h4>
            <a href="#">S/4 HANA</a>
            <a href="#">CLOUD ANALYTICS</a>
            <a href="#">FIORI</a>
            <a href="#">CRM</a>
            <a href="#">HIBRIS</a>
            <a href="#">SUPPLY CHAIN MANAGEMENT</a>
          </div>
          <div className="footer-column">
            <h4>SOLUTIONS</h4>
            <a href="#">ENTERPRISE MANAGED ARCHIVES</a>
            <a href="#">GLOBAL CASE MANAGEMENT</a>
            <a href="#">DB LUMINOUS</a>
            <a href="#">MTECHNICIAN</a>
            <a href="#">ORGCHART VIEWER</a>
            <a href="#">MASSET MANAGEMENT</a>
          </div>
          <div className="footer-column">
            <h4>QUICK LINKS</h4>
            <a href="#">ABOUT US</a>
            <a href="#">BLOGS</a>
            <a href="#">NEWS</a>
            <a href="#">CAREERS</a>
            <a href="#">CONTACT</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>COPYRIGHT 2023 © PRIMORIS SYSTEMS LLC</p>
      </div>
    </footer>
  );
};

export default Footer;
