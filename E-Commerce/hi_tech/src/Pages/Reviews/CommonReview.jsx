// import React from 'react'
import propTypes from 'prop-types'

function CommonReview({ id, img, text, name, city }) {
    return (
        <>
            <div id={id}>
                <div className='flex flex-wrap lg:flex-nowrap gap-x-5'>
                    <div className='w-full max-w-[36%] overflow-hidden'>
                        <img src={img} alt="" className='w-full rounded-md object-cover' />
                    </div>
                    <div>
                        <div className='flex justify-between flex-col gap-y-10'>
                            <p className='text-stone-600'>{text}</p>
                            <div>
                                <p className='text-base'>{name}</p>
                                <p className='text-sm text-stone-600'>{city}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

CommonReview.propTypes = {
    img: propTypes.string,
    text: propTypes.string,
    name: propTypes.string,
    city: propTypes.string,
    id: propTypes.number
}

export default CommonReview
