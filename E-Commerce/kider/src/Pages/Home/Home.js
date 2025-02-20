import React from 'react'
import Hero from '../../Components/Hero/Hero'
import Facilities from '../../Components/Facilities/Facilities'
import About from '../../Components/About/About'
import CallAction from '../../Components/CallAction/CallAction'
import Classes from '../../Components/Classess/Classess'
import Appointment from '../../Components/Appointment/Appointment'
import Team from '../../Components/Team/Team'
import Clients from '../../Components/Clients/Clients'

function Home() {
    return (
        <>
            <div>
                <Hero />
                <Facilities />
                <About />
                <CallAction />
                <Classes />
                <Appointment />
                <Team />
                <Clients />
            </div>
        </>
    )
}

export default Home
