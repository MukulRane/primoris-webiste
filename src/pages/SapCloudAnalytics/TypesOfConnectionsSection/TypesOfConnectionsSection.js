import React from 'react';
import './TypesOfConnectionsSection.css';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import TypesOfConnectionCard from '../TypesOfConnectionCard/TypesOfConnectionCard';

const connectionsData = [
  {
    image: require('../../../images/sap-cloud-connection-1.png'),
    title: 'Real-Time Analysis',
    description: `
      <ol>
        <li>SAP Analytics Cloud provides real-time analysis capabilities, ensuring users have immediate access to up-to-date data without any processing delays.</li>
        <li>By eliminating data replication, SAP Analytics Cloud helps reduce storage costs</li>
        <li>SAP Analytics Cloud allows for the analysis of existing data models.</li>
      </ol>
    `,
  },
  {
    image: require('../../../images/sap-cloud-connection-2.png'),
    title: 'Data Updates and Replication',
    description: `
      <ol>
        <li>With SAP Analytics Cloud, you can configure data updates to occur during off-peak hours when system users are not actively logged in.</li>
        <li>Replication enables faster query performance and ensures data availability for real-time analysis.</li>
        <li>SAP Analytics Cloud empowers users to create custom data models directly within the platform.</li>
      </ol>
    `,
  },
];

const TypesOfConnectionsSection = () => {
  return (
    <section className="types-of-connections-section">
      <SectionTitle title="Types of Connections" dividerColor="#000" />
      <div className="types-of-connections-cards-container">
        {connectionsData.map((connection, index) => (
          <TypesOfConnectionCard
            key={index}
            image={connection.image}
            title={connection.title}
            description={connection.description}
          />
        ))}
      </div>
    </section>
  );
};

export default TypesOfConnectionsSection;
