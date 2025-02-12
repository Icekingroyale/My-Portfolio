import React from 'react'
import Header from '../Header'
import Hero from '../Hero'
import Projects from '../Projects'
import Stack from '../Stack'
import HomepageContact from '../HomepageContact'
import Footer from '../Footer'
import { useMediaQuery } from "react-responsive"; //to conditional render the Fullpage slide for large screens
import Fullpage, { FullpageSection, FullPageSections, FullpageNavigation } from "@ap.cx/react-fullpage";




const Mainpage = () => {

  const isLargeScreen = useMediaQuery({minWidth: 1024})

  return isLargeScreen ? (
    <Fullpage className="border">
      <FullpageNavigation /> {/* adds the navigation clicks on the side of the large screen */}
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
  ) : <>
  <Header/>
    <Hero/>
    <Projects />
    <Stack />
    <HomepageContact />
    <Footer />
  </>
}

export default Mainpage
