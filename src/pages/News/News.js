import React from 'react';
import ContactForm from '../TechnicalConsulting/ContactForm/ContactForm';
import RecentProjectsSection from './RecentProjectsSection/RecentProjectsSection';
import NewsSection from './NewsSection/NewsSection';

const News = () => {
  return (
    <div>
        <NewsSection />
        <RecentProjectsSection />
        <ContactForm />
    </div>
  );
};

export default News;
