import React from 'react'
import Header from '../Header'
import Hero from '../Hero'
import Projects from '../Projects'
import Stack from '../Stack'
import HomepageContact from '../HomepageContact'
import Footer from '../Footer'
import Fullpage, { FullpageSection, FullPageSections, FullpageNavigation } from "@ap.cx/react-fullpage";




const Mainpage = () => {
  return (
    <Fullpage className="border">
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
  )
}

export default Mainpage
