// import React from 'react'

import propTypes from 'prop-types'

function CommonTeam({ id, img, title, name }) {
    return (
        <>
            <div id={id}>
                <div>
                    <img src={img} alt="" />
                </div>
                <div className="mt-3">
                    <p className='text-sm text-stone-700'>{title}</p>
                    <p className='mt-[2px] text-lg'>{name}</p>
                </div>
            </div>
        </>
    )
}

CommonTeam.propTypes = {
    img: propTypes.string,
    title: propTypes.price,
    name: propTypes.price,
    id: propTypes.id
}


export default CommonTeam
