import React from 'react';
import './ImprovedSatisfactionSection.css';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const ImprovedSatisfactionSection = () => {
  return (
    <section className="improved-satisfaction-section">
      <SectionTitle title="Improved Satisfaction" dividerColor="#000" />
      <div className="improved-content-container">
        <div className="improved-text-content">
          <p>A lack of corporate leadership can cause your operations to feel chaotic, while poorly planned or hastily handled changes can have an impact on employee performance. Your company may generate a sense of stability and continuity, which will increase employee happiness, by making efficient and objectively advantageous adjustments and strengthening organizational structure and direction.</p>
          <p>Primoris Systems delivers high-quality resources and best-practice solutions through a customized, hands-on approach, so you’ll never get a one-size-fits-all solution in addition to these advantages. To provide you with the greatest outcomes and assist you in achieving your company goals, both long-term and short-term, our methodology combines real-world expertise with local resources.</p>
        </div>
        <div className="images-content">
          <img src={require('../../../images/management-consulting-improved-satisfaction-2.jpg')} alt="Consulting" className="improved-image-bottom" />
          {/* <img src={require('../../../images/management-consulting-improved-satisfaction-1.jpg')} alt="Consulting" className="improved-image-top" /> */}
        </div>
      </div>
    </section>
  );
};

export default ImprovedSatisfactionSection;
