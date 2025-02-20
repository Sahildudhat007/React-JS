import React from 'react'

// css 
import "./aboutUs.css"

import About from '../../Components/About/About'
import CallAction from '../../Components/CallAction/CallAction'
import Team from '../../Components/Team/Team'
import PageHeading from '../../Components/PageHeading/PageHeading'

function AboutUs() {
    return (
        <>
            <PageHeading goBackLink='Home' pageTitle='AboutUs' />
            <About />
            <CallAction />
            <Team />
        </>
    )
}

export default AboutUs
