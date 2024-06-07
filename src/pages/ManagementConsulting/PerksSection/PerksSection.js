import React from 'react';
import './PerksSection.css';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import PerksCard from '../PerksCard/PerksCard';

const perksData = [
  {
    title: 'Expert Advice',
    description: 'The management consulting team at Primoris Systems has years of expertise in business consulting and an in-depth understanding of best practices in the sector. You may rely on a reputable professional to assist you achieve the greatest results rather than attempting to implement adjustments and learn complicated approaches on your own.'
  },
  {
    title: 'Comprehensive Analysis',
    description: 'A third-party expert can not only look at your firm with fresh eyes and see any problematic procedures, but the Primoris Systems team is also skilled in business analytical procedures. Never enter a new process blindly again by eliminating inefficient procedures using tools like ROI analysis.'
  }
];

const PerksSection = () => {
  return (
    <div className="perks-section">
      <SectionTitle title="Perks Of Primoris Systems Management Consulting Services" dividerColor="#000"/>
      <p className="description">Primoris Systems is a consulting company that assists businesses by enhancing their operations and developing solutions that take into account every aspect of the organizational structure. Our technique offers the following advantages to businesses:</p>
      <div className="perks-cards-container">
        {perksData.map((perk, index) => (
          <PerksCard key={index} title={perk.title} description={perk.description} />
        ))}
      </div>
    </div>
  );
};

export default PerksSection;
