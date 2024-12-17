// import React from 'react'
import propTypes from 'prop-types'

function CommonMake({ id, img, title, text }) {
    return (
        <>
            <div id={id}>
                <div className='mb-5'>
                    <img src={img} alt="" className='rounded-md' />
                </div>
                <div>
                    <h4 className="mb-[10] text-[22px]">{title}</h4>
                    <p className="text-stone-700">{text}</p>
                </div>
            </div>
        </>
    )
}

CommonMake.propTypes = {
    img: propTypes.string,
    title: propTypes.string,
    text: propTypes.number,
    id: propTypes.id
}

export default CommonMake
