import React from 'react';
import './BenchmarkSection.css';
import SectionTitle from '../../ManagementConsulting/SectionTitle/SectionTitle';

const BenchmarkSection = () => {
  return (
    <section className="benchmark-section">
      <div className="text-content">
        <SectionTitle title="Benchmark Analysis of Cloud Data Platforms" dividerColor="#000" />
        <p>
          To save you the hassle of conducting your own research, our data experts examined and tested the warehouse workload capacities of the top cloud data platforms for more than 400 hours. Allow our professionals to guide you through the investigation while offering useful knowledge tailored to your particular use case.
        </p>
      </div>
      <div className="image-content">
        <img src={require('../../../images/snowflake-benchmark.jpg')} alt="Benchmark Analysis" />
      </div>
    </section>
  );
};

export default BenchmarkSection;
