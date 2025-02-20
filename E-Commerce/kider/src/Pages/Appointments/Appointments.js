import React from 'react'
import PageHeading from '../../Components/PageHeading/PageHeading'
import Appointment from '../../Components/Appointment/Appointment'

function Appointments() {
    return (
        <>
            <div>
                <PageHeading goBackLink='Home' pageTitle='Appointment' />
                <div>
                    <Appointment />
                </div>
            </div>
        </>
    )
}

export default Appointments
