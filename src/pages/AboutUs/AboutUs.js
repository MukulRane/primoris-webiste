import React from 'react';
import AboutUsSection from './AboutUsSection/AboutUsSection';
import WhatWeDoSection from './WhatWeDoSection/WhatWeDoSection.js';
import AboutUsStatsSection from './AboutUsStatsSection/AboutUsStatsSection.js';
import AboutUsVisionSection from './AboutUsVisionSection/AboutUsVisionSection.js';
import AboutUsMissionSection from './AboutUsMissionSection/AboutUsMissionSection.js';
import WorkLifeDreamSection from './WorkLifeDreamSection/WorkLifeDreamSection.js';

const AboutUsPage = () => {
  return (
    <div>
        <AboutUsSection />
        <WhatWeDoSection />
        <AboutUsStatsSection />
        <AboutUsVisionSection />
        <AboutUsMissionSection />
        <WorkLifeDreamSection />
    </div>
  );
};

export default AboutUsPage;
