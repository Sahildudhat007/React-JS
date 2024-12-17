// import React from 'react'
import propTypes from 'prop-types'

function Commonproduct({ id, img, name, price }) {
    return (
        <>
            <section>
                <a id={id} href="/" className="">
                    <img src={img} alt="" />
                    <p className='mt-3 mb-1 text-base'>{name}</p>
                    <p className='text-gray-500'>${price}.00 USD</p>
                </a>
            </section>
        </>
    )
}

Commonproduct.propTypes = {
    img: propTypes.string,
    name: propTypes.string,
    price: propTypes.number,
    id: propTypes.number
}

export default Commonproduct
