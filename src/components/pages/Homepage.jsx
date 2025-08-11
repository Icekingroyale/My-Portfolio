// import React, { useEffect } from 'react'
// import Header from '../Header'
// import Hero from '../Hero'
// import Projects from '../Projects'
// import Stack from '../Stack'
// import HomepageContact from '../HomepageContact'
// import Footer from '../Footer'
// import { useMediaQuery } from "react-responsive"; //to conditional render the Fullpage slide for large screens
// import Fullpage, { FullpageSection, FullPageSections, FullpageNavigation } from "@ap.cx/react-fullpage";


// // 15-02-2025
// // TODO - Add fade in animations on scroll



// const Homepage = () => {

//   const isLargeScreen = useMediaQuery({ minWidth: 1024 })

//   return isLargeScreen ? (

//     <Fullpage >


//       {/* adds the navigation clicks on the side of the large screen */}

//       <FullpageNavigation />
//       <FullPageSections>
//         <FullpageSection>

//           <Header />
//           <Hero />

//         </FullpageSection>
//         <FullpageSection>
//           <Projects />

//         </FullpageSection>
//         <FullpageSection>
//           <Stack />

//         </FullpageSection>
//         <FullpageSection>
//           <HomepageContact />

//         </FullpageSection>
//         <FullpageSection>
//           <Footer />

//         </FullpageSection>
//       </FullPageSections>
//     </Fullpage>

//   )
//     :


//     <>
//       <Header />
//       <Hero />
//       <Projects />
//       <Stack />
//       <HomepageContact />
//       <Footer />
//     </>
// }

// export default Homepage

import React, { useEffect, useState } from 'react'
import Header from '../Header'
import Hero from '../Hero'
import Projects from '../Projects'
import Stack from '../Stack'
import HomepageContact from '../HomepageContact'
import Footer from '../Footer'
import { useMediaQuery } from "react-responsive";
import Fullpage, { FullpageSection, FullPageSections, FullpageNavigation } from "@ap.cx/react-fullpage";
import SwiperMobileFullpage from '../animations/SwiperMobileFullpage'; // Import the Swiper component

const Homepage = () => {
  // Multiple breakpoints for different screen sizes
  const isDesktop = useMediaQuery({ minWidth: 768 }) // Desktop & Tablet
  const isTinyScreen = useMediaQuery({ maxWidth: 568 }) // iPhone 5/5S and smaller
  const [currentMobileSection, setCurrentMobileSection] = useState(0);

  // Define your mobile sections with better height handling
  const mobileSections = [
    // Section 1: Header + Hero
    <div key="hero-section" className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 min-h-0">
        <Hero />
      </div>
    </div>,
    
    // Section 2: Projects (can be taller than screen)
    <div key="projects-section" className="min-h-screen py-4">
      <Projects />
    </div>,
    
    // Section 3: Stack (can be taller than screen)
    <div key="stack-section" className="min-h-screen py-4">
      <Stack />
    </div>,
    
    // Section 4: Contact (can be taller than screen)
    <div key="contact-section" className="min-h-screen py-4">
      <HomepageContact />
    </div>,
    
    // Section 5: Footer (can be taller than screen)
    <div key="footer-section" className="min-h-screen py-4">
      <Footer />
    </div>
  ];

  const handleMobileSectionChange = (sectionIndex) => {
    setCurrentMobileSection(sectionIndex);
    console.log(`Current mobile section: ${sectionIndex}`);
  };

  return isDesktop ? (
    // Desktop & Tablet Experience (768px+)
    <Fullpage>
      <FullpageNavigation />
      <FullPageSections>
        <FullpageSection>
          <Header />
          <Hero />
        </FullpageSection>
        <FullpageSection>
          <Projects />
        </FullpageSection>
        <FullpageSection>
          <Stack />
        </FullpageSection>
        <FullpageSection>
          <HomepageContact />
        </FullpageSection>
        <FullpageSection>
          <Footer />
        </FullpageSection>
      </FullPageSections>
    </Fullpage>
  ) : isTinyScreen ? (
    // Tiny Screens Fallback (568px and below) - iPhone 5/5S and smaller
    <div className="w-full">
      <Header />
      <Hero />
      <Projects />
      <Stack />
      <HomepageContact />
      <Footer />
    </div>
  ) : (
    // Medium Mobile Experience (569px - 767px) - iPhone 6+ and similar
    <SwiperMobileFullpage 
      sections={mobileSections} 
      onSectionChange={handleMobileSectionChange}
    />
  );
};

export default Homepage;