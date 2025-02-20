import React from 'react'
import PageHeading from '../../Components/PageHeading/PageHeading'
import Team from '../../Components/Team/Team'

function Teachers() {
    return (
        <>
            <div>
                <PageHeading goBackLink='Home' pageTitle='Teachers' />
                <div>
                    <Team />
                </div>
            </div>
        </>
    )
}

export default Teachers
