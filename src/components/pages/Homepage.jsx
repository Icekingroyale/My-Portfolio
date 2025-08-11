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
  // Updated breakpoint to include tablets in desktop experience
  const isDesktop = useMediaQuery({ minWidth: 768 })
  const [currentMobileSection, setCurrentMobileSection] = useState(0);

  // Define your mobile sections with your actual components
  const mobileSections = [
    // Section 1: Header + Hero
    <div key="hero-section" className="flex flex-col h-full min-h-screen">
      <Header />
      <div className="flex-1">
        <Hero />
      </div>
    </div>,
    
    // Section 2: Projects
    <div key="projects-section" className="h-full min-h-screen">
      <Projects />
    </div>,
    
    // Section 3: Stack
    <div key="stack-section" className="h-full min-h-screen">
      <Stack />
    </div>,
    
    // Section 4: Contact
    <div key="contact-section" className="h-full min-h-screen">
      <HomepageContact />
    </div>,
    
    // Section 5: Footer
    <div key="footer-section" className="h-full min-h-screen">
      <Footer />
    </div>
  ];

  const handleMobileSectionChange = (sectionIndex) => {
    setCurrentMobileSection(sectionIndex);
    console.log(`Current mobile section: ${sectionIndex}`);
  };

  return isDesktop ? (
    // Desktop & Tablet Experience (unchanged)
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
  ) : (
    // Mobile Experience - Using Swiper
    <SwiperMobileFullpage 
      sections={mobileSections} 
      onSectionChange={handleMobileSectionChange}
    />
  );
};

export default Homepage;