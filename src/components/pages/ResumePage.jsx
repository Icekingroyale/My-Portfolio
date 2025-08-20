import React from 'react'
import Header from '../Header'
// import Resume from '../Resume'
import Resume from '../Resume'
import Footer from '../Footer'
import { useMediaQuery } from "react-responsive"; //to conditional render the Fullpage slide for large screens

import Fullpage, { FullpageSection, FullPageSections, FullpageNavigation } from "@ap.cx/react-fullpage";


const ResumePage = () => {

    const isLargeScreen = useMediaQuery({ minWidth: 1024 })


    return isLargeScreen ? (

        <Fullpage>
            <FullpageNavigation />
            <FullPageSections>
                <FullpageSection>
                    <Header />
                    <Resume />
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
                <Resume />
                <Footer />
            </>
        )
}

export default ResumePage