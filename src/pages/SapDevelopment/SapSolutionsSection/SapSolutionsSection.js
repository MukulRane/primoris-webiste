import React from 'react';
import './SapSolutionsSection.css';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const solutionsData = [
  {
    image: require('../../../images/sap-image-1.png'),
    description: 'Accept the intelligent ERP ecosystem that comes from end to end. Integrated with ML, AI, and advanced analytics for driving business transformation. Using SAP S/4HANA, businesses may manage the management of assets, production, and transportation, accounting, finance, supply chain management, and more. Enterprises can predict, analyse, and transact using SAP S/4HANA, each time in real-time.',
  },
  {
    image: require('../../../images/sap-image-2.png'),
    description: 'SAP Fiori is a user experience platform that enhances the usability and visual appeal of SAP enterprise software. It provides a modern, intuitive interface for streamlined user interactions with SAP systems. With role-based applications, responsive design, simplified workflows, analytics, and customization options, Fiori aims to boost user satisfaction, productivity, and decision-making in SAP-using organizations.',
  },
  {
    image: require('../../../images/sap-image-3.png'),
    description: 'Sales, marketing, and service operations are streamlined with SAP CRM, a complete software solution. It gives companies the ability to control client interactions, gather and analyse data, run targeted advertising campaigns, increase revenues, and provide individualised service. SAP CRM’s integration skills support data-driven decision-making, revenue growth, and improved customer satisfaction.',
  },
  {
    image: require('../../../images/sap-image-4.png'),
    description: 'SAP Hybris is an e-commerce platform that empowers businesses to deliver personalized omni-channel experiences. With solutions for product content management, online storefronts, order management, and marketing campaigns, it enhances customer engagement and drives revenue growth. The flexible architecture allows businesses to adapt and succeed in the evolving digital landscape, gaining a competitive edge in the e-commerce industry.',
  },
  {
    image: require('../../../images/sap-image-5.png'),
    description: 'SAP Cloud Analytics is a robust cloud-based analytics platform that helps businesses transform raw data into meaningful insights. With advanced analytics capabilities, it enables organizations to uncover patterns, trends, and correlations within their data, empowering data-driven decision-making. SAP Cloud Analytics offers intuitive visualizations, predictive analytics, and real-time reporting, facilitating better business performance, improved operational efficiency, and enhanced competitive advantage in today’s data-driven business landscape.',
  },
  {
    image: require('../../../images/sap-image-6.png'),
    description: 'SAP SCM is a comprehensive software solution that enables businesses to optimize their supply chain operations. It provides tools for planning, procurement, manufacturing, inventory management, and logistics, allowing companies to streamline processes, reduce costs, and improve efficiency. With real-time insights and integration capabilities, SAP SCM helps businesses gain visibility, enhance collaboration, and meet customer demands, ensuring a resilient and responsive supply chain.',
  }
];

const SapSolutionsSection = () => {
  return (
    <section className="sap-solutions-section">
      <SectionTitle title="SAP Solutions" dividerColor="#000" />
      <p>Choose these ERP products to help your SMEs and mid-market companies run more efficiently, more productively, and with fewer bottlenecks: SAP Business One, SAP S/4HANA, SAP Business One HANA, SAP ByDesign, and SAP S/4HANA.</p>
      <div className="sap-solutions-cards-container">
        {solutionsData.map((solution, index) => (
          <div className="sap-solutions-card" key={index}>
            <img src={solution.image} alt={solution.title} />
            <p>{solution.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SapSolutionsSection;
