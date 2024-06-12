import React from 'react';
import '../../SapHana/HANAReadinessEvaluationSection/HANAReadinessEvaluationSection.css';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const readinessData = [
  {
    number: 1,
    title: 'SAP Certified Archival',
    description: 'The EMA SAP Archive can archive multiple sources other than just SAP content. Unstructured information like e-mail, ﬁle share, printed documents, paper documents, and voice communications can all be added to the archive. Those documents are as protected as the SAP documents with the added beneﬁt of having access to all documents including SAP data. EMA is the perfect method to provide a corporate-wide, archive-based, all-in-one solution.',
    image: require('../../../images/advantages-of-ema-for-sap-1.png')
  },
  {
    number: 2,
    title: 'Proof of Evidence & eDiscovery',
    description: 'Providing evidence for eDiscovery is a huge challenge for most companies. Information and documents usually need to be retrieved from different sources using different software solutions. By using EMA, however, everything can be done within our solution. The search option incorporates all sources (including SAP), and with our “global search”, ﬁnding information from any of these multiple sources is fast and easy.',
    image: require('../../../images/advantages-of-ema-for-sap-2.png')
  },
  {
    number: 3,
    title: 'SAP Archive challenge',
    description: 'SAP solutions are used by a wide variety of businesses in vertical markets such as ERP, HR, warehouse management, transportation, healthcare, and many more. More than 70% of global business is tied to SAP in some way. Documents created or handled by SAP are in most cases regulated by law or compliance rules. However, one of the main issues in saving documents in SAP is that it requires a tremendous amount of administrative effort. The solution to handle these challenges is archiving. Traditional SAP archiving solutions are typical Document Management Solutions (DMS). Archiving via DMS is overkill because of the fact that only a small portion of the software is used to perform the task.',
    image: require('../../../images/advantages-of-ema-for-sap-3.png')
  },
  {
    number: 4,
    title: 'EMA & SAP –> a Strong Team',
    description: 'EMA is different and an affordable, secure, and compliant appliance-based certiﬁed archiving solution for SAP. EMA fulﬁlls all the requirements of a modern, easy-to-administer archive. EMA provides an all-in-one solution with its own operating system, database, and storage manager (including backup). EMA will be connected to SAP via Archive Link by using the EMA content server to guarantee maximum ﬂexibility. All archived documents will be kept secure and legally compliant. Even adding Metadata such as barcodes, transaction numbers, or other information to any archived document can be done quickly and efﬁciently at any point in time based on your business requirements.',
    image: require('../../../images/advantages-of-ema-for-sap-4.png')
  },
  {
    number: 5,
    title: 'Low Maintenance and Administration',
    description: 'Traditional SAP archiving and DMS solutions require maintenance for data- bases, operating systems, backup and restores on a daily basis to keep the system up and running. Daily backup of databases and ﬁle-shares requires an exact coordination to guarantee disaster recovery in case of a failure. The EMA appliance provides a simple, easy to use solution with far less adminis- trative work involved. As an all in one system, EMA provides everything needed to perform SAP archiving in one box. Only a few standard settings need to be made within SAP in order to guarantee a seamless integration.',
    image: require('../../../images/advantages-of-ema-for-sap-5.png')
  },
  {
    number: 6,
    title: 'Security',
    description: 'Archived documents will be digitally signed and stored in multiple locations to guarantee the highest level of compliance. The EMA appliance also supports EMA-WORM Storage like NetApp SnapLock, or it can turn any block level storage into a compliant WORM Storage. Additionally, EMA provides a high level of security to prevent unauthorized access to any document without proper permission.',
    image: require('../../../images/advantages-of-ema-for-sap-6.png')
  }
];

const AdvantagesOfEMA = () => {
  return (
    <section className="hana-readiness-section">
      <SectionTitle title="Advantages of Enterprise Managed Archive for SAP" dividerColor="#000" />
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

export default AdvantagesOfEMA;
