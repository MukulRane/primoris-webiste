import React from 'react';
import './BlogsSection.css';
import blogImage1 from '../../../images/blogs-image-1.png';
import blogImage2 from '../../../images/blogs-image-1.png';
import blogImage3 from '../../../images/blogs-image-3.png';
import blogImage4 from '../../../images/blogs-image-4.png';
import blogImage5 from '../../../images/blogs-image-5.png';
import blogImage6 from '../../../images/blogs-image-6.png';
import blogImage7 from '../../../images/blogs-image-7.png';
import blogImage8 from '../../../images/blogs-image-8.png';
import blogImage9 from '../../../images/blogs-image-9.png';
import blogImage10 from '../../../images/blogs-image-10.png';
import blogImage11 from '../../../images/blogs-image-11.png';
import blogImage12 from '../../../images/blogs-image-12.png';

const blogsData = [
  {
    title: 'Recruitment Trends 2024',
    description: 'Recruitment Trends 2024 1. Hybrid Work Model: Signs of Decline Post-COVID-19, flexible working soared in popularity, with adoption rates climbing nearly one-tenth between...',
    image: blogImage1,
  },
  {
    title: 'Advantages and Disadvantages of Seasonal Recruitment',
    description: 'Advantages and Disadvantages of Seasonal Recruitment Seasonal demand fluctuates across the year for many businesses, making it challenging to justify a full-time staff...',
    image: blogImage2,
  },
  {
    title: 'Generative AI vs Predictive AI: Unpacking',
    description: 'Generative AI vs Predictive AI: Unpacking Their Unique Capabilities Ever curious about the tech magic behind AI-generated movie scripts or the way brands...',
    image: blogImage3,
  },
  {
    title: 'Unlocking Competitive Advantage: Revolutionize Your Data',
    description: 'Unlocking Competitive Advantage: Revolutionize Your Data Strategy with Cortex Innovations In the modern age of AI, data is your key to gaining a...',
    image: blogImage4,
  },
  {
    title: 'Strategies to Navigate the Current Global',
    description: 'Strategies to Navigate the Current Global Labor Shortage The reasons for the ongoing global labor shortage are complex, involving several contributing factors. These...',
    image: blogImage5,
  },
  {
    title: 'From History to AI: Learning from',
    description: 'From History to AI: Learning from the Past to Navigate the Generative AI Revolution The buzz around generative AI is immense, forecasting significant...',
    image: blogImage6,
  },
  {
    title: 'Odoo for Start-up Business',
    description: 'Odoo for Start-up Business In the fast-paced and competitive start-up environment, mastering resource allocation, streamlining processes, and rapid scaling is vital for success....',
    image: blogImage7,
  },
  {
    title: 'The Digital Workplace: Aligning Technology with',
    description: 'The Digital Workplace: Aligning Technology with Gen Z’s Expectations and Skills Introduction In the evolving landscape of the modern workplace, one of the...',
    image: blogImage8,
  },
  {
    title: 'Unleashing the Power of AI: Exploring',
    description: 'Unleashing the Power of AI: Exploring Primoris Systems’ Role in Shaping the Future of Business In the landscape of technological innovation, the question...',
    image: blogImage9,
  },
  {
    title: '2025 Talent Acquisition Trends Report: Navigating',
    description: '2025 Talent Acquisition Trends Report: Navigating the New Era of Recruitment The landscape of talent acquisition is undergoing a seismic shift, driven by...',
    image: blogImage10,
  },
  {
    title: 'Maximizing Workplace Inclusion and Diversity: Harnessing',
    description: 'Maximizing Workplace Inclusion and Diversity: Harnessing Data-Driven Strategies for an Empowered Corporate Culture In the modern workplace, diversity and inclusion (D&I) are more...',
    image: blogImage11,
  },
  {
    title: 'Critical Role of Comprehensive Screening in',
    description: 'Critical Role of Comprehensive Screening in Securing Top-Tier Remote Tech Talent in 2024 Are you encountering difficulties in recruiting the ideal remote developers...',
    image: blogImage12,
  }
];

const BlogsSection = () => {
  return (
    <div className="blogs-section-wrapper">
      <div className="blogs-section">
        <div className="blogs-grid">
          {blogsData.map((blog, index) => (
            <div className="blogs-card" key={index}>
              <img src={blog.image} alt={blog.title} className="blogs-card-image" />
              <div className="blogs-card-content">
                <h3>{blog.title}</h3>
                <p>{blog.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsSection;
