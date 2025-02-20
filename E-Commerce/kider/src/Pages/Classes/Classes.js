import React from 'react'
import PageHeading from '../../Components/PageHeading/PageHeading'
import Classess from '../../Components/Classess/Classess'
import Appointment from '../../Components/Appointment/Appointment'
import Clients from '../../Components/Clients/Clients'

function Classes() {
    return (
        <>
            <div>
                <PageHeading goBackLink='Home' pageTitle='Classes' />
                <Classess />
                <Appointment />
                <Clients />
            </div>
        </>
    )
}

export default Classes
