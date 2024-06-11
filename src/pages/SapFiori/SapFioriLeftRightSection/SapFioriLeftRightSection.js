import React from 'react';
import './SapFioriLeftRightSection.css';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const fioriData = [
  {
    title: 'Fiori is quickly and easily done by Primoris Systems',
    description: 'Utilising the highly acclaimed design principles of SAP Fiori and SAPUI5, you can use our Rapid Application Development platform to design, build, deploy, and maintain Fiori apps for any device or system in a fraction of the time it takes with other platforms, whether you want to deploy to iOS, Android, or Windows.',
    image: require('../../../images/sap-fiori-left-right-1.jpg'),
    isImageFirst: false
  },
  {
    title: 'Certified in SAP',
    description: `<p>All widely used SAP versions, such as SAP NetWeaver 7.X, SAP S/4HANA, and SAP BTP, are compatible with Primoris Systems. Our completely accredited platform comes with:</p>
                  <ul>
                    <li>Features of SAP Solution Manager Ready</li>
                    <li>Compatibility with the private edition of SAP S/4HANA</li>
                    <li>Works with SAP and RISE</li>
                  </ul>
                  <p>Therefore, go no farther than Primoris Systems to continue developing superior, future-proof SAP Fiori apps that advance your organisation.</p>`,
    image: require('../../../images/sap-fiori-left-right-2.png'),
    isImageFirst: true
  }
];

const SapFioriLeftRightSection = () => {
  return (
    <section className="sap-fiori-left-right-section">
      <SectionTitle title="HANA Readiness Evaluation" dividerColor="#000" />
      {fioriData.map((item, index) => (
        <div className={`sap-fiori-left-right-row ${item.isImageFirst ? 'right' : 'left'}`} key={index}>
          {item.isImageFirst ? (
            <>
              <div className="sap-fiori-left-right-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="sap-fiori-left-right-content">
                <h3 className="sap-fiori-left-right-title">{item.title}</h3>
                <div
                  className="sap-fiori-left-right-description"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                ></div>
              </div>
            </>
          ) : (
            <>
              <div className="sap-fiori-left-right-content">
                <h3 className="sap-fiori-left-right-title">{item.title}</h3>
                <div
                  className="sap-fiori-left-right-description"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                ></div>
              </div>
              <div className="sap-fiori-left-right-image">
                <img src={item.image} alt={item.title} />
              </div>
            </>
          )}
        </div>
      ))}
    </section>
  );
};

export default SapFioriLeftRightSection;
