import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import HomepageContact from '../HomepageContact'
import { useMediaQuery } from "react-responsive"; //to conditional render the Fullpage slide for large screens
import Fullpage, { FullpageSection, FullPageSections, FullpageNavigation } from "@ap.cx/react-fullpage";



const ContactPage = () => {

const isLargeScreen = useMediaQuery({ minWidth: 1024 })

  return isLargeScreen ? (
    <Fullpage>
    <FullpageNavigation />
    <FullPageSections>
        <FullpageSection>
            <Header />
            <HomepageContact />
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
    <HomepageContact />
    <Footer />
    </>
    )
}

export default ContactPage