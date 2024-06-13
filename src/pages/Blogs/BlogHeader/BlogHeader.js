import React from 'react';
import './BlogHeader.css';
import backgroundImage from '../../../images/blog-hero.jpg';

const BlogHeader = () => {
  return (
    <div className="blog-header-wrapper" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="blog-header-content">
        <h1>Blog Page</h1>
        <p>
          Stay updated with the latest industry insights, trends, and expert advice on our blog. Explore a wealth of informative articles that can empower your business and drive success.
        </p>
      </div>
    </div>
  );
};

export default BlogHeader;
