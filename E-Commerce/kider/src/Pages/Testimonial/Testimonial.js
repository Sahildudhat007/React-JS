import React from 'react'
import PageHeading from '../../Components/PageHeading/PageHeading'
import Clients from '../../Components/Clients/Clients'

function Testimonial() {
    return (
        <>
            <div>
                <PageHeading goBackLink='Home' pageTitle='Testimonial' />
                <div className=''>
                    <Clients />
                </div>
            </div>
        </>
    )
}

export default Testimonial
