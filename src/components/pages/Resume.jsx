import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { useMediaQuery } from "react-responsive"; //to conditional render the Fullpage slide for large screens

import Fullpage, { FullpageSection, FullPageSections, FullpageNavigation } from "@ap.cx/react-fullpage";


const Resume = () => {

    const isLargeScreen = useMediaQuery({ minWidth: 1024 })    


    return isLargeScreen ? (

        <Fullpage>
            <FullpageNavigation />
            <FullPageSections>
                <FullpageSection>
                    <Header />
                    <div className='bg-white h-screen'>
                        <h1>Resume</h1>
                    </div>
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
            <div className='bg-white h-screen'>
                <h1>Resume</h1>
            </div>
            <Footer />
        </>
    )
}

export default Resume