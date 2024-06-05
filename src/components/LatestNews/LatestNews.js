import React from 'react';
import './LatestNews.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import CustomButton from '../CustomButton/CustomButton';

const LatestNews = () => {
  return (
    <section className="latest-news">
      <div className="news-title">
        <SectionTitle title="Latest News" />
        <p>Stay updated with our latest news.</p>
      </div>
      <div className="news-content">
        <div className="news-items">
          <div className="news-item">
            <div className="news-number">1</div>
            <div className="news-text">
              <h2>Infrastructure solutions group with ARTEC IT Solutions AG</h2>
              <p>Primoris Systems creates Infrastructure solutions group with ARTEC IT Solutions AG to provide Artec's protective Appliance.</p>
            </div>
          </div>
          <div className="news-item">
            <div className="news-number">2</div>
            <div className="news-text">
              <h2>Primoris Systems announces OrgChart Viewer</h2>
              <p>Using SAPUI5 Fiori design with SAP Standard code OrgChart delivers an Organizational diagram with an interactive User Interface (UI).</p>
            </div>
          </div>
          <div className="news-item">
            <div className="news-number">3</div>
            <div className="news-text">
              <h2>Key partnership with Cyber Forza, Inc. to provide their CISS</h2>
              <p>We provide Cyber Intelligent Security Software (CISS) to Enterprise companies like Cyber Forza.</p>
            </div>
          </div>
          <div className="news-item-button">
            <CustomButton text="Know More" />
          </div>
        </div>
        <div className="news-image">
          <img src={require('../../images/latestNews.jpg')} alt="News" />
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
