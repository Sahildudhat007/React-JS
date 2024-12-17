// import React from 'react'

import propTypes from 'prop-types'

function CommonFea({ id, img, title, pera }) {
    return (
        <>
            <section className="container mx-auto px-5 md:px-10">
                <div id={id} className='flex flex-col items-center text-center'>
                    <img src={img} alt="" className='min-w-[50px] max-w-[50px] min-h-[50px] max-h-[50px] ' />
                    <div>
                        <h2 className='mb-[2]'>{title}</h2>
                        <p className='text-sm text-stone-600'>{pera}</p>
                    </div>
                </div>
            </section>
        </>
    )
}

CommonFea.propTypes = {
    img: propTypes.string,
    title: propTypes.string,
    pera: propTypes.string,
    id: propTypes.number
}

export default CommonFea
