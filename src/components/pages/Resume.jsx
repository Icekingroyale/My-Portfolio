import React from 'react'
import Footer from '../Footer'
import Fullpage, { FullpageSection, FullPageSections, FullpageNavigation } from "@ap.cx/react-fullpage";


const Resume = () => {
    return (

        <Fullpage>
            <FullpageNavigation />
            <FullPageSections>
                <FullpageSection>
                    <div className='bg-white '>
                        <h1 className='h-screen'>Resume</h1>
                    </div>
                </FullpageSection>
                <FullpageSection>
                    <Footer />
                </FullpageSection>
            </FullPageSections>
        </Fullpage>
    )
}

export default Resume