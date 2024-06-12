import React from 'react';
import './MainAdvantagesSection.css';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const MainAdvantagesSection = () => {
  return (
    <div className="section-with-equal-main-advantages-wrapper">
      <SectionTitle title="Main Advantages" dividerColor="#000" />
      <div className="section-with-equal-main-advantages">
        <div className="section-with-equal-main-advantages-text">
          <ul className="section-with-equal-main-advantages-list">
            <li>Easily create new cases</li>
            <li>Make relevant documents available quickly. This reduces the resources required for provisioning information.</li>
            <li>Spend less time filtering information, which considerably lowers costs.</li>
            <li>Quickly “freeze” or place a legal hold on documents.</li>
            <li>Easily improve the accuracy and quality of search results.</li>
            <li>Each action taken is carefully recorded in an audit log.</li>
            <li>Many data sources are supported, including practically all common office and business documents (e-mail, file, paper, and more).</li>
            <li>Our unique technology makes it possible to make large amounts of data accessible in a short amount of time; eliminate manual pre-selection using highly efficient full-text indexing and research capabilities. You no longer need to carefully select the documents that you want to work with.</li>
            <li>Process all of your data independent of its source, format and location.</li>
          </ul>
        </div>
        <div className="section-with-equal-main-advantages-image">
          <img src={require('../../../images/gcm-advantages.png')} alt="Main Advantages" />
        </div>
      </div>
    </div>
  );
};

export default MainAdvantagesSection;
