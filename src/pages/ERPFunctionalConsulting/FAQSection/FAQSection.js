import React, { useState } from 'react';
import './FAQSection.css';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const faqData = [
  {
    question: 'How do ERP systems work?',
    answer: 'You may effectively manage regular business activities linked to accounting, project management, risk management, supply chain management, and other areas by using an enterprise resource planning system. An ERP platform may assist in managing important activities like planning, budgeting, forecasting, and reporting on an enterprise’s financial outcomes, depending on the degree of sophistication of the programme. Visit this comprehensive tutorial to learn how to create an ERP system.',
  },
  {
    question: 'How much does a personalized ERP system cost?',
    answer: 'The price of a customized ERP solution is determined by a variety of variables, including the number and complexity of features, application design, the number of people who will use the software or app, the number of development hours, and so on. However, the typical price to design an ERP programme may be between $20,000 and $3,50,000.',
  },
  {
    question: 'What ERP services are provided by Primoris Systems?',
    answer: 'All of your company’s enterprise resource planning software requirements are met by a wide range of ERP software services provided by Primoris Systems: Consultancy Services for ERP, Individual ERP Solutions, Services for Implementing ERP, Development of ERP Applications Managed Services, and Services for Staff Augmentation.',
  },
  {
    question: 'What advantages does ERP have for the business?',
    answer: 'The features and functions of a modern ERP are brimming with capabilities to meet the demands of organizations today and in the future. It has built-in business intelligence (BI) capabilities, master data management, search help, workflow-based alerts, and analytics with preset metrics. In-memory technology, industry-specific capabilities, and high-performance functionality are all features of an enterprise-ready ERP that can handle the most demanding queries.',
  },
  {
    question: 'How can you select an ERP for your business?',
    answer: 'When selecting ERP for your company, you must first assess your needs, document your current business processes and pain points, comprehend the total cost of ownership, develop a realistic plan, and select the best vendor who can handle your extensive ERP licence, migration, implementation, and support needs. On your path to constant innovation and change, Primoris Systems is a partner for you.',
  },
  {
    question: 'Why do businesses need ERP software in the first place?',
    answer: 'The fundamental objective of an ERP deployment is to increase the company’s overall productivity while automating business operations and gaining real-time visibility into every part of the company. With ERP, you can effectively manage several subsidiaries, business divisions, and organizations while reducing compliance risks and improving business choices. Additionally, ERP aids in the administration of your complete company, including the management of sales opportunities, finances, fixed assets, inventories, customers, and a host of other tasks.',
  },
  {
    question: 'How ERP can Help SMEs & MSMEs?',
    answer: 'ERP enables SMEs and MSMEs to upgrade from spreadsheets to a contemporary solution. ERP makes choices transparent, allowing for the quick resolution of corporate issues. ERP reduces the possibility of mistakes and boosts efficiency by automating operations. In addition to this, it aids in producing trustworthy and precise predictions, prevents supply chain losses, monitors production, controls order capacity, satisfies compliance-related needs, and does much more.',
  },
  {
    question: 'Why was Primoris Systems named the best provider of ERP solutions in India?',
    answer: 'End-to-end ERP implementation services are provided by Primoris Systems. The Primoris Systems team offers all services, including licensing, customization, cloud hosting, migration, training, and managed services. Numerous satisfied customers attest to Primoris Systems’ status as the top SAP Business One partner in Asia and the country’s first platinum partner.',
  },
];

const FAQSection = () => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleFAQ = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter(i => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <section className="faq-section">
      <SectionTitle title="Frequently Asked Questions" />
      <div className="faq-items">
        {faqData.map((item, index) => (
          <div className="faq-item" key={index}>
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <p><b>{item.question}</b></p>
              <span className={`arrow ${openIndexes.includes(index) ? 'open' : ''}`}></span>
            </div>
            <div className={`faq-answer ${openIndexes.includes(index) ? 'open' : ''}`}>
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
