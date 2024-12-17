// import React from 'react'

import propTypes from 'prop-types'
import { Link } from 'react-router-dom'

function CommonShop({ id, img, name, price, delPrice }) {
    return (
        <>
            <div className="">
                <Link to={`/productDetails/${id}`}>
                    <div>
                        <img src={img} alt="" />
                    </div>
                    <div className='mt-4'>
                        <h6 className='mb-[2px] text-base'>{name}</h6>
                        <div className='flex space-x-3'>
                            <p className='text-sm text-gray-700'>$ {price}.00 USD</p>
                            <del className='text-sm text-[#999]'>{delPrice}</del>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

CommonShop.propTypes = {
    img: propTypes.string,
    name: propTypes.string,
    price: propTypes.string,
    delPrice: propTypes.string,
    id: propTypes.number
}

export default CommonShop
