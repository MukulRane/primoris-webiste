import React from 'react';
import AboutUsSection from './AboutUsSection/AboutUsSection';
import WhatWeDoSection from './WhatWeDoSection/WhatWeDoSection.js';
import AboutUsStatsSection from './AboutUsStatsSection/AboutUsStatsSection.js';
import AboutUsVisionSection from './AboutUsVisionSection/AboutUsVisionSection.js';
import AboutUsMissionSection from './AboutUsMissionSection/AboutUsMissionSection.js';
import WorkLifeDreamSection from './WorkLifeDreamSection/WorkLifeDreamSection.js';
import TestimonialsSection from './TestimonialsSection/TestimonialsSection.js';
import ClientsSection from './ClientsSection/ClientsSection.js';

const AboutUsPage = () => {
  return (
    <div>
        <AboutUsSection />
        <WhatWeDoSection />
        <AboutUsStatsSection />
        <AboutUsVisionSection />
        <AboutUsMissionSection />
        <ClientsSection />
        <WorkLifeDreamSection />
        <TestimonialsSection />
    </div>
  );
};

export default AboutUsPage;
