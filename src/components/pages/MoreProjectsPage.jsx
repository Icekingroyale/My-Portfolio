import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import MoreProjects from '../MoreProjects'
import { useMediaQuery } from "react-responsive"; //to conditional render the Fullpage slide for large screens
import Fullpage, { FullpageSection, FullPageSections, FullpageNavigation } from "@ap.cx/react-fullpage";


const MoreProjectsPage = () => {

  const isLargeScreen = useMediaQuery({ minWidth: 1024 })

  return isLargeScreen ? (
    <Fullpage>
      <FullpageNavigation />
      <FullPageSections>
        <FullpageSection>
          <Header />
          <MoreProjects />
        </FullpageSection>
        <FullpageSection>
          <Footer />
        </FullpageSection>
      </FullPageSections>
    </Fullpage>
  )
    : (
      <>
        <Header />
        <MoreProjects />
        <Footer />
      </>
    )
}

export default MoreProjectsPage 