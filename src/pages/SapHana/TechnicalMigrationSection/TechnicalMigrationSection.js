import React from 'react';
import './TechnicalMigrationSection.css';
import '../HANAReadinessEvaluationSection/HANAReadinessEvaluationSection.css'; // Import the shared CSS file
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const migrationData = [
  {
    number: 1,
    title: 'Architecture, size, and design of hardware',
    description: `<p>Since the conception of the SAP S/4 HANA platform, SAP has collaborated closely with a number of top hardware providers (such as IBM, HP, etc.) in order to not only optimize the software component but also to make the most of hardware improvements.</p>
                  <p>We can help you analyze your future sizing needs and provide a roadmap for the hardware architecture and requirements of the future.</p>`,
    image: require('../../../images/sap-hana-migration-1.jpg')
  },
  {
    number: 2,
    title: 'Technology Migration',
    description: `<p>Our technical team helps you with the actual migration of your current SAP ERP Business Suite to the SAP S/4 HANA environment after the preparatory phase is complete and the required hardware ecosystem is in place.</p>
                  <p>We adopt a multi-step migration strategy that includes:</p>
                  <ul>
                    <li>Migration sandbox</li>
                    <li>Awareness education</li>
                    <li>Functional verification</li>
                    <li>Acceptance</li>
                    <li>Migration</li>
                  </ul>
                  <p>Our staff collaborates closely with your internal team the whole time, helping with every aspect of the SAP S/4 HANA conversion.</p>`,
    image: require('../../../images/sap-hana-migration-2.jpg')
  }
];

const TechnicalMigrationSection = () => {
  return (
    <section className="technical-migration-section">
      <SectionTitle title="Technical Migration" dividerColor="#000" />
      <p className="technical-migration-description">
        We work together with you to achieve a smooth migration to the SAP S/4 HANA environment after your current SAP environment has been evaluated and readied for SAP S/4 HANA migration.
      </p>
      {migrationData.map((item, index) => (
        <div className="hana-readiness-row" key={index}>
          {index % 2 === 0 ? (
            <>
              <div className="hana-readiness-content">
                <div className="title-row">
                    <h2 className="number">{item.number}</h2>
                    <h3 className="title">{item.title}</h3>
                </div>
                <div
                  className="description"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                ></div>
              </div>
              <div className="hana-readiness-image">
                <img src={item.image} alt={item.title} />
              </div>
            </>
          ) : (
            <>
              <div className="hana-readiness-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="hana-readiness-content">
                <div className="title-row">
                    <h2 className="number">{item.number}</h2>
                    <h3 className="title">{item.title}</h3>
                </div>
                <div
                  className="description"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                ></div>
              </div>
            </>
          )}
        </div>
      ))}
    </section>
  );
};

export default TechnicalMigrationSection;
