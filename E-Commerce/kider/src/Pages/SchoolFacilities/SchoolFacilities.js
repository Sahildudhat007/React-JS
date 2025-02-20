import React from 'react'
import PageHeading from '../../Components/PageHeading/PageHeading'
import Facilities from '../../Components/Facilities/Facilities'

function SchoolFacilities() {
    return (
        <>
            <div>
                <PageHeading goBackLink='Home' pageTitle='Facilities' />
                <div>
                    <Facilities />
                </div>
            </div>
        </>
    )
}

export default SchoolFacilities
