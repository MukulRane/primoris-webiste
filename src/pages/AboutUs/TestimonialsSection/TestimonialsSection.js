import React, { useState } from 'react';
import './TestimonialsSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const testimonials = [
  {
    quote: "I have been working with Primoris Systems India Private Ltd for several years, and I am extremely satisfied with their services. Their team is highly skilled, professional, and dedicated to delivering quality solutions. They have consistently exceeded my expectations and have helped our business achieve significant growth. I highly recommend Primoris Systems for their expertise and commitment to client satisfaction."
  },
  {
    quote: "Choosing Primoris Systems India Private Ltd as our technology partner was one of the best decisions we made for our business. Their innovative solutions and deep industry knowledge have greatly contributed to our success. The team at Primoris is always responsive, proactive, and willing to go the extra mile to ensure our project's success. Working with them has been a pleasure, and I look forward to continuing our partnership in the future."
  },
  {
    quote: "Primoris Systems India Private Ltd has been instrumental in transforming our business processes and enhancing our overall efficiency. Their expertise in odoo & SAP has helped us streamline our operations and achieve remarkable cost savings. Their team's professionalism and attention to detail are commendable. I highly recommend Primoris Systems for anyone looking for reliable and effective IT solutions."
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="testimonials-wrapper">
      <h2>Testimonials</h2>
      <div className="testimonial-container">
        <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" />
        <p>{testimonials[currentIndex].quote}</p>
        <div className="testimonial-nav">
          <FontAwesomeIcon icon={faChevronLeft} className="nav-icon" onClick={handlePrevClick} />
          <FontAwesomeIcon icon={faChevronRight} className="nav-icon" onClick={handleNextClick} />
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
