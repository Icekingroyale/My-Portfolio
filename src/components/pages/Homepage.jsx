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



import React, { useState } from 'react'
import Header from '../Header'
import Hero from '../Hero'
import Projects from '../Projects'
import Stack from '../Stack'
import HomepageContact from '../HomepageContact'
import Footer from '../Footer'
import { useMediaQuery } from "react-responsive"
import Fullpage, { FullpageSection, FullPageSections, FullpageNavigation } from "@ap.cx/react-fullpage"
import ReactFullpage from '@fullpage/react-fullpage'
import { motion } from 'framer-motion'

// Animation variants
const fadeSlideUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
}

const Homepage = () => {
  const isLargeScreen = useMediaQuery({ minWidth: 1024 })
  const [activeSection, setActiveSection] = useState(0)

  return isLargeScreen ? (
    // === DESKTOP FULLPAGE ===
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
    // === MOBILE FULLPAGE WITH ANIMATIONS ===
    <ReactFullpage
      scrollingSpeed={700}
      navigation
      controlArrows
      autoScrolling={true}
      fitToSection={true}
      afterLoad={(origin, destination) => {
        setActiveSection(destination.index) // Track the current section
      }}
      render={() => (
        <ReactFullpage.Wrapper>
          <div className="section">
            <motion.div
              initial="hidden"
              animate={activeSection === 0 ? "visible" : "hidden"}
              variants={fadeSlideUp}
            >
              <Header />
              <Hero />
            </motion.div>
          </div>

          <div className="section">
            <motion.div
              initial="hidden"
              animate={activeSection === 1 ? "visible" : "hidden"}
              variants={fadeSlideUp}
            >
              <Projects />
            </motion.div>
          </div>

          {/* Horizontal swipe carousel */}
          <div className="section">
            <div className="slide">
              <motion.div
                initial="hidden"
                animate={activeSection === 2 ? "visible" : "hidden"}
                variants={fadeSlideUp}
              >
                <Stack />
              </motion.div>
            </div>
            <div className="slide">
              <motion.div
                initial="hidden"
                animate={activeSection === 2 ? "visible" : "hidden"}
                variants={fadeSlideUp}
              >
                <HomepageContact />
              </motion.div>
            </div>
          </div>

          <div className="section">
            <motion.div
              initial="hidden"
              animate={activeSection === 3 ? "visible" : "hidden"}
              variants={fadeSlideUp}
            >
              <Footer />
            </motion.div>
          </div>
        </ReactFullpage.Wrapper>
      )}
    />
  )
}

export default Homepage
