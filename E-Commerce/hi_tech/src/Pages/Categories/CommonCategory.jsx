// import React from 'react'

import propTypes from 'prop-types'

function CommonCategory({ id, img, name }) {
    return (
        <>
            <div>
                <a href="/" key={id}>
                    <div>
                        <img src={img} alt="" />
                    </div>
                    <div className='mt-3'>
                        <h5 className='mb-1 text-lg'>{name}</h5>
                        <p className='text-gray-600'>Shop Now</p>
                    </div>
                </a>
            </div>
        </>
    )
}

CommonCategory.propTypes = {
    img: propTypes.string,
    name: propTypes.string,
    id: propTypes.number
}

export default CommonCategory
