import React from 'react';
import './SecuritySection.css';

const SecuritySection = () => {
  return (
    <section className="security-section">
      <div className="security-content">
        <div className="security-text">
          <h2>Our Services & Products can mitigate risk and provide security in these areas:</h2>
          <div className="security-category">
            <h3>Defender – External Threats Protection</h3>
            <ul>
              <li>Span Filtering Antivirus (Alerts)</li>
              <li>Threat Management (Reporting, Monitoring)</li>
              <li>IDS/IPS Ransomware and Malware Detections</li>
            </ul>
          </div>
          <div className="security-category">
            <h3>Client End-Point / IOT Device Security Protection</h3>
            <ul>
              <li>Scanning</li>
              <li>Ransomware Protection</li>
              <li>Intrusion Detection and Protection</li>
            </ul>
          </div>
          <div className="security-category">
            <h3>Interceptor – Internal Threats Protection</h3>
            <ul>
              <li>IP Theft Protection</li>
              <li>Data Loss, Data Integrity, & Data Forensics</li>
              <li>Servers, Physical Assets Monitoring, Alerting and Notifying</li>
            </ul>
          </div>
        </div>
        <div className="security-image">
          <img src={require('../../../images/risk-management-security.jpg')} alt="Security Dashboard" />
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
