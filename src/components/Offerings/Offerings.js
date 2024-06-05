import React from 'react';
import Card from '../Card/Card';
import './Offerings.css';
import SectionTitle from '../SectionTitle/SectionTitle';

const Offerings = () => {
  return (
    <section className="offerings">
      <SectionTitle title="What We Offer" />
      <div className="cards">
        <Card title="Business Consulting" description="We specialize in providing comprehensive and customized business consulting solutions to organizations in a wide…" bgColor="#0066b2" />
        <Card title="ERP" description="We assist organizations in implementing, customizing, and optimizing ERP systems. They analyze processes, configure the system…" bgColor="#034694" />
        <Card title="SAP S/4 HANA" description="SAP S/4HANA is a next-generation enterprise resource planning (ERP) software that integrates advanced technologies…" bgColor="#00308f" />
        <Card title="Odoo" description="Primoris Systems consistently provides the greatest customization and implementation for Odoo ERP, making them one of…" bgColor="#002d62" />
      </div>
    </section>
  );
};

export default Offerings;
