import React, { useState, useEffect, useRef } from 'react';
import './HeroSection.css';
import carouselImage1 from '../../images/homepage-carousal-1.jpg';
import carouselImage2 from '../../images/homepage-carousal-2.jpg';
import carouselImage3 from '../../images/homepage-carousal-3.jpg';
import carouselSubImage1 from '../../images/homepage-carousal-sub-1.png';
import carouselSubImage2 from '../../images/homepage-carousal-sub-2.png';
import carouselSubImage3 from '../../images/homepage-carousal-sub-3.png';
import carouselSubImage4 from '../../images/homepage-carousal-sub-4.svg';
import carouselSubImage5 from '../../images/homepage-carousal-sub-5.svg';
import carouselSubImage6 from '../../images/homepage-carousal-sub-6.svg';
import carouselSubImage7 from '../../images/homepage-carousal-sub-7.png';
import carouselSubImage8 from '../../images/homepage-carousal-sub-8.png';
import carouselSubImage9 from '../../images/homepage-carousal-sub-9.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';


const carouselData = [
  {
    title: "Our Solutions",
    subtitle: "Let's get started",
    items: [
      { img: carouselSubImage1, title: 'Enterprise Managed Archive' },
      { img: carouselSubImage2, title: 'Org Chart Viewer' },
      { img: carouselSubImage3, title: 'Global Case Management' }
    ],
    buttonText: 'Read More',
    image: carouselImage1
  },
  {
    title: <>Innovation through <span>AI</span></>,
    subtitle: "Let's get started",
    paragraph: "Here is some paragraph text for the second slide. This slide doesn't have a grid but instead contains a block of text.",
    buttonText: 'Read More',
    image: carouselImage2
  },
  {
    title: "Our Services",
    subtitle: "Let's get started",
    items: [
      { img: carouselSubImage4, title: 'Business Consulting' },
      { img: carouselSubImage5, title: 'Technical Consulting' },
      { img: carouselSubImage6, title: 'ERP' }
    ],
    buttonText: 'Read More',
    image: carouselImage3
  },
  {
    title: "Our SAP Competencies",
    subtitle: "Let's get started",
    items: [
      { img: carouselSubImage7 },
      { img: carouselSubImage8 },
      { img: carouselSubImage9 }
    ],
    buttonText: 'Read More',
    image: carouselImage1
  }
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const intervalRef = useRef(null);
  const bottomRightBoxRef = useRef(null);
  const topLeftBoxRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    startInterval();
    return () => stopInterval();
  }, []);

  useEffect(() => {
    if (bottomRightBoxRef.current && topLeftBoxRef.current) {
      bottomRightBoxRef.current.classList.remove('animate-grow', 'animate-shrink');
      topLeftBoxRef.current.classList.remove('animate-grow', 'animate-shrink');
      void bottomRightBoxRef.current.offsetWidth; // Trigger reflow to restart the animation
      void topLeftBoxRef.current.offsetWidth; // Trigger reflow to restart the animation
      bottomRightBoxRef.current.classList.add('animate-grow');
      topLeftBoxRef.current.classList.add('animate-grow');
    }
    if (overlayRef.current) {
      overlayRef.current.classList.remove('animate-grow-mobile', 'animate-shrink-mobile');
      void overlayRef.current.offsetWidth; // Trigger reflow to restart the animation
      overlayRef.current.classList.add('animate-grow-mobile');
    }
  }, [currentSlide]);

  const startInterval = () => {
    stopInterval();
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 5000);
  };

  const stopInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const nextSlide = () => {
    setTransitioning(true);
    if (bottomRightBoxRef.current && topLeftBoxRef.current) {
      bottomRightBoxRef.current.classList.remove('animate-grow');
      bottomRightBoxRef.current.classList.add('animate-shrink');
      topLeftBoxRef.current.classList.remove('animate-grow');
      topLeftBoxRef.current.classList.add('animate-shrink');
    }
    if (overlayRef.current) {
      overlayRef.current.classList.remove('animate-grow-mobile');
      overlayRef.current.classList.add('animate-shrink-mobile');
    }
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === carouselData.length - 1 ? 0 : prev + 1));
      setTransitioning(false);
    }, 500);
  };

  const prevSlide = () => {
    setTransitioning(true);
    if (bottomRightBoxRef.current && topLeftBoxRef.current) {
      bottomRightBoxRef.current.classList.remove('animate-grow');
      bottomRightBoxRef.current.classList.add('animate-shrink');
      topLeftBoxRef.current.classList.remove('animate-grow');
      topLeftBoxRef.current.classList.add('animate-shrink');
    }
    if (overlayRef.current) {
      overlayRef.current.classList.remove('animate-grow-mobile');
      overlayRef.current.classList.add('animate-shrink-mobile');
    }
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === 0 ? carouselData.length - 1 : prev - 1));
      setTransitioning(false);
    }, 500);
  };

  return (
    <div
      className="hero-wrapper"
      onMouseEnter={stopInterval}
      onMouseLeave={startInterval}
    >
      <div className="carousel-container">
        <div ref={overlayRef} className="overlay-container animate-grow-mobile"></div>
        <div ref={topLeftBoxRef} className="top-left-box animate-grow"></div>
        <div ref={bottomRightBoxRef} className="bottom-right-box animate-grow"></div>
        {carouselData.map((slide, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === currentSlide ? 'active' : ''} ${
              transitioning ? 'transition' : ''
            }`}
          >
            <div className="carousel-content">
              <div className="carousel-text-column">
                {index === 0 && (
                  <>
                    <p className="carousel-subtitle">{slide.subtitle}</p>
                    <h2 className="carousel-title">{slide.title}</h2>
                    <div className="carousel-items-grid">
                      {slide.items.map((item, idx) => (
                        <div key={idx} className="carousel-item">
                          <img src={item.img} alt={item.title} />
                          <p>{item.title}</p>
                        </div>
                      ))}
                    </div>
                  </>
                )}
                {index === 1 && (
                  <>
                    <p className="carousel-subtitle2">{slide.subtitle}</p>
                    <h2 className="carousel-title2">{slide.title}</h2>
                    <p className="carousel-paragraph">{slide.paragraph}</p>
                  </>
                )}
                {index === 2 && (
                  <>
                    <p className="carousel-subtitle">{slide.subtitle}</p>
                    <h2 className="carousel-title">{slide.title}</h2>
                    <div className="carousel-items-grid">
                      {slide.items.map((item, idx) => (
                        <div key={idx} className="carousel-item">
                          <img src={item.img} alt={item.title} />
                          <p>{item.title}</p>
                        </div>
                      ))}
                    </div>
                  </>
                )}
                {index === 3 && (
                  <>
                    <p className="carousel-subtitle">{slide.subtitle}</p>
                    <h2 className="carousel-title">{slide.title}</h2>
                    <div className="carousel-items-grid">
                      {slide.items.map((item, idx) => (
                        <div key={idx} className="carousel-item">
                          <img src={item.img} alt={`carousel item ${idx}`} />
                        </div>
                      ))}
                    </div>
                  </>
                )}
                <div className="carousel-footer">
                  <button className="carousel-button">{slide.buttonText}</button>
                  <div className="carousel-arrows">
                    <FontAwesomeIcon icon={faArrowLeft} className="arrow-left" onClick={prevSlide} />
                    <FontAwesomeIcon icon={faArrowRight} className="arrow-right" onClick={nextSlide} />
                  </div>
                </div>
              </div>
              <div className="carousel-image-column">
                <img src={slide.image} alt="carousel" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
