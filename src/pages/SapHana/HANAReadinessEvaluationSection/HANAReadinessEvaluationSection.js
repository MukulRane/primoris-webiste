import React from 'react';
import './HANAReadinessEvaluationSection.css';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const readinessData = [
  {
    number: 1,
    title: 'Workshop',
    description: 'In order to create a thorough migration and solution roadmap, our HANA solution experts do workshops to better understand your company’s operational environment.',
    image: require('../../../images/sap-hana-solution-1.jpg')
  },
  {
    number: 2,
    title: 'Readiness evaluation',
    description: 'Our team can do a technical and functional audit of your system to determine whether your current SAP ERP setup is HANA-ready.',
    image: require('../../../images/sap-hana-solution-2.jpg')
  },
  {
    number: 3,
    title: 'Custom Code evaluation',
    description: `<p>The process of switching from the traditional SAP Business Suite that runs on any database to the SAP S/4HANA system includes Custom Code Migration. Custom ABAP code has to be modified in the context of this system conversion since a lot of SAP code inside SAP S/4HANA was streamlined and in some cases updated in a way that is incompatible.</p>
                  <p>Some of your custom code objects no longer function as intended, create syntax errors, or dumps because they are out of date. Before preparation for the SAP S/4 HANA migration, the existing SAP system must be updated to UNICODE if it is not already UNICODE. For this, UNICODE compliance is also required for all of your specifically designed ABAP programmes.</p>
                  <p>Your current development environment may be examined for UNICODE and SAP S/4 HANA readiness with the help of the Primoris team.</p>`,
    image: require('../../../images/sap-hana-solution-3.jpg')
  },
  {
    number: 4,
    title: 'Code optimisation & compliance for SAP S/4 HANA',
    description: 'Primoris team can help you make sure that your custom developments are correctly polished to make them SAP S/4 HANA compatible once the custom code has been examined.',
    image: require('../../../images/sap-hana-solution-4.jpg')
  }
];

const HANAReadinessEvaluationSection = () => {
  return (
    <section className="hana-readiness-section">
      <SectionTitle title="HANA Readiness Evaluation" dividerColor="#000" />
      {readinessData.map((item, index) => (
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

export default HANAReadinessEvaluationSection;
